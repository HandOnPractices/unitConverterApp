/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById('input-el');
let btnEl = document.getElementById('convertBtn');
let lengthResultEl = document.getElementById('lengthResultEl');
let volumeResultEl = document.getElementById('volumeResultEl');
let massResultEl = document.getElementById('massResultEl');
let feetResultEl = document.getElementById('feetResultEl');
let gallonResultEl = document.getElementById('gallonResultEl');
let poundResultEl = document.getElementById('poundResultEl');
let clearEl = document.getElementById('clear-btn');

function convertMeterToFeet(meter){
    return meter * 3.281;
}
function covertFeetToMeter(feet){
    return feet / 3.281;
}

function convertLiterToGallon(liter){
    return liter * 0.264;
}
function convertGallonToLiter(gallon){
    return gallon / 0.264;
}
function convertKilogramToPound(kilogram){
    return kilogram * 2.204;
}
function convertPoundToKilogram(pound){
    return pound / 2.204;
}

btnEl.addEventListener('click', function(){
    let inputValue = parseFloat(inputEl.value);
    if (isNaN(inputValue)){
        lengthResultEl.textContent = 'Please enter a valid number';
        volumeResultEl.textContent = '';
        massResultEl.textContent = '';
    } else {
        let meterCoversion =  `${inputValue} meter = ${convertMeterToFeet(inputValue).toFixed(3)} feet |
        ${inputValue} meter = ${covertFeetToMeter(inputValue).toFixed(3)} meter`;
        let literConversion = `${inputValue} liter = ${convertLiterToGallon(inputValue).toFixed(3)} gallon |
        ${inputValue} gallon = ${convertGallonToLiter(inputValue).toFixed(3)} liter`;
        let massConversion = `${inputValue} kilogram = ${convertKilogramToPound(inputValue).toFixed(3)} pound | 
        ${inputValue} pound = ${convertPoundToKilogram(inputValue).toFixed(3)} kilogram`;
        lengthResultEl.textContent = meterCoversion;
        volumeResultEl.textContent = literConversion;
        massResultEl.textContent = massConversion;

        
       
    }
});

clearEl.addEventListener('dblclick', function(){
    inputEl.value = '';
    lengthResultEl.textContent = '';
    volumeResultEl.textContent = '';
    massResultEl.textContent = '';
});