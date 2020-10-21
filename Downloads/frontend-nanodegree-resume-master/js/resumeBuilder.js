/*
This is empty on purpose! Your code to build the resume will go here.
 

var str = "suprajabaskaransuganyavarun!";
var res = console.log(str.toUpperCase());

var bio = {
    "name" : "Soup",
    "age" : "23",
    "skills" : "Security",
    "contacts" :{
        "Mobile" : "9787778214",
        "Phone" : "044-25522714"
    },
    "Languages" : [
        "Tamil","English","Hindi","Sanskrit"
    ]
};

$("#main").append(bio);

var education = {
    "school" : "SKNSPMC VVJC",
    "City" : "Chennai",
    "Major" : "Science",
    "Year" : "2010"
}
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};


// Your code goes here! Let me help you get started

function locationizer(work_obj) {

var locationArray = [];
for (job in work_obj.jobs){
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
}

return locationArray;

}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

var name = "Sohom Dey";
function inName(name) {
    console.log(name);
    name = name.trim().split(" ");
    console.log(name);
    //name[1] = name[1].toUpperCase();
   // name[0] = name.slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0]+ ""+name[1];
}
$('#main').append(internationalizeButton);


var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));*/

var bio = {
    "name": "Maria Blair",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "mashablair@gmail.com",
        "mobile": "805-636-6461",
        "github": "mashablair",
        "location": "Santa Barbara, CA",
        "twitter": "@mashablair"
    },
    "placesLived": [
        "Orlando, FL",
        "New York, NY",
        "Baltimore, MD"
    ],
    "biopic": "images/masha.png",
    "welcomeMessage": " ",
    "skills": ["Awesomeness", "HTML", "CSS", "JavaScript", "jQuery", "WordPress", "Angular JS", "Bootstrap", "Grunt"]
};


// Bio function that displays info from the bio object:
//We added a display method to the bio object (aka encapsulation)
bio.display = function() {

    // header info - name, title, image
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    //I replaced the above 'if' statement with 'for' loop for skills to iterate through all of them and append them:
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

    }

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    $("#twitterDiv").append(twitterFeed);
};

bio.display();



// work object
var work = {
    "jobs": [{
        "employer": "EG Technologies",
        "title": "Web Development Intern",
        "location": "Santa Barbara, CA",
        "dates": "2016",
        "description": "Collaborate with Project Managers on developing websites based on website design and customize using HTML, " +
            "CSS, JS, and PHP. " + "Perform website optimization, maintenance, and QA testing."
    }, {
        "employer": "Freudenberg Medical LLC",
        "title": "Marketing Research Analyst",
        "location": "Ventura, CA",
        "dates": "2014",
        "description": "Reported to the VP, performed industry market analysis and assisted in drafting of the 2015 Business Plan. " +
            "Conducted in-depth data analysis using traditional and advanced methods and prepared reports and PP presentations."
    }]
};

// Work function displayWork() with for loop:
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        // created new div for work experience
        $("workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

work.display();


// education object
var education = {
    "schools": [{
        "name": "Russian State University",
        "location": "Kaliningrad, Russia",
        "degree": "MS",
        "majors": ["Linguistics", " Communication"],
        "dates": "2003",
        "url": "www.eng.kantiana.ru/"
    }, {
        "name": "UCSB",
        "location": "Santa Barbara, CA, US",
        "degree": "Certificate",
        "majors": ["Paralegal Studies"],
        "dates": "2006",
        "url": "www.tiny.cc/rx4kdy"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Development",
        "school": "Udacity",
        "url": " ",
        "dates": "2015"
    }, {
        "title": "WordPress Web Development",
        "school": "Skillcrush",
        "url": " ",
        "dates": "2015"
    }]
};

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
    }

    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
    }
};

education.display();


//projects object
var projects = {
    "projects": [{
        "title": "Portfolio",
        "description": "Created a responsive portfolio for FUTURE work. " + "Upon clicking, individual project images pop up with the project description. " +
            "Technologies used: HTML, CSS, JS, Bootstrap.",
        "dates": "July, 2015",
        "images": ["images/portfolio.png"]
    }, {
        "title": "Animal Trading Card",
        "description": "First CSS project: eye-pleasing animal trading card from scratch. Practiced my CSS and design skills. " +
            "Technologies used: HTML, CSS.",
        "dates": "June, 2014",
        "images": ["images/animal-card.png"]
    }, {
        "title": "WordPress WebSite",
        "description": "Created and customized a website for an imaginary marketing company. " +
            "Imported their blog from Blooger, fixed the imported images.  Configured WP theme and widget area, created a child theme, created Case Studies using Custom Post Type, " +
            "installed Advanced Custom Fields and displayed them on my pages, added case studies to the homepage and created custom archive, added featured work to the homepage, created a contact page and other content and hero images. " +
            "Technologies used: WordPress, HTML, CSS.",
        "dates": "June, 2016",
        // "images": ["images/accelerate.png", "images/accelerate-1.png", "images/accelerate-2.png"]
        "images": ["images/accelerate-2.png"]
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        // $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

projects.display();



//FUNCTION to Internationalize Names:
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

//you want to see a map?
$("#mapDiv").append(googleMap);