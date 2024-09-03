export const FormatDateToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based, so add 1
  const day = today.getDate().toString().padStart(2, '0');

  // Format as YYYY-MM-DD
  return `${year}-${month}-${day}`;
}

export const FormatDateLastYear = () => {
  const today = new Date();

  // Create a new Date object for the same day last year
  const lastYearDate = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

  // Extract the year, month, and day
  const year = lastYearDate.getFullYear();
  const month = String(lastYearDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(lastYearDate.getDate()).padStart(2, '0');

  // Format the date as YYYY-MM-DD
  return `${year}-${month}-${day}`;
}
