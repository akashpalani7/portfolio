function openIframe(src) {
    document.getElementById('iframe').style.display = 'none';
    document.getElementById('iframe2').style.display = 'none';
    document.getElementById('iframe3').style.display = 'none';

    if (src === 'About.html') {
        document.getElementById('iframe').style.display = 'block';
    } else if (src === 'resume.html') {
        document.getElementById('iframe2').style.display = 'block';
    } else if (src === 'projects.html') {
        document.getElementById('iframe3').style.display = 'block';
    }
}

const activeElements = document.querySelectorAll('.active-on-click');

activeElements.forEach(element => {
  element.addEventListener('click', () => {
    activeElements.forEach(activeElement => {
      activeElement.classList.remove('active-element');
    });
    element.classList.add('active-element');
  });
});