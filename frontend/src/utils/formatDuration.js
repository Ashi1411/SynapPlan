export function formatDuration(seconds) {

  if (!seconds || seconds < 0) {
    return "0m";
  }

  const hrs = Math.floor(seconds / 3600);

  const mins = Math.floor((seconds % 3600) / 60);

  const secs = seconds % 60;

  // 2h 15m
  if (hrs > 0) {
    return `${hrs}h ${mins}m`;
  }

  // 15m 20s
  if (mins > 0) {
    return `${mins}m ${secs}s`;
  }

  // 45s
  return `${secs}s`;
}