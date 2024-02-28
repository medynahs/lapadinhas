export function transformDate(dateStr) {
  // Create a Date object from the input string
  const date = new Date(dateStr);

  // Extract day, month, and year from the Date object
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  // Construct the transformed date string in the format dd/mm/yyyy
  const transformedDate = `${day}/${month}/${year}`;

  return transformedDate;
}
