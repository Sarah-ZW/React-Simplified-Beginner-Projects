export function checkEmail(email) {
  const errors = []

  if (email.length === 0) {
    errors.push("Required")
  }
  if (!email.endsWith("@webdevsimplified.com")) {
    errors.push("Must end with webdevsimplified")
  }
  return errors
}

export function checkPassword(password) {
  const errors = []

  if (password.length < 10) {
    errors.push("Must be at least 10 characters")
  }
  if (!password.match(/[a-z]/)) {
    errors.push("Must contain a lowercase letter")
  }
  if (!password.match(/[A-Z]/)) {
    errors.push("Must contain a capital letter")
  }
  if (!password.match(/[0-9]/)) {
    errors.push("Must include at least one number")
  }
  return errors
}
