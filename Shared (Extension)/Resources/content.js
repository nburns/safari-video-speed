browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.speed) {
        Array.from(document.querySelectorAll('video')).forEach(element => {
            element.playbackRate = request.speed
            console.log(request.speed);
        });
    }
});

