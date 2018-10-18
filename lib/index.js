"use strict";

var regexList = {
  email: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  telephone: new RegExp(/^[0-9 ]{7,}/)
};

function isEmpty(val) {
  return val.length === 0;
}

function isZero(val) {
  return val === 0;
}

function charsBetween(val, min, max) {
  return val.length >= min && val.length <= max;
}

function isEmail(email) {
  return regexList.email.test(email);
}

function isTelephone(number) {
  return regexList.telephone.test(number);
}

function isEqual(val1, val2) {
  return val1 === val2;
}

module.exports = { isEmpty: isEmpty, isZero: isZero, charsBetween: charsBetween, isEmail: isEmail, isTelephone: isTelephone, isEqual: isEqual };