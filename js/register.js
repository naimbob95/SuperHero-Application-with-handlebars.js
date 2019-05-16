$(function(){

	$("#registerform").submit(function(e){	
		e.preventDefault();
		e.stopPropagation();

      var name = $("#fullname").val();
      var login = $("#username").val();
		var email = $("#email").val();
      var password = $("#password").val();

		var obj = new Object();
      obj.name = name;
      obj.login = login;
		obj.email = email;
		obj.password = password;

      // $('#password, #confirm_password').on('keyup', function () {
      //    if ($('#password').val() == $('#confirm_password').val()) {
      //      $('#message').html('Matching').css('color', 'green');
      //    } else 
      //      $('#message').html('Not Matching').css('color', 'red');
      //  });

      $.ajax({
         type: "post",
         contentType: 'application/json',
         url: 'http://localhost/superhero/api/registration',
         data: JSON.stringify(obj),            
         dataType: "json",
         success: function(data){
            if (data.insertstatus) {
               alert("Registration successful,Hail Hydra");
            	window.location.href = "http://localhost/superhero/login.html";
            } 
            else {
            	alert("Registration failed!\nError: " + data.error);
            }
         },
         error: function() {
            console.log("error");
         }
      });  
	});

   $("#btnlogin").click(function(e){
      window.location.href = "http://localhost/superhero/login.html";
   });
});