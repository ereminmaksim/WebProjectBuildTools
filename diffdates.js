//взяли функцию из библиотеки LUXON для расчета промежутка даты//времени
import {DateTime} from './luxon.js';



export function diffDates(firstDAte, secondDAte) {
    firstDAte = DateTime.fromISO(firstDAte);//общедоступная статика fromISO
    secondDAte = DateTime.fromISO(secondDAte);//ПРИМЕР: DateTime.fromISO('2016-05-25T09:08:34.123')

    //public diff (otherDateTime: DateTime , unit: string | string [] , opts: Object ): Duration
    //разница между двумя DateTimes как Duration.

    /**
     * Условие, если вторая дата меньше первой, (для того что-бы программа не выводила отрицательные значения)
     */
    if (firstDAte>secondDAte){
        [firstDAte, secondDAte] = [secondDAte,firstDAte]// диструктеризация!!!
    }


    return secondDAte.diff(firstDAte, ['year', 'months', 'days']).toObject();//вытащили только объект с нужным ключ-значением!!!

}

export const diffToHtml = diff => `
            <span>
                ${diff.years ? 'Лет: ' + diff.years + ', ' : ' '}
                ${diff.months ? 'Месяцев: ' + diff.months + ', ' : ' '}
                ${diff.days ? 'Дней: ' + diff.days : ' '}
            </span>`
/**
 * Как сделал Я!!!:)))
 */
// Лет: ${diff.months},
// Месяцев: ${diff.months},
// Дней: ${diff.days}



























            
            
