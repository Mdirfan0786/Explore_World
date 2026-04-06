function createElement(tag, text, className) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.classList.add(className);
  return el;
}

export default createElement;
