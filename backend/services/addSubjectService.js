const Subject = require("../models/subject");
const Session = require("../models/session");

async function createSubjectWithSessions(data, userId) {
  const {
    subjectName,
    examDate,
    priority,
    intensity,
    dailyStudyHours,
    topics,
  } = data;

  //? divide topics into days
  //* get the topics seperately
  function getTopics(topics) {
  if (Array.isArray(topics)) return topics;

  return topics
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t.length > 0)
    .map((t) => ({
      name: t,
      completed: false,
    }));
}

  const parsedTopics = getTopics(topics);

  //? Save subject in Subject collection
  const subject = await Subject.create({
    userId,
    subjectName,
    examDate,
    priority,
    intensity,
    topics: parsedTopics,
    dailyStudyHours,
  });

  const today = new Date();
  const exam = new Date(examDate);

  const totalDays = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));

  if (totalDays <= 0) {
  throw new Error("Exam date must be in the future");
}

  //? find the adjusted no. of hours on the basis of priority of subjects
  const getAdjustedHours = (base, priority, intensity) => {
    let factor = 1;

    if (priority === "High") factor += 0.3;
    if (priority === "Low") factor -= 0.2;

    if (intensity === "High") factor += 0.3;
    if (intensity === "Low") factor -= 0.2;

    return Math.max(1, Math.round(base * factor));
  };

  const adjustedHours = getAdjustedHours(dailyStudyHours, priority, intensity);


  //* group the topics -> keep related topics together
  function groupTopics(topics, groupSize = 2) {
  const groups = [];

  for (let i = 0; i < topics.length; i += groupSize) {
    groups.push(
      topics.slice(i, i + groupSize).map((t) => t.name)
    );
  }

  return groups;
}

  //* assign the group of topics to each day from today to exam day
  function distributeTopicGroups(groups, totalDays) {
    const plan = [];

    let groupIndex = 0;

    for (let i = 0; i < totalDays; i++) {
        plan.push(groups[groupIndex]);

        if (groupIndex < groups.length - 1) {
            groupIndex++;
        }
    }

    return plan;
  }

  //* assign two days at last to revision
  function addRevision(plan, topics) {
    const revisionStart = Math.floor(plan.length * 0.8);

    for (let i = revisionStart; i < plan.length; i++) {
        plan[i] = ["Revision", ...topics];
    }

    return plan;
  }


  function generateTopicPlan(topicsArray, totalDays) {
  const groups = groupTopics(topicsArray, 2);

  let plan = distributeTopicGroups(groups, totalDays);

  plan = addRevision(
    plan,
    topicsArray.map((t) => t.name)
  );

  return plan;
}


  //? add the data to sessions collection
  const topicPlan = generateTopicPlan(parsedTopics, totalDays);

  const sessions = [];

  for (let i = 0; i < totalDays; i++) {
    const sessionDate = new Date(today);
    sessionDate.setDate(today.getDate() + i);

    sessions.push({
        userId,
        subjectId: subject._id,
        date: sessionDate,
        duration: adjustedHours * 60,
        topic: topicPlan[i].join(", ")
    });
  }

  await Session.insertMany(sessions);

  return {subject, sessionsCount: sessions.length};

}


module.exports = {createSubjectWithSessions};
