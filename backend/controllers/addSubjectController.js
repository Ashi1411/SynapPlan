const {createSubjectWithSessions} = require("../services/addSubjectService");

async function addSubject(req, res) {
    try{
        const userId = req.user._id;

        const result = await createSubjectWithSessions(req.body, userId);

        res.status(201).json({
            success: true,
            message: "Subject added successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}


module.exports = {addSubject};