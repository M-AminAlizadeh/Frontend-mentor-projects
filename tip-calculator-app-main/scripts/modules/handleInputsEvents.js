const handleInputsEvents = () => {
  // Elements
  const billInput = document.querySelector('.bill__input');
  const numberOfPeopleInput = document.querySelector(
    '.number-of-people__input',
  );
  const selectTipInput = document.querySelector('.select-tip__input');
  const inputs = [billInput, selectTipInput, numberOfPeopleInput];

  inputs.forEach((input) => {
    input.addEventListener('click', (e) => {
      // Remove classes
      inputs.forEach((i) => {
        if (i === selectTipInput) {
          i.classList.remove('selected-input');
        } else {
          i.parentElement.classList.remove('selected-input');
        }
      });
      // Add a class
      if (e.target === selectTipInput) {
        e.target.classList.add('selected-input');
      } else {
        e.target.parentElement.classList.add('selected-input');
      }
    });
  });
};

export default handleInputsEvents;
