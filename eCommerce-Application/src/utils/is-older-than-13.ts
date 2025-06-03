export function isOlderThan13(birthDate: string | Date | number): boolean {
  const birthDateObject: Date = new Date(birthDate);

  if (Number.isNaN(birthDateObject.getTime())) {
    return false;
  }

  const currentDate: Date = new Date();
  const minBirthDate: Date = new Date(currentDate.getFullYear() - 13, currentDate.getMonth(), currentDate.getDate());

  return birthDateObject <= minBirthDate;
}
