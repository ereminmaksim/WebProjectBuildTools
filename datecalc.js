import { formatError } from './common.js';
import { diffDates, diffToHtml} from './diffdates.js';



console.log('модуль из dateСal')

const dateCalcForm = document.getElementById('datecalc')//привязались к элементу
const dateCalcResult = document.getElementById('datecalc__result')// доступ к результату

dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';//Если положительный результат, то всё хорошо, и не видно элемента
    event.preventDefault()// нажатие кнопки без перезагрузки, ВАЖНО!!!!
    console.log('test')

    let {firstDAte, secondDAte} = event.target.elements;//target ссылается на кликнутый <input> элемент + Деструктуризация {a,b}
    // let {firstDAte: { value: firstDAte }, secondDAte: { value: secondDAte } }двойная Деструктуризация
    firstDAte = firstDAte.value// получили значения
    secondDAte = secondDAte.value// получили значения

    if(firstDAte && secondDAte){
        // console.log(diffDates(firstDAte, secondDAte));//проверка!!!
        // dateCalcResult.innerHTML = diffToHtml(diffDates(firstDAte, secondDAte))// первый вариант!!!
        /**
         * Как написать лаконично!!! ниже
         * @type {{}|*}
         */
        const result = diffDates(firstDAte, secondDAte);
        dateCalcResult.innerHTML = diffToHtml(result);

    }else {
        dateCalcResult.innerHTML =  formatError('Ошибка, один из полей даты не заполнен!!!')
        // console.log('ERROR')
    }


}

const left = document.querySelector(".left");
const container = document.querySelector(".wrapper");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});































