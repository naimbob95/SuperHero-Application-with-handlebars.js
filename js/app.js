$(function(){

	if (!sessionStorage.token)
  		window.location.href = "http://localhost/superhero/login.html";	
  	else {
  		$("body").show();
		  $("#login").html(sessionStorage.login);
		  $("#roles").html(sessionStorage.roles);
	   }
	  
	   Handlebars.registerHelper("displayverify", function(verify) {
		var thestats = (verify);
		if (thestats === 0)        
		return "<span style='color: red; font-weight: bold'>disapprove</span>";
      else if (thestats === 1)        
         return "<span style='color: green; font-weight: bold'>approve</span>";
	});	  

	Handlebars.registerHelper("displayverifyuser", function(verify) {
		var thestats = (verify);
		if (thestats === 0)        
		return "<span style='color: red; font-weight: bold'>disapprove</span>";
      else if (thestats === 1)        
         return "<span style='color: green; font-weight: bold'>approve</span>";
	});	  
	

	// Handlebars.registerHelper("roleschecker", function(roles) {
	// 	var roles = sessionStorage.roles;
	// 	if (roles === "admin")        
		
	// 	return "<a href='javascript:;'><i class='fa fa-trash' aria-hidden='true' data-applicationid='{{ id }}'>";
		
		
	  
	// 	else if (roles === "superhero")        
	// 	return '';
	// });	  

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

	var route3 = crossroads.addRoute('/applications', function(){

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
	  var route3b = crossroads.addRoute('/applications/view/{id}', function(id){
  
		  $.ajax({
			  type: "GET",
			  url: "http://localhost/superhero/api/applications/" + id,
			  dataType: "json",
			  success: function(data){
					var applicationsViewFormTemplate = Handlebars.templates['applicationviewform']({
						id: id,
						name: data.name,
						cape: data.cape,
						superpower: data.superpower
					});
				  $('#divcontent').empty();
				  $('#divcontent').html(applicationsViewFormTemplate).hide().fadeIn(1000);
	  
				  $(".breadcrumb").empty();
				  $(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
				  $(".breadcrumb").append("<li><a href='#applications'>Applications</a></li>")
				  $(".breadcrumb").append("<li class='active'>View Application</li>");
	  
					$("#navbar li").removeClass('active');
					$("#navbar li a[href='#applications']").parent().addClass('active');	  					   
			  },
			  error: function() {
				  alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
			  }
		  });
	  });
	  var route3c = crossroads.addRoute('/applications/addapplication', function(){
  
		  var applicationsInsertFormTemplate = Handlebars.templates['applicationinsertform'];
	   $('#divcontent').empty();
	   $('#divcontent').html(applicationsInsertFormTemplate).hide().fadeIn(1000);
  
	   $(".breadcrumb").empty();
	   $(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
	   $(".breadcrumb").append("<li><a href='#applications'>Applications</a></li>")
	   $(".breadcrumb").append("<li class='active'>Add Application</li>");
  
		  $("#navbar li").removeClass('active');
		  $("#navbar li a[href=#applications]").parent().addClass('active');
   });



   var route3 = crossroads.addRoute('/applications', function(){

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


	
	var route7 = crossroads.addRoute('/admin', function(){

		$.ajax({
		   type: "GET",
		   url: "http://localhost/superhero/api/admin",
		   dataType: "json",
		   success: function(data){
				  var applicationsTemplate = Handlebars.templates['admin']({"applications": data});
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





	hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change

	/////////////////////// /////////////////////////////////////////

	$(document).on('submit','#formaddapplication',function(e) {	
		e.preventDefault();
		e.stopPropagation();

		var name = $("#name").val();
		var cape = $("input[name='cape']:checked").val();
		var mask = $("input[name='mask']:checked").val();
		var costume = $("input[name='costume']:checked").val();
		var superpower = $("#superpower").val();
		var verify = 0;
		

		//validation
		//return

		var obj = new Object();
		obj.name = name;
		obj.cape = cape;
		obj.mask = mask;
		obj.costume = costume;
		obj.superpower = superpower;
		obj.verify = verify;


      $.ajax({
         type: "POST",
         url: "http://localhost/superhero/api/applications",
         dataType: "json",
         data: JSON.stringify(obj), 
         success: function(data){   

         	if (data.insertstatus) {
         		alert("Application insertion successful!", function(answer) {
					 //location.href= "/#contacts"; 
         			$("#formaddapplication")[0].reset();	
         		});         		
         	} else {
         		alert("Application insertion failed!\n" + data.error);
         		$("#formaddapplication")[0].reset();			
         	}     
     		},
         error: function() {
         	alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });			
	});

	$(document).on('submit','#formupdateapplication',function(e) {	
		e.preventDefault();
		e.stopPropagation();

		var applicationid = $("#applicationid").val();
		var name = $("#name").val();
		var cape = $("input[name='cape']:checked").val();
		var mask = $("input[name='mask']:checked").val();
		var costume = $("input[name='costume']:checked").val();
		var superpower = $("#superpower").val();

		//validation
		//return

		var obj = new Object();
		obj.name = name;
		obj.cape = cape;
		obj.mask = mask;
		obj.costume = costume;
		obj.superpower = superpower;

      $.ajax({
         type: "PUT",
         url: "http://localhost/superhero/api/applications/" + applicationid,
         dataType: "json",
         data: JSON.stringify(obj), 
         success: function(data){   

         	if (data.updatestatus) {
         		bootbox.alert("Applications update successful!", function(answer) {
         		});         		
         	} else {
         		bootbox.alert("Application insertion failed!\n" + data.error);		
         	}     
     		},
         error: function() {
         	alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
         }
      });			
	});	


	$(document).on("click", "#tbl1 tbody i", function() {
		//             span    a        td       tr  
	//   var parentTR = $(this).parent().parent().parent();
	  var verifyid = $(this).data("verifyid");
	  var verify = 1;

	  var obj = new Object();
	
		obj.verify = verify;

	  
	 bootbox.confirm("Are you sure you want to active the application?", function(answer) {
		if (answer) {
		
			$.ajax({
				type: "PUT",
				url: "http://localhost/superhero/api/admin/" + verifyid,
				dataType: "json",
				data: JSON.stringify(obj), 
				success: function(data){   
	   
					if (data.updatestatus) {
						bootbox.alert("Contact update successful!", function(answer) {
						});        
						window.location.reload(); 		
					} else {
						bootbox.alert("Contact insertion failed!\n" + data.error);		
					}     
					},
				error: function() {
					alert("An error occurred while processing JSON file. MAIN ERROR!!!!");
				}
			 });
		
		}
	  });   
	  //*/	
	});




	$(document).on("click", "#tbl1 tbody span", function() {
		//             span    a        td       tr  
	  var parentTR = $(this).parent().parent().parent();
	  var applicationid = $(this).data("applicationid");

	  
	 bootbox.confirm("Are you sure you want to delete the application?", function(answer) {
		if (answer) {

			  $.ajax({
				type: 'DELETE',
				url: "http://localhost/superhero/api/admin/" + applicationid,
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