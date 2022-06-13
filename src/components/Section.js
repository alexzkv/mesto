export default class Section {
  _renderedItems
  _renderer
  _container

  constructor({ cards, renderer }, containerSelector) {
    this._renderedItems = cards;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems = (items) => {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem = (element) => {
    this._container.prepend(element);
  }
}

