export function isOlderThan13(birthDate: string | Date | number): boolean {
  const birthDateObject = new Date(birthDate);

  if (Number.isNaN(birthDateObject.getTime())) {
    return false;
  }
  const currentDate = new Date();
  const minBirthDate = new Date(currentDate.getFullYear() - 13, currentDate.getMonth(), currentDate.getDate());
  return birthDateObject <= minBirthDate;
}
