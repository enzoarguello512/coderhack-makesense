function emailValidation(value) {
  const emailValid =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return !!emailValid.test(value);
}
function minLengthValidation(value) {
  const minLength = 6;
  return value.length >= minLength;
}

module.exports = {
  emailValidation,
  minLengthValidation,
};

