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
    this.setupSelectors();
    this.slide2Anim();
  }

  setupSelectors() {
    let selectorContainer = document.createElement("div");
    selectorContainer.style.display = "flex";
    selectorContainer.style.flexDirection = "row";
    selectorContainer.style.width = "100%";
    selectorContainer.style.justifyContent = "center";

    for (let i = 0; i < this.images.length; i++) {
      let selector = document.createElement("div");
      selector.textContent = "o";
      selector.style.color = "black";
      selector.style.padding = "5px";
      selector.style.fontSize = "24px";
      selector.dataset.id = i;
      selector.addEventListener(
        "click",
        function (e) {
          this.currentTranslateMultiplier = e.target.dataset.id;
          this.translateAnim();
        }.bind(this)
      );

      selectorContainer.appendChild(selector);
    }

    this.element.parentElement.parentElement.appendChild(selectorContainer);
  }

  slide2Anim() {
    setTimeout(() => {
      this.translateAnim();
      this.slide2Anim();
    }, 5000);
  }

  translateAnim() {
    this.element.style.transition = "transform 0.5s linear";
    this.element.style.transform =
      "translate(-" + 100 * this.currentTranslateMultiplier + "%, 0px)";
    if (this.currentTranslateMultiplier < this.images.length - 1)
      this.currentTranslateMultiplier++;
    else this.currentTranslateMultiplier = 1;
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
