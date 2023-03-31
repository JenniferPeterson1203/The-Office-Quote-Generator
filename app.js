// const generateQuote = () => {
//   const character = document.getElementById("character").value;
// }

// const BASE_URL
//www.officeapi.dev/api/
let container = document.querySelector(".container");
let main = document.querySelector;

async function fetchData() {
  try {
    const response = await fetch(`https://www.officeapi.dev/api/quotes`);
    const parsedData = await response.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
}

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     fetchData(event.target.data[0].firstname.value)
//     .then((ele) => {
//         formattedName
//     })
// })
const img = document.querySelector(".image");
// console.log("img");
const form = document.querySelector(".form");

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
    console.log(filteredArr);
    // let quote = filteredArr.content;
    // console.log(quote);

    // let ranQuote =
    //   filteredArr[Math.floor(Math.random() * filteredArr.length)].content;
    // console.log(ranQuote);

    let placement = document.createElement("p");
    placement.textContent = ranQuote;
    // console.log(placement);
    form.append(placement);
    // console.log(form);

    // console.log(filteredArr);
  });

  // if (
  //   event.target.characterName.value === firstName ||
  //   event.target.characterName.value === lastName
  // ) {
  form.reset;
  // }
});

// img.addEventListener("click", (event) => {});
//   function nameSearch(arrayOfNames) {
//     let filteredArr = arrayOfNames.filter((ele) => {
//       return (
//         ele.character.firstname === event.target.characterName.value ||
//         ele.character.lastname === event.target.characterName.value
//       );
//     });
//   }

//event.target.characterName.value

//use the fetch call to parse data from the api
// fetch(`https://www.officeapi.dev/api/quotes`)
//   .then((response) => response.json())
//   .then((json) => {
//     // console.log(json.data[0].character.firstname);
//     // let info = json.data[0]
//     let firstName = json.data[0].character.firstname;
//     // console.log(firstName);
//     // console.log(json.data[0].character.lastname);
//     let lastName = json.data[0].character.lastname;
//     // console.log(lastName);
//     console.log(json);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(firstName);

// const firstName = json.data[0];
// console.log(firstName);

// async function generateQuote(event) {
//   event.preventDefault();
//   const characterName = document.querySelector("#character-name").value;
//   const url = `https://www.officeapi.dev/api/quotes/random?name=${characterName}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const quoteElement = document.querySelector("#quote");
//   quoteElement.innerText = `"${data.content}" - ${data.character.name}`;
// }

//       if (!response) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const quoteElement = document.getElementById("quote");
//       quoteElement.innerText = data.data.content;
//     })
//     .catch((error) => {
//       console.error("There was a problem fetching the quote:", error);
//     });
// };

// const generateQuoteButton = document.getElementById("generate-quote");
// generateQuoteButton.addEventListener("click", generateQuote);

// const apiUrl = "https://officeapi.dev/api/quotes/random";

// const quoteBtn = document.getElementById("quote-btn");
