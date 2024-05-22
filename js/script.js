function openIframe(src) {
    document.getElementById('iframe').src = src;
    document.getElementById('iframe').style.display = 'block';
}
const activeElements = document.querySelectorAll('.active-on-click');

activeElements.forEach(element => {
  element.addEventListener('click', () => {
    activeElements.forEach(activeElement => {
      activeElement.classList.remove('.active-element');
    });
    element.classList.add('.active-element');
  });
});