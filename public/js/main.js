$(function(){
	$('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		        var $target = $(this.hash);
		        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
		        if ($target.length) {
			        var targetOffset = $target.offset().top;
			        $('html,body').animate({
			        	scrollTop: targetOffset
			        },1000);
		        return false;
	        }
        }
    });
    var online= new Array();
    var chat = document.getElementById('livechat');
	if(online[0]==0){chat.innerHTML = '<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2396003&site=qq&menu=yes"><img border="0" src="http://www.uedtu.com/themes/foundation/assets/images/qqchat.png" alt="点击这里给我发消息" title="点击这里给我发消息"></a>';}else{chat.innerHTML = '<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2396003&site=qq&menu=yes"><img border="0" src="http://www.uedtu.com/themes/foundation/assets/images/qqchat.png" alt="点击这里给我发消息" title="点击这里给我发消息"></a>';}
})