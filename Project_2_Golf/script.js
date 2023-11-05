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
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
    cusorblur.style.left = dets.clientX -200 + "px";
    cusorblur.style.top = dets.clientY -200 + "px";
})
window.addEventListener("mouseleave", (dets) =>{
    cursor.style.display = "none";
    cusorblur.style.display = "none";
})