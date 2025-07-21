AOS.init(
  {
    // once: true,
  }
);

document.addEventListener("DOMContentLoaded", function () {

  const video = document.getElementById('videoSecMn');
  const toggleBtn = document.getElementById('toggleBtn');
  const videoWrapper = document.querySelector('.video-banner-hldr');
  const videoContentBox = document.getElementById('videoContentBox');

  const playIcon = `
  <svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2v12l10-6-10-6z"/>
  </svg> Play Video
`;

  const pauseIcon = `
  <svg width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2h3v12H6zm5 0h3v12h-3z"/>
  </svg> Pause Video
`;

  videoContentBox.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('play', () => {
    toggleBtn.innerHTML = pauseIcon;
    video.controls = true;
    videoWrapper.classList.add('video-playing');
  });

  video.addEventListener('pause', () => {
    toggleBtn.innerHTML = playIcon;
    video.controls = false;
    videoWrapper.classList.remove('video-playing');
  });

  video.addEventListener('ended', () => {
    toggleBtn.innerHTML = playIcon;
    video.controls = false;
    videoWrapper.classList.remove('video-playing');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function faqsAccordion() {
    var accordionSections = document.querySelectorAll(".accordion-item");

    if (accordionSections.length > 0) {
      // Set first item as active and open
      var firstAccordionItemHeader = accordionSections[0].querySelector(
        ".accordion-item-header"
      );
      var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

      if (firstAccordionItemBody) {
        firstAccordionItemHeader.classList.add("active");
        firstAccordionItemBody.style.maxHeight =
          firstAccordionItemBody.scrollHeight + "px";
      }

      // Set all other items as inactive and closed
      for (let i = 1; i < accordionSections.length; i++) {
        var otherHeader = accordionSections[i].querySelector(".accordion-item-header");
        var otherBody = otherHeader.nextElementSibling;

        if (otherBody) {
          otherHeader.classList.remove("active");
          otherBody.style.maxHeight = "0";
        }
      }
    }

    accordionSections.forEach((section) => {
      var accordionItemHeaders = section.querySelector(".accordion-item-header");
      var accordionItemBody = section.querySelector(".accordion-item-body");

      accordionItemHeaders.addEventListener("click", function () {
        var currentlyActiveHeader = document.querySelector(
          ".accordion-item-header.active"
        );
        var currentlyActiveBody = currentlyActiveHeader
          ? currentlyActiveHeader.nextElementSibling
          : null;

        if (currentlyActiveHeader && currentlyActiveBody) {
          currentlyActiveHeader.classList.remove("active");
          currentlyActiveBody.style.maxHeight = 0;
        }

        if (accordionItemHeaders !== currentlyActiveHeader) {
          accordionItemHeaders.classList.add("active");
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + "px";
        } else {
          accordionItemHeaders.classList.remove("active");
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
  }

  faqsAccordion();
});

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabProd');
  const contents = document.querySelectorAll('.tab-prod-content');
  tabs[0].classList.add('active-tab');
  contents[0].classList.add('active-content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active-tab'));
      contents.forEach(c => c.classList.remove('active-content'));

      tab.classList.add('active-tab');
      contents[index].classList.add('active-content');
    });
  });
});