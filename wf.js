$(function(){$('img').load(function(){var box=$('.box');var boxHeight={leftBox:[],centerBox:[],rightBox:[]}
	for(var i=0;i<box.length;i++){var now=i%3;switch(now){case 0:box.eq(i).css('left','10px');boxHeight.leftBox.push(box.eq(i).height());var now2=Math.floor(i/3);if(now2==0){box.eq(i).css('top',0);}else{var total=0;for(var j=0;j<now2;j++){total+=boxHeight.leftBox[j]+10;}
		box.eq(i).css('top',total+'px')}
		break;case 1:box.eq(i).css('left','270px');boxHeight.centerBox.push(box.eq(i).height());var now2=Math.floor(i/3);if(now2==0){box.eq(i).css('top',0);}else{var total=0;for(var j=0;j<now2;j++){total+=boxHeight.centerBox[j]+10;}
		box.eq(i).css('top',total+'px')}
		break;case 2:box.eq(i).css('left','530px');boxHeight.rightBox.push(box.eq(i).height());var now2=Math.floor(i/3);if(now2==0){box.eq(i).css('top',0);}else{var total=0;for(var j=0;j<now2;j++){total+=boxHeight.rightBox[j]+10;}
		box.eq(i).css('top',total+'px')}
		break;}}});});