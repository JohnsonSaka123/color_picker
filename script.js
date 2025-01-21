/*function openColorPicker(){
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.oninput = function(){
    const color = this.value;
    document.getElementById('color-box').style.backgroundColor = color;
    document.getElementById('hexValue').textContent = color;
    document.getElementById('rgbValue').textContent = hexToRgb(color);
  };

  colorPicker.click();
}*/
const colorPickerContainer = document.querySelector('.color-picker');
const colorInput = document.getElementById('colorInput');

colorPickerContainer.addEventListener('click', () => {
  colorInput.click(); // Simulates a click on the color input
});



document.getElementById('colorInput').addEventListener('input' , function() {

    const  color = this. value;
    document.getElementById('hexValue').textContent = color;
    document.getElementById('rgbValue') . textContent = hexToRgb(color);

}); 

function hexToRgb(color){
  const r = parseInt(color.slice(1,3) , 16);
  const g = parseInt(color.slice(3,5) , 16);
  const b = parseInt(color.slice(5,7) , 16);

  return `${r} , ${g} ,  ${b}`;

}
/*let toBaseTen = parseInt('123' , 10);
let toBaseSxTeen= parseInt('ff' , 16);
console.log(toBaseTen);
console.log(toBaseSxTeen);*/

