'use strict';

let moneyInMonth = prompt("Ваш бюджет на месяц?", '');
console.log("money: " + moneyInMonth);

let time = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log("time:" + time);

let appData = {
    budget: '',                       // Бюджет на месяц
    timeData: '',                     // Дата в формате YYYY-MM-DD
    expenses: {},                     // Объект с обязательными расходами
    optionalExpenses: {},             // Объект с необязательными расходами
    income : [],                      // Массив данных с доп. доходом
    savings: false,                   //
    get oneDayBudget() {              // Бюджет на один день
        // return Math.floor(this.budget / 30).toFixed(2);
        return ( parseFloat(this.budget) / 30 ).toFixed(2);
    }
};

appData.budget = moneyInMonth;
appData.timeData = time;
console.log(appData.budget + ', ' + appData.timeData);

for (let i = 0; i < 2; i++) {
    while(true) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
            
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && 
                a != '' && b != '' && a.length < 50 ) {
            console.log("Done!");
            appData.expenses[a] = b;
            break;
        } else {
            alert("Необходимо ввести обязательную статью расходов!");
        }
    }
}
console.log(appData.expenses);

alert("Ваш бюджет на один день: " + appData.oneDayBudget + ' рублей.');

if (appData.oneDayBudget < 100) {
    console.log("У Вас минимальный уровень достатка.");
} else if (appData.oneDayBudget > 100 && appData.oneDayBudget < 700) {
    console.log("У Вас сердний уровень достатка.");
} else if (appData.oneDayBudget > 700) {
    console.log("У Вас высокий уровень достатка.");
}

console.log(appData);