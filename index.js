import fs from 'fs';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';

const img1 = PNG.sync.read(fs.readFileSync('files/1.png'));
const img2 = PNG.sync.read(fs.readFileSync('files/2.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

console.log(width, height);

pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.3});

fs.writeFileSync('files/diff.png', PNG.sync.write(diff));