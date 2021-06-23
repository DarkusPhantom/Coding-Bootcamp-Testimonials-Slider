("use strict");

const cardData = [
  {
    name: "Tanya Sinclair",
    jobTitle: "UX Engineer",
    text:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    photo: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    jobTitle: "Junior Front-end Developer",
    text:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    photo: "./images/image-john.jpg",
  },
];

const btnSlider = document.querySelector("#slider__btn");
let counter = 1;

btnSlider.addEventListener("click", (event) => {
  const btn = event.target.className;

  const prevProfile = () => {
    if (counter > 0) {
      const cardName = document.querySelector("#card__name");
      const cardJobTitle = document.querySelector("#card__jobTitle");
      const cardText = document.querySelector("#card__text");
      const cardImg = document.querySelector("#card__img img");

      cardName.innerText = cardData[counter].name;
      cardJobTitle.innerText = cardData[counter].jobTitle;
      cardText.innerText = cardData[counter].text;
      cardImg.setAttribute("src", cardData[counter].photo);

      counter = counter - 1;
    }
  };

  const nextProfile = () => {
    const lenghtMax = cardData.length - 1;

    if (counter < lenghtMax) {
      const cardName = document.querySelector("#card__name");
      const cardJobTitle = document.querySelector("#card__jobTitle");
      const cardText = document.querySelector("#card__text");
      const cardImg = document.querySelector("#card__img img");

      cardName.innerText = cardData[counter].name;
      cardJobTitle.innerText = cardData[counter].jobTitle;
      cardText.innerText = cardData[counter].text;
      cardImg.setAttribute("src", cardData[counter].photo);

      counter = counter + 1;
    }
  };

  if (btn.includes("btn__left")) {
    prevProfile();
  } else if (btn.includes("btn__right")) {
    nextProfile();
  }
});
