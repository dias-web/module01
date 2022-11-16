"use strict";

{
  const productName = "Samsung Galaxy S10";
  const amount = 7;
  const category = "smartphones";
  const price = 50000;

  let sum = amount * price;
}

{
  const productName = "Apple Watch";
  const amount = 5;
  const category = "smartwatch";
  const price = 30000;
}

{
  const productName = prompt("Введите наименование товара.");
  const amount = +prompt("Введите количество товара.");
  const category = prompt("Введите категорию товара.");
  const price = +prompt("Введите цену товара.");

  if (parseInt(amount) >= 0 && parseInt(price) >= 0) {
    console.log(
      "На складе " +
        amount +
        " единицы товара " +
        productName +
        " на сумму " +
        amount * price +
        " деревянных"
    );
  } else {
    alert("Вы ввели некорректные данные");
  }
}
