let cursor = document.querySelector('#cursor');
let blur = document.querySelector('.cursor-blur');
// console.log(cursor)
document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.clientX + 'px'
    cursor.style.top = dets.clientY + 'px'
    blur.style.left = dets.clientX -250 + 'px'
    blur.style.top = dets.clientY - 250 + 'px'
})



gsap.to("#nav",{
    y: -20,
    // duration: 1,
    // delay:1,
    ease: "power1.inOut",
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1,
    }

    
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end: "top -100%",
        scrub:1,
        markars:true,
    }
})