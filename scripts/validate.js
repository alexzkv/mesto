function enableValidation(config) {
  const formElement = document.querySelector(config.formSelector);
  const inputElement = formElement.querySelectorAll(config.inputSelector);
  inputElement.forEach((element) => {
    element.addEventListener('input', (evt) => handleFormInput(evt, formElement, config));
  })
  formElement.addEventListener('submit', (evt) => handleFormSubmit(evt, formElement));
  toggleBtn(formElement, config);
}

function handleFormSubmit(evt, formElement) {
  evt.preventDefault();
}

function handleFormInput(evt, formElement, config) {
  const input = evt.target;
  const errorNode = document.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    errorNode.textContent = '';
  } else {
    errorNode.textContent = input.validationMessage;
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
});
