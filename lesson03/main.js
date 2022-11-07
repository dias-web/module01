"use strict";

{
  const productName = "Samsung Galaxy S10";
  const amount = 7;
  const category = "smartphones";
  const price = 50000;

  let sum = amount * price;

  console.log(productName);
  console.log(sum);
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

  console.log(typeof productName);
  console.log(typeof amount);
  console.log(typeof category);
  console.log(typeof price);

  console.log(
    "На складе " +
      amount +
      " единицы товара " +
      productName +
      " на сумму " +
      amount * price +
      " деревянных"
  );
}
