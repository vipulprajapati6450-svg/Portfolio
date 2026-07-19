/* =================================
   MOBILE MENU
================================= */


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        menuBtn.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.classList.remove("active");

        });

    });

}







/* =================================
   TYPING EFFECT
================================= */


const typingText = document.getElementById("typing-text");


const words = [

    "Frontend Developer",

    "UI Designer",

    "JavaScript Developer",

    "Web Creator"

];


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;



function typingEffect(){


    if(!typingText) return;


    const currentWord = words[wordIndex];



    if(!isDeleting){


        typingText.textContent =
        currentWord.substring(0,charIndex++);



        if(charIndex > currentWord.length){


            isDeleting = true;


            setTimeout(typingEffect,1200);


            return;


        }



    }

    else{


        typingText.textContent =
        currentWord.substring(0,charIndex--);



        if(charIndex < 0){


            isDeleting = false;


            wordIndex++;



            if(wordIndex >= words.length){

                wordIndex = 0;

            }


        }


    }




    setTimeout(
        typingEffect,
        isDeleting ? 50 : 100
    );


}



typingEffect();









/* =================================
   AUTO YEAR
================================= */


const year = document.getElementById("year");


if(year){

    year.textContent =
    new Date().getFullYear();

}









/* =================================
   SCROLL REVEAL ANIMATION
================================= */


const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card, .stat"
);



const revealObserver = new IntersectionObserver(

    (entries)=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


            }


        });


    },


    {

        threshold:0.15

    }


);



revealElements.forEach(element=>{


    element.classList.add("hidden");


    revealObserver.observe(element);


});









/* =================================
   ACTIVE NAVBAR LINK
================================= */


const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current = "";



    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 120;



        if(
            pageYOffset >= sectionTop
        ){

            current =
            section.getAttribute("id");

        }


    });




    navItems.forEach(link=>{


        link.classList.remove("active");



        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }


    });



});









/* =================================
   CONTACT FORM
================================= */


const contactForm =
document.getElementById("contactForm");



if(contactForm){


    contactForm.addEventListener(
        "submit",
        function(e){


            e.preventDefault();



            const name =
            contactForm
            .querySelector("input")
            .value;



            alert(
            `Thank you ${name}! Your message has been sent successfully.`
            );



            contactForm.reset();



        }

    );


}









/* =================================
   CLOSE MENU OUTSIDE CLICK
================================= */


document.addEventListener(
"click",
(e)=>{


    if(
        !e.target.closest(".header")
    ){


        navLinks?.classList.remove("open");


    }


});
