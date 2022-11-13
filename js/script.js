{
    const Przywitanie = () => {
        console.log("Hello World!")
    };

    const onClickReset = () => {
        const resultElement = document.querySelector(".js-result");
        result = (" 0");
        resultElement.innerText = result;
    }

    const getRate = () => {
        const dollarElement = document.querySelector(".js-dollar");
        const euroElement = document.querySelector(".js-euro");
        const poundElement = document.querySelector(".js-pound");
        const resultElement = document.querySelector(".js-result");

        if (dollarElement.checked === true) {
            return 0.21;
        }
        else if (euroElement.checked === true) {
            return 0.22;
        }
        else if (poundElement.checked === true) {
            return 0.18;
        }



    }

    const onSubmitElement = (event) => {
        event.preventDefault();
        const resultElement = document.querySelector(".js-result");
        const ammountElement = document.querySelector(".js-ammount")
        const rate = getRate();

        if (rate > 0) {

            resultElement.innerText = (+ammountElement.value * rate);
        }
        else {
            resultElement.innerText = (" Wybierz walutę.");
        }
    }

    const Init = () => {
        const formElement = document.querySelector(".js-form");
        const buttonElement = document.querySelector(".js-fieldset__button");
        formElement.addEventListener("submit", onSubmitElement);
        buttonElement.addEventListener("click", onClickReset);
    }

    Przywitanie();
    Init();

}