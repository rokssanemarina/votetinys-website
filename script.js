const dialog = document.querySelector('#info');
document.querySelectorAll('[data-topic]').forEach(button => {
  button.addEventListener('click', () => {
    dialog.querySelector('h2').textContent = button.dataset.topic;
    dialog.showModal();
  });
});
dialog.querySelectorAll('button').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
