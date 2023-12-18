// ❗ ЗАДАЧА #1

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// ТЕСТЫ

// ✅ Объявлена переменная highTemperatures
// ✅ Значение переменной highTemperatures это объект
// ✅ Объявлена переменная yesterday с помощью деструктуризации
// ✅ Значение переменной yesterday это число 28
// ✅ Объявлена переменная today с помощью деструктуризации
// ✅ Значение переменной today это число 26
// ✅ Объявлена переменная tomorrow с помощью деструктуризации
// ✅ Значение переменной tomorrow это число 33
// ✅ Объявлена переменная meanTemperature
// ✅ Значение переменной meanTemperature это число 29
// ✅ Используется синтаксис деструктуризации объекта highTemperatures


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(highTemperatures);
// console.log(meanTemperature);



// ❗ ЗАДАЧА #2

// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// ТЕСТЫ

// ✅ Объявлена переменная highTemperatures
// ✅ Значение переменной highTemperatures это объект
// ✅ Объявлена переменная highTemperatures
// ✅ Значение переменной highTemperatures это объект
// ✅ Объявлена переменная yesterday с помощью деструктуризации
// ✅ Значение переменной yesterday это число 28
// ✅ Объявлена переменная today с помощью деструктуризации
// ✅ Значение переменной today это число 26
// ✅ Объявлена переменная tomorrow с помощью деструктуризации
// ✅ Значение переменной tomorrow это число 33
// ✅ Объявлена переменная icon с помощью деструктуризации
// ✅ Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// ✅ Используется деструктуризация объекта


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(highTemperatures);
// console.log(meanTemperature);



// ❗ ЗАДАЧА #3

// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// ТЕСТЫ

// ✅ Объявлена переменная highTemperatures
// ✅ Значение переменной highTemperatures это объект
// ✅ Объявлена переменная highYesterday
// ✅ Значение переменной highYesterday это число 28
// ✅ Объявлена переменная highToday
// ✅ Значение переменной highToday это число 26
// ✅ Объявлена переменная highTomorrow
// ✅ Значение переменной highTomorrow это число 33
// ✅ Объявлена переменная highIcon
// ✅ Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// ✅ Используется деструктуризация объекта


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highTemperatures);
// console.log(meanTemperature);



// ❗ ЗАДАЧА #4

// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// ТЕСТЫ

// ✅ Объявлена переменная colors
// ✅ Значение переменной colors это массив
// ✅ Объявлена переменная hexColors
// ✅ Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// ✅ Объявлена переменная rgbColors
// ✅ Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// ✅ Для перебора массива используется цикл for...of
// ✅ В цикле for...of используется деструктуризация объекта


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(colors);
// console.log(hexColors);
// console.log(rgbColors);



// ❗ ЗАДАЧА #5

// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// ТЕСТЫ

// ✅ Объявлена переменная forecast
// ✅ Значение переменной forecast это объект
// ✅ Объявлена переменная highToday с помощью деструктуризации
// ✅ Значение переменной highToday это число 32
// ✅ Объявлена переменная lowToday с помощью деструктуризации
// ✅ Значение переменной lowToday это число 28
// ✅ Объявлена переменная todayIcon с помощью деструктуризации
// ✅ Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// ✅ Объявлена переменная highTomorrow с помощью деструктуризации
// ✅ Значение переменной highTomorrow это число 31
// ✅ Объявлена переменная lowTomorrow с помощью деструктуризации
// ✅ Значение переменной lowTomorrow это число 27
// ✅ Объявлена переменная tomorrowIcon с помощью деструктуризации
// ✅ Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// ✅ Используется синтаксис деструктуризации объекта highTemperatures


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;
// console.log(forecast);



// ❗ ЗАДАЧА #6

// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// ТЕСТЫ

// ✅ Объявлена функция calculateMeanTemperature(forecast)
// ✅ В теле функции используется деструктуризация объекта
// ✅ В теле функции объявлена переменная todayHigh с помощью деструктуризации
// ✅ В теле функции объявлена переменная todayLow с помощью деструктуризации
// ✅ В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
// ✅ В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
// ✅ Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
// ✅ Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37


// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));



// ❗ ЗАДАЧА #7

// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// ТЕСТЫ

// ✅ Объявлена переменная scores
// ✅ Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
// ✅ Объявлена переменная bestScore
// ✅ Значение переменной bestScore это число 93
// ✅ Объявлена переменная worstScore
// ✅ Значение переменной worstScore это число 17
// ✅ Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
// ✅ Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores


// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(scores);
// console.log(bestScore);
// console.log(worstScore);



// ❗ ЗАДАЧА #8

// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// ТЕСТЫ

// ✅ Объявлена переменная firstGroupScores
// ✅ Значение переменной firstGroupScores это массив [64, 42, 93]
// ✅ Объявлена переменная secondGroupScores
// ✅ Значение переменной secondGroupScores это массив [89, 14, 51, 26]
// ✅ Объявлена переменная thirdGroupScores
// ✅ Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
// ✅ Объявлена переменная allScores.
// ✅ Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// ✅ Объявлена переменная bestScore
// ✅ Значение переменной bestScore это число 97
// ✅ Объявлена переменная worstScore
// ✅ Значение переменной worstScore это число 14
// ✅ При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
// ✅ Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
// ✅ Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(firstGroupScores);
// console.log(secondGroupScores);
// console.log(thirdGroupScores);
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);



// ❗ ЗАДАЧА #9

// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// ТЕСТЫ

// ✅ Объявлена переменная defaultSettings
// ✅ Значение переменной defaultSettings это объект
// ✅ Объявлена переменная overrideSettings
// ✅ Значение переменной overrideSettings это объект
// ✅ Объявлена переменная finalSettings
// ✅ Значение переменной finalSettings это объект
// ✅ Значение свойства finalSettings.theme равно "light"
// ✅ Значение свойства finalSettings.public равно "false"
// ✅ Значение свойства finalSettings.withPassword равно "true"
// ✅ Значение свойства finalSettings.minNumberOfQuestions равно 10
// ✅ Значение свойства finalSettings.timePerQuestion равно 30
// ✅ При присваивании значения переменной finalSettings используется синтаксис ...


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
// };
// console.log(defaultSettings);
// console.log(overrideSettings);
// console.log(finalSettings);



// ❗ ЗАДАЧА #10

// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.

// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// ТЕСТЫ

// ✅ Объявлена функция makeTask(data)
// ✅ Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
// ✅ Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// ✅ Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// ✅ Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// ✅ Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//  const task = {
//     category: data.hasOwnProperty('category') ? data.category : category,
//     priority: data.hasOwnProperty('priority') ? data.priority : priority,
//     completed: completed,
//   };
//   if (data.hasOwnProperty('text')) {
//     task.text = data.text;
//   }
//   return task;
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));



// ❗ ЗАДАЧА #11

// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// ТЕСТЫ

// ✅ Объявлена функция add
// ✅ Функция add использует параметр args
// ✅ Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
// ✅ Вызов add(15, 27) возвращает 42
// ✅ Вызов add(12, 4, 11, 48) возвращает 75
// ✅ Вызов add(32, 6, 13, 19, 8) возвращает 78
// ✅ Вызов add(74, 11, 62, 46, 12, 36) возвращает 241


// function add(...args) {
//     return args.reduce((sum, current) => sum + current, 0);
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));



// ❗ ЗАДАЧА #12

// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

// ТЕСТЫ

// ✅ Объявлена функция addOverNum()
// ✅ Вызов addOverNum(50, 15, 27) возвращает 0
// ✅ Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
// ✅ Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
// ✅ Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218


// function addOverNum(threshold, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > threshold) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));



// ❗ ЗАДАЧА #13

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// ТЕСТЫ

// ✅ Объявлена функция findMatches()
// ✅ Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// ✅ Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// ✅ Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// ✅ Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []


// function findMatches(array, ...args) {
//   const matches = [];
// for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));



// ❗ ЗАДАЧА #14

// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

// ТЕСТЫ

// ✅ Объявлена переменная bookShelf
// ✅ Значение переменной bookShelf это объект
// ✅ Значение свойства bookShelf.getBooks это метод объекта
// ✅ Вызов метода bookShelf.getBooks() возвращает строку "Returning all books"
// ✅ Значение свойства bookShelf.addBook это метод объекта
// ✅ Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"
// ✅ Значение свойства bookShelf.removeBook это метод объекта
// ✅ Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"
// ✅ Значение свойства bookShelf.updateBook это метод объекта
// ✅ Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"


// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));



// ❗ ЗАДАЧА #15

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// ТЕСТЫ

// ✅ Объявлена переменная bookShelf
// ✅ Значение переменной bookShelf это объект
// ✅ Значение свойства bookShelf.updateBook это метод объекта
// ✅ После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// ✅ После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
// const bookIndex = this.books.indexOf(oldName);
// if (bookIndex !== -1) {
// this.books.splice(bookIndex, 1, newName);
//     }
//   },
// };
// console.log(bookShelf);



// ❗ ЗАДАЧА #16

// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// ТЕСТЫ

// ✅ Объявлена переменная atTheOldToad
// ✅ Значение переменной atTheOldToad это объект
// ✅ Значение свойства atTheOldToad.potions это массив []


// const atTheOldToad = {
// potions: []
// };
// console.log(atTheOldToad);



// ❗ ЗАДАЧА #17

// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// ТЕСТЫ

// ✅ Объявлена переменная atTheOldToad
// ✅ Значение переменной atTheOldToad это объект
// ✅ Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// ✅ Значение свойства atTheOldToad.getPotions это метод объекта
// ✅ Вызов метода atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad);



// ❗ ЗАДАЧА #18

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// ТЕСТЫ

// ✅ Объявлена переменная atTheOldToad
// ✅ Значение переменной atTheOldToad это объект
// ✅ Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// ✅ Значение свойства atTheOldToad.addPotion это метод объекта
// ✅ После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// ✅ После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
// this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad);



// ❗ ЗАДАЧА #19

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// ТЕСТЫ

// ✅ Объявлена переменная atTheOldToad
// ✅ Значение переменной atTheOldToad это объект
// ✅ Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// ✅ Значение свойства atTheOldToad.removePotion это метод объекта
// ✅ После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
// ✅ После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
// const index = this.potions.indexOf(potionName);
//     if (index > -1) {
//       this.potions.splice(index, 1);
//     }
//   },
// };
// console.log(atTheOldToad);



// ❗ ЗАДАЧА #20

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// ТЕСТЫ

// ✅ Объявлена переменная atTheOldToad
// ✅ Значение переменной atTheOldToad это объект
// ✅ Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// ✅ Значение свойства atTheOldToad.updatePotionName это метод объекта
// ✅ После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// ✅ После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
// const index = this.potions.indexOf(oldName);
//     if (index > -1) {
//       this.potions[index] = newName;
//     }
//   },
// };
// console.log(atTheOldToad);



// ❗ ЗАДАЧА #21

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// ТЕСТЫ

// ✅ Объявлена переменная atTheOldToad
// ✅ Значение переменной atTheOldToad это объект
// ✅ Значение свойства atTheOldToad.getPotions это метод объекта
// ✅ Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// ✅ Значение свойства atTheOldToad.addPotion это метод объекта.
// ✅ Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
// ✅ Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
// ✅ Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
// ✅ Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
// ✅ Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив potions не изменяется
// ✅ Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
// ✅ Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// ✅ Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку "Error! Potion Stone skin is already in your inventory!"
// ✅ Значение свойства atTheOldToad.removePotion это метод объекта
// ✅ Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// ✅ Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// ✅ Значение свойства atTheOldToad.updatePotionName это метод объекта
// ✅ Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// ✅ Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === potionName);
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.findIndex(potion => potion.name === oldName);
//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//     this.potions[potionIndex].name = newName;
//   },
// };
// console.log(atTheOldToad);