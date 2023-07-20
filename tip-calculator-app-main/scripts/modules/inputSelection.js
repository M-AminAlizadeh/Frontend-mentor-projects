const inputSelection = () => {
  // Elements
  const billInput = document.querySelector(".bill__input");
  const numberOfPeopleInput = document.querySelector(
    ".number-of-people__input"
  );
  const selectTipInput = document.querySelector(".select-tip__input");
  const inputs = [billInput, selectTipInput, numberOfPeopleInput];

  inputs.forEach((input) => {
    input.addEventListener("click", (e) => {
      // Remove classes
      inputs.forEach((i) => {
        i === selectTipInput
          ? i.classList.remove("selected-input")
          : i.parentElement.classList.remove("selected-input");
      });
      // Add a class
      e.target === selectTipInput
        ? e.target.classList.add("selected-input")
        : e.target.parentElement.classList.add("selected-input");
    });
  });
};

export default inputSelection;
