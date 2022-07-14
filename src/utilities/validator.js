import validator from 'validator';

export const isValidPhoneNumber = (value) => validator.isMobilePhone(value);
export const isValidEmail = (value) => validator.isEmail(value);
export const isValidPassword = (pwd, conPwd) => !(pwd === "" || conPwd === "" || pwd !== conPwd);