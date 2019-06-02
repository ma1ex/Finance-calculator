'use strict';

let moneyInMonth = +prompt("Ваш бюджет на месяц?", '');
console.log("money: " + moneyInMonth);

let time = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log("time:" + time);

let appData = {
    budget: '',                       // Бюджет на месяц
    timeDate: '',                     // Дата в формате YYYY-MM-DD
    expenses: {},                     // Объект с обязательными расходами
    optionalExpenses: {},             // Объект с необязательными расходами
    income : [],                      // Массив данных с доп. доходом
    savings: false,                   //
    getOneDayBudget: function() {     // Бюджет на один день
        return Math.floor(this.budget / 30);
    }
};

appData.budget = moneyInMonth;
appData.timeDate = time;
console.log(appData.budget + ', ' + appData.timeData);

let costOfMonth = prompt("Введите обязательную статью расходов в этом месяце", '');
let costHowMuch = prompt("Во сколько обойдется?", '');
appData.expenses[costOfMonth] = costHowMuch;
console.log(appData.expenses);

alert("Ваш бюджет на один день: " + appData.getOneDayBudget() + ' рублей.');