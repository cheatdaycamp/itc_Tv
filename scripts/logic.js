let tvChannels = {};

tvChannels.start = () => {
  tvChannels.tvStatus = off;
  tvChannels.currentChannel = 0;
  tvChannels.channelsList = [
    "https://www.youtube.com/watch?v=f2p0xrY4CMs",
    "https://www.youtube.com/watch?v=tAGnKpE4NCI",
    "https://www.youtube.com/watch?v=u9Dg-g7t2l4"
  ];
  tvChannels.channelUp = document.getElementById("channelUp");
  tvChannels.channelDown = document.getElementById("channelDown");
  tvChannels.powerBtn = document.getElementById("powerBtn");
};

tvChannels.channelUp = () => {
  tvChannels.channelUp.addEventListener("click", () => {
    if (tv.currentChannel === tvChannels.channelsList.length - 1) {
      tv.currentChannel = 0;
    } else {
      ++tvChannels.currentChannel;
    }
  });
};

tvChannels.channelDown = () => {
  tvChannels.channelDown.addEventListener("click", () => {
    if (tv.currentChannel === 0) {
      tv.currentChannel = tvChannels.channelsList.length - 1;
    } else {
      --tvChannels.currentChannel;
    }
  });
};

tvChannels.togglePower = () => {
  tvChannels.tvStatus = !tvChannels.tvStatus;
  if (tvChannels.tvStatus) {
    tvChannels.channelDown.disabled = false;
    tvChannels.channelUp.disabled = false;
  } else {
    tvChannels.channelDown.disabled = true;
    tvChannels.channelUp.disabled = true;
  }
};

tvChannels.check;
