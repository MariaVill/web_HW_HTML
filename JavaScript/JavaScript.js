// Задание №2 Вычислить результат 158+2 и вывести значение выражения 
// в диалоговое окно.

// let sum =158 + 2
// alert(`158 + 2= ${sum}`)
// Задание №3 Передать строковый параметр в
//  диалоговое окно. Например, вывести «Привет,
// Алевтина!», где имя — это передаваемый параметр.
// let sum="Привет Машенька"
// alert (sum)
// Задание №4 Ввызвать диалоговое окно
// с заголовком «Как вас зовут?» и
//  подсказкой «Имя» в поле ввода.
// Затем вывести имя, которое ввели.
// let sum=prompt ("Введите ваше имя", "Имя")
// alert ("Привет, ${sum}")
// Задание №5 Написать функцию, выводящую
// в диалоговом окне текст и переменную.
// Например, «Привет, Алевтина».
//  Где «Алевтина» — это внешняя переменная.
// let name="Mary"
// alert ("Hi, ${name}")
// Задание №6 вывести на экран ****в
//  диалоговом окне текст с сообщением
// “Вы уверены?” и кнопками «ОК» , «Отмена».
// if (confirm("Вы уверены?")) { alert("Мы рады, что вы уверены") }
// else { alert("Жаль, что вы уверены") }

// Задание №7 перепишите код,
//  используя конструкцию switch-case, 
//  запрашивая возраст пользователя 
// через диалоговое окно.


//     let age=promt("Введите ваш возраст", "Возраст")
// switch (age){

//     case "18": {
//         alert('Вы совершеннолетний, все можно!'); break
//     } case "10": {
//         alert('Вам надо учить уроки!'); break;
//     } case "30": {
//         alert('Ложитесь спать, завтра на работу'); break;
//     } default: {
//         alert('Мы не знаем что Вам делать'); break;
//     }
// }

// Дополнительно. Создайте массив с элементами 
// 1, 2, 3. Выведите в диалоговом окне все данные
//  из массива.

// let array = [1, 2, 3];
// element = ` `;
// for (let i = 0; i < array.length; i++) {
//     element =(`${element} ${array[index]} `);
// }
// alert(`Наш массив ${element}`)

// Задача №1️ Создайте всплывающее окно, которое спрашивает 
// имя у пользователя и выводит его с помощью функции.
// Не просто использовуйте prompt или alert или confirm,
//  а создайте свою функцию, пример: "function Вашеимяфункциитут()" ‼️
// function name() {
//     let userName = prompt("Как вас зовут?", "Ваше имя")
//     alert(`Добрый день, ${userName}`)
// }
// name();

// Задача№2 Создайте всплывающее окно, которое спрашивает ввод любимого фильма и если ввод неверен,
// то программа отправляет запрос alert “Попробуйте ещё раз”. В функции должны быть минимум 2 условия.
//  Не просто использовуйте prompt или alert или confirm,
//  а создайте свою функцию, пример: "function Вашеимяфункциитут()"‼️
// function bestFilm() {
//     let film = prompt("Введите название фильма", "Фильм")
//     switch (film) {
//         case "терминатор": {
//             alert(`Здорово, мой тоже!`); break;
//         } default: {
//             alert(`Прости. Я не люблю этот фильм`); break;
//         }
//     }
// }
// bestFilm();

// Решение 2
// function bestFilm() {
//     let film = prompt("Введите название фильма", "Фильм")
//     if (film.toLowerCase()===`терминатор`) {
//         alert(`Здорово, мой тоже!`)
//     } else {
//         alert(`Прости. Я не люблю этот фильм`)
//     }
// }
// bestFilm();