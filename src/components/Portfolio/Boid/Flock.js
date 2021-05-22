import React from "react";
import Sketch from "react-p5";

let alignSlider;
let cohesionSlider;
let separationSlider;
class Boid {
  constructor(p5) {
    this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(p5.random(5, 10));
    this.acc = p5.createVector();
    this.maxForce = 0.2;
    this.maxSpeed = 5;
  }

  edges(p5) {
    if (this.pos.x > p5.width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = p5.width;
    }
    if (this.pos.y > p5.height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = p5.height;
    }
  }

  align(boids, p5) {
    const perceptionRadius = 50;
    const steering = p5.createVector();
    let total = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const other of boids) {
      const d = p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other !== this && d < perceptionRadius) {
        steering.add(other.vel);
        total += 1;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohesion(boids, p5) {
    const perceptionRadius = 100;
    const steering = p5.createVector();
    let total = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const other of boids) {
      const d = p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other !== this && d < perceptionRadius) {
        steering.add(other.pos);
        total += 1;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.pos);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separation(boids, p5) {
    const perceptionRadius = 100;
    const steering = p5.createVector();
    let total = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const other of boids) {
      const d = p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (other !== this && d < perceptionRadius) {
        const diff = p5.Vector.sub(this.pos, other.pos);
        // diff.div(d);
        diff.div(d ** 2);
        steering.add(diff);
        total += 1;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(boids) {
    const alignment = this.align(boids);
    const cohesion = this.cohesion(boids);
    const separation = this.separation(boids);

    separation.mult(separationSlider.value());
    cohesion.mult(cohesionSlider.value());
    alignment.mult(alignSlider.value());

    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(separation);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.acc.set(0, 0);
  }

  show(p5) {
    p5.strokeWeight(8);
    p5.stroke(255);
    p5.point(this.pos.x, this.pos.y);
  }
}

const flockArr = [];

const Flock = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1200, 800).parent(canvasParentRef);
    alignSlider = p5.createSlider(0, 2, 1.5, 0.1);
    cohesionSlider = p5.createSlider(0, 2, 1, 0.1);
    separationSlider = p5.createSlider(0, 2, 2, 0.1);
    for (let i = 0; i < 100; i + 1) {
      flockArr.push(new Boid());
    }
  };
  const draw = (p5) => {
    p5.background(51);
    // eslint-disable-next-line no-restricted-syntax
    for (const boid of flockArr) {
      boid.edges();
      boid.flock(flockArr);
      boid.update();
      boid.show();
    }
  };
  return <Sketch setup={setup} draw={draw} />;
};
export default Flock;
