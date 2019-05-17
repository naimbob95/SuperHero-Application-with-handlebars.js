$(function(){

	if (!sessionStorage.token)
  		window.location.href = "http://localhost/superhero/login.html";	
  	else {
  		$("body").show();
  		$("#login").html(sessionStorage.login);
	   }
	  
	   Handlebars.registerHelper("displaystats", function(stats) {
		var thestats = (stats);
		if (thestats === 0)        
		return "<span style='color: red; font-weight: bold'>disapprove</span>";
      else if (thestats === 1)        
         return "<span style='color: green; font-weight: bold'>approve</span>";
	});	  

   $.ajaxSetup({
      statusCode: {
         401: function(){
            window.location.href = "http://localhost/superhero/login.html";
         }
      }
   });  

   $.ajaxPrefilter(function( options, oriOptions, jqXHR ) {
      jqXHR.setRequestHeader("Authorization", "Bearer " + sessionStorage.token);
   });  

	function parseHash(newHash, oldHash){
	  crossroads.parse(newHash);
	}

	

	
	

	var route1 = crossroads.addRoute('', function(){

	   var homeTemplate = Handlebars.templates['home'];		
		$("#divcontent").empty();
		$("#divcontent").html(homeTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Home</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#home']").parent().addClass('active');
	});

	var route2 = crossroads.addRoute('/home', function(){

	   var homeTemplate = Handlebars.templates['home'];
		$("#divcontent").empty();
		$("#divcontent").html(homeTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Home</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#home']").parent().addClass('active');
	});

	var route3 = crossroads.addRoute('/contacts', function(){

      $.ajax({
         type: "GET",
         url: "http://localhost/superhero/api/contacts",
         dataType: "json",
         success: function(data){
				var contactsTemplate = Handlebars.templates['contacts']({"contacts": data});
				$("#divcontent").empty();
				$("#divcontent").html(contactsTemplate).hide().fadeIn(1000);


				$(".breadcrumb").empty();
				$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
				$(".breadcrumb").append("<li class='active'>Contacts</li>");

				$(".navbar-collapse li").removeClass('active');
			  	$(".navbar-collapse li a[href='#contacts']").parent().addClass('active');				
         },
         error: function() {
            alert("1 - An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });
	});

	var route3b = crossroads.addRoute('/contacts/addcontact', function(){

	  	var contactInsertFormTemplate = Handlebars.templates['contactinsertform'];
      $('#divcontent').empty();
      $('#divcontent').html(contactInsertFormTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>")
		$(".breadcrumb").append("<li class='active'>Add Contact</li>");

	  	$("#navbar li").removeClass('active');
	  	$("#navbar li a[href='#contacts']").parent().addClass('active');
	});

	var route3c = crossroads.addRoute('/contacts/view/{id}', function(id){

      $.ajax({
         type: "GET",
         url: "http://localhost/superhero/api/contacts/" + id,
         dataType: "json",
         success: function(data){
			  	var contactViewFormTemplate = Handlebars.templates['contactviewform']({
			  		id: id,
			  		name: data.name,
			  		email: data.email,
			  		mobileno: data.mobileno, 
			  	});
		      $('#divcontent').empty();
		      $('#divcontent').html(contactViewFormTemplate).hide().fadeIn(1000);

				$(".breadcrumb").empty();
				$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
				$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>")
				$(".breadcrumb").append("<li class='active'>View Contact</li>");

			  	$("#navbar li").removeClass('active');
			  	$("#navbar li a[href='#contacts']").parent().addClass('active');	  					   
         },
         error: function() {
            alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });
	});

	var route4 = crossroads.addRoute('/about', function(){

		var aboutTemplate = Handlebars.templates['about'];		
		$("#divcontent").empty();
		$("#divcontent").html(aboutTemplate).hide().fadeIn(1000);
		
		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li class='active'>About</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#about']").parent().addClass('active');
	});

	var route5 = crossroads.addRoute('/profile', function(){

		var profileTemplate = Handlebars.templates['profile'];		
		$("#divcontent").empty();
		$("#divcontent").html(profileTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li class='active'>Profile</li>");

		$(".navbar-collapse li").removeClass('active');
	});

	var route6 = crossroads.addRoute('/logout', function(){
		$("body").hide();
		sessionStorage.clear();
		window.location.href = "http://localhost/superhero/login.html";
	});


	var route7 = crossroads.addRoute('/applications', function(){

      $.ajax({
         type: "GET",
         url: "http://localhost/superhero/api/applications",
         dataType: "json",
         success: function(data){
				var applicationsTemplate = Handlebars.templates['applications']({"applications": data});
				$("#divcontent").empty();
				$("#divcontent").html(applicationsTemplate).hide().fadeIn(1000);


				$(".breadcrumb").empty();
				$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
				$(".breadcrumb").append("<li class='active'>Applications</li>");

				$(".navbar-collapse li").removeClass('active');
			  	$(".navbar-collapse li a[href='#applications']").parent().addClass('active');				
         },
         error: function() {
            alert("1 - An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });
	});
	var route7b = crossroads.addRoute('/applications/view/{id}', function(id){

		$.ajax({
			type: "GET",
			url: "http://localhost/superhero/api/applications/" + id,
			dataType: "json",
			success: function(data){
				  var applicationsViewFormTemplate = Handlebars.templates['applicationviewform']({
					  id: id,
					  name: data.name,
					  cape: data.cape,
					  mask: data.mask,
					  costume: data.costume,
					  superpower: data.superpower
				  });
				$('#divcontent').empty();
				$('#divcontent').html(applicationsViewFormTemplate).hide().fadeIn(1000);
	
				$(".breadcrumb").empty();
				$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
				$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>")
				$(".breadcrumb").append("<li class='active'>View Contact</li>");
	
				  $("#navbar li").removeClass('active');
				  $("#navbar li a[href='#applications']").parent().addClass('active');	  					   
			},
			error: function() {
				alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
			}
		});
	});
	var route7c = crossroads.addRoute('/applications/addapplication', function(){

		var applicationInsertFormTemplate = Handlebars.templates['applicationinsertform'];
	 $('#divcontent').empty();
	 $('#divcontent').html(applicationInsertFormTemplate).hide().fadeIn(1000);

	 $(".breadcrumb").empty();
	 $(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
	//  $(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>")
	 $(".breadcrumb").append("<li class='active'>Add Application</li>");

		$("#navbar li").removeClass('active');
		$("#navbar li a[href=#applications]").parent().addClass('active');
 });



	hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change

	////////////////////////////////////////////////////////////////

	$(document).on('submit','#formaddapplication',function(e) {	
		e.preventDefault();
		e.stopPropagation();

		var name = $("#name").val();
		var cape = $("#cape").val();
		var mask = $("#mask").val();
		var costume = $("#costume").val();
		var superpower = $("#superpower").val();
		

		//validation
		//return

		var obj = new Object();
		obj.name = name;
		obj.cape = cape;
		obj.mask= mask;
		obj.costume = costume;
		obj.superpower= superpower;
		


      $.ajax({
         type: "POST",
         url: "http://localhost/superhero/api/applications",
         dataType: "json",
         data: JSON.stringify(obj), 
         success: function(data){   

         	if (data.insertstatus) {
         		alert("application insertion successful!", function(answer) {
         			//location.href= "/#contacts";  
         			$("#formaddapplication")[0].reset();	
         		});         		
         	} else {
         		alert("Contact insertion failed!\n" + data.error);
         		$("#formaddapplication")[0].reset();			
         	}     
     		},
         error: function() {
         	alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });			
	});

	$(document).on("click", "#tbl1 tbody i", function() {
		//             span    a        td       tr  
	  var parentTR = $(this).parent().parent().parent();
	  var applicationsid = $(this).data("applicationid");

	  //*
	 bootbox.confirm("Are you sure you want to delete the contact?", function(answer) {
		if (answer) {

			  $.ajax({
				type: 'DELETE',
				url: "http://localhost/superhero/api/applications/" + applicationsid,
				dataType: "json",
				success: function(data){
					if (data.deletestatus) {
					  $(parentTR).fadeOut("slow", "swing", function(){
						  $(parentTR).remove();
					  }); 
					}
				},
				error: function() {
					 alert("An error occurred while processing JSON file.");
				}
			  });
		}
	  });   
	  //*/	
	});


	$(document).on('submit','#formaddcontact',function(e) {	
		e.preventDefault();
		e.stopPropagation();

		var name = $("#name").val();
		var email = $("#email").val();
		var mobileno = $("#mobileno").val();

		//validation
		//return

		var obj = new Object();
		obj.name = name;
		obj.email = email;
		obj.mobileno = mobileno;

      $.ajax({
         type: "POST",
         url: "http://localhost/superhero/api/contacts",
         dataType: "json",
         data: JSON.stringify(obj), 
         success: function(data){   

         	if (data.insertstatus) {
         		bootbox.alert("Contact insertion successful!", function(answer) {
         			//location.href= "/#contacts";  
         			$("#formaddcontact")[0].reset();	
         		});         		
         	} else {
         		bootbox.alert("Contact insertion failed!\n" + data.error);
         		$("#formaddcontact")[0].reset();			
         	}     
     		},
         error: function() {
         	alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });			
	});


//parent followed by the dynamic content
$(document).on("click", "#tbl1 tbody i", function() {
	//             span    a        td       tr  
  var parentTR = $(this).parent().parent().parent();
  var contactid = $(this).data("contactid");

  //*
 bootbox.confirm("Are you sure you want to delete the contact?", function(answer) {
	if (answer) {

		  $.ajax({
			type: 'DELETE',
			url: "http://localhost/superhero/api/contacts/" + contactid,
			dataType: "json",
			success: function(data){
				if (data.deletestatus) {
				  $(parentTR).fadeOut("slow", "swing", function(){
					  $(parentTR).remove();
				  }); 
				}
			},
			error: function() {
				 alert("An error occurred while processing JSON file.");
			}
		  });
	}
  });   
  //*/	
});
	



	$(document).on('submit','#formupdatecontact',function(e) {	
		e.preventDefault();
		e.stopPropagation();

		var contactid = $("#contactid").val();
		var name = $("#name").val();
		var email = $("#email").val();
		var mobileno = $("#mobileno").val();

		//validation
		//return

		var obj = new Object();
		obj.name = name;
		obj.email = email;
		obj.mobileno = mobileno;

      $.ajax({
         type: "PUT",
         url: "http://localhost/superhero/api/contacts/" + contactid,
         dataType: "json",
         data: JSON.stringify(obj), 
         success: function(data){   

         	if (data.updatestatus) {
         		bootbox.alert("Contact update successful!", function(answer) {
         		});         		
         	} else {
         		bootbox.alert("Contact insertion failed!\n" + data.error);		
         	}     
     		},
         error: function() {
         	alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });			
	});	

	//parent followed by the dynamic content
  	$(document).on("click", "#tbl1 tbody i", function() {
  		//             span    a        td       tr  
    	var parentTR = $(this).parent().parent().parent();
    	var contactid = $(this).data("contactid");

    	//*
	   bootbox.confirm("Are you sure you want to delete the contact?", function(answer) {
	      if (answer) {

	        	$.ajax({
	          	type: 'DELETE',
	          	url: "http://localhost/superhero/api/contacts/" + contactid,
	          	dataType: "json",
	          	success: function(data){
	              	if (data.deletestatus) {
	                	$(parentTR).fadeOut("slow", "swing", function(){
	                		$(parentTR).remove();
	                	}); 
	              	}
	          	},
	          	error: function() {
	           		alert("An error occurred while processing JSON file.");
	          	}
	        	});
	      }
    	});   
    	//*/	
  	});
});