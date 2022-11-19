"use strict";

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d >= 0) {
    if (d > 0) {
      arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
    } else {
      arr = [-b / (2 * a)];
    }
  } else {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let isParametersCorrect = true;
  let parameterNames = [
    "Процентная ставка",
    "Начальный взнос",
    "Общая стоимость",
  ];
  let parameterValues = [percent, contribution, amount];
  for (let i = 0; i < parameterValues.length; i++) {
    if (Number.isNaN(Number(parameterValues[i]))) {
      isParametersCorrect = false;
      totalAmount = `Параметр "${parameterNames[i]}" содержит неправильное значение "${parameterValues[i]}"`;
    }
  }
  if (isParametersCorrect) {
    let mortgageSum = amount - contribution;
    let endDate = new Date(date);
    let startDate = new Date();
    let mortgagePeriodInMonths =
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear());
    let monthlyPercent = percent / 12 / 100;
    let monthlyPayment =
      mortgageSum *
      (monthlyPercent +
        monthlyPercent /
          (Math.pow(1 + monthlyPercent, mortgagePeriodInMonths) - 1));
    totalAmount = Number((monthlyPayment * mortgagePeriodInMonths).toFixed(2));
  }

  return totalAmount;
}
