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