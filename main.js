// When the user scrolls the page, execute toggleTopMenu
window.onscroll = function(){
    toggleTopMenu();
//    colorTopMenu();
};

// Get the menu bar
const menu = document.querySelector(".topMenu");

// Add the scrolled class to the menu when you start scrolling. Remove "scrolled" when you are at the top
function toggleTopMenu() {
  if (window.pageYOffset > 0) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
}

// Get the page sections

const downloads = document.querySelector("#downloads");
const features = document.querySelector("#features");
const contacts = document.querySelector("#contacts");

// Get the menu elements

const downloadsMenu =  document.querySelector('[scroll="#downloads"]');
const featuresMenu = document.querySelector('[scroll="#features"]');
const contactsMenu = document.querySelector('[scroll="#contacts"]');

/* // Add the scrolled class to the menu when you reach its scroll position. Remove "mygrey" and add "myyellow" when you leave the scroll position

function colorTopMenu() {
  if (window.pageYOffset > contacts.offsetTop) {
    downloadsMenu.classList.remove("myyellow");
    downloadsMenu.classList.add("mygrey");
    featuresMenu.classList.remove("myyellow");
    featuresMenu.classList.add("mygrey");
    contactsMenu.classList.remove("mygrey");
    contactsMenu.classList.add("myyellow");
  }
  else {
    contactsMenu.classList.remove("myyellow");
    contactsMenu.classList.add("mygrey");
    if (window.pageYOffset > features.offsetTop) {
      downloadsMenu.classList.remove("myyellow");
      downloadsMenu.classList.add("mygrey");
      featuresMenu.classList.remove("mygrey");
      featuresMenu.classList.add("myyellow");
    }
    else {
      featuresMenu.classList.remove("myyellow");
      featuresMenu.classList.add("mygrey");
      if (window.pageYOffset > downloads.offsetTop){
        downloadsMenu.classList.remove("mygrey");
        downloadsMenu.classList.add("myyellow");
      }
      else{
        downloadsMenu.classList.remove("myyellow");
        downloadsMenu.classList.add("mygrey");
      }
    }
  }
}

//Finds y value of given object

function findPos(obj) {
  let curtop = 0;
  if (obj.offsetParent) {
      do {
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
  return [curtop];
  }
}
 */
// Add event listener

[].forEach.call(document.getElementsByTagName("a"),function(el){
  el.addEventListener("click",function(event){
//    console.log(event.target.getAttribute("scroll"));
//    console.log(document.querySelector(`[scroll="${event.target.getAttribute("scroll")}"]`);
    console.log(document.querySelector(event.target.getAttribute("scroll")));
    document.querySelector(event.target.getAttribute("scroll")).scrollIntoView({behavior: "smooth"});
//    window.scroll(0,findPos(document.getElementById(event.target.scroll)));
  });
});

