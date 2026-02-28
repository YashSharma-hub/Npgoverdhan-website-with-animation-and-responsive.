var tl = gsap.timeline()

tl.from(".top-header", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.1
})

tl.from(".top-headers", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.1
})

tl.from(".nav-link", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})
tl.from(".footer-content", {
    scale: 0.2,
    opacity: 0,
    duration: 1,
    delay: 0.1
})

tl.from(".inside-footer", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.1
})



gsap.from(".section #section-1", {
    opacity: 0,
    x: 300,
    duration: 1,
    scrollTrigger: {
        trigger: ".section #section-1",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 60%",
        scrub: 1
    }
});

gsap.from(".Chairman-content p", {
    opacity: 0,
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger: ".section p",
        scroller: "body",
        markers: false,
        start: "top 90%",
        toggleActions: "play reverse play reverse"
    }
});

gsap.from(".section-title h1", {
    opacity: 0,
    x: -300,
    duration: 1,
    scrollTrigger: {
        trigger: ".section-title h1",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 60%",
        scrub: 1
    }
});

gsap.from(".about-content p", {
    opacity: 0,
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-content p",
        scroller: "body",
        markers: false,
        start: "top 90%",
        toggleActions: "play none play reverse"
    }
});

gsap.from(".title", {
  scale: 0.2,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".title",
    scroller: "body",
    markers: false,
    start: "top 80%",   
    toggleActions: "play reverse play reverse"  
  }
});

gsap.from(".title-header p", {
  scale: 0.2,
  opacity: 0,
  duration: 1,
//   delay:1,
  scrollTrigger: {
    trigger: ".title-header p",
    scroller: "body",
    markers: false,
    start: "top 80%",   
    toggleActions: "play reverse play reverse"  
  }
});

gsap.from(".service-title-header .service-title", {
  scale: 0.2,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".service-title-header .service-title",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end:"top 40%", 
    scrub:1,  
    toggleActions: "play reverse play reverse"  
  }
});

gsap.from(".service-title-header p", {
  scale: 0.2,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".service-title-header p",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end:"top 40%", 
    scrub:1,   
    toggleActions: "play reverse play reverse"  
  }
});


gsap.from(".public-title h1", {
  scale: 0.2,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".public-title h1",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end:"top 40%", 
    scrub:1,   
    toggleActions: "play reverse play reverse"  
  }
});


gsap.from(".public-about-content p", {
  scale: 0.2,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".public-about-content p",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end:"top 40%", 
    scrub:1,   
    toggleActions: "play reverse play reverse"  
  }
});


gsap.from(".govt-boxes", {
  y: 20,
  opacity: 0,
  stagger:0.3,
  scrollTrigger: {
    trigger: ".govt-boxes",
    scroller: "body",
    markers: false,
    start: "top 90%",
    end:"top 50%", 
    scrub:1,   
    toggleActions: "play reverse play reverse"  
  }
});


gsap.from(".service-box", {
  y: 20,
  opacity: 0,
  stagger:0.3,
  scrollTrigger: {
    trigger: ".service-box",
    scroller: "body",
    markers: false,
    start: "top 90%",
    end:"top 50%", 
    scrub:1,   
    toggleActions: "play reverse play reverse"  
  }
});


gsap.from(".news-box", {
  y: 20,
  opacity: 0,
  stagger:0.3,
  scrollTrigger: {
    trigger: ".news-box",
    scroller: "body",
    markers: false,
    start: "top 90%",
    end:"top 50%", 
    scrub:1,   
    toggleActions: "play reverse play reverse"  
  }
});