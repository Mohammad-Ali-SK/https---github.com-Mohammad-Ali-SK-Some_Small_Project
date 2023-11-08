let cursor = document.querySelector('#cursor');
let blur = document.querySelector('.cursor-blur');
// console.log(cursor)
document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.clientX + 30 + 'px'
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

let h4all = document.querySelectorAll("h4");
// console.log(h4all)
h4all.forEach((elem) => {
    elem.addEventListener('mouseenter', (dets) => {
       cursor.style.scale = 3;
       cursor.style.border = '1px solid #000';
       cursor.style.backgroundColor = 'transparent';
      
    })
    elem.addEventListener('mouseleave', (dets) => {
       cursor.style.scale = 1;
       cursor.style.border = '0px solid #7ece05';
       cursor.style.backgroundColor = '#7ece05';
    })
})

gsap.from('.about-us,.about-text',{
    y:50,
    duration:1,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:'.about-us',
        scroller:'body',
        scrub:true,

    }
})

gsap.from('.card',{
    scale:0.8,
    opacity:1,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:'.card',
        scroller:'body',
        scrub:true,
        top:'70%',
        end:'60%'
}})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    delay:2,
    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        scrub:true,
        top:'55%',
        end:'45%'
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    delay:2,
    scrollTrigger:{
        trigger: "#colon2",
        scroller:"body",
        scrub:true,
        top:'55%',
        end:'45%'
    }
})
