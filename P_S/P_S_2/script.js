function loco(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
}
function circle(x,y){
  let circle = document.querySelector(".circle");
  window.addEventListener("mousemove",(dets) => {
    // circle.style.delay = 2;
    circle.style.display = "inline-block";
    circle.style.left = dets.clientX + "px";
    circle.style.top = dets.clientY + "px";
    // circle.style.transform = `scale${x}px,${y}px`
    // circle.style.transform = `scale${x}px,${y}px``;
  })
};
var tl = gsap.timeline();
tl.from('.bounding-elem',{
  opacity:0,
  duration: .7,
  y:100,
  stagger:.2,
});
tl.from('.bounding-elem-2',{
  opacity:0,
  // duration:.9,
  y:-100,
  stagger:.2,
  // delay:1,
})
tl.from('.hero-footer',{
  opacity:0,
  duration:2,

  delay:-1,
})
loco();
// circle();
function circleChapta(){
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", (dets) =>  {

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX-xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY-yprev);
    
    xprev = dets.clientX;
    yprev = dets.clientY;
    
    circle(xscale,yscale);
  })

}
circleChapta();


document.querySelectorAll(".elem").forEach((elem) => {
  elem.addEventListener("mousemove", (dets) => {

    var diff = dets.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("#imgage"),{
      opacity:1,
      ease:Power1,
      top:diff,
      left:dets.clientX,


    })
  

    
  })
})

