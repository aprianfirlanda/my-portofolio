/**
 * Calculates how long you've worked since startDateStr.
 * Returns both a decimal "years" and a detailed breakdown (y/m/d).
 *
 * @param {string|Date} startDateStr - e.g. "2020-02-06" or a Date
 * @param {object} [opts]
 * @param {"decimal"|"rounded"|"detailed"} [opts.mode="decimal"]
 *   - "decimal": returns a string like "5.6"
 *   - "rounded": returns an integer like 6
 *   - "detailed": returns { years, months, days }
 */
export function useWorkDuration(startDateStr, opts = {}) {
  const { mode = 'decimal', decimals = 1 } = opts;

  const startDate = startDateStr instanceof Date ? startDateStr : new Date(startDateStr);

  const today = new Date();

  // Decimal years using tropical year (more accurate than 365)
  const msInYear = 1000 * 60 * 60 * 24 * 365.2425;
  const decimalYears = (today - startDate) / msInYear;

  // Detailed y/m/d (calendar-aware)
  let y = today.getFullYear() - startDate.getFullYear();
  let m = today.getMonth() - startDate.getMonth();
  let d = today.getDate() - startDate.getDate();

  if (d < 0) {
    m--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    d += prevMonth.getDate();
  }
  if (m < 0) {
    y--;
    m += 12;
  }

  if (mode === 'rounded') return Math.floor(decimalYears);
  if (mode === 'detailed') return { years: y, months: m, days: d };

  // default: "decimal"
  return decimalYears.toFixed(decimals);
}

/**
 * Helper that just returns a nice human string like:
 * "5 years, 6 months, 18 days"
 */
export function useWorkDurationText(startDateStr) {
  const { years, months, days } = useWorkDuration(startDateStr, { mode: 'detailed' });
  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} month${months > 1 ? 's' : ''}`);
  if (days || parts.length === 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  return parts.join(', ');
}
