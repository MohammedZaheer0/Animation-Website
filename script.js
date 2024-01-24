const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let Elem1 = document.querySelector("#elem1");
let ElemC = document.querySelector("#elemcontainer");
let Fixed = document.querySelector("#fixed-image");

ElemC.addEventListener("mouseenter",function(){
    Fixed.style.display = "block";
});
ElemC.addEventListener("mouseleave",function(){
    Fixed.style.display = "none";
});


let Elems = document.querySelectorAll(".elem");
Elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let E = e.getAttribute("data-image");
        Fixed.style.backgroundImage = `url(${E})`;
    });
});


let Design1 = document.querySelector("#ph1");
let Design2 = document.querySelector("#ph2");
let Design3 = document.querySelector("#ph3");
let DesignImage = document.getElementById("desingimage");
let DesignContent = document.getElementById("designContent");

Design1.addEventListener("click",function(){
    DesignImage.setAttribute("src","Convers.webp");
    DesignContent.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    Design1.style.transition = "all ease 0.4s";
});

Design2.addEventListener("click",function(){
        DesignImage.setAttribute("src","DesignImage2.webp");
        DesignContent.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
        Design2.style.borderLeft = "3px solid orangered";
        Design2.style.transition = "all ease 0.4s";
});

Design3.addEventListener("click",function(){
    DesignImage.setAttribute("src","DesignImage3.webp");
    DesignContent.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    Design3.style.borderLeft = "3px solid orangered";
    Design3.style.transition = "all ease 0.4s";
});


// Swiper JS Code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
  });