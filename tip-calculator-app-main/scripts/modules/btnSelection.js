const btnSelection = () => {
  const selectTipBtns = document.querySelectorAll('.select-tip__btn');
  // Events for buttons
  selectTipBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // remove the class from all of the buttons
      selectTipBtns.forEach((b) => {
        b.classList.remove('clicked-btn');
      });
      // add the class to a button
      e.target.classList.add('clicked-btn');
    });
  });
};

export default btnSelection;
