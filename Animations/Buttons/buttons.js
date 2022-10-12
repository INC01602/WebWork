
/* ################################## Implementation for Ripple Effect ########################################## */

//  References:
// https://codepen.io/hoehoe/pen/NjjwLg
// https://codepen.io/ApplePieGiraffe/pen/poExJJd

let oRippleButton = document.querySelector("#RippleButton1");
oRippleButton.addEventListener('click', createRippleEffect);

// Not using arrow function because no hoisting, need sequence to understand here
function createRippleEffect (oEvent) {
    let oButton = oEvent.target;

    //getting the boundaries of the client where the event occured
    let boundingBox = oButton.getBoundingClientRect();

    // oEvent.clientX,Y ---> gives us the exact coordinate of the event occurence
    // boundingBox.left ----> boundary of the element where event was triggered
    // x,yCordinateRipple ---> exact coordinate where the ripple emerges or click happened w.r.t the element (Button)
    let xCordinateRipple = oEvent.clientX - boundingBox.left;
    let yCordinateRipple = oEvent.clientY - boundingBox.top;

    // create a new element, add the exact co-ordinates for absolute posiitoning w.r.t parent element
    // rippleWaves is defined in css
    let oRipples = document.createElement('span');

    oRipples.classList.add('rippleWaves');
    oRipples.style.left = `${xCordinateRipple}px`;
    oRipples.style.top = `${yCordinateRipple}px`;

    // Add the ripples to the button
    oButton.appendChild(oRipples);

    // Remove them when the animation is done... Simple as that!!!
    oRipples.addEventListener('animationend', () => { oRipples.remove() });
}