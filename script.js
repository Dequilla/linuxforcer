window.onload = function () { 
	window.setInterval(function(){
		$(document).ready(function(){
				run();
		});
	}, 2000);	
}

var run = function(){

	console.log("Updating page!");

	var rand = 0;
		
	var allElements = document.getElementsByTagName("*");
	var allAElements = $('a:not(:has(img))');
	for( var i = 0; i < allAElements.length; i++){
		if(!allAElements[i].classList.contains('LINUXEDQQ')){
			rand = Math.random();
			if(rand >= 0 && rand <= 0.20){
				allAElements[i].innerHTML = "Change to linux!"; 
			}else if(rand >= 0.21 && rand <= 0.40){
				allAElements[i].innerHTML = "Greatness == Linux"; 
			}else if(rand >= 0.40 && rand <= 0.60){
				allAElements[i].innerHTML = "Penguins are nice."; 
			}else if(rand >= 0.61 && rand <= 0.80){
				allAElements[i].innerHTML = 'Linus Torvalds <3'; 
			}else if(rand >= 0.81 && rand <= 1){
				allAElements[i].innerHTML = 'Linux === speed'; 
			}

			//Set custom class to not update the same stuff twice
			allAElements[i].className += " LINUXEDQQ"
		}
	}
	for( var i = 0; i < allElements.length; i++){
		if(!allElements[i].classList.contains('LINUXEDQQ')){
			if(allElements[i].tagName == "IMG"){
				rand = Math.random();
				if(rand >= 0 && rand <= 0.20){
					allElements[i].src = "https://www.nasa-security.net/wp-content/uploads/2013/03/Linux_XP.jpg";
				}else if(rand >= 0.21 && rand <= 0.40){
					allElements[i].src = "http://getintopc.com/wp-content/uploads/2013/06/Linux-Download-Free-Operating-System.jpg"; 
				}else if(rand >= 0.40 && rand <= 0.60){
					allElements[i].src = "http://betanews.com/wp-content/uploads/2014/01/penguin.jpg";
				}else if(rand >= 0.61 && rand <= 0.80){
					allElements[i].src = "http://www.thurn.se/wp-content/uploads/2015/05/andLinux_logo.jpg";
				}else if(rand >= 0.81 && rand <= 1){
					allElements[i].src = "http://www.creotix.com/wp-content/uploads/2012/12/why-open-source-is-better.jpg";
				}

				//Set custom class to not update the same stuff twice
				allElements[i].className += " LINUXEDQQ"
			}
			if(allElements[i].tagName == "A"){
				rand = Math.random();
				if(rand >= 0 && rand <= 0.20){
					allElements[i].href = "https://www.youtube.com/watch?v=8bVDQ4rVrM4";
				}else if(rand >= 0.21 && rand <= 0.40){
					allElements[i].href = "https://www.youtube.com/watch?v=yX8yrOAjfKM";
				}else if(rand >= 0.40 && rand <= 0.60){
					allElements[i].href = "https://www.youtube.com/watch?v=fb1v1YnUmTM";
				}else if(rand >= 0.61 && rand <= 0.80){
					allElements[i].href = "http://9gag.com/gag/4106083/windows-vs-mac-vs-linux";
				}else if(rand >= 0.81 && rand <= 1){
					allElements[i].href = "http://bestdesignoptions.com/?p=9658";
				}
				
			}
		}
	}

	allElementsOld = allElements;
	allAElementsOld = allAElements;
}