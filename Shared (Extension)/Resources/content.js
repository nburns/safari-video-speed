function getVideos() {
  return Array.from(document.querySelectorAll("video"));
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const videos = getVideos();

  if (request.speed) {
    videos.forEach((element) => {
      element.playbackRate = request.speed;
      console.log("speed:", request.speed);
    });
  }
  if (request.skip) {
    videos.forEach((element) => {
      element.currentTime += request.skip;
      console.log("skip:", request.skip);
    });
  }
});

document.addEventListener("keydown", (event) => {
  const videos = getVideos();

  if (event.key == "j") {
    videos.forEach((video) => {
      video.currentTime -= 10;
    });
  }

  if (event.key == "k") {
    videos.forEach((video) => (video.paused ? video.play() : video.pause()));
  }

  if (event.key == "l") {
    videos.forEach((video) => {
      video.currentTime += 10;
    });
  }
});

console.log("hello");
