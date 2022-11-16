"use strict";

{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    alert("Пошёл дождь. Возьмите зонт!");
  } else {
    alert("Дождя нет!");
  }
}

{
  const mathematics = +prompt("Введите оценку за математику.");
  const rusLang = +prompt("Введите оценку за русский язык.");
  const informatics = +prompt("Введите оценку за информатику.");
  const sum = mathematics + rusLang + informatics;

  if (sum >= 265) {
    alert("Поздравляю, вы поступили на бюджет!");
  } else {
    alert("У вас недостаточно баллов");
  }
}

{
  const money = +prompt("Введите нужную сумму.");

  if (money % 100 === 0) {
    console.log("Возьмите ваши деньги");
  } else {
    console.log("Введите сумму кратную 100");
  }
}
