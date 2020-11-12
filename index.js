let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let path = require('path');
let fs = require('fs');
let dayjs = require('dayjs');

	app.get('/home', (req , res) => {
		dateProp = dayjs();
		fileName = dateProp.format('YYYY-MM-DD - HH:mm:ss');
		let filePath = path.join(__dirname,"level1",fileName+".txt");
		//console.log(typeof(fileDir));
		fs.writeFile(filePath, dateProp.format('HH:mm:ss'), function (err) {
		if (err) throw err;
		res.send("Success, file Created : "+fileName+".txt");
	})
	});


	app.get('/folder', (req, res) => {
		let dirPath = path.join(__dirname,"level1")
		let fileNames = [];
		fs.readdir(dirPath, (err, files) => {
			files.forEach(file => {
				fileNames.push(file);
			})
			res.send(fileNames)
		})
	})

	app.listen(8080);
