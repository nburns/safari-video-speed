document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("input[type=range]")
    .addEventListener("change", (event) => {
      const { target } = event;
      const { value } = target;

      const currentValueLabel = document.querySelector("#speed");

      currentValueLabel.innerText = `${value}x`;

      function sendMessageToTabs(tabs) {
        for (const tab of tabs) {
          const value = event.target.value;
          const type = event.target.dataset.control;
          console.log({ value, type });

          browser.tabs
            .sendMessage(tab.id, { [type]: value })
            .then(() => {})
            .catch(console.error);
        }
      }

      browser.tabs
        .query({
          currentWindow: true,
          active: true,
        })
        .then(sendMessageToTabs)
        .catch(console.error);
    });
});
