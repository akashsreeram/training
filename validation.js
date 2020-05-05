function validation() {
    var fname = document.getElementById("fname").value;
    var first = fname.replace(" ", "a");
    var lname = document.getElementById("lname").value;
    var last = lname.replace(" ", "a");
    var emailid = document.getElementById("emailid").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var c = city.replace(" ", "a");
    var state = document.getElementById("state").value;
    var s = state.replace(" ", "a");
    var error_message = document.getElementById("error_message");
    var text;
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;

    if ((first.match(letters) === null) || (fname[0] === " ")){
        text = "Please Enter a valid first name!!!";
        error_message.innerHTML = text;
        return false;
    }
    if ((last.match(letters) === null) || (fname[0] === " ")) {
        text = "Please Enter a valid last name!!!";
        error_message.innerHTML = text;
        return false;
    }
    if(emailid.length == 0){
        text = "Please Enter email ID";
        error_message.innerHTML = text;
        return false;
    }
    if (phonenumber.match(numbers) === null) {
        text = "phone number should contain number characters only & should not be empty!!!";
        error_message.innerHTML = text;
        return false;
    }
    if (city.length != 0) {
        if (c.match(letters) === null) {
            text = "first name should contain alphabetic characters only!!!";
            error_message.innerHTML = text;
            return false;
        }
    }
    if (state.length != 0) {
        if (s.match(letters) === null) {
            text = "last name should contain alphabetic characters only!!!";
            error_message.innerHTML = text;
            return false;
        }
    }
    if(country === "Select"){
        text="Please select your Country!!!";
        error_message.innerHTML = text;
        return false;
    }
    alert("Your Details have been Entered");
    return true;
}