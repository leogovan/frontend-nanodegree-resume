// Bio object

var bio = {
    "name": "Leo Govan",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "012345678",
        "email": "leogovan@yahoo.co.uk",
        "github": "leogovan",
        "twitter": "@fit_adventure",
        "location": "London, England"
    },
    "welcomeMessage": "Welcome to my CV!",
    "skills": ["HTML", "CSS", "Javascript", "Python", "Git"],
    "bioPic": "images/me.jpg"
};

// Display bio as encapsulated function:

// some code

bio.display = function() {
    // Creates/populates the header and adds name
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    // Adds role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    // Adds picture
    var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPicture);

    // Adds welcome message

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    // Adds contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    if (bio.skills.length > 0) { // Use the project item and check for > 0
        $("#header").append(HTMLskillsStart);
        // Use the project item to access the images array
        bio.skills.forEach(function(skill) { // Define an image parameter
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills:last").append(formattedSkill);
        });
    }

};
bio.display();

// ----------------------------------

// Work object

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

// Display work as encapsulated function:

work.display = function() {
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
work.display();

// ----------------------------------

// Projects object

var projects = {
    "projects": [{
        "title": "Portfolio Page",
        "dates": 2016,
        "description": "A portfolio page that I built for my first Udacity front-end project. This is an example of using HTML, CSS and leveraging some built-in JavaScript components via bootstrap.",
        "images": ["images/portfolio-page-small.png", "images/portfolio-page-modal-small.png"]
    }, {
        "title": "Online Resume",
        "dates": 2016,
        "description": "This online resume.",
        "images": ["images/Resume-small.jpg"]
    }]
};

// Display projects as encapsulated function

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart); // create new div for work experience

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) { // Use the project item and check for > 0
            // Use the project item to access the images array
            project.images.forEach(function(image) { // Define an image parameter
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();

// ----------------------------------

// Education object

var education = {
    "schools": [{
        "name": "Manchester University",
        "location": "Manchester, England",
        "degree": "BA(Hons)",
        "majors": ["Commercial Music Production", "Something Else"],
        "dates": "2001-2003",
        "url": "http://www.manchester.ac.uk/"
    }, {
        "name": "Brunel University",
        "location": "Uxbridge, England",
        "degree": "Post Graduate Certificate",
        "major": ["Intellectual Property Law"],
        "dates": "2006-2007",
        "url": "http://www.brunel.ac.uk/"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/"
    }]
};

// Display education as encapsulated function:

// some code

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(educate) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", educate.name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educate.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", educate.degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", educate.dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolURL = HTMLonlineURL.replace("%data%", educate.url);
        $(".education-entry:last").append(formattedSchoolURL);

        if (educate.majors.length > 0) {
            educate.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedMajor);
            });
        }
    });
};
education.display();

// ----------------------------------

// Collects click locations

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// Internationalise button and name change function

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

// Add google map

$("#mapDiv").append(googleMap);
