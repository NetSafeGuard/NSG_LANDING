
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65b11fa40ff6374032c46206/1hktu76sl';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

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