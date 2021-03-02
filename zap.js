const interval = setInterval(()=>{
    const addBox = document.querySelector("._1R3Un");

    if(addBox){
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x"
        button.classList.add("time2")
        addBox.appendChild(button)

        button.addEventListener('click', ()=> {
            const audios = document.querySelectorAll("audio");
            console.log(audios)
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2;
            })
        })
    }
},1000);

    //._1-qgF