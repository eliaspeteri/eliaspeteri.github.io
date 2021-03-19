import React from "react";
import Sketch from "react-p5";
import Mappa from "mappa-mundi";
let canvas;
let myMap;
let tripsCoordinates;
let allCoordinates = [];
let data;

let delta = 0;
let coordinate = 0;
let origin;
let originVector;
let destination;
let destinationVector;
let taxiPosition;

let visitedRoutes = [];
const Taximap = () => {
    const options = {
        lat: 40.73447,
        lng: -74.00232,
        zoom: 13,
        style: "http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    };
    const mappa = new Mappa("Leaflet");

    const preload = (p5) => {
        data = p5.loadJSON("./data/taxiday1.geojson");
    };

    const setup = (p5, canvasParentRef) => {
        canvas = p5.createCanvas(800, 700).parent(canvasParentRef);
        myMap = mappa.tileMap(options);
        myMap.overlay(canvas);
        tripsCoordinates = myMap.geoJSON(data, "LineString");

        tripsCoordinates.forEach(function (trip) {
            trip.forEach(function (coordinate) {
                allCoordinates.push(coordinate);
            });
        });
        myMap.onChange(drawPoints);
    };

    const draw = (p5) => {
        // clear();
        if (delta < 1) {
            delta += 0.2;
        } else {
            visitedRoutes.push(allCoordinates[coordinate]);
            delta = 0;
            coordinate++;

            drawRoute();
        }
        origin = myMap.latLngToPixel(
            allCoordinates[coordinate][1],
            allCoordinates[coordinate][0]
        );
        originVector = p5.createVector(origin.x, origin.y);
        destination = myMap.latLngToPixel(
            allCoordinates[coordinate + 1][1],
            allCoordinates[coordinate + 1][0]
        );
        destinationVector = p5.createVector(destination.x, destination.y);

        taxiPosition = originVector.lerp(destinationVector, delta);
        p5.noStroke();
        p5.fill(255, 255, 0);
        p5.ellipse(taxiPosition.x, taxiPosition.y, 7, 7);
    };

    const drawPoints = (p5) => {
        p5.clear();
        p5.noStroke();
        p5.fill(255);
        for (let i = 0; i < allCoordinates.length; i++) {
            let pos = myMap.latLngToPixel(
                allCoordinates[i][1],
                allCoordinates[i][0]
            );
            p5.ellipse(pos.x, pos.y, 5, 5);
        }
    };

    const drawRoute = (p5) => {
        p5.clear();
        p5.stroke(255, 0, 0, 40);
        p5.strokeWeight(5);
        if (visitedRoutes.length > 0) {
            p5.noFill();
            p5.beginShape();
            visitedRoutes.forEach(function (e) {
                var pos = myMap.latLngToPixel(e[1], e[0]);
                p5.vertex(pos.x, pos.y);
            });
            p5.endShape();
        }
    };
    return <Sketch setup={setup} draw={draw} preload={preload} />;
};
export default Taximap;
