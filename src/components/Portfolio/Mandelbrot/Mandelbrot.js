import React from "react";
import Sketch from "react-p5";

const Mandelbrot = () => {
  const canvasWidth = window.screen.availWidth * 0.8;
  const canvasHeight = canvasWidth * 0.5;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.pixelDensity(1);
    p5.noLoop();
  };

  const draw = (p5) => {
    p5.background(200);
    const w = 4;
    const h = (w * p5.height) / p5.width;

    const xmin = -w / 2;
    const ymin = -h / 2;

    p5.loadPixels();

    const maxiterations = 100;

    const xmax = xmin + w;
    const ymax = ymin + h;

    const dx = (xmax - xmin) / p5.width;
    const dy = (ymax - ymin) / p5.height;

    let y = ymin;
    for (let j = 0; j < p5.height; j + 1) {
      // Start x
      let x = xmin;
      for (let i = 0; i < p5.width; i + 1) {
        // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
          const aa = a * a;
          const bb = b * b;
          const twoab = 2.0 * a * b;
          a = aa - bb + x;
          b = twoab + y;
          // Infinty in our finite world is simple, let's just consider it 16
          if (p5.dist(aa, bb, 0, 0) > 16) {
            break; // Bail
          }
          n += 1;
        }

        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i + j * p5.width) * 4;
        const norm = p5.map(n, 0, maxiterations, 0, 1);
        let bright = p5.map(p5.sqrt(norm), 0, 1, 0, 255);
        if (n === maxiterations) {
          bright = 0;
        } else {
          // Gosh, we could make fancy colors here if we wanted
          // eslint-disable-next-line no-param-reassign
          p5.pixels[pix + 0] = bright;
          // eslint-disable-next-line no-param-reassign
          p5.pixels[pix + 1] = 0;
          // eslint-disable-next-line no-param-reassign
          p5.pixels[pix + 2] = bright;
          // eslint-disable-next-line no-param-reassign
          p5.pixels[pix + 3] = 255;
        }
        x += dx;
      }
      y += dy;
    }
    p5.updatePixels();
  };
  return (
    <>
      <Sketch setup={setup} draw={draw} />
      Built with p5.js and React ⚛
    </>
  );
};

export default Mandelbrot;
