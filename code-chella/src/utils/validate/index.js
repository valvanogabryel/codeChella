export default function validate(formFields) {
  const {
    fullName,
    email,
    birthDate
  } = formFields;

  const isValidDate = (birthDate) => {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;

    if (!birthDate.match(regEx)) return false;

    let date = new Date(birthDate);
    let dateNum = date.getTime();

    if (!dateNum && dateNum !== 0) return false;

    if (date.getFullYear() < 1900 || date.getFullYear() > 2018) return false;

    return date.toISOString().slice(0, 10) === birthDate;
  }

  const isNotValid = fullName.length < 8 || email.length < 10;
  const isDateValid = isValidDate(birthDate);

  return {
    isNotValid,
    isDateValid
  }
}