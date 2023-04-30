//Свойство items — это массив данных, 
//которые нужно добавить на страницу при инициализации класса. 
//
export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}