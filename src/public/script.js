const video = document.getElementById('uvideo')

window.addEventListener('load' , async e => {
    const media = await navigator.mediaDevices.getUserMedia({
        audio:true,
        video:true
    })
        video.srcObject = media
})