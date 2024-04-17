document.ondragstart = () => false;

let admin_url = "";

const loadContent = () => {
  anime({
    targets: "body",
    opacity: 1,
    duration: 2500,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".button",
    scale: 1,
    duration: 2800,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".imagescontainer",
    loop: true,
    duration: 3000,
    keyframes: [{ translateY: -20 }, { translateY: 0 }],
    easing: "easeInOutSine",
  });
};

function Download(type) {
  switch (type) {
    case "Admin":
      if(admin_url !== "") {
        fetch("https://api.github.com/repos/NetSafeGuard/NSG_ADMIN/releases/latest")
          .then((response) => response.json())
          .then((data) => {
            data.assets.forEach((asset) => {
              if (asset.name.includes("NetSafeGuard.Admin") && asset.name.endsWith(".msi")) {
                window.open(asset.browser_download_url);
                admin_url = asset.browser_download_url;
              }
            });
        });
      } else {
        window.open(admin_url);
      }
      break;
    case "Students":
      window.open(
        "https://github.com/NetSafeGuard/NSG_STUDENTS/releases/download/0.01/nsgtest.exe"
      );
      break;
    case "Dependency":
      window.open("https://www.winpcap.org/install/bin/WinPcap_4_1_3.exe");
      break;
  }
}

let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    console.log("closing modal");
    document.body.style.overflowY = "auto";

    anime({
        targets: "#warning",
        opacity: 0,
        duration: 1000,
        easing: "easeInOutQuad",
    });

    anime({
        targets: "#warning",
        top: "0%",
        duration: 500,
        easing: "easeInOutQuad",
    });

    setTimeout(() => {
      document.getElementById("warning").style.display = "none";
    }, 500);

    isModalOpen = false;
    return;
  }


  anime({
    targets: "#warning",
    top: "50%",
    duration: 500,
    easing: "easeInOutQuad",
  });

  anime({
    targets: "#warning",
    opacity: 1,
    duration: 1000,
    easing: "easeInOutQuad",
  });

  isModalOpen = true;
  document.getElementById("warning").style.display = "flex";
  document.body.style.overflow = "hidden";
}
