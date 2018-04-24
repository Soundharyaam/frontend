/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Soundharya");
/*var firstName = "Soundharya";
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
//$("#main").append(funThoughts);*/

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
    "role": "Software developer",
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

var work = {
    "position": "Senior front-end engineer",
    "employer": "Astutix",
    "yearsWorked": "3 years"
}

work.city = "Bangalore";

/*var education = {
    "schoolName": "Anna University",
    "years": "4 years"
}

education["schoolCity"] = "Coimbatore";

$("#main").append(work["position"]);
$("#main").append(education.schoolName);*/

var education = {
    "school": [{
            "name": "Anna University",
            "city": "Coimbatore",
            "degree": "BE",
            "major": ["Electronics", "Telecommunications"],
            "minor": ["Computer Programming", "Robotics"],
            "years": "2011-2015"
        },
        {
            "name": "Harvard",
            "city": "Boston, MA",
            "degree": "MBA",
            "major": ["International Business, Entrepreneurship"],
            "minor": ["Finance", "Trading"],
            "years": "2020-2022"
        }
    ],
    "onlineCourse": [{
            "title": "Python for Everybody",
            "school": "University of Michigan",
            "provider": "Coursera"
        },
        {
            "title": "Introduction to entrepreneurship and business management skills",
            "school": "Harvard",
            "provider": "Harvard Business Review"
        }
    ]
}

$("#main").append(education.onlineCourse[0].title);

/*var work = {
    "officeWorks": [{
            "task": "front-end work"
        },
        {
            "task": "back-end integration with AWS"
        },
        {
            "task": "App design"
        }
    ],
    "openSourceProjects": [{
            "org": "Mozilla"
        },
        {
            "org": "OpenGenus"
        },
        {
            "org": "fossasia"
        }
    ]
};*/

/*var projects = {
    "variousProjects": [{
            "name": "studentinno"
        },
        {
            "name": "Soundharyaam.com"
        }
    ]
};*/

var work = {
    "jobs": [{
            "employer": "abc",
            "title": "engineer",
            "location": "London",
            "dates": "Oct 2015- sept 2016",
            "description": "Responsible for AI and ML processes"
        },
        {
            "employer": "def",
            "title": "senior engineer",
            "location": "Zagreb",
            "dates": "Jan 2017- present",
            "description": "Responsible for DevOps"
        }
    ]
}


var projects = {
    "projects": [{
            "title": "studentinno",
            "dates": "Oct 2015- sept 2016",
            "description": "Responsible for AI and ML processes",
            "images": "https://martechtoday.com/wp-content/uploads/2018/02/robot-calculations-analytics-ai-ss-1920-800x450.jpg"
        },
        {
            "title": "Soundharyaam.com",
            "dates": "Jan 2017- present",
            "description": "Responsible for DevOps",
            "images": "https://martechtoday.com/wp-content/uploads/2018/02/robot-calculations-analytics-ai-ss-1920-800x450.jpg"
        }
    ]
}

/*$("#main").append(projects.variousProjects[1].name);
$("#main").append(work.officeWorks[1].task);
$("#main").append(work.openSourceProjects[0].org);*/

$("#main").append(work.jobs[0].title);
$("#main").append(projects.projects[1].title);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < 4; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}

/*var cameron = {};
cameron.job = "course dev";

var makeCourse = function() {
    console.log("Made a course");
}

var courses = 0;
while (cameron.job === "course dev") {
    makeCourse();
    courses = courses + 1;
    if (courses === 10) {
        cameron.job = "learning specialist";
    }
}

console.log(cameron.job);*/

if (work.jobs.length > 0) {

    $("#workExperience").append(HTMLworkStart);

    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}