// user input // 

import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: 'Please enter the URL of your website:',
    }
  ])
  .then((answers) => {
    const { url } = answers
    console.log('URL entered:', url);

// generate qr image //
    var qr = require('qr-image');
    var qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(require('fs').createWriteStream('generated_qr.svg'));
 
    var svg_string = qr.imageSync(url, { type: 'svg' });

// Create a txt file to save the user input using the native fs node module //
    fs.writeFile("input.txt", url, function(err){
        if (err) throw err;
        console.log('saved data!');
    });
})

.catch((error) => {
    console.error("Error occured:", error);
});
