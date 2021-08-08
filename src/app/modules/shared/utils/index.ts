export const getCurrentTimeWithDifference = (value = 0) => {
  const currentDate = new Date();
  const localTime = currentDate.getTime();
  const localOffset = currentDate.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  return new Date(utc + 1000 * value);
};
