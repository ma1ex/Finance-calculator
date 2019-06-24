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
    
    /**
     * Бюджет на один день
     */
    oneDayBudget: function() { 
        return ( (this.budget / 30 ).toFixed(2) );
    },

    /**
     * Введение данных обязательной статьи расходов.
     */
    chooseExpenses: function() {
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
    },

    /**
     * С этой функции начинается опрос пользователя, расчет дневного бюджета и 
     * наполнение данными основного объекта.
     */
    detectDayBudget: function() {
        let moneyInMonth = +prompt("Ваш бюджет на месяц?", '');
        while (isNaN(moneyInMonth) || moneyInMonth == '' || moneyInMonth == null) {
            moneyInMonth = +prompt("Ваш бюджет на месяц?", '');        
        }
        appData.budget = moneyInMonth;
        console.log("TCL: start -> appData.budget", appData.budget);
        
        let time = prompt("Введите дату в формате YYYY-MM-DD", '');
        appData.timeData = time;
        console.log("TCL: start -> appData.timeData", appData.timeData);

        alert("Ваш бюджет на один день: " + appData.oneDayBudget() + ' рублей.');
    },

    /**
     * Расчет уровня достатка
     */
    detectLevel: function() {
        if (appData.oneDayBudget < 100) {
            console.log("У Вас минимальный уровень достатка...");
        } else if (appData.oneDayBudget > 100 && appData.oneDayBudget < 700) {
            console.log("У Вас средний уровень достатка.");
        } else if (appData.oneDayBudget > 700) {
            console.log("У Вас высокий уровень достатка!");
        } else {
            console.log("Произошла непредвиденная ошибка!", '');
        }
    },

    /**
     * Определение наличия депозита.
     */
    checkSavings: function() {
        let save = confirm("Есть ли у вас вклад?");
        appData.savings = save;
        console.log("TCL: checkSavings -> save", save);
        if (save == true) {
            let deposit = +prompt("Какова сумма вклада?", ''),
                percent = +prompt("Под какой процент?", '');
            appData.monthIncome = (deposit / 100 / 12 + percent).toFixed(2);
            alert("Ежемесячный доход с вашего депозита: " + appData.monthIncome);
        }
    },

    /**
     * Определения статьи необязательных расходов.
     */
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let question = prompt("Введите наименование статьи необязательных расходов:", '');
            appData.optionalExpenses[i] = question;
        }
        console.dir("TCL: chooseOptExpenses -> appData.optionalExpenses", appData.optionalExpenses);
    },

    /**
     * Заполнение массива с перечислениями пользы дополнительного дохода
     */
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        while(true) {
            if (typeof(items) === 'string' && typeof(items) != null && items != '' ) {
                appData.income = items.split(', ');
                
                let addItems = prompt('Может что-то еще?', '');
                if (typeof(addItems) === 'string' && typeof(addItems) != null && addItems != '') {
                    appData.income.push(addItems);
                }
                
                appData.income.sort();
                console.dir("TCL: appData.chooseIncome()", appData.income);
                break;
            } else {
                items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            }
        }

        // Дополнительные способы заработка
        let addIncome = prompt('Перечислите через запятую способы дополнительного заработка:', '');
        let addIncomeArr = [];
        while(true) {
            if (typeof(addIncome) === 'string' && typeof(addIncome) != null && addIncome != '') {
                addIncomeArr = addIncome.split(', ');
                break;
            } else {
                addIncome = prompt('Перечислите через запятую способы дополнительного заработка:', '');
            }
        }
        console.log('Способ дополнительного заработка:');
        addIncomeArr.forEach(function(item, i) {
            console.log(`  - [${i+1}]: ${item}`);
        });
    }
};

appData.detectDayBudget();
appData.chooseExpenses();
appData.chooseOptExpenses();
appData.detectLevel();
appData.checkSavings();
appData.chooseIncome();

// console.dir(appData);
console.log('Наша программа включает в себя данные:');
for(let i in appData) {
    console.log(`  |- ${i}`);
}