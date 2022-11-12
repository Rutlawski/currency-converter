{
    const Przywitanie = () => {
        console.log("Hello World!")
    };

    const Init = () => {
        const formElement = document.querySelector(".js-form");
        const buttonElement = document.querySelector(".js-fieldset__button");
        formElement.addEventListener("submit", onSubmitElement);
        buttonElement.addEventListener("click", onClickReset);
    }

    const onClickReset = () => {
        const resultElement = document.querySelector(".js-result");
        result = ("0");
        resultElement.innerText = result;
    }

    const onSubmitElement = (event) => {
        event.preventDefault();
        const dollarElement = document.querySelector(".js-dollar");
        const euroElement = document.querySelector(".js-euro");
        const poundElement = document.querySelector(".js-pound");
        const resultElement = document.querySelector(".js-result");
        const ammountElement = document.querySelector(".js-ammount");
        if (dollarElement.checked === true) {
            const dollarElement = 0.21;
            result = (ammountElement.value * dollarElement);
        }
        else if (euroElement.checked === true) {
            const euroElement = 0.21;
            result = (ammountElement.value * euroElement);
        }
        else if (poundElement.checked === true) {
            const poundElement = 0.18;
            result = (ammountElement.value * poundElement);
        }
        resultElement.innerText = result;
    }

    Przywitanie();
    Init();

}