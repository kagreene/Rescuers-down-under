

//Saving form data to local storage (using logic from 04-Web-APIs-25)
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const familySize = document.getElementById('current-family');
const currentPets = document.getElementById('current-pets');
const wishList = document.getElementById('wishlist');
const submitButton = document.getElementById('submit')
const backButton = document.getElementById('back')
const back = document.getElementById('back');

function saveHouseholdInfo(formData) {
  //Save data as a string

  localStorage.setItem('houseHoldInfo', JSON.stringify(formData));
}

function showLastHouse() {
  //convert string back to JS object
  const lastHouse = localStorage.getItem('houseHoldInfo')
  if (lastHouse) {
    const lastHouseObj = JSON.parse(lastHouse)
    document.getElementById('saved-firstName').innerHTML = lastHouseObj.firstName;
    document.getElementById('saved-lastName').innerHTML = lastHouseObj.lastName;
    document.getElementById('saved-familySize').innerHTML = lastHouseObj.familySize;
    document.getElementById('saved-currentPets').innerHTML = lastHouseObj.currentPets;
    document.getElementById('saved-wishList').innerHTML = lastHouseObj.wishList;
  }
}


submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const houseInfo = {
    firstName: firstName.value,
    lastName: lastName.value,
    familySize: familySize.value,
    currentPets: currentPets.value,
    wishList: wishList.value.trim(),
  };
  if (houseInfo.firstName && houseInfo.lastName && houseInfo.familySize && houseInfo.currentPets && houseInfo.wishList) {
    saveHouseholdInfo(houseInfo);
    showLastHouse();
    var myModal = new bootstrap.Modal(document.getElementById('thanksModal'));
    console.log(houseInfo)
    myModal.show();
  }
  else {
    var errModal = new bootstrap.Modal(document.getElementById('incompleteModal'));

    errModal.show();
  }


})

//Create function to show last saved household when page is laoded
function init() {
  showLastHouse();
}

init()