$("document").ready(function() {
  var tvChannels = {};

  tvChannels.tvStatus = false;
  tvChannels.currentChannel = 0;
  tvChannels.channelsList = [
    "https://www.youtube.com/embed/f2p0xrY4CMs",
    "https://www.youtube.com/embed/tAGnKpE4NCI",
    "https://www.youtube.com/embed/u9Dg-g7t2l4"
  ];
  tvChannels.channelUp = document.getElementById("channelUp");
  tvChannels.channelDown = document.getElementById("channelDown");
  tvChannels.powerBtn = document.getElementById("powerBtn");
  tvChannels.videoFrame = document.getElementById("videoFrame");

  tvChannels.channelUp.addEventListener("click", () => {
    console.log("A");
    tvChannels.channelUp();
    tvChannels.setChannel();
  });

  tvChannels.channelDown.addEventListener("click", () => {
    console.log("b");
    tvChannels.channelDown();
    tvChannels.setChannel();
  });

  tvChannels.powerBtn.addEventListener("click", () => {
    tvChannels.togglePower();
    console.log("c");
  });

  tvChannels.channelUp = () => {
    if (tvChannels.currentChannel === tvChannels.channelsList.length - 1) {
      tvChannels.currentChannel = 0;
    } else {
      ++tvChannels.currentChannel;
    }
  };

  tvChannels.channelDown = () => {
    if (tvChannels.currentChannel === 0) {
      tv.currentChannel = tvChannels.channelsList.length - 1;
    } else {
      --tvChannels.currentChannel;
    }
  };

  tvChannels.togglePower = () => {
    tvChannels.tvStatus = !tvChannels.tvStatus;
    if (tvChannels.tvStatus) {
      document.getElementById("channelDown").disabled = false;
      document.getElementById("channelUp").disabled = false;
      tvChannels.videoFrame.style.display = "block";
    } else {
      document.getElementById("channelDown").disabled = true;
      document.getElementById("channelUp").disabled = true;
      tvChannels.videoFrame.style.display = "none";
    }
  };

  tvChannels.setChannel = () => {
    tvChannels.videoFrame.setAttribute(
      "src",
      tvChannels.channelsList[tvChannels.currentChannel]
    );
  };
});
