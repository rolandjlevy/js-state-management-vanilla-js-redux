export const element = (el) => document.querySelector(el);
export const elements = (el) => document.querySelectorAll(el);

export const create = (tagName, props = {}) => {
  const el = document.createElement(tagName);
  return Object.assign(el, props);
}
