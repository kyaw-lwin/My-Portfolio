//intro text
var i = 0;
var txt = "Hello, My name is Kyaw. I'm from Sheffield, UK. I used to work in semi-conductor manufacturing industries as an engineer for 15 years.I started to learn coding in 2022 and I am enjoying it since then. If you are interested in me or hire me "
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}