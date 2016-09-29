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

// Main header

var name = "Leo Govan";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


// bio and contacts

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
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
$("#header").append(formattedPicture);
$("#header").append(formattedSkills);

// Work

var work = {
  "jobs" : [{
    "employer" : "PFSweb",
    "title" : "Senior Project Manager",
    "location" : "London",
    "dates" : "2013-Present",
    "description" : "Managing complex ecommerce implementations from discovery through to delivery."
  },{
    "employer" : "My Family Club",
    "title" : "Operations Manager",
    "location" : "London",
    "dates" : "2010-2013",
    "description" : "Digital operations including managing the initial implementation and start up, then ongoing operations."
  }]
};

work.position = "Project Manager";
work.employer = "PFS";
work.years = 3;
work.city = "Londonshire";

var formattedWorkPosition = HTMLprojectTitle.replace("%data%", work.position);

$("#main").append(formattedWorkPosition);

// Education

var education = {};

education["name"] = "Brunel University";
education["years"] = "2009";
education["city"] = "Uxbridge";

var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);

$("#main").append(formattedSchoolName);
