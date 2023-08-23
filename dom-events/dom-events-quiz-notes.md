# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  It's a good practice for debugging and seeing your temporary outputs. You can also track errors and code execution flow

- What is the purpose of events and event handling?
  They enable the webpage to respond to user actions and event handling refers to the process of how the code reponds to the events

- Are all possible parameters required to use a JavaScript method or function?
  No, functions can have required or optional parameters

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener(eventType, callbackFunction)

- What is a callback function?
  A function that is passed as an argument into another function

- What object is passed into an event listener callback when the event fires?
  An event object is passed into the callback function as a argument

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

It refers to the HTML element on which event was triggered. You can test it using console.log

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

When you click the element, the handleClick function will execute.

For handleClick(), this function will be executed immediately.

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
