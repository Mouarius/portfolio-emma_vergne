import sharp from "sharp";
import fs from "fs";

const imageDir = "../img";

fs.readdirSync(imageDir).forEach((dir) => {
    if (dir === "projets") return;
    // if (dir != "buche") return;
    let directory = `${imageDir}/${dir}`;
    fs.readdirSync(directory).forEach((img) => {
        const fileName = img.match(/^(\w*)/)[0];
        sharp(`${directory}/${img}`).resize(600, 600).jpeg({ quality: 75 }).toFile(`${directory}/${fileName}-small.jpg`);
        sharp(`${directory}/${img}`).resize(1200).jpeg({ quality: 75 }).toFile(`${directory}/${fileName}-medium.jpg`);
        sharp(`${directory}/${img}`).resize(1920).jpeg({ quality: 75 }).toFile(`${directory}/${fileName}-large.jpg`);
        sharp(`${directory}/${img}`).resize(2880).jpeg({ quality: 75 }).toFile(`${directory}/${fileName}-xlarge.jpg`);
    });
});

// fs.readdirSync(imageDir).forEach((dir) => {
//     if (dir === "projets") return;
//     let directory = `${imageDir}/${dir}`;
//     fs.readdirSync(directory).forEach((img) => {
//         console.log(img);
//         const match = img.match(/(\w*).*(-\w*)/);
//         if (match === null) return;
//         console.log(match);
//         console.log(`${match[1]}${match[2]}.jpg`);
//         fs.renameSync(`${directory}/${img}`, `${directory}/${match[1]}${match[2]}.jpg`);
//     });
// });
