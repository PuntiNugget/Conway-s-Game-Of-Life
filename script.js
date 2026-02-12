let count = 0;

const ClickButton = document.getElementById('Ollie');
const clickDisplay = document.getElementByID('output');

ClickButton.addEventListener('Click', function(){
  count++;

  clickDisplay.textcontent = "Tricks: ${count}";
});
