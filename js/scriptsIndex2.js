var position;
var block;
var img;
var imgArr1 = ["images/bedroom1.jpg", "images/bedroom2.jpg", "images/bedroom3.jpg"];
var imgArr2 = ["images/house1.jpg", "images/house2.jpg", "images/house3.jpg", "images/house4.jpg", "images/house5.jpg", "images/house6.jpg", "images/house7.jpg","images/house8.jpg", "images/house9.jpg"];
var imgArr3 = ["images/shop1.jpg", "images/shop2.jpg"];
var imgArr4 = ["images/bath1.jpg", "images/bath2.jpg", "images/bath3.jpg", "images/bath4.jpg"];
var imgArr5 = ["images/flat1.jpg", "images/flat2.jpg", "images/flat3.jpg", "images/flat4.jpg", "images/flat5.jpg", "images/flat6.jpg", "images/flat7.jpg", "images/flat8.jpg", "images/flat9.jpg", "images/flat10.jpg", "images/flat11.jpg", "images/flat12.jpg"];

//скрипт присвоения стартовой картинки блокам портфолио		
			function imgStart(click) {
				var buttonClick = click;
				if (buttonClick == 1) {
					document.getElementById('img1').src = ("images/bedroom" + 1 + ".jpg");
					position = 1;
					block = 1;
					img = 'bedroom';
				}
				else if (buttonClick == 2) {
					document.getElementById('img2').src = ("images/house" + 1 + ".jpg");
					position = 1;
					block = 2;
					img = 'house';
				}
				else if (buttonClick == 3) {
					document.getElementById('img3').src = ("images/shop" + 1 + ".jpg");
					position = 1;
					block = 3;
					img = 'shop';
				}
				else if (buttonClick == 4) {
					document.getElementById('img4').src = ("images/bath" + 1 + ".jpg");
					position = 1;
					block = 4;
					img = 'bath';
				}
				else if (buttonClick == 5) {
					document.getElementById('img5').src = ("images/flat" + 1 + ".jpg");
					position = 1;
					block = 5;
					img = 'flat';
				}
			}
		
		//вызов скрипт imgStart()
			window.onload = function() {
				document.getElementById("button1").onclick = function(evt){imgStart(1);};
				document.getElementById("button2").onclick = function(evt){imgStart(2);};
				document.getElementById("button3").onclick = function(evt){imgStart(3);};
				document.getElementById("button4").onclick = function(evt){imgStart(4);};
				document.getElementById("button5").onclick = function(evt){imgStart(5);};
				document.getElementById("modalOpen1").onclick = function(evt){imgStart(1);};
				document.getElementById("modalOpen2").onclick = function(evt){imgStart(2);};
				document.getElementById("modalOpen3").onclick = function(evt){imgStart(3);};
				document.getElementById("modalOpen4").onclick = function(evt){imgStart(4);};
				document.getElementById("modalOpen5").onclick = function(evt){imgStart(5);};
			}
		
		//скрипт пролистывания картинок портфолио
			var i = 0;
			var j = 0;
			var	k = 0;
			var l = 0;
			var z = 0;
			
			//скрипт пролистывания картинок блок1
			function turnImgBlock1(click) {
				
				if (click == 2 && i < imgArr1.length - 1) {
					i++;
				}
				else if (click == 1 && i > 0){
					i--;
				}
					document.getElementById('img' + block).src = imgArr1[i];
					if (i == imgArr1.length - 1) document.getElementById('control-right').style.display = "none";
					else document.getElementById('control-right').style.display = "block";
					if (i == 0) document.getElementById('control-left').style.display = "none";
					else document.getElementById('control-left').style.display = "block";
			}
				
				//скрипт пролистывания картинок блок2
				function turnImgBlock2(click) {
				
				if (click == 2 && j < imgArr2.length - 1) {
					j++;
				}
				else if (click == 1 && j > 0){
					j--;
				}
					document.getElementById('img' + block).src = imgArr2[j];
					if (j == imgArr2.length - 1) document.getElementById('control-right1').style.display = "none";
					else document.getElementById('control-right1').style.display = "block";
					if (j == 0) document.getElementById('control-left1').style.display = "none";
					else document.getElementById('control-left1').style.display = "block";
					
					
				}
				
				
				//скрипт пролистывания картинок блок3
				function turnImgBlock3(click) {
				
				if (click == 2 && k < imgArr3.length - 1) {
					k++;
				}
				else if (click == 1 && k > 0){
					k--;
				}
					document.getElementById('img' + block).src = imgArr3[k];
					if (k == imgArr3.length - 1) document.getElementById('control-right2').style.display = "none";
					else document.getElementById('control-right2').style.display = "block";
					if (k == 0) document.getElementById('control-left2').style.display = "none";
					else document.getElementById('control-left2').style.display = "block";
				}
				
				//скрипт пролистывания картинок блок4
				function turnImgBlock4(click) {
				
				if (click == 2 && l < imgArr4.length - 1) {
					l++;
				}
				else if (click == 1 && l > 0){
					l--;
				}
					document.getElementById('img' + block).src = imgArr4[l];
					if (l == imgArr4.length - 1) document.getElementById('control-right3').style.display = "none";
					else document.getElementById('control-right3').style.display = "block";
					if (l == 0) document.getElementById('control-left3').style.display = "none";
					else document.getElementById('control-left3').style.display = "block";
				}
				
				//скрипт пролистывания картинок блок5
				function turnImgBlock5(click) {
				
				if (click == 2 && z < imgArr5.length - 1) {
					z++;
				}
				else if (click == 1 && z > 0){
					z--;
				}
					document.getElementById('img' + block).src = imgArr5[z];
					if (z == imgArr5.length - 1) document.getElementById('control-right4').style.display = "none";
					else document.getElementById('control-right4').style.display = "block";
					if (z == 0) document.getElementById('control-left4').style.display = "none";
					else document.getElementById('control-left4').style.display = "block";
				}
			
			