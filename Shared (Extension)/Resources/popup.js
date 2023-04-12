document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input[type=range]').addEventListener("change", (event) => {
        const {target} = event;
        const {value} = target;
        
        const currentValueLabel = document.querySelector("#speed");
        
        currentValueLabel.innerText = `${value}x`;
        
        function sendMessageToTabs(tabs) {
          for (const tab of tabs) {
            browser.tabs
              .sendMessage(tab.id, { speed: event.target.value })
              .then(() => { })
              .catch(console.error);
          }
        }

          browser.tabs
            .query({
              currentWindow: true,
              active: true,
            })
            .then(sendMessageToTabs)
            .catch(onError);
        
    })
    
    
})
