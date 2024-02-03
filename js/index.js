document.ondragstart = () => false;

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
      window.open(
        "https://github.com/NetSafeGuard/NSG_ADMIN/releases/download/0.0.1/nsg_0.0.0_x64_en-US.msi"
      );
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
    document.getElementById("warning").style.display = "none";
    document.body.style.overflowY = "auto";

    isModalOpen = false;
    return;
  }

  isModalOpen = true;
  document.getElementById("warning").style.display = "flex";
  document.body.style.overflow = "hidden";
}
