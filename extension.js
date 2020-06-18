const start = () => {
    const interval = setInterval(() => {
    const navbar = document.querySelector('._1QUKR');                
        if(navbar != null) {            
            clearInterval(interval);            
            audioSpeedController(navbar)
        }        
    }, 1000);    
}

const audioSpeedController = (navbar) => {   
    const playbackRateElement = document.createElement('p');
    playbackRateElement.classList.add('playbackRateElement');
    const decreaseAudioRate = document.createElement('button');
    playbackRateElement.innerHTML = '1.00x'
    decreaseAudioRate.innerHTML = '- ';
    decreaseAudioRate.classList.add('decreaseAudioRate');    
    const increaseAudioRate = document.createElement('button');
    increaseAudioRate.innerHTML = ' +'; 
    increaseAudioRate.classList.add('increaseAudioRate');

    decreaseAudioRate.addEventListener('click', () => {
        const audios = document.querySelectorAll('audio');   
        audios.forEach(audio => {
            if(audio.playbackRate >= 0.5) {
                audio.playbackRate -= 0.25
                playbackRateElement.innerHTML = `${audio.playbackRate.toFixed(2)}x` 
            }        
        });            
    });

    increaseAudioRate.addEventListener('click', () => {
        const audios = document.querySelectorAll('audio');   
        audios.forEach(audio => {
            if(audio.playbackRate <= 1.75) {
                audio.playbackRate += 0.25 
                playbackRateElement.innerHTML = `${audio.playbackRate.toFixed(2)}x` 
            }        
        });            
    });       
    
    renderExtension(navbar, playbackRateElement, decreaseAudioRate, increaseAudioRate);
};

const renderExtension = (navbar, playbackRateElement, decreaseAudioRate, increaseAudioRate) => {
    navbar.appendChild(decreaseAudioRate);
    navbar.appendChild(playbackRateElement);
    navbar.appendChild(increaseAudioRate); 
}

start();