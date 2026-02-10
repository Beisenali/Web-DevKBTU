/**
 * Data Types - Date and time
 * https://javascript.info/date
 *
 * Task: Create a date
 * Task: Show a weekday
 */

// Create date for Feb 20, 2012, 3:12
const d = new Date(2012, 1, 20, 3, 12);

function getWeekday(date) {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}
