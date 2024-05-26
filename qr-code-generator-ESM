import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Please enter the URL of your website:',
    }
  ])
  .then((answers) => {
    const { url } = answers;
    console.log('URL entered:', url);

    // Generate QR image with the user-provided URL
    const qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('generated_qr.svg'));

    // Save the user input (URL) to a text file
    fs.writeFile("input.txt", url, function(err){
        if (err) throw err;
        console.log('User input saved to input.txt!');
    });
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
