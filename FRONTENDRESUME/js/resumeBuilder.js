/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
    "name": "Vivian Yang",
    "role": "Software Testing Engineer",
    "contacts": {
        "mobile": "18612965025",
        "email": "sky.sea.yangdan@163.com",
        "github": "https://github.com/wulakuer/firstRepository",
        "location": "Beijing",
        "blog": "https://wulakuer.github.io/"
    },
    "welcomeMsg": "Welcome to read the resume!",
    "skills": ["HTML","CSS","JavaScript","Bootstrap","jQuery"],
    "biopic": "images/fry.jpg",
    "displayBio" : function() {
        var formatName = HTMLheaderName.replace("%data%",bio.name);
        var formatRole = HTMLheaderRole.replace("%data%",bio.role);
        //var formatContact = HTMLcontactGeneric.replace().replace()
        var formatMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formatEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formatGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formatBlog = HTMLblog.replace("%data%",bio.contacts.blog);
        var formatLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        var formatBiopic = HTMLbioPic.replace("%data%",bio.biopic);
        var formatMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);

        $("#header").append(formatName);
        $("#header").append(formatRole);
        $("#header").append(formatMobile);
        $("#header").append(formatEmail);
        $("#header").append(formatGithub);
        $("#header").append(formatBlog);
        $("#header").append(formatLocation);
        $("#header").append(formatBiopic);
        $("#header").append(formatMsg);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formatSkills = HTMLskills.replace("%data%",skill);
            $("#header").append(formatSkills);
        });

    }
};

bio.displayBio();

var work = {
    "jobs":[
    {
        "employer": "MIMO Software",
        "title": "Senior Software Testing Engineer",
        "location": "Beijing",
        "dates": "201605-Now",
        "description": "Senior Software Testing Engineer"
    },
    {
        "employer": "IGT Software",
        "title": "Junior Software Testing Engineer",
        "location": "Beijing",
        "dates": "201307-201509",
        "description": "Junior Software Testing Engineer"
    }
    ],
    "displayWork" : function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formatEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
            var formatTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
            var formatDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
            var formatLoc = HTMLworkLocation.replace("%data%",work.jobs[i].location);
            var formatDes = HTMLworkDescription.replace("%data%",work.jobs[i].description);
            $(".work-entry:last").append(formatEmployer+formatTitle);
            $(".work-entry:last").append(formatDates);
            $(".work-entry:last").append(formatLoc);
            $(".work-entry:last").append(formatDes);
        }
    }
};

work.displayWork();

var projects = {
    "projects": [
    {
        "title": "resume",
        "dates": "20170826",
        "description": "interactive resume of front-end developer",
        "images": "images/resume.jpg"
    },
    {
        "title": "pofortlios",
        "dates": "20170820",
        "description": "This is a display for a website which can responsive to different devices with different DPR, also responsive to different resolution.",
        "images": "images/porfortlios.jpg"
    },
    {
        "title": "blog",
        "dates": "20170720",
        "description": "Format an article with CSS and HTML",
        "images": "images/blog.jpg"
    }
    ],
    "displayProjects" : function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formatTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            var formatDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            var formatDes = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            var formatImg = HTMLprojectImage.replace("%data%",projects.projects[i].images);
            $(".project-entry:last").append(formatTitle);
            $(".project-entry:last").append(formatDates);
            $(".project-entry:last").append(formatDes);
            $(".project-entry:last").append(formatImg);
        }
    }
};
projects.displayProjects();

var education = {
    "schools": [{
        "name": "Dalian University of Technology",
        "degree": "Master's degree",
        "location": "Dalian",
        "dates": "2010",
        "graduationYear": "2013",
        "url": "https://example.com",
        "Majors": ["Computer Science","English"]
    },
    {
        "name": "Dalian University of Technology",
        "degree": "Bachelor's degree",
        "location": "Dalian",
        "dates": "2006",
        "graduationYear": "2010",
        "url": "https://example.com",
        "Majors": ["Software Engineering","English"]
    }
  ],
  "onlineCourses": [{
        "title": "Web front-end Developer Course",
        "school": "Udacity",
        "dates": "20170719-20170826",
        "url": "https://classroom.udacity.com/"
  }
  ],
  "displayEdu" : function() {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formatName = HTMLschoolName.replace("%data%",education.schools[i].name);
            var formatDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
            var formatDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
            var formatLoc = HTMLschoolLocation.replace("%data%",education.schools[i].location);
            var formatMajors = HTMLschoolMajor.replace("%data%",education.schools[i].Majors);
            $(".education-entry:last").append(formatName + formatDegree);
            $(".education-entry:last").append(formatDates);
            $(".education-entry:last").append(formatLoc);
            $(".education-entry:last").append(formatMajors);
        }
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formatTitleOn = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
            var formatSchoolOn = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
            var formatDatesOn = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
            var oformatURLOn = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);
            $(".education-entry:last").append(formatTitleOn + formatSchoolOn);
            $(".education-entry:last").append(formatDatesOn);
            $(".education-entry:last").append(oformatURLOn);
        }
    }
 };
education.displayEdu();
$("#mapDiv").append(googleMap);