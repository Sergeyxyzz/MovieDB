/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
const deleteAdd = document.querySelectorAll('.delete')
deleteAdd.forEach(it => {
    it.remove()
})

// 2
const promo__genre = document.querySelector('.promo__genre')
promo__genre.textContent = 'ДРАМА'

// 3
const promo__bg = document.querySelector('.promo__bg')
promo__bg.style.cssText = `background: url('img/bg.jpg'); background-size: cover`

// 4 & 5
const list = document.querySelector('.promo__interactive-list')
const films = document.querySelectorAll('.promo__interactive-item')

films.forEach(it => {
    it.remove()
})

movieDB.movies.sort()

movieDB.movies.forEach((it,i) => {
    const div = document.createElement('div')
    div.innerHTML = `${++i} ${it}`
    list.append(div)
    div.classList.add('promo__interactive-item')
})






