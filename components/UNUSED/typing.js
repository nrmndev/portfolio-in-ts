function typingEffect(id, text) {
  const _id = document.getElementById(id);
  _id.textContent = "";
  var i = 0;

  if (text) {
    const words = text.split(" ");
    var timer = setInterval(function () {
      if (i < words.length) {
        _id.append(words[i] + " ");
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
  }
}
export default typingEffect;
