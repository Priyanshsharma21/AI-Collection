const tl = gsap.timeline()

tl.from('.nav_items', {
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    delay: 0.5,
})

tl.from(".banner_img", {
    opacity: 0,
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
    x: '100%',
    stagger: 1
})



tl.from('.scrollDown', {
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    stagger: 1,
    y: '-100%'
})

gsap.registerPlugin(TextPlugin);

const mainHeading = document.querySelector('.main_heading');
const art_heading = document.querySelector('.art_g');
const mainHeadingText = mainHeading.textContent;
const art_headingText = art_heading.textContent;
mainHeading.textContent = '';
art_heading.textContent = '';

for (let i = 0; i < mainHeadingText.length; i++) {
    tl.to(mainHeading, {
        text: mainHeadingText.substr(0, i + 1),
        duration: 0.0001,
        ease: "power1.inOut"
    }, "+=0.1");
}
for (let i = 0; i < art_headingText.length; i++) {
    tl.to(art_heading, {
        text: art_headingText.substr(0, i + 1),
        duration: 0.0001,
        ease: "power1.inOut"
    }, "+=0.1");
}


window.addEventListener("load", function () {
    tl.play();
});


tl.fromTo(".fix_toggler", {
        opacity: 0,
        duration: 1,
        stagger: 1,
        scale: 0.2
    }, {
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 1,
        scale: 0.9
    })
    .to(".fix_toggler", {
        duration: 0.5,
        ease: "back.in(1.7)",
        scale: 1
    });


let work_main = document.querySelector(".work_main")
let work = document.querySelector(".fix_toggler")
let home = document.querySelector(".home")
let contact = document.querySelector(".contact")

work.addEventListener("click", () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#work"
    });
})

work_main.addEventListener("click", () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#work"
    });
})

home.addEventListener("click", () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#home"
    });
})

contact.addEventListener("click", () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: "#contact"
    });
})



// get the navbar element
const navbar = document.querySelector('.navbar');

// get the offset position of the navbar
const sticky = navbar.offsetTop;

// function to add or remove the "sticky" class to the navbar
function toggleSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// listen for the scroll event and call the toggleSticky function
window.addEventListener('scroll', toggleSticky);


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('black-bg');
    } else {
        navbar.classList.remove('black-bg');
    }
});


tl.fromTo(".work_text", {
    x: -1000
}, {
    x: 30,
    duration: 18,
    scrollTrigger: {
        trigger: ".work_text",
        scrub: 1,
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "bottom center", // end after scrolling 500px beyond the start
    }
})

document.querySelector(".copy_to_clip").addEventListener("click", copyToClipboard)

function copyToClipboard() {
    const text = document.querySelector('.prompt').innerText;
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
}


// const Scrollbar = window.Scrollbar;
//         const app = document.body


//         const options = {
//             damping: 0.03,
//         }

//  Scrollbar.init(app, options);

const customMouse = document.querySelector('.custom_mouse');

document.addEventListener('mousemove', e => {
  customMouse.style.top = e.clientY - customMouse.offsetHeight + 90 / 2 + window.scrollY + 'px';
  customMouse.style.left = e.clientX - customMouse.offsetWidth + 90 / 2 + window.scrollX + 'px';
});

document.body.style.cursor = 'none';





tl.fromTo(".libimg1", {
    filter: "blur(10px)",
    // y: "100%"
  }, {
    duration: 2.5,
    ease: "circ.out",
    // y: 0,
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg1",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });

  tl.fromTo(".libimg2", {
    filter: "blur(10px)",
    x: "100%"
  }, {
    duration: 2.5,
    ease: "circ.out",
    x: 0,
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg2",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });

  
  

  tl.fromTo(".libimg3", {
    filter: "blur(10px)",
    x: "-100%"
  }, {
    duration: 2.5,
    ease: "circ.out",
    x: 0,
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg3",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });


  tl.fromTo(".libimg4", {
    filter: "blur(10px)",
    x: "100%"
  }, {
    duration: 2.5,
    ease: "circ.out",
    x: 0,
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg4",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });


  
  tl.fromTo(".libimg5", {
    filter: "blur(10px)",
    x: "-100%"
  }, {
    duration: 2.5,
    ease: "circ.out",
    x: 0,
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg5",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });

  
  tl.fromTo(".libimg6", {
    filter: "blur(10px)",
    x: "100%"
  }, {
    duration: 2.5,
    ease: "circ.out",
    x: 0,
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg6",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });


  tl.fromTo(".libimg7", {
    filter: "blur(10px)",
    opacity : 0,
    transform : "scale(0)"
  }, {

    duration: 2.5,
    opacity : 1,
    transform : "scale(1)",
    ease: "circ.out",
    filter: "blur(0px)",
    scrollTrigger: {
      trigger: ".libimg7",
      scrub: 1,
      start: "top 80%", // when the top of the trigger hits 80% of the viewport
      end: "center center", // end when the center of the trigger hits the center of the viewport
    }
  });