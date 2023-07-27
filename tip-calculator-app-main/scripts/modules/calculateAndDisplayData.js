const calculateAndDisplayData = () => {
  const billInput = document.querySelector('.bill__input');
  const numberOfPeopleInput = document.querySelector(
    '.number-of-people__input',
  );
  const selectTipBtns = document.querySelectorAll('.select-tip__btn');
  const selectTipInput = document.querySelector('.select-tip__input');
  const tipAmountPerPerson = document.querySelector(
    '.show-screen__tip-amount__value',
  );
  const totalPerPerson = document.querySelector('.show-screen__total__value');
  const resetBtn = document.querySelector('.show-screen__reset-btn');
  const inputs = [billInput, selectTipInput, numberOfPeopleInput];
  let billValue = 0;
  let tipValue = 0;
  let numberOfPeople = 0;
  const numericChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    'Backspace',
    'ArrowRight',
    'ArrowLeft',
  ];

  // Collect info from user
  billInput.addEventListener('input', (e) => {
    billValue = Number(e.target.value);
    resetBtn.classList.remove('clicked-reset-btn');
  });

  billInput.addEventListener('keydown', (e) => {
    if (!numericChars.includes(e.key)) {
      e.preventDefault();
    }
  });

  selectTipBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      tipValue = Number(e.target.value);
      resetBtn.classList.remove('clicked-reset-btn');
      // clear selectTip input
      selectTipInput.value = '';
    });
  });

  selectTipInput.addEventListener('input', (e) => {
    // change style of btns
    selectTipBtns.forEach((btn) => {
      btn.classList.remove('clicked-btn');
    });
    tipValue = Number(e.target.value);
  });

  selectTipInput.addEventListener('keydown', (e) => {
    if (!numericChars.includes(e.key)) {
      e.preventDefault();
    }
  });

  numberOfPeopleInput.addEventListener('input', (e) => {
    numberOfPeople = Number(e.target.value);
    resetBtn.classList.remove('clicked-reset-btn');
  });

  numberOfPeopleInput.addEventListener('keydown', (e) => {
    if (!numericChars.includes(e.key)) {
      e.preventDefault();
    }
  });

  // Calculate & display results
  const calculate = () => {
    if (billValue && numberOfPeople && tipValue) {
      const tipPercentage = tipValue / 100;
      tipAmountPerPerson.innerText = (
        (billValue * tipPercentage)
        / numberOfPeople
      ).toFixed(2);
      totalPerPerson.innerText = (
        (billValue + billValue * tipPercentage)
        / numberOfPeople
      ).toFixed(2);
    }
  };

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      calculate();
    });
  });

  selectTipBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      calculate();
    });
  });

  // Reset btn functionality
  resetBtn.addEventListener('click', (e) => {
    e.target.classList.add('clicked-reset-btn');
    billInput.value = '';
    selectTipInput.value = '';

    selectTipBtns.forEach((btn) => {
      btn.classList.remove('clicked-btn');
    });

    numberOfPeopleInput.value = '';
    tipAmountPerPerson.innerText = '$0.00';
    totalPerPerson.innerText = '$0.00';
    billValue = 0;
    tipValue = 0;
    numberOfPeople = 0;
  });
};

export default calculateAndDisplayData;
