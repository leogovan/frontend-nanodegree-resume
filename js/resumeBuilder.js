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
    "jobs": [{
        "employer": "PFSweb",
        "title": "Senior Project Manager",
        "location": "London",
        "dates": "2013-Present",
        "description": "Managing complex ecommerce implementations from discovery through to delivery."
    }, {
        "employer": "My Family Club",
        "title": "Operations Manager",
        "location": "London",
        "dates": "2010-2013",
        "description": "Digital operations including managing the initial implementation and start up, then ongoing operations."
    }]
};

// Projects

var projects = {
    "projects": [{
        "title": "Portfolio Page",
        "dates": 2016,
        "description": "A portfolio page.",
        "images": [""]
    }, {
        "title": "Online Resume",
        "dates": 2016,
        "description": "This online resume.",
        "images": ["images/Resume-small.jpg"]
    }]
};

// Bio

var bio = {
    "name": "Leo Govan",
    "role": "Front-End Developer",
    "welcomeMessage": "Welcome to my CV!",
    "bioPic": "images/me.jpg",
    "contacts": {
        "mobile": "012345678",
        "email": "leogovan@yahoo.co.uk",
        "twitter": "@fit_adventure",
        "github": "leogovan",
        "location": "London, England"
    },
    "skills": ["HTML", "CSS", "Javascript", "Python", "Git"]
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

// Creates/populates the header

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

// Adds the piture

var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPicture);

// Check for skills in bio

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
}

// Loops over my jobs arrays in work object and outputs employer and title
/*
for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
*/
// Loops through jobs array and outputs dates and details


var displayWork = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

displayWork();

// Collects click locations

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// Internationalize button and name change function

$("#main").append(internationalizeButton);

var inName = function(oldName) {
    oldName = oldName.split(" ");
    var firstName = oldName[0];
    var lastName = oldName[1];
    firstName = firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase();
    lastName = lastName.substring(0).toUpperCase();
    var newName = firstName + " " + lastName;
    return newName;
};

// Display projects function

projects.display = function () {
  projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.images.length > 0) { //check that number of images is > 0
      projects.projects.forEach(function(project){
          var formattedImage = HTMLprojectImage.replace("%data%", project.image);
          $(".project-entry:last").append(formattedImage);
        });
      }
  });
};

projects.display();
