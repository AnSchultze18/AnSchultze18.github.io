const customName = document.getElementById('customname');

const randomize = document.querySelector('.randomize');

const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was a 60 degree day in the spring in Boulder, Colorado, :insertx: was getting ready for his spring break trip to Jamaica. They decided to put on their favorite :inserty: before starting to pack to get them in the ~mood~. As they were finishing packing their 50 pound suitcase, they heard a loud crash! A :insertz: flew through the window, ruining all the clothes they packed for the trip. Annika walked in the room and her jaw fell on the floor. Oh well, better luck next year!'; 
let insertX = ['Justin Bieber', 'Santa', 'Drake', 'Nicki Minaj', 'Cardi B'];
let insertY = ['dress', 'beanie', 'nail polish', 'biker gloves'];
let insertZ = ['giant pizza', 'water balloon', 'paint ball', 'bird', 'leprechaun'];
randomize.addEventListener('click', result);
function result() {
  let newStory = storyText;

let xItem, yItem, zItem;
xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Annika', name)+ '';
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(50/2.174) + ' kilogram';
      const temperature =  Math.round((60-32)*(5/9)) + ' degrees celsius';
      newStory = newStory.replace("60 degree", temperature);  
      newStory = newStory.replace("50 pound", weight); 
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }