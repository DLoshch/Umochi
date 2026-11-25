const offerWrapper = document.getElementById("offers-wrapper")
const offerScroller = document.getElementById("offers-scroller")
const quickFlickMinDistance = 10;
const quickFlickMaxDuration = 350;

let startX;
let initialScrollLeft;
let dragStartTime;
let dragStartSlideIndex;
let isDown = false;
const offerSlides = offerWrapper.querySelectorAll(".slide");

function updateSlideSidePadding() {
  if (offerSlides.length === 0) return;

  const sidePadding = Math.max(0, (offerWrapper.clientWidth - offerSlides[0].offsetWidth) / 2);
  offerScroller.style.paddingLeft = `${sidePadding}px`;
  offerScroller.style.paddingRight = `${sidePadding}px`;
}

updateSlideSidePadding();
window.addEventListener("resize", updateSlideSidePadding);

offerScroller.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  initialScrollLeft = offerWrapper.scrollLeft;
  dragStartTime = performance.now();
  dragStartSlideIndex = getClosestSlideIndex();
});

window.addEventListener("mouseup", (e) => {
  if (!isDown) return;

  isDown = false;
  if (offerSlides.length === 0) return;

  const dragDistance = startX - e.pageX;
  const dragDuration = performance.now() - dragStartTime;
  const targetIndex = Math.abs(dragDistance) >= quickFlickMinDistance
    && dragDuration <= quickFlickMaxDuration
    ? Math.max(0, Math.min(offerSlides.length - 1, dragStartSlideIndex + Math.sign(dragDistance)))
    : undefined;

  snapToClosestCard(targetIndex);
});

window.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  e.preventDefault();
  offerWrapper.scrollLeft = initialScrollLeft + startX - e.pageX;
});

function getClosestSlideIndex() {
  if (offerSlides.length === 0) return;

  const wrapperRect = offerWrapper.getBoundingClientRect();
  const wrapperCenter = wrapperRect.left + offerWrapper.clientLeft + offerWrapper.clientWidth / 2;
  let closestIndex = 0;
  let closestDistance = Infinity;

  offerSlides.forEach((slide, index) => {
    const slideRect = slide.getBoundingClientRect();
    const slideCenter = slideRect.left + slideRect.width / 2;
    const distance = Math.abs(slideCenter - wrapperCenter);

    if (distance < closestDistance) {
      closestIndex = index;
      closestDistance = distance;
    }
  });

  return closestIndex;
}

function snapToClosestCard(slideIndex = getClosestSlideIndex()) {
  if (offerSlides.length === 0) return;

  const wrapperRect = offerWrapper.getBoundingClientRect();
  const wrapperCenter = wrapperRect.left + offerWrapper.clientLeft + offerWrapper.clientWidth / 2;
  const slideRect = offerSlides[slideIndex].getBoundingClientRect();
  const slideCenter = slideRect.left + slideRect.width / 2;

  const centerCorrection = slideCenter - wrapperCenter;

  offerWrapper.scrollTo({
    left: offerWrapper.scrollLeft + centerCorrection,
    behavior: 'smooth'
  });
}