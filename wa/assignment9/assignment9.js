const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpeg', `pic2.jpeg`, `pic3.jpeg`, `pic4.jpeg`, `pic5.jpeg`];
const alts = {
  'pic1.jpeg' : 'Picture of the FredAgain concert at mission ballroom',
  'pic2.jpeg' : 'Image of the Golden Gate Bridge',
  'pic3.jpeg' : 'Picture of the Rockies Game at Sunset',
  'pic4.jpeg' : 'Picture of my friends on ST. Patricks Day',
  'pic5.jpeg' : 'Picture of my friends at a fake wedding'
}

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });