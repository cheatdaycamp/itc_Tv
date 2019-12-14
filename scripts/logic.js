document.addEventListener("DOMContentLoaded", () => {
  const TV_APP = {};

  TV_APP.start = () => {
    TV_APP.tvStatus = false;
    TV_APP.currentChannel = 0;
    TV_APP.channelsList = ["f2p0xrY4CMs", "gMk9FQj7NPY", "B7vuaEv1b24"];
    TV_APP.channelUp = document.getElementById("channelUp");
    TV_APP.channelDown = document.getElementById("channelDown");
    TV_APP.powerBtn = document.getElementById("powerBtn");
    TV_APP.videoFrame = document.getElementById("videoFrame");

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

    TV_APP.channelUp = () => {
      if (TV_APP.currentChannel === TV_APP.channelsList.length - 1) {
        TV_APP.currentChannel = 0;
      } else {
        ++TV_APP.currentChannel;
      }
    };

    TV_APP.channelDown = () => {
      if (TV_APP.currentChannel === 0) {
        TV_APP.currentChannel = TV_APP.channelsList.length - 1;
      } else {
        --TV_APP.currentChannel;
      }
    };

    TV_APP.togglePower = () => {
      TV_APP.tvStatus = !TV_APP.tvStatus;
      TV_APP.tvStatus ? TV_APP.turnOff() : TV_APP.turnOn();
    };

    TV_APP.turnOn = () => {
      document.getElementById("channelDown").disabled = false;
      document.getElementById("channelUp").disabled = false;
      TV_APP.videoFrame.style.display = "block";
      TV_APP.setChannel();
    };

    TV_APP.turnOff = () => {
      document.getElementById("channelDown").disabled = true;
      document.getElementById("channelUp").disabled = true;
      TV_APP.videoFrame.setAttribute("src", "");
      TV_APP.videoFrame.style.display = "none";
    };

    TV_APP.setChannel = () => {
      let youTubeLink =
        "https://www.youtube.com/embed/" +
        TV_APP.channelsList[TV_APP.currentChannel] +
        "?rel=0&autoplay=1&loop=1";
      TV_APP.videoFrame.setAttribute("src", youTubeLink);
    };
  };

  TV_APP.start();
});
