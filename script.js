const OlliButton = document.getElementById('Ollie');
const output = document.getElementById('output');

OlliButton.addEventListener('Click', function(event) {
    const ClickTYpe = event.button === 0 ? "Left Click" :
      event.button === 1 ? "Middle Click" :
      event.button === 2 ? "Right Click" : 'Unknown-Click';

  const displayMessage = 'Type: ${ClickType}, coordinates {${event.clientX}, ${event.clientY}}';

  output.textContent = displayMessage;

  console.log('A click occurred:', event);
});
