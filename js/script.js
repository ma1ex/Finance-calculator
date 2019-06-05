/**
 * @app: Finance calculator 
 */

'use strict';

/**
 * Основной объект приложения
 */
let appData = {
    budget: '',                       // Бюджет на месяц
    timeData: '',                     // Дата в формате YYYY-MM-DD
    expenses: {},                     // Объект с обязательными расходами
    optionalExpenses: {},             // Объект с необязательными расходами
    income : [],                      // Массив данных с доп. доходом
    savings: false,                   // Есть ли депозиты?
    get oneDayBudget() {              // Бюджет на один день
        return ( (this.budget / 30 ).toFixed(2) );
    }
};

/**
 * С этой функции начинается опрос пользователя и наполнение данными основного 
 * объекта
 */
function start() {
    let moneyInMonth = +prompt("Ваш бюджет на месяц?", '');
    while (isNaN(moneyInMonth) || moneyInMonth == '' || moneyInMonth == null) {
        moneyInMonth = +prompt("Ваш бюджет на месяц?", '');        
    }
    appData.budget = moneyInMonth;
    console.log("TCL: start -> appData.budget", appData.budget);
    
    let time = prompt("Введите дату в формате YYYY-MM-DD", '');
    appData.timeData = time;
    console.log("TCL: start -> appData.timeData", appData.timeData);
}
start();

/**
 * Введение данных обязательной статьи расходов.
 */
function chooseExpenses() {
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
}
chooseExpenses();
console.log("TCL: appData.expenses", appData.expenses);

alert("Ваш бюджет на один день: " + appData.oneDayBudget + ' рублей.');

if (appData.oneDayBudget < 100) {
    console.log("У Вас минимальный уровень достатка...");
} else if (appData.oneDayBudget > 100 && appData.oneDayBudget < 700) {
    console.log("У Вас средний уровень достатка.");
} else if (appData.oneDayBudget > 700) {
    console.log("У Вас высокий уровень достатка!");
} else {
    console.log("Произошла непредвиденная ошибка!", '');
}

/**
 * Определение наличия депозита.
 */
function checkSavings() {
    let save = confirm("Есть ли у вас вклад?");
    appData.savings = save;
    console.log("TCL: checkSavings -> save", save);
    if (save == true) {
        let deposit = +prompt("Какова сумма вклада?", ''),
            percent = +prompt("Под какой процент?", '');
        appData.monthIncome = (deposit / 100 / 12 + percent).toFixed(2);
        alert("Ежемесячный доход с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

console.log(appData);