export function init() {
  // init impress.js
  impress().init();

  // register enter/leave events
  const impressElement = document.getElementById("impress");
  if (impressElement) {
    impressElement.addEventListener("impress:stepleave", function (event) {
      const leaveId = event?.target?.id;
      if (leaveId) {
        switch (leaveId) {
          case "earth":
            leaveSlideVideo(leaveId);
            break;
        }
      }

      const enterId = event?.detail?.next?.id;
      if (enterId) {
        switch (enterId) {
          case "earth":
            enterSlideVideo(enterId);
            break;
        }
      }
    });
  }
}

const earthVideoId = "earthVideo";

function enterSlideVideo(id) {
  const earthVideoElement = document.getElementById(earthVideoId);
  if (earthVideoId) {
    earthVideoElement.play();
  }
}

function leaveSlideVideo(id) {
  const earthVideoElement = document.getElementById(earthVideoId);
  if (earthVideoId) {
    earthVideoElement.pause();
    earthVideoElement.currentTime = 0;
  }
}
