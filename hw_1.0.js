// Формат сдачи: ссылка на репозиторий.


// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)


const musicCollection = {
    alboms: [
        { title: "Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
        { title: "Abbey Road", artist: "The Beatles", year: "1969" },
        { title: "The Wall", artist: "Pink Floyd", year: "1979" }
    ],
    [Symbol.iterator]: function () {
        let index = 0;

        return {
            next: () => {
                if (index < this.alboms.length) {
                    return { value: this.alboms[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
};

for (const book of musicCollection) {
    console.log(book)
}





