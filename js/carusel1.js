
	var imgArray = new Array('', 'images/1.jpg', 'images/2.jpg', 'images/3.jpg');

;(function slider() {
	var startPosFirst = 0,
		startPosSecond = 100,
		ImgNumFirst = 1,
		ImgNumSecond = ImgNumFirst + 1,
		ImgCol = 3,
		stopAuto;
		
	document.getElementById("bannerImgFirst").src = imgArray[ImgNumFirst];
	document.getElementById("bannerImgSecond").src = imgArray[ImgNumSecond];
	bannerImgFirst.style.left = startPosFirst + '%';
	bannerImgSecond.style.left = startPosSecond + '%';
	

	function move() { 
		
			
			var stopMove = setInterval(function() {
				if (startPosFirst <= -95 && startPosSecond <= 5) {
				clearInterval(stopMove);
				}
				startPosFirst -= 5;
				startPosSecond -= 5;
				bannerImgFirst.style.left = startPosFirst + '%';
				bannerImgSecond.style.left = startPosSecond + '%';
			}, 30)
		
	}
	
	function change() {
		ImgNumFirst = ImgNumFirst % ImgCol + 1;
		ImgNumSecond = ImgNumSecond % ImgCol + 1;
		
		var tempImg = document.createElement('img');
		tempImg.setAttribute('src', imgArray[ImgNumSecond]);
		startPosFirst = 0;
		startPosSecond = 100;
		tempImg.style.left = startPosSecond + '%';
		tempImg.style.position = 'absolute';
		carusel.appendChild(tempImg);
		carusel.removeChild(bannerImgFirst);
		bannerImgSecond.setAttribute('id', 'bannerImgFirst');
		tempImg.setAttribute('id', 'bannerImgSecond');
	}
	
		
	
	function slide() {
		
		stopAuto = setInterval(function() {
			move();
			setTimeout(function() {
				change();
				
			}, 15000);
		}, 15000);
		
	}
	
			
		
	slide();
	
	
}) ();







