//your JS code here. If required.
let element = document.getElementById("level");

let counter = 0;

while(element) {
    counter ++;
    if (element === document.documentElement) {
        break;
    }
    element = element.parentNode;
}
alert(`The level of the element is: ${levelCount}`);
