"use strict";
/// varijable
const mainSection = document.querySelector("main");
const secondarySection = document.querySelector(".new-side");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
const btn = document.querySelector("#btn");
const formMsg = document.querySelectorAll(".form-text");
const genders = document.querySelectorAll(".gender");
// poruke
const [
  firstNameMsg,
  secondNameMsg,
  genderMsg,
  emailMsg,
  passwordMsg,
  repeatPasswordMsg,
] = formMsg;
//
// Simboli brojevi i slova
const numbers = Array.from({ length: 10 }, (_, i) => i).map((val) =>
  String(val)
);
const symbols = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
]
  .join("")
  .toLowerCase()
  .split("");
//
/// Za oba imena
let users = [];
///////////////////////////////////////////////////////////// Greska
const forNames = function (nameParametar, numMsg, whichName) {
  const forNamesTextDangerFun = function () {
    numMsg.classList.add("text-danger");
  };
  const forNamesTextMessage = function (msg) {
    numMsg.textContent = msg;
  };
  const name = nameParametar.value.toLowerCase();
  if (!name) {
    forNamesTextMessage(`Please type your ${whichName} name `);
    forNamesTextDangerFun();
  } else if (name.length < 3 || name.length > 20) {
    forNamesTextMessage(
      `${whichName} name must be at least 3 characters long, or less than 20 characters!`
    );
    forNamesTextDangerFun();
  } else if (!name.split("").every((val) => alphabet.includes(val))) {
    forNamesTextMessage(`${whichName} name can only include letters!`);
    forNamesTextDangerFun();
  } else if (name.includes(" ")) {
    forNamesTextMessage(`${whichName} name can't include space!`);
    forNamesTextDangerFun();
  } else {
    forNamesTextMessage("Valid");
    numMsg.classList.remove("text-danger");
    numMsg.style.color = "green";
  }
};
//////////////////////////////////////////////////////////////////
// Za email
const forEmailTextDangerFun = function () {
  emailMsg.classList.add("text-danger");
};
const forEmailTextMessage = function (msg) {
  emailMsg.textContent = msg;
};
const forEmailAddress = function () {
  const emailValue = email.value.toLowerCase();
  const emailValueName = emailValue.split("@");
  const emailSplitByDot = emailValue.split(".");
  if (!emailValue) {
    forEmailTextMessage("Please input your email address");
    forEmailTextDangerFun();
  } else if (!emailValue.includes("@")) {
    forEmailTextMessage("Email must include @!");
    forEmailTextDangerFun();
  } else if (emailValue.includes(" ")) {
    forEmailTextMessage("Email must not include any spaces!");
    forEmailTextDangerFun();
  } else if (emailValueName[0].length < 3) {
    forEmailTextMessage(
      "Your initial email name need's to be atleast 3 characters long"
    );
    forEmailTextDangerFun();
  } else if (emailValueName[0].length > 20) {
    forEmailTextMessage(
      "Your initial email name need's to be less than 20 characters long"
    );
    forEmailTextDangerFun();
  } else if (!emailValue.includes(".")) {
    forEmailTextMessage("Email must include a dot!");
    forEmailTextDangerFun();
  } else if (emailSplitByDot[0].slice(-1) === "@") {
    forEmailTextMessage("Email must include an valid domain!");
    forEmailTextDangerFun();
  } else if (emailSplitByDot[1] === "") {
    forEmailTextMessage("Email must have an valid address");
    forEmailTextDangerFun();
  } else {
    forEmailTextMessage("Valid");
    emailMsg.classList.remove("text-danger");
    emailMsg.style.color = "green";
  }
};
/// For genders
const forGenderTextDangerFun = function () {
  genderMsg.classList.add("text-danger");
};
const forGenderTextMessage = function (msg) {
  genderMsg.textContent = msg;
};
const [maleGender, femaleGender, otherGender] = genders;
// main gender function
const forGenders = function () {
  if (maleGender.checked && femaleGender.checked && otherGender.checked) {
    forGenderTextDangerFun();
    forGenderTextMessage("You can select only one gender");
  } else if (maleGender.checked && femaleGender.checked) {
    forGenderTextDangerFun();
    forGenderTextMessage("You can select only one gender");
  } else if (maleGender.checked && otherGender.checked) {
    forGenderTextDangerFun();
    forGenderTextMessage("You can select only one gender");
  } else if (femaleGender.checked && otherGender.checked) {
    forGenderTextMessage("You can select only one gender");
    forGenderTextDangerFun();
  } else if (
    femaleGender.checked ||
    maleGender.checked ||
    otherGender.checked
  ) {
    forGenderTextMessage("Valid");
    genderMsg.classList.remove("text-danger");
    emailMsg.style.color = "green";
  } else {
    forGenderTextMessage("Please select your gender!");
    forGenderTextDangerFun();
  }
};

//// For password icon
const showPassword = document.querySelector(".show-password-icon-one ");
const hidePassword = document.querySelector(".hide-password-icon-one");
const showPassword2 = document.querySelector(".show-password-icon-two");
const hidePassword2 = document.querySelector(".hide-password-icon-two");
const passwordIconFun = function (parametar, show, hide) {
  if (parametar.value) {
    show.classList.remove("hide");
    show.addEventListener("click", function () {
      show.classList.add("hide");
      hide.classList.remove("hide");
      parametar.type = "text";
      hide.addEventListener("click", function () {
        hide.classList.add("hide");
        show.classList.remove("hide");
        parametar.type = "password";
      });
    });
  } else {
    show.classList.add("hide");
    hide.classList.add("hide");
  }
};
repeatPassword.addEventListener("input", function () {
  passwordIconFun(repeatPassword, showPassword2, hidePassword2);
});

password.addEventListener("input", function () {
  passwordIconFun(password, showPassword, hidePassword);
});
////
/// Za password
const forPasswordTextMessage = function (msg) {
  passwordMsg.textContent = msg;
};
const forPassword = function () {
  const passwordVal = password.value;
  if (!passwordVal) {
    forPasswordTextMessage("Please type your password");
  } else if (passwordVal.length < 7 || passwordVal.length > 20) {
    forPasswordTextMessage(
      "Password must be at least 7 characters long, or less than 20 characters!;"
    );
  } else if (!passwordVal.split("").some((val) => numbers.includes(val))) {
    forPasswordTextMessage("Password must include number");
  } else if (!passwordVal.split("").some((val) => symbols.includes(val))) {
    forPasswordTextMessage("Password must include a symbol");
  } else {
    passwordMsg.classList.remove("text-danger");
    password.style.color = "green";
    forPasswordTextMessage("Valid");
  }
};
/// For repeat password
const forRepeatPasswordTextMessage = function (msg) {
  repeatPasswordMsg.textContent = msg;
};
const forRepeatPassword = function () {
  const repeatPasswordVal = repeatPassword.value;
  if (!repeatPasswordVal) {
    forRepeatPasswordTextMessage("Please confirm your password");
  } else if (
    password.value !== repeatPasswordVal &&
    passwordMsg.textContent === "Valid"
  ) {
    forRepeatPasswordTextMessage("Passwords must match!");
  } else {
    if (passwordMsg.textContent === "Valid") {
      forRepeatPasswordTextMessage("Valid");
      repeatPasswordMsg.classList.remove("text-danger");
      repeatPassword.style.color = "green";
    }
  }
};

// /// main btn

btn.addEventListener("click", function (event) {
  event.preventDefault();
  forNames(firstName, firstNameMsg, "First");
  forNames(lastName, secondNameMsg, "Last");
  forEmailAddress();
  forGenders();
  forPassword();
  forRepeatPassword();
  //

  const checkForClass = function (argument) {
    return !argument.classList.contains("text-danger");
  };
  if (
    checkForClass(firstNameMsg) &&
    checkForClass(secondNameMsg) &&
    checkForClass(genderMsg) &&
    checkForClass(emailMsg) &&
    checkForClass(passwordMsg) &&
    checkForClass(repeatPasswordMsg)
  ) {
    genders.forEach((gender) => {
      if (gender.checked) {
        const genderVal = gender.id.split("-").at(0);
        users.push({
          firstName: firstName.value,
          lastName: lastName.value,
          gender: genderVal,
          email: email.value,
          password: password.value,
        });
      }
    });
      mainSection.remove();
      secondarySection.classList.remove("hide");
      //
      const firstUpper = firstName.value.at(0).toUpperCase();
      const restLower = firstName.value.slice(1).toLowerCase();
      const fullFirstName = (firstUpper + restLower).trim();
      const html = `
      <div id="final-text">
      <h1>${fullFirstName}, you have been successfully registrated.</h1>
      <h2 style="color:green;font-weight:bold">✓</h2>
      <button id="final-button">Ok</button>
      </div>
      `;
      //
      const time = setTimeout(() => {
        secondarySection.remove();
      }, 1000);
      clearTimeout(time);
      setTimeout(() => {
        document.querySelector("body").insertAdjacentHTML("afterbegin", html);
        document
          .getElementById("final-button")
          .addEventListener("click", function () {
            location.reload();
          });
      }, 2000);
    }
});
