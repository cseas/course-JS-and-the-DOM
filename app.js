// document.addEventListener('click', function () {
//     // console.log("You've clicked the document!");

//     const mainHeading = document.querySelector('h1');
//     mainHeading.style.backgroundColor = 'red';
// });

// document.body.addEventListener('keypress', function() {
//     console.log('Removing first child');
//     document.querySelector('#contain-all').firstElementChild.remove();
// });

// document.addEventListener('click', function (event) {
//     console.log(event);
// });


// const myCustomDiv = document.createElement('div');

// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }

// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener('click', respondToTheClick);


// Using Document Fragment instead of unneeded div element

// const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

// for (let i = 0; i < 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.innerText = 'This is paragraph number ' + i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); // reflow and repaint here -- once!