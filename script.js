function konversi() {
    const unit = document.getElementById("unit-select").value;
    const suhu = parseFloat(document.getElementById("celsius").value);
    
    let celsius, fahrenheit, kelvin, reamur;
    
    if (unit === "celsius") {
        celsius = suhu;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        reamur = celsius * 4/5;
    }
    else if (unit === "fahrenheit") {
        fahrenheit = suhu;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
        reamur = celsius * 4/5;
    }
    else if (unit === "kelvin") {
        kelvin = suhu;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        reamur = celsius * 4/5;
    }
    else if (unit === "reamur") {
        reamur = suhu;
        celsius = reamur * 5/4;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    }
    
    document.getElementById("celsius-text").textContent = celsius.toFixed(2);
    document.getElementById("fahrenheit-text").textContent = fahrenheit.toFixed(2);
    document.getElementById("kelvin-text").textContent = kelvin.toFixed(2);
    document.getElementById("reamur-text").textContent = reamur.toFixed(2);
}
