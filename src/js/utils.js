const getScaledDim = function (img, maxWidth, maxHeight) {
    var scaled = {
        ratio: img.width / img.height,
        width: img.width,
        height: img.height
    }
    if (scaled.width > maxWidth) {
        scaled.width = maxWidth;
        scaled.height = scaled.width / scaled.ratio;
    }
    if (scaled.height > maxHeight) {
        scaled.height = maxHeight;
        scaled.width = scaled.height / scaled.ratio;
    }
    return scaled;
}

const drawToCanvas = function (img, canvas) {
    const { height, width } = getScaledDim(img, 750, 750)

    const ctx = canvas.getContext('2d');

    canvas.height = height
    canvas.width = width

    ctx.drawImage(img, 0, 0, width, height);
}


const convertToGrayScale = function (imgData) {
    const pixels = imgData.data;
    for (var iteration = 0; iteration < 100; iteration++) {

        for (var i = 0; i < pixels.length; i += 4) {

            let lightness = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3);

            pixels[i] = lightness;
            pixels[i + 1] = lightness;
            pixels[i + 2] = lightness;
        }
    }
    return imgData
}

const makeItBlink = function (element) {

    let now = 0
    let then = 0
    let elapsed = 0
    let visible = true

    const fpsInterval = 200

    function blink() {
        requestAnimationFrame(blink);
        now = Date.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {

            then = now - (elapsed % fpsInterval);

            if (visible) {
                element.style.display = 'none'
            } else {
                element.style.display = 'block'
            }
            
            visible = !visible
        }
    }

    blink()
}