fetch('https://icanhazdadjoke.com/slack')
    .then(data=>data.json())
    .then(jokeData=>{
        const jokeText=jokeData.attachements[0].text;
        const jokeElement=document.getElementById('nothing');
        jokeElement.innerHTML=jokeText;

    })