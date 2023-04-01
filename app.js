let container = document.querySelector(".container");
let main = document.querySelector;
let generated = document.querySelector("p");

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
const form = document.querySelector(".form");
//add an event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target.characterName.value);
  fetchData().then((ele) => {
    const array = ele.data;
    // console.log(array);
    let filteredArr = array.filter((ele) => {
      //   console.log(ele);
      return (
        ele.character.firstname ===
          event.target.characterName.value[0].toUpperCase() +
            event.target.characterName.value.slice(1).toLowerCase() ||
        ele.character.lastname ===
          event.target.characterName.value[0].toUpperCase() +
            event.target.characterName.value.slice(1).toLowerCase()
      );
    });
    let dataArr = filteredArr[Math.floor(Math.random() * filteredArr.length)];
    generated.innerHTML = `<strong>${dataArr.character.firstname} ${dataArr.character.lastname}:<br /> ${dataArr.content}<strong>`;
    console.log(generated);
  });
});
