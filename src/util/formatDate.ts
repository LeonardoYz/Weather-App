export function formatDate(date: string) {
  const [weekday, month, day] = (new Date(date).toLocaleDateString("en-us", {weekday: "long", month: "long", day: "numeric"})).split(" ")
  const abbreviatedDayOfTheWeek = `${weekday.substring(0, 3)},`
  const abbreviatedMonth = month.substring(0, 3)
  const formattedDate = [abbreviatedDayOfTheWeek, day, abbreviatedMonth]

  return formattedDate.join(" ")
}