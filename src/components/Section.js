export class Section {
  #renderer;
  #container;

  constructor({ renderer }, containerSelector) {
    this.#renderer = renderer;
    this.#container = document.querySelector(containerSelector);
  }

  addItems(items) {
    this.#renderer(items);
  }

  addItem(item) {
    this.#container.append(item);
  }
}
