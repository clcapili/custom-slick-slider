// slick slider wrapper
let slickSliders = document.querySelectorAll('.slick-slider-wrapper');
if (slickSliders.length > 0) {
	for (let i = 0; i < slickSliders.length; i++) {
        if (!__.dom.closest(slickSliders[i], '.tab-pane')) {
            new Project.SlickSlider(slickSliders[i]);
        } else if (__.dom.closest(slickSliders[i], '.tab-pane.active')) {
            new Project.SlickSlider(slickSliders[i]);
        }
    }
}
