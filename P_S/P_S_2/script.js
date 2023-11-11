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

function circle(){
  let circle = document.querySelector(".circle");
  window.addEventListener("mousemove",(dets) => {
    // circle.style.delay = 2;
    circle.style.left = dets.clientX + "px";
    circle.style.top = dets.clientY + "px";
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
circle();
