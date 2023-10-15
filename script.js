import anime from "animejs/lib/anime.es.js";
$(document).on("load", function () {
  if (window.innerWidth >= 425) {
    function scrollToBio() {
      window.scrollTo(0, 650);
    }

    function scrollToPort() {
      window.scrollTo(0, 1210);
    }

    function scrollToSkills() {
      window.scrollTo(0, 1744);
    }

    function scrollToEdu() {
      window.scrollTo(0, 2685);
    }

    function scrollToExp() {
      window.scrollTo(0, 3338);
    }

    function scrollToContact() {
      window.scrollTo(0, 3988);
    }
  }

  if (window.innerWidth >= 768) {
    function scrollToBio() {
      window.scrollTo(0, 651);
    }

    function scrollToPort() {
      window.scrollTo(0, 1181);
    }

    function scrollToSkills() {
      window.scrollTo(0, 1835);
    }

    function scrollToEdu() {
      window.scrollTo(0, 2961);
    }

    function scrollToExp() {
      window.scrollTo(0, 3615);
    }

    function scrollToContact() {
      window.scrollTo(0, 4265);
    }
  }

  if (window.innerWidth >= 1440) {
    function scrollToBio() {
      window.scrollTo(0, 1187);
    }

    function scrollToPort() {
      window.scrollTo(0, 2040);
    }

    function scrollToSkills() {
      window.scrollTo(0, 2902);
    }

    function scrollToEdu() {
      window.scrollTo(0, 4933);
    }

    function scrollToExp() {
      window.scrollTo(0, 6119);
    }

    function scrollToContact() {
      window.scrollTo(0, 7305);
    }
  }

  const wiggleInLinkedin = () => {
    anime({
      targets: ".linkedin",
      scale: 2,
    });
  };

  const wiggleOutLinkedin = () => {
    anime({
      targets: ".linkedin",
      scale: 1,
    });
  };

  const wiggleInGithub = () => {
    anime({
      targets: ".github",
      scale: 2,
    });
  };

  const wiggleOutGithub = () => {
    anime({
      targets: ".github",
      scale: 1,
    });
  };

  const wiggleInBehance = () => {
    anime({
      targets: ".behance",
      scale: 2,
    });
  };

  const wiggleOutBehance = () => {
    anime({
      targets: ".behance",
      scale: 1,
    });
  };

  document
    .querySelector(".linkedin")
    .addEventListener("mouseover", wiggleInLinkedin);
  document
    .querySelector(".linkedin")
    .addEventListener("mouseout", wiggleOutLinkedin);
  document
    .querySelector(".github")
    .addEventListener("mouseover", wiggleInGithub);
  document
    .querySelector(".github")
    .addEventListener("mouseout", wiggleOutGithub);
  document
    .querySelector(".behance")
    .addEventListener("mouseover", wiggleInBehance);
  document
    .querySelector(".behance")
    .addEventListener("mouseout", wiggleOutBehance);

  // Wrap every letter in a span
  var textWrapper = document.querySelector(".quotes");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".quotes .letter",
      translateY: [-20, 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".quotes",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });

  $(document).ready(function () {
    $(".portfolio-content").slick({
      infinite: true,
      autoplay: true,
      autoplayspeed: 1000,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
    });
  });

  window.addEventListener(
    "scroll",
    function (event) {
      var top = this.scrollY;

      if (top >= 1040) {
        var meter1 = anime({
          targets: ".html-meter",
          value: 90,
          easing: "linear",
          autoplay: false,
        });

        var meter2 = anime({
          targets: ".css-meter",
          value: 90,
          easing: "linear",
          autoplay: false,
        });

        var meter3 = anime({
          targets: ".js-meter",
          value: 90,
          easing: "linear",
          autoplay: false,
        });

        var meter4 = anime({
          targets: ".react-meter",
          value: 80,
          easing: "linear",
          autoplay: false,
        });

        var meter5 = anime({
          targets: ".git-meter",
          value: 75,
          easing: "linear",
          autoplay: false,
        });

        var meter6 = anime({
          targets: ".figma-meter",
          value: 75,
          easing: "linear",
          autoplay: false,
        });

        var meter7 = anime({
          targets: ".teamwork-meter",
          value: 90,
          easing: "linear",
          autoplay: false,
        });

        var meter8 = anime({
          targets: ".sql-meter",
          value: 70,
          easing: "linear",
          autoplay: false,
        });

        var meter9 = anime({
          targets: ".communication-meter",
          value: 75,
          easing: "linear",
          autoplay: false,
        });

        var meter10 = anime({
          targets: ".laravel-meter",
          value: 65,
          easing: "linear",
          autoplay: false,
        });

        meter1.play();
        meter2.play();
        meter3.play();
        meter4.play();
        meter5.play();
        meter6.play();
        meter7.play();
        meter8.play();
        meter9.play();
        meter10.play();
      }
    },
    false
  );

  var certif1In = () => {
    anime({
      targets: ".certif-1",
      scale: 1.15,
    });
  };

  var certif1Out = () => {
    anime({
      targets: ".certif-1",
      scale: 1,
    });
  };

  document.querySelector(".certif-1").addEventListener("mouseover", certif1In);
  document.querySelector(".certif-1").addEventListener("mouseout", certif1Out);

  var certif2In = () => {
    anime({
      targets: ".certif-2",
      scale: 1.15,
    });
  };

  var certif2Out = () => {
    anime({
      targets: ".certif-2",
      scale: 1,
    });
  };

  document.querySelector(".certif-2").addEventListener("mouseover", certif2In);
  document.querySelector(".certif-2").addEventListener("mouseout", certif2Out);

  var certif3In = () => {
    anime({
      targets: ".certif-3",
      scale: 1.15,
    });
  };

  var certif3Out = () => {
    anime({
      targets: ".certif-3",
      scale: 1,
    });
  };

  document.querySelector(".certif-3").addEventListener("mouseover", certif3In);
  document.querySelector(".certif-3").addEventListener("mouseout", certif3Out);

  var certif4In = () => {
    anime({
      targets: ".certif-4",
      scale: 1.15,
    });
  };

  var certif4Out = () => {
    anime({
      targets: ".certif-4",
      scale: 1,
    });
  };

  document.querySelector(".certif-4").addEventListener("mouseover", certif4In);
  document.querySelector(".certif-4").addEventListener("mouseout", certif4Out);

  var certif5In = () => {
    anime({
      targets: ".certif-5",
      scale: 1.15,
    });
  };

  var certif5Out = () => {
    anime({
      targets: ".certif-5",
      scale: 1,
    });
  };

  document.querySelector(".certif-5").addEventListener("mouseover", certif5In);
  document.querySelector(".certif-5").addEventListener("mouseout", certif5Out);

  const listCertifications = [
    {
      title: "BNCC Front-End Development",
      image: "./assets/bncc-certif.png",
      desc: "Front-End Development course from BINUS University Computer Club. Mainly teach about how to create a good front-end for websites using HTML, CSS, JavaScript, also with framework and library, such as Bootstrap and jQuery.",
    },
    {
      title: "Big Data using Python",
      image: "./assets/kominfo-certif.png",
      desc: "A fresh graduate program from Kominfo. Student is expected to be able to analyse big data using various tools, such as Python, MySQL, Microsoft Excel, and then visualize it using Tableau.",
    },
    {
      title: "Python Essentials 1",
      image: "./assets/python1-certif.png",
      desc: "Cisco, in collaboration with OpenEDG Python Institute, verifies the earner of this badge successfully completed the Python Essentials 1 course and achieved the student level credentials. Earners have knowledge of the concepts of computer programming, the syntax and semantics of the Python language as well as demonstrate the ability to accomplish coding tasks related to the essentials of programming in the Python language and resolve implementation challenges using the Python Standard Library.",
    },
    {
      title: "Python Essentials 2",
      image: "./assets/python2-certif.png",
      desc: "Cisco, in collaboration with OpenEDG Python Institute, verifies the earner of this badge successfully completed the Python Essentials 2 course and achieved the student level credentials. Earners have knowledge and skills in intermediate aspects of Python programming, including modules, packages, exceptions, file processing, as well as general coding techniques and object-oriented programming (OOP), and prepares the learner for the PCAP - Certified Associate in Python Programming certification.",
    },
    {
      title: "Data Analytics Essentials",
      image: "./assets/data-certif.png",
      desc: "Cisco verifies the earner of this badge successfully completed the Data Analytics Essentials course. The holder of this student-level credential has a broad understanding how the data analytics process creates value from data, can explain characteristics of data, including formats, availability and methods to acquire, can transform data and analyze data using basic statistical and data preparation techniques. The holder has completed hands-on activities using Excel, SQL, Tableau and other tools.",
    },
  ];

  function handleClick(index) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal").style.alignItems = "center";
    document.getElementById("modalTitle").style.display = "flex";
    document.getElementById("modalTitle").style.justifyContent = "center";
    document.getElementById("modalTitle").style.padding = "30px";
    document.getElementById("modalImage").style.display = "flex";
    document.getElementById("modalImage").style.justifyContent = "center";
    document.getElementById("modalDesc").style.display = "flex";
    document.getElementById("modalDesc").style.justifyContent = "center";
    document.getElementById("modalDesc").style.padding = "30px";
    document.getElementById("modalTitle").innerHTML =
      listCertifications[index].title;
    document.getElementById(
      "modalImage"
    ).innerHTML = `<img src="${listCertifications[index].image}" alt="img_${index}" width=50%/>`;
    document.getElementById("modalDesc").innerHTML =
      listCertifications[index].desc;
  }

  function handleClose() {
    document.getElementById("modal").style.display = "none";
  }

  var modal = document.getElementById("modal");
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  if (window.innerWidth >= 1440) {
    const background = document.querySelector(".contact");
    for (var i = 0; i <= 100; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      background.appendChild(blocks);
    }

    let animateBlocks = () => {
      anime({
        targets: ".block",
        translateX: () => {
          return anime.random(-600, 600);
        },
        translateY: () => {
          return anime.random(-210, 210);
        },
        scale: () => {
          return anime.random(1, 5);
        },

        easing: "linear",
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks,
      });
    };

    animateBlocks();
  }

  const wiggleInBtn = () => {
    anime({
      targets: ".contact-btn",
      scale: 1.3,
    });
  };

  const wiggleOutBtn = () => {
    anime({
      targets: ".contact-btn",
      scale: 1,
    });
  };

  document
    .querySelector(".contact-btn")
    .addEventListener("mouseover", wiggleInBtn);
  document
    .querySelector(".contact-btn")
    .addEventListener("mouseout", wiggleOutBtn);
});
