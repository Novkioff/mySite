
		//скрипт появления стрелки скролла вверх
			window.onscroll = function hiddenVverh() {
			document.getElementById('toTop').style.display = (window.pageYOffset > 300 ? 'block' : 'none');
			}
		//скрипт плавного скроллинга наверх страницы	
			function toTop() {
				var speed = 10;
				var i = window.pageYOffset;
				while (i > 0) {
					window.scrollBy(0, -50);
					setTimeout(toTop, speed);
					i--;
				break;
				}
			}
			
