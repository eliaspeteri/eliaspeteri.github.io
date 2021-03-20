import React from "react";
import Sketch from "react-p5";

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
        let perceptionRadius = 50;
        let steering = p5.createVector();
        let total = 0;
        for (let other of boids) {
            let d = p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other !== this && d < perceptionRadius) {
                steering.add(other.vel);
                total++;
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
        let perceptionRadius = 100;
        let steering = p5.createVector();
        let total = 0;
        for (let other of boids) {
            let d = p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other !== this && d < perceptionRadius) {
                steering.add(other.pos);
                total++;
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
        let perceptionRadius = 100;
        let steering = p5.createVector();
        let total = 0;
        for (let other of boids) {
            let d = p5.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other !== this && d < perceptionRadius) {
                let diff = p5.Vector.sub(this.pos, other.pos);
                // diff.div(d);
                diff.div(Math.pow(d, 2));
                steering.add(diff);
                total++;
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
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

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

const flock_arr = [];

let alignSlider, cohesionSlider, separationSlider;

const Flock = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(1200, 800).parent(canvasParentRef);
        alignSlider = p5.createSlider(0, 2, 1.5, 0.1);
        cohesionSlider = p5.createSlider(0, 2, 1, 0.1);
        separationSlider = p5.createSlider(0, 2, 2, 0.1);
        for (var i = 0; i < 100; i++) {
            flock_arr.push(new Boid());
        }
    };
    const draw = (p5) => {
        p5.background(51);
        for (let boid of flock_arr) {
            boid.edges();
            boid.flock(flock_arr);
            boid.update();
            boid.show();
        }
    };
    return <Sketch setup={setup} draw={draw} />;
};
export default Flock;
