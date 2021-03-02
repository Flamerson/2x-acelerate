//ytd-masthead  class do topbar no youtube
const interval = setInterval(()=> {
    const addBox = document.querySelector("#masthead-container");

    if(addBox){
        console.log(addBox);
        clearInterval(interval);

        // botão com 1.0
        const button2 = document.createElement("button");
        button2.innerHTML = "1.0x"
        button2.classList.add("time2")
        addBox.appendChild(button2)

        const videos = document.querySelectorAll("video");

        button2.addEventListener('click', () => {
            console.log(videos)
            videos.forEach((video) => {
                console.log(video)
                video.playbackRate = 1;
            })
        })

        // botão com 1.5
        const button1 = document.createElement("button");
        button1.innerHTML = "1.5x"
        button1.classList.add("time2")
        addBox.appendChild(button1)

        button1.addEventListener('click',() => {
            console.log(videos)
            videos.forEach((video) => {
                console.log(video)
                video.playbackRate = 1.5;
            })
        })


        // botão com 2.0
        const button = document.createElement("button");
        button.innerHTML = "2.0x"
        button.classList.add("time2")
        addBox.appendChild(button)

        button.addEventListener('click', ()=> {
            
            console.log(videos)
            videos.forEach((video) => {
                console.log(video)
                video.playbackRate = 2;
            })
        })


    }
},1000);