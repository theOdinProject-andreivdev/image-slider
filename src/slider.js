import SliderImg from "./sliderImg";

export default class Slider {
  constructor(_element) {
    this.element = _element;
    this.images = [];
    this.element.style.display = "flex";
    this.element.style.flexDirection = "row";

    this.currentSlide = 0;
  }

  addImgElement(img) {
    this.images.push(new SliderImg(img));
  }

  startSlide() {
    this.images[this.currentSlide].slideInVisible();
    setTimeout(() => {
      this.images[this.currentSlide].slideOutHidden();

      setTimeout(() => {
        if (this.currentSlide < this.images.length - 1) this.currentSlide++;
        else this.currentSlide = 0;
        this.startSlide();
      }, 500);
    }, 5000);
  }
}
