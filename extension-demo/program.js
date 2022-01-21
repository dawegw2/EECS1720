console.log("yo");

let images = document.getElementsByTagName('img');

//im = loadImage(images); 

//images.loadPixels();

for (let x = 0; x < images.width; x+= scaler) {
    for (let y = 0; y < images.height; y += scaler) {
        let index = x + y * (images.width);

        pixels[index] = images.pixels[index] / 2;
    }
}
//updatePixels();
