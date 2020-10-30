import './styles.css';

import debounce from 'lodash.debounce';
const formData = {};
const savedData = JSON.stringify(formData);


// const STORAGE_KEY = 'feedback-msg'

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form  textarea'),
};

populateTextarea();

// refs.textarea.addEventListener('input', debounce(onTextareaInput, 400));

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', debounce(e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  // Этот объект будем ложить в Local Storage
    formData[e.target.name] = e.target.value;
    localStorage.setItem(savedData);

  console.log(formData);
}), 400);

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(savedData);
  }

  /*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
// function onTextareaInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
//   }

  /*
   * - Получаем значение из хранилища
   * - Если там что-то было, обновляем DOM
   */
  function populateTextarea() {
    const savedMessage = localStorage.getItem(JSON.parse(savedData));

    if (savedMessage) {
        formData[e.target.name] = savedMessage.name;e.target.value = savedMessage.value;
    }
  }
