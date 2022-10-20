// Animation Intro
const tl = gsap.timeline({
  defaults: {
    ease: "power1.out"
  }
});

tl.to(".intro_text", {
  y: "0%",
  duration: 1,
  stagger: 0.25
});
tl.to(".intro_slider", {
  y: "-100%",
  duration: 1.5,
  delay: 0.5
});
tl.to(".intro", {
  y: "-100%",
  duration: 1
}, "-=1");
tl.fromTo(".navbar", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1
});
tl.fromTo(".hero", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1
}, "-=1");
tl.fromTo(".choose_watch-section", {
  opacity: 0
}, {
  opacity: 1,
  duration: 1
}, "-=1");


//"Это не нужно"
//const menu = document.querySelector('#mobile_menu');
//const menuLinks = document.querySelector('.navbar_menu');
//const navLogo = document.querySelector('.navbar_logo');


// Active mobile menu

const mobileMenu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

// Change navbar color after scrolling

window.onscroll = () => {
  if (window.scrollY > 300) {
    $('.navbar').classList.add('.scrolled');
  } else {
    $('.navbar').classList.remove('.scrolled');
  }
};

// Animation choose watch

function imageSlider(anythink) {
  document.querySelector(".watchess").src = anythink;
}

// Animation color change around the watch
function changeCircleColor(color) {
  const circle = document.querySelector('.circle');
  circle.style.background = color;
}

// Filter to gallery

//selecting all required elements
const filterItem = document.querySelector(".navigation_items");
const filterImg = document.querySelectorAll(".gallery_images .image");
window.onload = () => { //after window loaded
  filterItem.onclick = (selectedItem) => { //if user click on filterItem div
    if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if ((filterImges == filterName) || (filterName == "all")) {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}
//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".image_preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

function preview(element) {
  //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = () => { //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}