/* Example left behind

var name = "Leo Govan";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

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

// Projects

var projects = {
  "projects" : [{
    "title" : "Portfolio Page",
    "dates" : 2016,
    "description" : "",
    "images" : [""]
  },{
    "title" : "Online Resume",
    "dates" : 2016,
    "description" : "",
    "images" : [""]
  }]
};

// Bio

var bio = {
  "name" : "Leo Govan",
  "role" : "Front-End Developer",
  "welcomeMessage" : "Welcome to my CV!",
  "bioPic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "012345678",
    "email" : "leogovan@yahoo.co.uk",
    "twitter" : "@fit_adventure",
    "github" : "leogovan",
    "location" : "London, England"
  },
  "skills" : ["HTML", "CSS", "Javascript", "Python", "Git"]
};
/*
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
$("#header").append(formattedPicture);
$("#header").append(formattedSkills);
*/

// Education

var education = {
  "schools": [{
		"name": "Manchester University",
		"location": "Manchester, England",
		"degree": "BA(Hons)",
		"majors": ["Commercial Music Production"],
		"years": "2001-2003",
		"url": "http://www.manchester.ac.uk/"
	}, {
		"name": "Brunel University",
		"location": "Uxbridge, England",
		"degree": "Post Graduate Certificate",
		"major": ["Intellectual Property Law"],
		"years": "2006-2007",
		"url": "http://www.brunel.ac.uk/"
	}],
	"onlineCourses": [{
		"title": "Front-End Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/"
	}]
};
