let inputTel = document.querySelectorAll("input[type=tel]");
let modal = document.querySelector(".modal");
let formMask = document.querySelector(".form--mask");

let im = new Inputmask("+7 999 999 99 99");
im.mask(inputTel);

new JustValidate('.form', {
  rules: {
    company: {
      required: true,
      minLength: 2
    },
    inn: {
      required: true,
      minLength: 8
    },
    sum: {
      required: true,
      minLength: 5
    },
    tel: {
      required: true
    },
  },
  messages: {
    company: {
      required: 'Вам необходимо ввести название компании',
      minLength: 'Минимум 2 символа'
    },
    inn: {
      required: 'Вам необходимо ввести ИНН компании',
      minLength: 'Минимум 8 символов'
    },
    sum: {
      required: 'Вам необходимо указать сумму кредита',
      minLength: 'Минимум 10 000'
    },
    tel: {
      required: 'Введите номер в указанном формате'
    }
  },

  submitHandler: function (form) {
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.open("POST", 'mail.php', true);

    xhr.addEventListener("load", function () {
      if (xhr.readyState === 4) {
        switch (xhr.status) {
          case 200:
            console.log("YES");
            form.reset();
            successForm();
            break;
          case 404:
            console.log("NO");
            break;
          default:
            console.log("ERROR");
            break;
        };
      };
    });
    xhr.send(formData);
  },
});

new JustValidate('.feedback__form', {
  rules: {
    company: {
      required: true,
      minLength: 2
    },
    inn: {
      required: true,
      minLength: 8
    },
    sum: {
      required: true,
      minLength: 5
    },
    tel: {
      required: true
    },
  },
  messages: {
    company: {
      required: 'Вам необходимо ввести название компании',
      minLength: 'Минимум 2 символа'
    },
    inn: {
      required: 'Вам необходимо ввести ИНН компании',
      minLength: 'Минимум 8 символов'
    },
    sum: {
      required: 'Вам необходимо указать сумму кредита',
      minLength: 'Минимум 10 000'
    },
    tel: {
      required: 'Введите номер в указанном формате'
    }
  },

  submitHandler: function (form) {
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.open("POST", 'mail.php', true);

    xhr.addEventListener("load", function () {
      if (xhr.readyState === 4) {
        switch (xhr.status) {
          case 200:
            console.log("YES");
            form.reset();
            successForm();
            break;
          case 404:
            console.log("NO");
            break;
          default:
            console.log("ERROR");
            break;
        };
      };
    });
    xhr.send(formData);
  },
});

function successForm() {
  modal.classList.add("success");
  formMask.classList.add("active");
  setInterval(() => {
    modal.classList.remove("success");
    formMask.classList.remove("active");
  }, 2500);
}