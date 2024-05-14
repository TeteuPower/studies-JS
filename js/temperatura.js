const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const conversionTypeSelect = document.getElementById('conversionType');

conversionTypeSelect.addEventListener('change', () => {
    const selectedType = conversionTypeSelect.value;
    if (selectedType === 'celsiusToFahrenheit') {
        celsiusInput.style.display = 'block';
        fahrenheitInput.style.display = 'none';
    } else {
        celsiusInput.style.display = 'none';
        fahrenheitInput.style.display = 'block';
    }
});

convertBtn.addEventListener('click', () => {
    const selectedType = conversionTypeSelect.value;
    let temperature, convertedTemperature;

    if (selectedType === 'celsiusToFahrenheit') {
        temperature = parseFloat(celsiusInput.value);
        if (isNaN(temperature)) {
            result.textContent = "Por favor, insira um valor válido em Celsius.";
            return;
        }
        convertedTemperature = (temperature * 9/5) + 32;
        result.textContent = `${temperature}°C equivalem a ${convertedTemperature.toFixed(2)}°F`;
    } else {
        temperature = parseFloat(fahrenheitInput.value);
        if (isNaN(temperature)) {
            result.textContent = "Por favor, insira um valor válido em Fahrenheit.";
            return;
        }
        convertedTemperature = (temperature - 32) * 5/9;
        result.textContent = `${temperature}°F equivalem a ${convertedTemperature.toFixed(2)}°C`;
    }
});
