/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
$("#main").append(["Leo Govan"]);


var awesomeThoughts = "I am Leo Govan and I am AWESOME";

console.log(awesomeThoughts);

var email = "leogovan@yahoo.co.uk";
var newEmail = email.replace("yahoo.co.uk", "googlemail.com");
console.log(email);
console.log(newEmail);


var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append([funThoughts]);
*/

var name = "Leo Govan";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


var bio = {
  "name" : "Leo",
  "role" : "Front-End Developer",
  "contacts" : {
    "mobile" : "012345678",
    "email" : "bungleberry@yahoo.com",
    "twitter" : "@twitty_twitter",
    "github" : "ding-dong",
    "location" : "Londonshire, Englandham"
  },
  "welcomeMessage" : "Welcome to my CV!",
  "bioPic" : "images/me.jpg",
  "skills" : ["HTML", "CSS", "Javascript", "Python", "Git"]
};

var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);

$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
$("#header").append(formattedPicture);
$("#header").append(formattedSkills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
