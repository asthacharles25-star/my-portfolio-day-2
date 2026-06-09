/*portfolio javascript*/

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("show");

});




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



function updateClock(){

    const now = new Date();

    document
    .getElementById("clock")
    .textContent =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();



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
