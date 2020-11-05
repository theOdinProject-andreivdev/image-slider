export default class SliderImg {
  constructor(_element) {
    this.element = _element;
    this.setHidden();
  }

  setVisible() {
    this.element.style.display = "flex";
    this.element.style.width = "100%";
  }

  setHidden() {
    this.element.style.display = "none";
  }

  slideInVisibleV1() {
    this.element.classList.remove("slideOut");
    this.element.classList.add("slideIn");
    this.setVisible();
  }

  slideOutHiddenV1() {
    this.element.classList.remove("slideIn");
    this.element.classList.add("slideOut");
    setTimeout(() => {
      this.setHidden();
    }, 500);
  }
}
