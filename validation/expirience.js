const Validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateExpirienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  
  
  if(Validator.isEmpty(data.title)) {
    errors.title = 'Job title is required';
  }
  if(Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  }
  if(Validator.isEmpty(data.from)) {
    errors.from = 'From date field required';
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}