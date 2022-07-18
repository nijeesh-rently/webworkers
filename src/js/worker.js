self.importScripts('./utils.js')

onmessage = function(e) {
    console.log(e.data);
    const data = convertToGrayScale(e.data)
    postMessage(data);
}