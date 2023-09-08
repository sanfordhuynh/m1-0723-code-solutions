# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  It is the DOM element that triggered an event

- What is the affect of setting an element to `display: none`?
  The element will be hidden from the page

- What does the `element.matches()` method take as an argument and what does it return?
  It takes a single argument, (the selector string) and returns a boolean value

- How can you retrieve the value of an element's attribute?
  You can use the getAttribute() method

- At what steps of the solution would it be helpful to log things to the console?
  At an event listener step to see if it's the event listener callback functionm is working as expected

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  You would need to add new event listeners on each new tab

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  You would need to add/remove the classList for each of the tabs and use an event listener for each tab

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
