/* ~~~~~~~~~ Hamburger ~~~~~~~~~~~~~ */

const navMenu = document.getElementById("nav-menu");
const menuBurger = document.getElementById("hamburger");
const closeBurger = document.getElementById("close-burger");

const bodyOverlay = document.querySelector('.body-overlay');


menuBurger.addEventListener("click", (event)=> {

    event.preventDefault();

    navMenu.classList.remove("left-[-100%]");
    navMenu.classList.add("left-0");
    
    bodyOverlay.classList.add("opened");
   
})

closeBurger.addEventListener("click", (event)=> {

    event.preventDefault();

    navMenu.classList.add("left-[-100%]");
    navMenu.classList.remove("left-0"); 

    bodyOverlay.classList.remove("opened");
   
})


/* ~~~~~~~~~ Typed Js ~~~~~~~~~~~~~ */
const typingWords = document.getElementById("typer").dataset.words.split(',');
const options = {
    strings: typingWords,
    typeSpeed: 100,
    backSpeed: 100,
    cursorChar: '_',
    loop: true
}
var typed5 = new Typed('#typer', options);


/* ~~~~~~~~~ Sticky Effect Navbar ~~~~~~~~~~~~~ */

const navBar = document.getElementById("navbar");

document.addEventListener("scroll", () => {

    (scrollY >= navBar.offsetHeight) ? navBar.classList.add('sticky-header') : navBar.classList.remove('sticky-header');
    
})

/* ~~~~~~~~~ One page Nav Scroll Js ~~~~~~~~~~~~~ */

const targets = document.querySelectorAll('.desktop-menu li a');
targets.forEach(link=>{
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        const targetId = event.target.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth",
            })
        }   
    })
   
})
const targetsMobileMenu = document.querySelectorAll('.mobile-menu li a');
targetsMobileMenu.forEach(link=>{
    link.addEventListener("click", (event)=>{
        event.preventDefault();
        const targetId = event.target.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth",
            })
        }   
    })
   
})

/* ~~~~~~~~~ Scroll to Top Js ~~~~~~~~~~~~~ */

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", ()=> {
    if(scrollY > 200) {
        scrollToTopButton.classList.remove("opacity-0", "invisible");
    } else {
        scrollToTopButton.classList.add("opacity-0", "invisible");
    }
})

scrollToTopButton.addEventListener("click", (event)=> {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })

})


gsap.registerPlugin(ScrollTrigger);


/* ~~~~~~~~~ Gsap Hero Shape Image Js ~~~~~~~~~~~~~ */

const heroHover = document.getElementById('hero-section');

const moveShape = document.querySelectorAll('.hero-shape');

moveShape.forEach(shape => {
    let boundingRect = shape.getBoundingClientRect();

    heroHover.addEventListener('mousemove', (e)=> {

       const mousePosX = e.pageX - boundingRect.left;

       const mousePosY = e.pageY - boundingRect.top;

       gsap.to(shape, {
            x: (mousePosX - boundingRect.width / 2) * 0.05,
            y: (mousePosY - boundingRect.height / 2) * 0.05,
            duration: 1,
       })

    })

    heroHover.addEventListener('mousemove', (e)=> {

        gsap.to(shape, {
            x: 0,
            y: 0,
            duration: 1,
        })
 
     })
   
});

gsap.from('.slider-content',{
    delay: 0.5,
    opacity: 0,
    duration: 1.5,
    x: -100,
    ease:"power3.inOut",
})



/* ~~~~~~~~~ Gsap Intro Box Js ~~~~~~~~~~~~~ */

const introBox = document.querySelectorAll('.single-feature-content');

introBox.forEach( (box)=>{

    let introBoxBoundingRect = box.getBoundingClientRect();

    box.addEventListener("mousemove", (e)=> {
    
        const mousePosX = e.pageX - introBoxBoundingRect.left;

        const mousePosY = e.pageY - introBoxBoundingRect.top;

        let rotateY = (mousePosX - introBoxBoundingRect.width / 2) * 0.1;
        let rotateX = -(mousePosY - introBoxBoundingRect.height / 2) * 0.1;

        rotateY = Math.max(Math.min(rotateY, 10), -10);
        rotateX = Math.max(Math.min(rotateX, 10), -10);
 

        gsap.to(box, {
            rotateX:  rotateX, 
            rotateY: rotateY, 
            transformPerspective: 1000,
            duration: 0.35,
            ease: "power1.out" 
        });

    })

    box.addEventListener("mouseleave", (e)=> {
        
        gsap.to(box, {
            rotateX: 0, 
            rotateY: 0, 
            transformPerspective: 1000,
            duration: 1,
            ease: "power1.out" 
       }) 

    })

} )


/* ~~~~~~~~~ Gsap About me Img Js ~~~~~~~~~~~~~ */


const tiltImage = document.querySelector('.image-tilt-effect');

let tiltImageBoundingRect = tiltImage.getBoundingClientRect();

tiltImage.addEventListener("mousemove", (e)=> {

    const mousePosX = e.pageX - tiltImageBoundingRect.left;

    const mousePosY = e.pageY - tiltImageBoundingRect.top;

    let rotateY = (mousePosX - tiltImageBoundingRect.width / 2) * 0.1;
    let rotateX = -(mousePosY - tiltImageBoundingRect.height / 2) * 0.1;

    rotateY = Math.max(Math.min(rotateY, 8), -8);
    rotateX = Math.max(Math.min(rotateX, 8), -8);


    gsap.to(tiltImage, {
        rotateX:  rotateX, 
        rotateY: rotateY, 
        transformPerspective: 1000,
        duration: 0.35,
        ease: "power1.out" 
    });

})

tiltImage.addEventListener("mouseleave", (e)=> {
    
    gsap.to(tiltImage, {
        rotateX: 0, 
        rotateY: 0, 
        transformPerspective: 1000,
        duration: 1,
        ease: "power1.out" 
    }) 

})

gsap.from(".about-shape-1", {
    delay: .5,
    duration: 1,
    x: -100,
    scrollTrigger: {
        trigger: '#about-me',
        toggleActions: "restart none none none",
}});

gsap.from(tiltImage, {
    delay: .5,
    duration: 1,
    x: -100,
    scrollTrigger: {
        trigger: '#about-me',
        toggleActions: "restart none none none"
}});

gsap.from(".about-shape-2", {
    delay: .5,
    duration: 1,
    x: -100,
    scrollTrigger: {
        trigger: '#about-me',
        toggleActions: "restart none none none"
}});

gsap.from(".about-download-wrapper", {
    delay: .5,
    duration: 1,
    x: -100,
    scrollTrigger: {
        trigger: '#about-me',
        toggleActions: "restart none none none"
}});

gsap.from("#my-service .services-box",{
    ease: "power1.out",
    delay: 1,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '#my-service',
        toggleActions: "restart none none none"
    },
    stagger: 0.1,
})

let tl = gsap.timeline()

tl.from(".services-box1", { delay: 2, scrollTrigger: {trigger: '#my-service .services-box1',
toggleActions: "restart none none none"}, });
tl.from(".services-box2", { delay: 3, scrollTrigger: {trigger: '#my-service .services-box2',
toggleActions: "restart none none none"}, });
tl.from(".services-box3", { delay: 4, scrollTrigger: {trigger: '#my-service .services-box3',
toggleActions: "restart none none none"}, });
tl.from(".services-box3", { delay: 5, scrollTrigger: {trigger: '#my-service .services-box4',
toggleActions: "restart none none none"}, });




