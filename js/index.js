document.ondragstart = () => false;

const loadContent = () => {
    anime({
        targets: 'body',
        opacity: 1,
        duration: 2500,
        easing: 'easeInOutQuad'

    })

    anime({
        targets: '.button',
        scale: 1,
        duration: 2800,
        easing: 'easeInOutQuad'
    })

    anime({
        targets: '.imagescontainer',
        loop: true,
        duration: 3000,
        keyframes: [
            { translateY: -20 },
            { translateY: 0 }
        ],
        easing: 'easeInOutSine'
    })
}

function DOWNLOAD() {
    window.open("https://github.com/NetSafeGuard/NSG_ADMIN/releases/download/0.0.1/nsg_0.0.0_x64_en-US.msi")
}