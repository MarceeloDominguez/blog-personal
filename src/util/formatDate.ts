export default function formatData(
  date: Date,
  locale: string,
  options?: Intl.DateTimeFormatOptions & { dateStyle: string }
) {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
