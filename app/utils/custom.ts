/**
 * Tailwind className 문자열 파라미터들을 붙여 하나의 문자열로 반환합니다.
 * @param classes 클래스 문자열
 * @returns 합쳐진 클래스 문자열
 */
export function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
};

/**
 * 전달된 Date 객체를 "YYYY-MM-dd" 형식의 날짜 문자열로 변환합니다.
 * @param date 변환할 Date 객체
 * @returns "YYYY-MM-dd" 형식의 날짜 문자열
 *
 * @example
 * const dateString = formatDate(new Date());
 * console.log(dateString); // "2025-01-15"
 * */
export function formatDate(date: Date | string): string {
  if (!(date instanceof Date)) date = new Date(date);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

/**
* 전달된 Date 객체를 "YYYY-MM-dd HH:mm" 형식의 날짜 문자열로 변환합니다.
 *
 * @param date 변환할 Date 객체
 * @returns "YYYY-MM-dd HH:mm" 형식의 날짜 문자열
 *
 * @example
 * const dateString = formatDateYear(new Date());
 * console.log(dateString); // "2025-01-15 14:35"
* */
export function formatDateTime(date: Date | string): string {
  if (!(date instanceof Date)) date = new Date(date);

  const ymd = formatDate(date);
  const h = date.getHours().toString().padStart(2, '0');
  const m = date.getMinutes().toString().padStart(2, '0');

  return `${ymd} ${h}:${m}`;
}