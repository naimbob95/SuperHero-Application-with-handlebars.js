$(function(){

	$("#loginform").submit(function(e){	
		e.preventDefault();
		e.stopPropagation();

		var login = $("#username").val();
      var password = $("#password").val();
   //   var roles = "";

		var obj = new Object();
		obj.login = login;
      obj.password = password;
      // obj.roles = roles;

      $.ajax({
         type: "post",
         contentType: 'application/json',
         url: 'http://localhost/superhero/api/auth',
         data: JSON.stringify(obj),            
         dataType: "json",
         success: function(data){
            if (data.status == 1) {
            	sessionStorage.token = data.token;
               sessionStorage.login = data.login;
               sessionStorage.roles = data.roles;
               
               if(sessionStorage.roles == "superhero")
               {
                  console.log(sessionStorage.roles);
                  window.location.href = "http://localhost/superhero/#contact";
               }

               if( sessionStorage.roles == "admin")
                  {
               console.log(sessionStorage.roles);
            	//alert("Login successful!", function() {
            	window.location.href = "http://localhost/superhero/#profile";
					//});
               }
            } 
            else if (data.status == 0) {
            	sessionStorage.clear();
            	alert("Login failed - wrong password!");
            }
            else if (data.status == -1) {
            	sessionStorage.clear();
            	alert("Login failed - user with that email not exist!");
            }
         },
         error: function() {
            console.log("error");
         }
      });  
	});

   $("#btnregister").click(function(e){
      window.location.href = "http://localhost/contacts/register.html";
   });
});