/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Soundharya");
var firstName = "Soundharya";
var age = 24;

console.log(firstName);

var email = "contact@soundharyaam.com";
var newEmail = email.replace("contact", "soundharya");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am " + firstName + " and I am AWESOME!";
console.log(awesomeThoughts);
funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);
//$("#main").append(funThoughts);

var name = "Soundharya AM";
var role = "Software Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//console.log(formattedName);
//console.log(formattedRole);

//$("#main").append(formattedName);
//$("#main").append(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": "Soundharya",
    "role": "Software devloper",
    "contactInfo": {
        "email": "contact@soundharyaam.com",
        "github": "soundharyaam",
        "twitter": "soundharyaam",
        "instagram": "soundharyaam"
    },
    "pictureURL": "http://brightdrops.com/wp-content/uploads/2016/12/buddha-the-mind-is-1.jpg",
    "welcomeMessage": "Hi there! This is Soundharya. Welcome to my website.",
    "skills": ["software development", "researching", "photography", "writing"]
}

$("#main").append(bio.contactInfo);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);