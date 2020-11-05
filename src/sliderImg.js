export default class SliderImg {
  constructor(_element) {
    this.element = _element;
    this.setHidden();
  }

  setVisible() {
    this.element.style.display = "flex";
  }

  setHidden() {
    this.element.style.display = "none";
  }

  slideInVisible() {
    this.element.classList.remove("slideOut");
    this.element.classList.add("slideIn");
    this.setVisible();
  }

  slideOutHidden() {
    this.element.classList.remove("slideIn");
    this.element.classList.add("slideOut");
    setTimeout(() => {
      this.setHidden();
    }, 1000);
  }
}
