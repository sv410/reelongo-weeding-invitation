const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  { url: 'https://framerusercontent.com/images/uQ5GdDW5jaPT8LYNBYabSn2bj0.png', name: 'temple.png' },
  { url: 'https://framerusercontent.com/images/nc35y7b0Zuw1Gp5B9Uyd0lzjxKM.png', name: 'lantern.png' },
  { url: 'https://framerusercontent.com/images/cyIPT3IPm257uiP1lpxhaxTt8E.png', name: 'flower-bg.png' },
  { url: 'https://framerusercontent.com/images/CrkrJDdeoM65OHFWoOmjt0Jln9Y.png', name: 'couple.png' },
  { url: 'https://framerusercontent.com/assets/q8x7MYVF61gOLfkcxdG7dlXjxw.mp3', name: 'music.mp3' },
  { url: 'https://framerusercontent.com/images/j3yL0WY8Jp0Fudn00prE6XsVACw.png', name: 'sky.png' }
];

const publicDir = path.join(__dirname, 'public');

assets.forEach(asset => {
  const file = fs.createWriteStream(path.join(publicDir, asset.name));
  https.get(asset.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${asset.name}`);
    });
  }).on('error', err => {
    fs.unlink(path.join(publicDir, asset.name));
    console.error(`Error downloading ${asset.name}: ${err.message}`);
  });
});
