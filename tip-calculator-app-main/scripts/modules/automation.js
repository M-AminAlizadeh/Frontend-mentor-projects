const automation = () => {
  const billInput = document.querySelector(".bill__input");
  const numberOfPeopleInput = document.querySelector(
    ".number-of-people__input"
  );
  const selectTipBtns = document.querySelectorAll(".select-tip__btn");
  const selectTipInput = document.querySelector(".select-tip__input");
  const tipAmountPerPerson = document.querySelector(
    ".show-screen__tip-amount__value"
  );
  const totalPerPerson = document.querySelector(".show-screen__total__value");
  const resetBtn = document.querySelector(".show-screen__reset-btn");
  let billValue = 0;
  let tipValue = 0;
  let numberOfPeople = 0;

  // Collect info from user
  billInput.addEventListener("input", (e) => {
    billValue = Number(e.target.value);
    resetBtn.classList.remove("clicked-reset-btn");
  });

  selectTipBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      tipValue = Number(e.target.value);
      resetBtn.classList.remove("clicked-reset-btn");
      // clear selectTip input
      selectTipInput.value = "";
    });
  });

  selectTipInput.addEventListener("input", (e) => {
    // change style of btns
    selectTipBtns.forEach((btn) => {
      btn.classList.remove("clicked-btn");
    });
    tipValue = Number(e.target.value);
  });

  numberOfPeopleInput.addEventListener("input", (e) => {
    numberOfPeople = Number(e.target.value);
    resetBtn.classList.remove("clicked-reset-btn");
  });

  // Calculate & display results
  document.addEventListener("click", () => {
    if (billValue && numberOfPeople) {
      tipAmountPerPerson.innerText = (
        (billValue * (tipValue / 100)) /
        numberOfPeople
      ).toFixed(2);
      totalPerPerson.innerText = (
        (billValue + billValue * (tipValue / 100)) /
        numberOfPeople
      ).toFixed(2);
    }
  });

  // Reset btn functionality
  resetBtn.addEventListener("click", (e) => {
    e.target.classList.add("clicked-reset-btn");
    billInput.value = "";
    selectTipInput.value = "";

    selectTipBtns.forEach((btn) => {
      btn.classList.remove("clicked-btn");
    });

    numberOfPeopleInput.value = "";
    tipAmountPerPerson.innerText = "$0.00";
    totalPerPerson.innerText = "$0.00";
    billValue = 0;
    tipValue = 0;
    numberOfPeople = 0;
  });
};

export default automation;
