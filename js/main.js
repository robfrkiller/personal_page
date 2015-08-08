(function () {
	var bg_img = [
			'http://i.imgur.com/dWBGrbk.jpg',
			'http://i.imgur.com/PCOWpCv.jpg',
			'http://i.imgur.com/ecuBGRX.jpg',
			'http://i.imgur.com/FjLbXki.jpg',
			'http://i.imgur.com/DTwKxCb.jpg',
			'http://i.imgur.com/JIm9Xql.jpg',
			'http://i.imgur.com/rTWHcdr.jpg',
			'http://i.imgur.com/0Qi6hfk.jpg',
			'http://i.imgur.com/PeBHAyT.jpg',
			'http://i.imgur.com/PEhve9K.jpg',
			'http://i.imgur.com/r22gnK2.jpg',
			'http://i.imgur.com/0CNw6bg.jpg',
			'http://i.imgur.com/rloEVJW.jpg',
			'http://i.imgur.com/T1UboIt.jpg',
			'http://i.imgur.com/zwbXLuI.jpg'
		],
		rand_index = Math.round(Math.random() * (bg_img.length - 1));
	document.body.style.backgroundImage = 'url(' + bg_img[rand_index] + '.jpg)';
}());