/**
 * info.js
 * -------
 * Contains all the info used in the "about" 
 * section in index.html.
 */

const info = {
        age: 22,
        email: "vkrenzel@myseneca.ca",
        languages: ["English", "Russian"],
        classSection: "NHH",
        studentID: "102446176",
        instructor: "Siyavash Ghassemi Nia",
        date: "Aug 13, 2022",
        aboutMe: "Hi! I'm Victor Krenzel. I'm currently a student at Seneca College studying Computer Programming. ",
        academicHonesty: "I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students." ,  
        education: [
        {
            type: "College Diploma",
            schoolName: "Seneca College of Applied Arts",
            date: {
                startYear: "2022",
                endYear: "2023",
                expected: true
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu laoreet nulla, et porttitor nulla. Fusce elit justo, tristique a condimentum sit amet, maximus vitae mi."
        },
        {
            type: "High School Diploma",
            schoolName: "Northview Heights Secondary School",
            date: {
                startYear: "2013",
                endYear: "2017",
                expected: false
            },
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu laoreet nulla, et porttitor nulla. Fusce elit justo, tristique a condimentum sit amet, maximus vitae mi."
        }
    ]
}

export default info;