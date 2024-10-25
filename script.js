

//Saving form data to local storage (using logic from 04-Web-APIs-25)
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const familySize = document.getElementById('current-family');
const currentPets = document.getElementById('current-pets');
const wishList = document.getElementById('wishlist');
const submitButton = document.getElementById('submit')

function saveHouseholdInfo(){
    //Save data as an object
    const houseInfo = {
        firstName: firstName.value,
        lastName:  lastName.value,
        familySize: familySize.value,
        currentPets: currentPets.value,
        wishList: wishList.value.trim(),
    };
    console.log(houseInfo)
    localStorage.setItem('houseHoldInfo', JSON.stringify(houseInfo));
}

function showLastHouse(){
  //convert string back to JS object
  const lastHouse = JSON.parse(localStorage.getItem('houseHoldInfo'))
  if (lastHouse !== null) {
    document.getElementById('saved-firstName').innerHTML = lastHouse.firstName;
    document.getElementById('saved-lastName').innerHTML = lastHouse.lastName;
    document.getElementById('saved-familySize').innerHTML = lastHouse.familySize;
    document.getElementById('saved-currentPets').innerHTML = lastHouse.currentPets;
    document.getElementById('saved-wishList').innerHTML = lastHouse.wishList; 
  }
}


submitButton.addEventListener('click', function (event) {
  saveHouseholdInfo();
  showLastHouse();
})

//Create function to show last saved household when page is laoded
function init() {
  showLastHouse();
}

init()