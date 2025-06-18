function regform() {
  var title = document.getElementById(" name  ").value;
  var age = document.getElementById("age ").value;
  var gender = document.getElementById("gender ").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  var travelDate = document.getElementById("travelDate").value;

  // Create user object
  var user = {
    name:  title,
    age: age,
    gender: gender,
    contact:contact,
    email: email,
    source: source,
    destination:destination,
    travelDate:travelDate
  };

  // Get users from localStorage
  var users = localStorage.getItem("userlist");
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  // Add new user to list
  users.push(user);

  // Save back to localStorage
  localStorage.setItem("userlist", JSON.stringify(users));

  alert("Registered successfully!");

  // Clear the form
  var form = document.getElementById("registrationForm");
  form.reset();
}



