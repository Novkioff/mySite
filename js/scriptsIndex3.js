//скрипт увеличения лупы при наводке мышью	
			function loupeUp(option) {
				var choose = option;
				document.getElementById('workimg' + choose).className = "fa" + " fa-search-plus" + " fa-3x";
			}
			
			function loupeDown(option) {
				var choose = option;
				document.getElementById('workimg' + choose).className = "fa" + " fa-search-plus" + " fa-2x";
			}
		
		//скрипт открывания нужной картинки в модальном окне	
			function imgWorkStart(option) {
				var choose = option;
				if (choose) {
					document.getElementById('workimg0').src = ("images/repair" + choose + ".jpg");
				}
				
			}
				
		//вызов скриптов imgWorkStart(), loupeUp(), loupeDown()	
			window.onload = function() {
				document.getElementById("workimg1").onmouseover = function(evt){loupeUp(1);};
				document.getElementById("workimg2").onmouseover = function(evt){loupeUp(2);};
				document.getElementById("workimg3").onmouseover = function(evt){loupeUp(3);};
				document.getElementById("workimg4").onmouseover = function(evt){loupeUp(4);};
				document.getElementById("workimg1").onmouseout = function(evt){loupeDown(1);};
				document.getElementById("workimg2").onmouseout = function(evt){loupeDown(2);};
				document.getElementById("workimg3").onmouseout = function(evt){loupeDown(3);};
				document.getElementById("workimg4").onmouseout = function(evt){loupeDown(4);};
				document.getElementById("workimg1").onclick = function(evt){imgWorkStart(1);};
				document.getElementById("workimg2").onclick = function(evt){imgWorkStart(2);};
				document.getElementById("workimg3").onclick = function(evt){imgWorkStart(3);};
				document.getElementById("workimg4").onclick = function(evt){imgWorkStart(4);};
			}