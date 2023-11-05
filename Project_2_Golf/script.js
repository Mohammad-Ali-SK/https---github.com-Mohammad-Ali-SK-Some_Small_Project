const nav = document.querySelector('#nav');


gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    // ease:Power1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"to -11%",
        scrub:1,


    }

})

gsap.to("#main",{
    backgroundColor:"black",
    // duration:1,
    // delay:2,

    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:1,

    }
})

const cursor = document.querySelector(".cursor");
const cusorblur = document.querySelector(".cursor-blur");
window.addEventListener("mousemove", (dets) =>{
    cursor.style.display = "block";
    cusorblur.style.display = "block";
    cursor.style.left = dets.clientX+30 + "px";
    cursor.style.top = dets.clientY + "px";
    cusorblur.style.left = dets.clientX -250 + "px";
    cusorblur.style.top = dets.clientY -200 + "px";
})
window.addEventListener("mouseleave", (dets) =>{
    cursor.style.display = "none";
    cusorblur.style.display = "none";
})

const h4all = document.querySelectorAll("#nav h4")
h4all.forEach((elem) => {
    elem.addEventListener("mouseenter",() => {
        cursor.style.scale = 3;
        cursor.style.border = ".7px solid #fff";
        cursor.style.backgroundColor = "transparent";

    })
    elem.addEventListener("mouseleave",() => {
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#cafb06";
    })
})

gsap.from(".about-us img, .about-text",{
    y:50,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3,

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    delay:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2,

    }
})