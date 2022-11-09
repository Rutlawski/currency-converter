console.log("Hello World!")

let formElement = document.querySelector(".js-form");
let ammountElement = document.querySelector(".js-ammount");
let resultElement = document.querySelector(".js-result");
let dollarElement = document.querySelector(".js-dollar");
let euroElement = document.querySelector(".js-euro");
let poundElement = document.querySelector(".js-pound");
let buttonElement = document.querySelector(".js-fieldset__button");

buttonElement.addEventListener("click", () => {
    let result;

    result = (" 0");

    resultElement.innerText = result;
})

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let result;

    if (dollarElement.checked === true) {

        let dollarElement = 0.21;


        result = (ammountElement.value * dollarElement);
    }

    else if (euroElement.checked === true) {

        let euroElement = 0.21;

        result = (ammountElement.value * euroElement);
    }

    else if (poundElement.checked === true) {

        let poundElement = 0.18;

        result = (ammountElement.value * poundElement);
    }

    resultElement.innerText = result;

})




