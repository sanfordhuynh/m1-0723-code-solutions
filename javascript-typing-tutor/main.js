// Find all <span> elements that are descendant of .phrase and store it as a NodeList
const spanElements = document.querySelectorAll('.phrase span');

// - Initialize the currentIndex to 0
// - Add the 'underline' class to the beginning index of the spanElement
// - Add a keydown event listener to the document
//  - When you press a 'key', get the current <span> element from the spanElements
//  - If there is a valid <span> element at the current index
//  - If the key pressed matches the content of the current<span> w/o any leading or trailing whitespace
//    - If that current<span> doesn't have the "correct" class
//      - Add the "correct" class to the currentSpan and remove the "incorrect" class
//    - Remove the "underline" from the current <span>
//    - Increment the index (To the next span)
//    - IF there's a next <span>
//      - Add an "underline" class to the current <span>
//    - Else if the current<span> doesn't have the correct class
//      - Add the "incorrect" class to the current<span>

//  - Add a 'click' event listener to the document
//  - When user clicks
//    - Reset the current Index
//    - For each <span> element in the NodeList spanElements
//    - Remove all the classes for the span
//  - Add the 'underline' class to the spanElement's current index

let currentIndex = 0;
let incorrectCount = 0;

document.addEventListener('keydown', (event) => {
  const currentSpan = spanElements[currentIndex];

  if (currentSpan) {
    if (event.key === currentSpan.textContent.trim()) {
      if (!currentSpan.classList.contains('correct')) {
        currentSpan.classList.add('correct');
        currentSpan.classList.remove('incorrect');
      }
      currentSpan.classList.remove('underline');
      currentIndex++;

      if (spanElements[currentIndex]) {
        spanElements[currentIndex].classList.add('underline');
      } else {
        const accuracy = (1 - incorrectCount / spanElements.length) * 100;
        const accuracyString =
          'Congrats, The phrase was typed correctly, your typing accuracy is ' +
          accuracy.toFixed(2) +
          '%';
        alert(accuracyString);
      }
    } else if (!currentSpan.classList.contains('correct')) {
      currentSpan.classList.add('incorrect');
      incorrectCount++;
    }
  }
});

document.addEventListener('click', () => {
  currentIndex = 0;
  incorrectCount = 0;
  spanElements.forEach((span) => {
    span.classList.remove('correct', 'incorrect', 'underline');
  });
  spanElements[currentIndex].classList.add('underline');
});
