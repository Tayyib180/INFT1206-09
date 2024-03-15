const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageNames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alernativeText = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Looping through images */

for(let i = 0; i < imageNames.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageNames[i]);
    newImage.setAttribute('alt', alernativeText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(e){
        displayedImage.src = e.target.src;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function(){
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";

        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
        
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";

        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }


    
})