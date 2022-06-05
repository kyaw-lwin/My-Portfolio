//intro text
var i = 0;
var txt = "Hello, My name is Kyaw. I'm from Sheffield, UK. I just love building websites. I was an engineer who worked in semi-conductor manufacturing industries for 15 years. I realised that I am really passionate about web development when I started learning to become a web developer."
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}