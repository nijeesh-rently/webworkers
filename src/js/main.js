
const file_picker = document.getElementById("file_picker")
const canvas = document.getElementById("canvas")
const convertButton  = document.getElementById('convert')
const ctx = canvas.getContext('2d');
const blinker = document.getElementById('blinker')
makeItBlink(blinker)


const openFile = function(event) {
    const url = URL.createObjectURL(event.target.files[0]);
    const img = new Image();
    img.src = url;
    img.onload = ()=> drawToCanvas(img, canvas)
}

file_picker.addEventListener('change',openFile)

convertButton.addEventListener('click', function(){
    let imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    imgData = convertToGrayScale(imgData)
    ctx.putImageData(imgData, 0, 0);
})
