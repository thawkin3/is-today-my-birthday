(function () {
  const resultContainer = document.querySelector('#result');
  const birthdayForm = document.querySelector('#birthdayForm');
  const retryButton = document.querySelector('#retry');

  const submitBirthdayForm = (e) => {
    e.preventDefault();

    const birthday = e.target.birthday.value;
    const today = e.target.today.value;

    if (!birthday || !today) {
      return;
    }

    fetch(`istodaymybirthday?birthday=${birthday}&today=${today}`)
      .then((response) => response.json())
      .then((response) => {
        resultContainer.textContent = response.data ? 'Yes' : 'No';
        resultContainer.classList.remove('hidden');
        retryButton.classList.remove('hidden');
        birthdayForm.classList.add('hidden');
      })
      .catch(() => {
        resultContainer.textContent = `Error. We don't know if today is your birthday.`;
        resultContainer.classList.remove('hidden');
        retryButton.classList.remove('hidden');
        birthdayForm.classList.add('hidden');
      });
  };

  const handleRetryButtonClick = () => {
    resultContainer.classList.add('hidden');
    retryButton.classList.add('hidden');
    resultContainer.textContent = '';
    birthdayForm.classList.remove('hidden');
  };

  birthdayForm.addEventListener('submit', submitBirthdayForm);
  retryButton.addEventListener('click', handleRetryButtonClick);
})();
