
var app = {

  init: function () {
    console.log('init()');

    var fields = document.querySelectorAll('.field-input');
   
    fields.forEach(function(field) {
      field.addEventListener('blur', app.handleFieldBlur);
    });
  
    var loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', app.handleSubmit);
    
  },

  handleFieldBlur: function (event) {
    console.log('handleFieldBlur()');
    
    var field = event.target;
    var isFieldLengthValid = app.checkFieldValueLength(field);
    
    if (isFieldLengthValid) {
      field.className = "valid field-input";
    } else {
      field.className = "invalid field-input";
    }
  },
  
  checkFieldValueLength: function (field) {
    console.log('checkFieldValueLength()');

    var fieldValue = field.value;

    if (fieldValue.length <= 3) {
      return false;
    } else {
      return true;
    }
  },

  handleSubmit: function (event) {
    console.log('handleSubmit()');
    event.preventDefault();

  }
  
};

document.addEventListener('click', app.init);
