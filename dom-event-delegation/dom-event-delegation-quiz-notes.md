# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  Used in order to implement event delegation

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Its possible because of the three phrases,
  Capture phase: Event starts at the root of the DOM hierarchy and propagates down the target element
  Target phase: Event reaches the target element
  Bubbling phase: Event bubbles up from the target element to root of DOM hierarchy

- What DOM element property tells you what type of element it is?
  tagName property returns the html tag

- What does the `element.closest()` method take as its argument and what does it return?
  It takes a single argument which is a selector string. It searches for the closest ancestory of the curent element that matches the specific selector and returns that ancestor element

- How can you remove an element from the DOM?
  You can use the remove() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  You can add the event listener on the common ancestor the the elements you cwant to listen for events on

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
