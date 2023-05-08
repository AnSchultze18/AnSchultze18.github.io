const peopleDropdown = document.getElementById("people-dropdown");
const verbsDropdown = document.getElementById("verbs-dropdown");
const locationDropdown = document.getElementById("location-dropdown");
const foodDropdown = document.getElementById("food-dropdown");
const adjectiveDropdown = document.getElementById("adjective-dropdown");
const madLibTextResult = document.getElementById("madlib-text");
const generateMadLibBtn = document.getElementById("generate-madlib-btn");

let person;
let verb;
let site;
let food;
let adjective;

peopleDropdown.addEventListener("change", (e) => (person = e.target.value));
verbsDropdown.addEventListener("change", (e) => (verb = e.target.value));
locationDropdown.addEventListener("change", (e) => (site = e.target.value));
foodDropdown.addEventListener("change", (e) => (food = e.target.value));
adjectiveDropdown.addEventListener("change", (e) => (adjective = e.target.value));

const resetValues = () => {
  peopleDropdown.selectedIndex = 0;
  verbsDropdown.selectedIndex = 0;
  locationDropdown.selectedIndex = 0;
  foodDropdown.selectedIndex = 0;
  adjectiveDropdown.selectedIndex = 0;
  person = undefined;
  verb = undefined;
  site = undefined;
  food = undefined;
  adjective = undefined;
};

generateMadLibBtn.addEventListener("click", () => {
  const madLibsArr = [
    `One day, ${person}  was ${verb} in ${site}. While they were ${verb}, they realized how badly they wanted some ${food}. The only problem is that in ${site} there are no ${food}. Even though ${person} is very ${adjective}, they were quickly becoming very frustrated. As they finished their ${verb}, they decided that it was time to fly out of ${site} and get some ${food} somewhere else. Maybe one day ${site} will have ${food}.`,
    `Have you ever been craving a ton of ${food}? On a beautiful Spring day, ${person} was practicing some ${verb} in the ${site}. They wanted to practice ${verb} so that in one-years time, they would be the best around. Although they are usually very ${adjective}, there was a problem. You cannot practice ${verb} when you are craving a ton of ${food}, and that is exactly what was happening to ${person}. They decided that they would give in, just this once, and go get the ${food}. After they finished them, they realized that they were too full to ever practice ${verb} again. Poor poor ${person}.`,
    `It was a cold Winter night in ${site}. ${person} had just finished their last final before winter break and was looking forward to finally getting to eat after a long day. The only thing they were dying to eat were some ${food}. The problem was that in ${site}, there are no places to purchase late-night ${food}. Their typical ${adjective} attitude quickly turned to rage as the realization hit that they would be getting no late-night ${food}. They flipped the table over inside the building and screamed at the top of their lungs. “$60,000 per year and I cant even have late-night ${food}!” She decided that she would take up ${verb} in order get the money together to start a business that would allow for the purchase of late-night ${food}.`,
    `It was the best day of the year in ${site}. The sun was shining and ${person} and all their friends were hanging out eating ${food}. They wanted to have the best day of their lives because they just graduated from the University of Colorado. All of them were feeling very ${adjective} and like the whole world was at their fingertips. All of a sudden a big cloud came over them and ruined all of their ${food}. They decided to start a ${verb} club in order to find the means to replace all the ${food}. `,
  ];

  const randomIndex = Math.floor(Math.random() * madLibsArr.length);

  if (
    [person, verb, site, food].some(
      (userSelection) => userSelection === undefined
    )
  ) {
    alert("Please choose a selection from each of the dropdowns");
    return;
  }
  madLibTextResult.innerText = madLibsArr[randomIndex];
  resetValues();
});
