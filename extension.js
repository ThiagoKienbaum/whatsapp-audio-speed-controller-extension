start();

const start = async () => {
    const menuHeader = await getMenuHeader();
    audioSpeedController(menuHeader)            
}

const getMenuHeader = () => {
    document.querySelector('._1QUKR');
}

const audioSpeedController = (menuHeader) => {
    const button = document.createElement('button')
        button.innerHTML = '2x'
        button.classList.add("twoTimesButton")
        button.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach(audio => audio.playbackRate = 2)
        })
        menuHeader.appendChild(button)
}
