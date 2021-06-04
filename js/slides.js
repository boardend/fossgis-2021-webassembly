export function init() {
  const start = window.location.hash;
  // init impress.js
  impress().init();
  // replace (ät) / (döt) in email
  removeSpamProtection();

  // handle initial onEnter
  if (start && start.indexOf("/")) {
    setTimeout(() => {
      onEnter(start.split("/").pop());
    }, 0);
  }

  // register enter/leave events
  const impressElement = document.getElementById("impress");
  if (impressElement) {
    impressElement.addEventListener("impress:stepleave", function (event) {
      if (event && event.target) {
        onLeave(event.target.id);
      }
      if (event && event.detail && event.detail.next) {
        onEnter(event.detail.next.id);
      }
    });
  }
}

function onEnter(enterId) {
  if (enterId) {
    switch (enterId) {
      case "earth":
        enterSlideVideo(enterId);
        break;
      case "gdal":
        enterSlideGdal(enterId);
        break;
    }
  }
}

function onLeave(leaveId) {
  if (leaveId) {
    switch (leaveId) {
      case "earth":
        leaveSlideVideo(leaveId);
        break;
      case "gdal":
        leaveSlideGdal(leaveId);
        break;
    }
  }
}

function removeSpamProtection() {
  const replace = (input) => {
    if (input) {
      let result = input;
      [
        ["(ät)", "@"],
        ["(döt)", "."],
      ].forEach((replacement) => {
        result = result.replace(replacement[0], replacement[1]);
      });
      return result;
    }
    return "";
  };
  document.querySelectorAll(".spam-protection").forEach((element) => {
    element.setAttribute("href", replace(element.getAttribute("href")));
    element.innerHTML = replace(element.innerHTML);
  });
}

const earthVideoId = "earthVideo";

function enterSlideVideo(id) {
  const earthVideoElement = document.getElementById(earthVideoId);
  if (earthVideoElement) {
    earthVideoElement.play();
    setTimeout(() => {
      earthVideoElement.parentElement.classList.add("dark");
      earthVideoElement.parentElement.classList.remove("bright");
    }, 6000);
  }
}

function leaveSlideVideo(id) {
  const earthVideoElement = document.getElementById(earthVideoId);
  if (earthVideoElement) {
    earthVideoElement.pause();
    earthVideoElement.currentTime = 0;
    earthVideoElement.parentElement.classList.add("bright");
    earthVideoElement.parentElement.classList.remove("dark");
  }
}

const gdalFrameId = "gdalFrame";

function enterSlideGdal(id) {
  const gdalFrameElement = document.getElementById(gdalFrameId);
  if (gdalFrameElement) {
    gdalFrameElement.src = gdalFrameElement.dataset.src;
  }
}

function leaveSlideGdal(id) {
  const gdalFrameElement = document.getElementById(gdalFrameId);
  if (gdalFrameElement) {
    gdalFrameElement.src = "about:blank"
  }
}

