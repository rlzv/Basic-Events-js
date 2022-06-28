const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You clicked me!");
    console.log("Hope it worked!");
}

function scream(){
    console.log("AAAAAJJJJ");
    console.log("Stop ittt");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('uou, you clicked the h1!');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('CLICKED!!')
})

function twist(){
    console.log('TWIST!')
}

function shout(){
    console.log('SHOUT!')
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;


//EventListeneru permite mai multe metode
tasButton.addEventListener('click', twist, /*{once: true} asta cheama twist doar o data*/)
tasButton.addEventListener('click', shout)
