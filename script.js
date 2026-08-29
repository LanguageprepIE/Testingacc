document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('actionBtn');
  var msg = document.getElementById('message');
  if (btn && msg) {
    btn.addEventListener('click', function () {
      msg.textContent = 'It works!';
    });
  }
});
