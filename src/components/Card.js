export class Card {
  #templateSelector;
  #title;
  #image;
  #price;
  #is_new;

  #listElement;
  #cardElement;
  #imageElement;
  #titleElement;
  #priceElement;

  constructor(templateSelector, { title, image, price, is_new }) {
    this.#templateSelector = templateSelector;
    this.#title = title;
    this.#image = image;
    this.#price = price;
    this.#is_new = is_new;

    this.#listElement = this.#getElement();
    this.#imageElement = this.#listElement.querySelector('.card__image');
    this.#titleElement = this.#listElement.querySelector('.t754__title');
    this.#priceElement = this.#listElement.querySelector('.t754__price-value');
  }

  #getElement() {
    return document
      .querySelector(this.#templateSelector)
      .content.children[0].cloneNode(true);
  }

  generate() {
    this.#imageElement.src = this.#image;
    this.#imageElement.alt = this.#title;
    this.#titleElement.textContent = this.#title;
    this.#priceElement.textContent = `$${this.#price}`;

    return this.#listElement;
  }
}
