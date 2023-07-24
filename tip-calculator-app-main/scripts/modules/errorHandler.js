const errorHandler = () => {
  const numberOfPeopleContainer = document.querySelector(
    ".number-of-people__input-container"
  );
  const numberOfPeopleInput = document.querySelector(
    ".number-of-people__input"
  );
  const numberOfPeopleErrorMessage = document.querySelector(
    ".number-of-people__error-message"
  );
  let numberOfPeople;

  numberOfPeopleInput.addEventListener("input", (e) => {
    numberOfPeople = e.target.value;
    numberOfPeopleErrorMessage.innerText = "";
    numberOfPeopleContainer.classList.remove("number-of-people__error-style");

    // Zero
    if (numberOfPeople === "0") {
      numberOfPeopleErrorMessage.innerText = "Can't be zero";
      numberOfPeopleContainer.classList.add("number-of-people__error-style");
    }
    // Negative
    else if (Number(numberOfPeople) < 0) {
      numberOfPeopleErrorMessage.innerText = "Can't be negative";
      numberOfPeopleContainer.classList.add("number-of-people__error-style");
    }
    // Fraction
    else if (Number(numberOfPeople) % 1 !== 0) {
      numberOfPeopleErrorMessage.innerText = "Can't be Fractional";
      numberOfPeopleContainer.classList.add("number-of-people__error-style");
    }
  });
};

export default errorHandler;
