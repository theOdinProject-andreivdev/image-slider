import SliderImg from "./sliderImg";

export default class Slider {
  constructor(_element) {
    this.element = _element;
    this.images = [];
    this.element.style.display = "flex";
    this.element.style.flexDirection = "row";

    this.currentSlide = 0;

    this.currentTranslateMultiplier = 1;
  }

  addImgElement(img) {
    this.images.push(new SliderImg(img));
  }

  startSlideV2() {
    this.element.style.height = "100%";
    this.images.forEach((img) => {
      img.setVisible();
    });
    this.slide2Anim();
  }

  slide2Anim() {
    setTimeout(() => {
      this.element.style.transition = "transform 0.5s linear";
      this.element.style.transform =
        "translate(-" + 100 * this.currentTranslateMultiplier + "%, 0px)";
      if (this.currentTranslateMultiplier < this.images.length - 1)
        this.currentTranslateMultiplier++;
      else this.currentTranslateMultiplier = 1;
      this.slide2Anim();
    }, 5000);
  }

  startSlideV1() {
    this.images[this.currentSlide].slideInVisibleV1();
    setTimeout(() => {
      this.images[this.currentSlide].slideOutHiddenV1();

      setTimeout(() => {
        if (this.currentSlide < this.images.length - 1) this.currentSlide++;
        else this.currentSlide = 0;
        this.startSlideV1();
      }, 500);
    }, 5000);
  }
}
