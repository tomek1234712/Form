$(document).ready(function(){

	$('form').submit(function(){
	
		//var params = $('form').serialize();
		var params = $('form').serializeArray();
		
		console.log(params);
		/*
		$.get('server.php', params, function(res){
			alert(res);
		});
		*/
		
		$.post('server.php', params, function(res){
			//alert(res);
			//console.log(res);
			
			if(res.status == 'ok'){
				$('form').fadeOut(function(){
					alert(res.message);
				});
			}else
			if(res.status = 'error'){
				alert(res.message);
			}
			
		}, 'json');
	
		return false;
	});
	
});