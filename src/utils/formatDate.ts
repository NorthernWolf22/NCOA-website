import { format } from "date-fns";


//function to determine the correct day ending (20th, 2nd etc)
function getOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

//formats the date received from prisma db in to day, month and year
export function formatArticleDate(date: Date) {
  const day = getOrdinal(date.getDate());
  const month = format(date, "LLLL"); // Full month name
  const year = format(date, "yyyy");

  return `${day} ${month} ${year}`;
}

