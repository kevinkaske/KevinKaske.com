
	  
	$(document).ready(function(){
		$("form").submit(function(){

		var str = $("form").serialize();

						   $.ajax({
						   type: "POST",
						   url: "contact.php",
						   data: str,
						   success: function(msg){
						    
		$("#note").ajaxComplete(function(event, request, settings){
		$("#note").show();
		if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
		{
		result = '<span class="notification_ok">Your message has been sent. Thank you!</span>';
		$("#fields").hide();
		}
		else
		{
			result = msg;	
			
		}

		$(this).html(result);

		});

		}
						 });

		return false;

		});

	});