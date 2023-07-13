const celsiusInput = document.getElementById('celsius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');

celsiusInput.addEventListener('input', () => {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
});

fahrenheitInput.addEventListener('input', () => {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
  celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
});
