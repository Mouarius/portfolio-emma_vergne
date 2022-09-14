import sharp from "sharp";
import fs from "fs";

const imageDir = "../img";

fs.readdirSync(imageDir).forEach((dir) => {
    if (dir === "projets") return;
    let directory = `${imageDir}/${dir}`;
    fs.readdirSync(directory).forEach((img) => {
        sharp(`${directory}/${img}`).resize(600).jpeg({ quality: 75 }).toFile(`${directory}/${img}-small.jpg`);
        sharp(`${directory}/${img}`).resize(1200).jpeg({ quality: 75 }).toFile(`${directory}/${img}-medium.jpg`);
        sharp(`${directory}/${img}`).resize(1920).jpeg({ quality: 75 }).toFile(`${directory}/${img}-large.jpg`);
        sharp(`${directory}/${img}`).resize(2880).jpeg({ quality: 75 }).toFile(`${directory}/${img}-xlarge.jpg`);
    });
});
