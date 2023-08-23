# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  It's a good practice for debugging and seeing your temporary outputs. You can also track errors and code execution flow

- What is a "model"?
  The structure that represents a web page's content and layout. (Tree hierarchy of object)

- Which "document" is being referred to in the phrase Document Object Model?
  Document refers to the HTML document

- What is the word "object" referring to in the phrase Document Object Model?
  It refers to a specific element, attribute or component of the web page that can be accessed, manipulated and interacted

- What is a DOM Tree?
  Hierarchy representation of elements, attributes and text comment of a HTML doc

- Give two examples of `document` methods that retrieve a single element from the DOM.

1. document.querySelector(selector)
2. document.getElementById(id)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll('p')

- Why might you want to assign the return value of a DOM query to a variable?
  It helps with code readability and testings

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Helps with page rendering and faster performance

- What does `document.querySelector()` take as its argument and what does it return?
  It takes a CSS selector and returns the first element in the DOM that matches the selector

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes a CSS selector and returns a NodeList that contains all elements in the DOM that match the selector

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
