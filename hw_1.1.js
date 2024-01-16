// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


// Повара и их специализации
const chefsSpecialties = new Map([
    ['Виктор', 'Пицца'],
    ['Ольга', 'Суши'],
    ['Дмитрий', 'Десерты']
]);

// Блюда и их повара
const dishesAndChefs = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

// Заказы клиентов
const orders = new Map();

// Заказы клиента Алексея
const alexeysOrder = new Set([
    'Пицца "Пепперони"',
    'Тирамису'
]);
orders.set({ name: 'Алексей' }, alexeysOrder);

// Заказы клиента Марии
const mariasOrder = new Set([
    'Суши "Калифорния"',
    'Пицца "Маргарита"'
]);
orders.set({ name: 'Мария' }, mariasOrder);

// Заказы клиента Ирины
const irinasOrder = new Set(['Чизкейк']);
orders.set({ name: 'Ирина' }, irinasOrder);

// Вывод информации
console.log("Специализации поваров:", chefsSpecialties);
console.log("Блюда и их повара:", dishesAndChefs);
console.log("Заказы клиентов:", orders);



const mySet = new Set();

mySet.add('значение1'); // Добавление элемента
mySet.add('значение2');
mySet.add('значение1'); // Такое добавление не повлияет, так как 'значение1' уже есть в Set

console.log(mySet.has('значение2')); // Проверка наличия значения
console.log(mySet.size); // Вывод размера Set

mySet.delete('значение1'); // Удаление элемента

mySet.forEach(value => console.log(value)); // Итерация по элементам Set







