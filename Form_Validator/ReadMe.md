## Form Validator

Basic Form validation for login screen or registration screen.

![image](https://user-images.githubusercontent.com/45108269/144752871-8c4f8888-458f-46bf-bb51-3d2d55376eb0.png)

![image](https://user-images.githubusercontent.com/45108269/144752878-b4313c45-dd08-4599-b06a-d4734aebcc31.png)

![image](https://user-images.githubusercontent.com/45108269/144752901-aa317b6a-b4a0-41d9-bd41-3f3c97250cfb.png)


## New Things here:

1. While using the input element use label element with it, it has `for=""` attribute with it, where the input element's id is passed.  <br/>  
```
<label for="emailID" class="formLabels">Email Id:</label>
<input type="text" name="emailID" id="emailID" class="formInputs" placeholder="e.g abc@company.com">
```
2.  Difference between `name=""` and `id=""` attribute - 
  - `id` is used to identify the HTML element through the Document Object Model (via JavaScript or styled with CSS). `id` is expected to be unique within the page.
  - `name` corresponds to the form element and identifies what is posted back to the server. it  is also used to label the fields in the message send to a server with an HTTP (HyperText Transfer Protocol) GET or POST when you hit submit in a form.

3. `label` is an inline element, it cannot have width value; in order to do this you need to put `display:block` or `float:left`.
4.  Strict rule-set complaint Regex
     ```
     var sRegex = [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b; 
     ```
     
     - function to validate email - id :
     ```
      function isValidaEmail (emailInput) {
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(emailInput); 
        }
     ```
Regex for email id :
http://zparacha.com/validate-email-address-using-javascript-regular-expression 

5. jQuery Selector using attribute:
    -`$("input[type='text']").val('');`
