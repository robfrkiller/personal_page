(function () {
	var bg_img = [
			'http://i.imgur.com/CDcqaWu.jpg',
			'http://i.imgur.com/3jVJBBk.jpg',
			'http://i.imgur.com/RDiFza9.jpg',
			'http://i.imgur.com/X0uWtXM.jpg',
			'http://i.imgur.com/vvJibGe.png',
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-17060361-7', 'auto');
ga('send', 'pageview');
