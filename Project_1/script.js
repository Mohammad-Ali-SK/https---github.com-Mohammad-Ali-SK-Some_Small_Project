
// Smoth Scrolling ___locomotive JS

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function firstPageAnim(){

    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut,
    })
    tl.to(".bounding-elem", {
        y:0,
        // ease: Expo.easeInOut,
        duration:2,
        stagger:.1,
        delay:-1,
       
    })
    tl.from(".hero-footer", {
        y: -10,
        opacity:0,
        duration:1.5,
        delay: -1,
        ease:Expo.easeInOut,
    })
    


};

function circleChapta(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", (dets) => {
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouse(xscale, yscale);
    });

}



function circleMouse(x,y){
    window.addEventListener('mousemove', (dets) => {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${x}, ${y})`;
        
    
    } )
}

circleChapta();
firstPageAnim();  