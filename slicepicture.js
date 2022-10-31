const items = document.querySelectorAll('img')
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previonItem = document.querySelector('.previon');
let count = 0;


function showNextItem() {
    items[count].classList.remove('active');
           if (count < itemCount -1) {
               count++;
           } else {
               count = 0;
           }
     items[count].classList.add('active');
}

function showPrevionItem() {
    items[count].classList.remove('active');
           if (count > 0) {
               count--;
           } else {
               count = itemCount - 1;
           }
     items[count].classList.add('active');
}

function keyPress(w) {
 w = w || window.event;
   if (w.keyCode == '37') {
   showPrevionItem();
 }  else if (w.keyCode == '39') {
    showNextItem();
    }
 }


nextItem.addEventListener('click' , showNextItem);
previonItem.addEventListener('click' , showPrevionItem);
document.addEventListener('keydown' , keyPress);