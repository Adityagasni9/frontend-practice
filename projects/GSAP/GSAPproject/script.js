var tl=gsap.timeline()

gsap.from("#nav h3",{
    y:-50,
    opacity:0,
    duration:.8,
    delay:0.4,
    stagger:0.2
})

gsap.from("#main h1",{
    y:-50,
    opacity:0,
    duration:.8,
    delay:1,
    stagger:0.4
})

gsap.from("img",{
    x:-100,
    rotate:45,
    opacity:0,
    duration:.8,
    delay:1.5
})