let container = document.querySelector(".container");
let main = document.querySelector;
let generated = document.querySelector("p");
generated.classList.add("box");

//fetch data from the URL
async function fetchData() {
  try {
    const response = await fetch(`https://www.officeapi.dev/api/quotes`);
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
}

//access the form
//add an event listener to the form
//check if the input/form is empty
//if empty, alert the user to enter a character name
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.characterName.value.trim() === "") {
    alert("Please enter a character name");
    return;
  }

  fetchData().then((ele) => {
    const array = ele.data;
    let filteredArr = array.filter((ele) => {
      return (
        ele.character.firstname ===
          event.target.characterName.value[0].toUpperCase() +
            event.target.characterName.value.slice(1).toLowerCase() ||
        ele.character.lastname ===
          event.target.characterName.value[0].toUpperCase() +
            event.target.characterName.value.slice(1).toLowerCase()
      );
    });
    if (filteredArr.length === 0) {
      alert("Invalid character name");
      return;
    }
    let dataArr = filteredArr[Math.floor(Math.random() * filteredArr.length)];
    let firstName = dataArr.character.firstname;
    let lastName = dataArr.character.lastname;
    let quote = dataArr.content;
    generated.innerHTML = `${firstName} ${dataArr.character.lastname}:<br /> ${quote}`;
    console.log(generated);
  });
});
