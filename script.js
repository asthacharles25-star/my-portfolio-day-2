/* Mobile Menu */

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("show");

});


/* Smooth Scrolling */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

    link.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            document
            .querySelector(
                this.getAttribute("href")
            )
            .scrollIntoView({
                behavior:"smooth"
            });

        }
    );

});


/* Typewriter Effect */

const text = "Web Developer";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document
        .getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,150);
    }
}

typeWriter();


/* Live Clock */

function updateClock(){

    const now = new Date();

    document
    .getElementById("clock")
    .textContent =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


/* Form Validation */

const form =
document.getElementById(
    "contactForm"
);

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const name =
        document.getElementById(
            "name"
        ).value;

        const email =
        document.getElementById(
            "email"
        ).value;

        const message =
        document.getElementById(
            "message"
        ).value;

        if(
            name === "" ||
            email === "" ||
            message === ""
        ){

            alert(
                "Please fill all fields"
            );

        }

        else{

            alert(
                "Form submitted successfully"
            );

            form.reset();

        }

    }
);


/* Dark Mode */

const themeBtn =
document.getElementById(
    "themeBtn"
);

themeBtn.addEventListener(
    "click",
    ()=>{

        document
        .documentElement
        .classList
        .toggle("dark");

    }
);