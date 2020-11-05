import Slider from "./slider";

let mySlider = new Slider(document.querySelector(".slider"));

document.querySelectorAll(".slider > img").forEach((img) => {
  mySlider.addImgElement(img);
});

//mySlider.startSlideV1();

mySlider.startSlideV2();
