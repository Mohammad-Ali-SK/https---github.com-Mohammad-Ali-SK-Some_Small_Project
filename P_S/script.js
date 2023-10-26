// console.log("Heel")
// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

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

function mousemove(x,y){
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#mini").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${x}, ${y})`;
    })
}

// circleMouse()
// mousemove();
circleChapta();