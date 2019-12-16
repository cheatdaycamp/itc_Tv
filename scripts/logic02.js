document.addEventListener("DOMContentLoaded", () => {
  const TV_APP = {
    tvStatus: false,
    currentChannel: 0,
    channelsList: ["f2p0xrY4CMs", "gMk9FQj7NPY", "B7vuaEv1b24"],
    channelUp: document.getElementById("channelUp"),
    channelDown: document.getElementById("channelDown"),
    powerBtn: document.getElementById("powerBtn"),
    videoFrame: document.getElementById("videoFrame"),
    channelDisplay: document.getElementById("channelDisplay"),
    channelLegend: document.getElementById("channelLegend"),
    background: document.getElementById("background"),

    channelUp() {
      if (TV_APP.currentChannel === TV_APP.channelsList.length - 1) {
        TV_APP.currentChannel = 0;
      } else {
        ++TV_APP.currentChannel;
      }
    },

    channelDown() {
      if (TV_APP.currentChannel === 0) {
        TV_APP.currentChannel = TV_APP.channelsList.length - 1;
      } else {
        --TV_APP.currentChannel;
      }
    },

    togglePower() {
      TV_APP.tvStatus = !TV_APP.tvStatus;
      TV_APP.tvStatus ? TV_APP.turnOn() : TV_APP.turnOff();
    },

    turnOn() {
      this.channelDown.disabled = false;
      this.channelUp.disabled = false;
      this.background.style.display = "none";
      TV_APP.videoFrame.style.display = "block";
      TV_APP.channelLegend.style.visibility = "visible";
      TV_APP.setChannel();
    },

    turnOff() {
      this.channelDown.disabled = true;
      this.channelUp.disabled = true;
      this.background.style.display = "block";
      TV_APP.videoFrame.setAttribute("src", "");
      TV_APP.channelLegend.style.visibility = "hidden";
      TV_APP.videoFrame.style.display = "none";
    },

    setChannel() {
      let youTubeLink =
        "https://www.youtube.com/embed/" +
        TV_APP.channelsList[TV_APP.currentChannel] +
        "?rel=1&autoplay=1&showinfo=0&controls=0&loop=1&modestbranding=0";
      TV_APP.videoFrame.setAttribute("src", youTubeLink);
      TV_APP.channelDisplay.innerHTML = TV_APP.currentChannel + 1;
    },

    start() {
      TV_APP.channelUp.addEventListener("click", () => {
        TV_APP.channelUp();
        TV_APP.setChannel();
      });

      TV_APP.channelDown.addEventListener("click", () => {
        TV_APP.channelDown();
        TV_APP.setChannel();
      });

      TV_APP.powerBtn.addEventListener("click", () => {
        TV_APP.togglePower();
      });
    }
    
  };

  TV_APP.start();
});
