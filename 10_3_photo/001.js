window.onload=function(){
	
	var WORD = new Array();
	
	WORD[0]="這是一個可愛的小狗狗";
	WORD[1]="第二張第二張";
	WORD[2]="第三張第三張";
	WORD[3]="第四張第四張";
	WORD[4]="第五張第五張";
	WORD[5]="第六張第六張";
	WORD[6]="第七張第七張";
	WORD[7]="第八張第八張";
	WORD[8]="第九張第九張";
	
	//宣告變數，用來記錄現在是第一張。
	var N = 0;
	
	document.getElementById("BOX").onmouseover = SHOWSHOW;
	document.getElementById("BOX").onmouseout = HIDEHIDE;
	document.getElementById("BOX").onclick = NEXT;
		
	function SHOWSHOW(){
		document.getElementById("TITLE").style.display = "block";
		document.getElementById("TITLE").innerHTML = WORD[N];
	}
	
	function HIDEHIDE(){
		document.getElementById("TITLE").style.display = "none";
	}
	
	function NEXT(){
		
		if(N<8){
			N += 1;
		}else{
			N = 0;
		}
		
		document.getElementById("TITLE").innerHTML = WORD[N];
		document.getElementById("PIC").src = "images/dog_" + N + ".jpg";
	}
}
