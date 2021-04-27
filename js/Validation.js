function Validate(){
		var name=document.getElementById("name").value;
		var email=document.getElementById("email").value;
		var message=document.getElementById("message").value;
		var phoneNumber=document.getElementById("phoneNumber").value;
		
		
		if(name=='')
		{	
		alert('Introduce your name');
		return false;
		}
		
		if(email=='')
		{	
		alert('Introduce your email');
		return false;
		}
		
		if(phoneNumber=='')
		{	
		alert('Introduce your Phone Number');
		return false;
		}
		
		if(message=='')
		{	
		alert('Type your message');
		return false;
		}
		
		else{
		alert('Your booking has been confirmed');
		{location.href ="contact.html";}
		}
	}