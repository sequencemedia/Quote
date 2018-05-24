export function isVisible (element) {
  return !!(
    element && !(window.getComputedStyle(element)
      .getPropertyValue('display') === 'none')
  );
}

export function getVisible (elements) {
  return Array.from(elements)
    .find(isVisible) || null;
}
