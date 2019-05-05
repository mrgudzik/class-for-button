window.onload = function (e) {

  let content = document.getElementById('content');

  let button = new Button({
    text: 'Текст кнопи'
  });

  console.log(button);

  content.appendChild(button._element);

  window.button = button;

}

class Button {
  constructor({
    text,
    primary = false,
    accent = false,
    raised = false,
    compact = false,
    dense = false,
    disabled = false
  }) {
    this._element = null;
    this._text = text;
    this._primary = primary;
    this._accent = accent;
    this._raised = raised;
    this._compact = compact;
    this._dense = dense;
    this._disabled = disabled;

    this.init();
  }

  init() {
    this._element = document.createElement('button');
    this._element.className = 'mdc-button';
    this._element.textContent = this._text;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
    this._element.innerText = value;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = value;
    this._element.disabled = value;
  }

  get primary() {
    return this._primary;
  }
  set primary(value) {
    this.toggle('primary', value)
  }

  get accent() {
    return this._primary;
  }
  set accent(value) {
    this.toggle('accent', value)
  }

  get raised() {
    return this._primary;
  }
  set raised(value) {
    this.toggle('raised', value)
  }

  get compact() {
    return this._primary;
  }
  set compact(value) {
    this.toggle('compact', value)
  }

  get dense() {
    return this._primary;
  }
  set dense(value) {
    this.toggle('dense', value)
  }

  toggle(prop, value) {
    let className = `mdc-button--${prop}`;

    this[`_${prop}`] = value;

    if (this[`_${prop}`]) {
      this._element.classList.add(className);
    } else {
      this._element.classList.remove(className);
    }
  }

}