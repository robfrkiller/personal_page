(function () {
    var bg_img = [
            'image/background/CDcqaWu.jpg',
            'image/background/3jVJBBk.jpg',
            'image/background/RDiFza9.jpg',
            'image/background/X0uWtXM.jpg',
            'image/background/vvJibGe.png',
            'image/background/dWBGrbk.jpg',
            'image/background/PCOWpCv.jpg',
            'image/background/ecuBGRX.jpg',
            'image/background/FjLbXki.jpg',
            'image/background/DTwKxCb.jpg',
            'image/background/JIm9Xql.jpg',
            'image/background/rTWHcdr.jpg',
            'image/background/0Qi6hfk.jpg',
            'image/background/PeBHAyT.jpg',
            'image/background/PEhve9K.jpg',
            'image/background/r22gnK2.jpg',
            'image/background/0CNw6bg.jpg',
            'image/background/rloEVJW.jpg',
            'image/background/T1UboIt.jpg',
            'image/background/zwbXLuI.jpg'
        ],
        rand_index = Math.round(Math.random() * (bg_img.length - 1));
    document.body.style.backgroundImage = 'url(' + bg_img[rand_index] + ')';
}());

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-17060361-7', 'auto');
ga('send', 'pageview');
