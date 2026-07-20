// Format a cover letter's ISO date (YYYY-MM-DD) as "July 20, 2026".
// Empty date -> ""; unparseable date -> the raw string unchanged.
export function formatLetterDate(date?: string): string {
    if (!date) return "";
    const d = new Date(`${date}T00:00:00`);
    if (isNaN(d.getTime())) return date;
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(d);
}
