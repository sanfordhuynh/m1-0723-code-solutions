/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key) && !(key in target)) {
      target[key] = source[key];
    }
  }
}
