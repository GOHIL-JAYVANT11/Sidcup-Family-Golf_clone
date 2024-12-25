var crsr = document.querySelector("#cursor")
var blure = document.querySelector("#cursor-blure")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  blure.style.left = dets.x - 150 + "px"
  blure.style.top = dets.y - 150 + "px"

})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2
    crsr.style.border = "1px  solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1
    crsr.style.border = "0px  solid #95C11E"
    crsr.style.backgroundColor = "transparent"
  })
})






gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70% ",
    scrub: 2
  }
})

gsap.from("#about-us img,#about-us-in", {
  y: 120,
  opaccity: 0,
  duration: 1,
  // stagger:0.1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 58%",
    scrub: 2
  }
})
gsap.from(".card", {
  scale: 0.8,
  opaccity: 0,
  duration: 1,
  stagger: 0.3,
  // stagger:0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 90%",
    end: "top 65%",
    scrub: 1
  },
})

gsap.from("#colon1", {
  y:-70, 
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  },
})
gsap.from("#colon2", {
  y:70, 
  x:70,
  scele:0.2,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  },
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 80%",
    end:"top 70%",
    scrub:3
  }
})




