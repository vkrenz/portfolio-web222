import info from './info.js';

const body = document.body;
const title = document.querySelector('#title');
const info_2 = document.querySelector('#info-2');
const date = document.querySelector('#date');
const about_me_p = document.querySelector('#about-me-p');
const education_container = document.querySelector('#education-container');


window.addEventListener('load', e => {

    info_2.innerHTML = 
    `<span>` + info['age'] + `</span>
     <span>` + info['email'] + `</span>
     <span>` + info['languages'].join(", ") + `</span>
     <span>` + info['classSection'] + `</span>
     <span>` + info['studentID'] + `</span>
     <span>` + info['instructor'] + `</span>`;

    date.innerHTML = 
    `<strong>Date: </strong><span>` + info['date'] + `</span>`;

    about_me_p.innerHTML = 
    `<span>` + info['aboutMe'] + 
    info['academicHonesty'] + `</span>`;

    info['education'].forEach( e => {
        education_container.innerHTML +=
        `<div class="school-container">
            <div class="left-panel">
                <span class="year">` + e.date.startYear + ' - ' + e.date.endYear + isExpected(e.date.expected) + `</span>
                <span class="type">` + e.type + `</span>
            </div>
            <div class="right-panel">
                <span class="type">` + e.type + `</span>
                <p class="school-name">` + e.schoolName + `</p>
                <p class="desc">` + e.description + `</p>
            </div>
        </div>`;
    })

});

const isExpected = e => e ? '<br>(expected)' : '';

// Typed.js
var typed = new Typed('#type', {
    strings: [ 
        'a student', 
        'a developer',
        'Victor Krenzel'
    ],
    startDelay: 1000,
    smartBackspace: true,
    showCursor: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 800,
    loop: false,
    cursorChar: '|',

    /**
     * All typing is complete
     * @param {Typed} self
     */
    onComplete: (self) => { 
        let static_txt = document.querySelector('#static-txt');
        static_txt.classList.add('after');
        let cta = document.querySelector('#cta');
        cta.classList.add('active');
        self.cursor.remove()
    }

});

// Sticky Navbar
window.addEventListener('scroll', e => {
    console.log( window.pageYOffset );
})

// Debug
console.info("My Basic Info: ", { info })
console.table(info.education);
