empt = 'Name field can not be empty';
to_lng = 'Too long name field';
to_lng = 'Too long name field';
empt_mail = 'Too short (or empty) email address';
to_lng_mail = 'Too long email address';
incor = 'Incorrect email address';
mes_empt = 'message can not be empty';
to_lng_mes = 'Too long message';
mes_ok_send = 'Your message sended!';


// Javascript String constants for translation
/*
THEMEREX_GLOBAL_ERROR_TEXT		= "Global error text";
THEMEREX_NAME_EMPTY				= "The name can't be empty";
THEMEREX_NAME_LONG 				= "Too long name";
THEMEREX_EMAIL_EMPTY 			= "Too short (or empty) email address";
THEMEREX_EMAIL_LONG				= "Too long email address";
THEMEREX_EMAIL_NOT_VALID 		= "Invalid email address";
THEMEREX_MESSAGE_EMPTY 			= "The message text can't be empty";
THEMEREX_MESSAGE_LONG 			= "Too long message text";
THEMEREX_SEND_COMPLETE 			= "Send message complete!";
THEMEREX_SEND_ERROR 			= "Transmit failed!";
THEMEREX_LOGIN_EMPTY			= "The Login field can't be empty";
THEMEREX_LOGIN_LONG				= "Too long login field";
THEMEREX_PASSWORD_EMPTY			= "The password can't be empty and shorter then 5 characters";
THEMEREX_PASSWORD_LONG			= "Too long password";
THEMEREX_PASSWORD_NOT_EQUAL		= "The passwords in both fields are not equal";
THEMEREX_REGISTRATION_SUCCESS	= "Registration success! Please log in!";
THEMEREX_REGISTRATION_FAILED	= "Registration failed!";
THEMEREX_REGISTRATION_AUTHOR	= "Your account is waiting for the site admin moderation!";
THEMEREX_GEOCODE_ERROR 			= "Geocode was not successful for the following reason:";
THEMEREX_GOOGLE_MAP_NOT_AVAIL	= "Google map API not available!";
THEMEREX_NAVIGATE_TO			= "Navigate to...";
*/

function formValidate(form, opt) {
	var error_msg = '';
	form.find(":input").each(function() {
		if (error_msg!='' && opt.exit_after_first_error) return;
		for (var i = 0; i < opt.rules.length; i++) {
			if (jQuery(this).attr("name") == opt.rules[i].field) {
				var val = jQuery(this).val();
				var error = false;
				if (typeof(opt.rules[i].min_length) == 'object') {
					if (opt.rules[i].min_length.value > 0 && val.length < opt.rules[i].min_length.value) {
						if (error_msg=='') jQuery(this).get(0).focus();
						error_msg += '<div class="msInfo">' + (typeof(opt.rules[i].min_length.message)!='undefined' ? opt.rules[i].min_length.message : opt.error_message_text ) + '</div>'
						error = true;
					}
				}
				if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].max_length) == 'object') {
					if (opt.rules[i].max_length.value > 0 && val.length > opt.rules[i].max_length.value) {
						if (error_msg=='') jQuery(this).get(0).focus();
						error_msg += '<div class="msInfo">' + (typeof(opt.rules[i].max_length.message)!='undefined' ? opt.rules[i].max_length.message : opt.error_message_text ) + '</div>'
						error = true;
					}
				}
				if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].mask) == 'object') {
					if (opt.rules[i].mask.value != '') {
						var regexp = new RegExp(opt.rules[i].mask.value);
						if (!regexp.test(val)) {
							if (error_msg=='') jQuery(this).get(0).focus();
							error_msg += '<div class="msInfo">' + (typeof(opt.rules[i].mask.message)!='undefined' ? opt.rules[i].mask.message : opt.error_message_text ) + '</div>'
							error = true;
						}
					}
				}
				if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].equal_to) == 'object') {
					if (opt.rules[i].equal_to.value != '' && val!=jQuery(jQuery(this).get(0).form[opt.rules[i].equal_to.value]).val()) {
						if (error_msg=='') jQuery(this).get(0).focus();
						error_msg += '<div class="msInfo">' + (typeof(opt.rules[i].equal_to.message)!='undefined' ? opt.rules[i].equal_to.message : opt.error_message_text ) + '</div>'
						error = true;
					}
				}
				if (opt.error_fields_class != '') jQuery(this).toggleClass(opt.error_fields_class, error);
			}
		}
	});
	if (error_msg!='' && opt.error_message_show) {
		error_msg_box = form.find(".result");
		if (error_msg_box.length == 0) {
			error_msg_box = form.parent().find(".result");
			if (error_msg_box.length == 0) {
				form.append('<div class="result"></div>');
				error_msg_box = form.find(".result");
			}
		}
		if (opt.error_message_class) error_msg_box.toggleClass(opt.error_message_class, true);
		error_msg_box.html(error_msg).fadeIn();
		setTimeout("error_msg_box.fadeOut()", opt.error_message_time);
	}
	return error_msg!='';
}



	// contact form Validate
	jQuery(".form .enter").click(function (e) {
        userSubmitForm();
        e.preventDefault();
        return false;
    });



	function userSubmitForm() {
		var error = formValidate(jQuery(".form form"), {
			error_message_show: true,
			error_message_time: 5000,
			error_message_class: "sc_infobox sc_infobox_style_error",
			error_fields_class: "msError",
			exit_after_first_error: false,
			rules: [{
				field: "username",
				min_length: {
					value: 1,
					message: empt
				},
				max_length: {
					value: 160,
					message: to_lng
				}
			}, {
				field: "email",
				min_length: {
					value: 7,
					message: empt_mail
				},
				max_length: {
					value: 60,
					message: to_lng_mail
				},
				mask: {
					value: "^([a-z0-9_\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\-]+(\\.[a-z0-9_\-]+)*\\.[a-z]{2,6}$",
					message: incor
				}
			}, {
				field: "message",
				min_length: {
					value: 1,
					message: mes_empt
				},
				max_length: {
					value: 200,
					message: to_lng_mes
				}
			}]
		});
		if (!error) {
			var user_name = jQuery(".form #sendFormUsername").val();
			var user_email = jQuery(".form #sendFormEmail").val();
			var user_subject = jQuery(".form #sendFormSubject").val();
			var user_msg = jQuery(".form #sendFormMessage").val();
			var user_form_type =  ' - '+jQuery(".form form").attr('data-formType');
			var data = {
				action: "submit_contact_form",
				user_name: user_name,
				user_email: user_email,
				user_subject: user_subject,
				user_msg: user_msg,
				user_form_type: user_form_type
			};
			jQuery.post("include/sendmail.php", data, userSubmitFormResponse, "text");
		}
	}
	
	function userSubmitFormResponse(response) {
		var rez = JSON.parse(response);
		jQuery(".form .result")
			.toggleClass("sc_infobox_style_error", false)
			.toggleClass("infoboxBlockSuccess", false);
		if (rez.error == "") {
			jQuery(".form .result").addClass("infoboxBlockSuccess").html('<div class="msInfo">'+ mes_ok_send +'</div>');
			setTimeout("jQuery('.form .result').fadeOut(); jQuery('.form form').get(0).reset();", 3000);
		} else {
			jQuery(".form .result").addClass("sc_infobox_style_error").html("Transmit failed! " + rez.error);
		}
		jQuery(".form .result").fadeIn(); 
	}
	


	jQuery('.commForm form .enter').click( function(){
		jQuery(this).closest('form').submit();
		jQuery('html, body').animate({
		        scrollTop: jQuery(this).offset().top
		    }, 2000);

	})
		
	//comments Valid
	  jQuery('.commForm form').submit(function(e) {
	   var error = formValidate(jQuery(this), {
	    error_message_text: 'Global error text', // Global error message text (if don't write in checked field)
	    error_message_show: true,   // Display or not error message
	    error_message_time: 5000,   // Time to display error message
	    error_message_class: 'sc_infobox sc_infobox_style_error', // Class, appended to error message block
	    error_fields_class: 'msError',   // Class, appended to error fields
	    exit_after_first_error: false,   // Cancel validation and exit after first error
	    rules: [
	     {
	      field: 'author',
	      min_length: { value: 1,  message: empt },
	      max_length: { value: 160, message: to_lng}
	     },
	     {
	      field: 'email',
	      min_length: { value: 7,  message: empt_mail },
	      max_length: { value: 60, message: to_lng_mail},
	      mask: { value: "^([a-z0-9_\\-]+\\\.)*[a-z0-9_\\\-]+@[a-z0-9_\\-]+(\\\.[a-z0-9_\\-]+)*\\\.[a-z]{2,6}$", message: incor}
	     },
	     {
	      field: 'commentText',
	      min_length: { value: 1,  message: mes_empt },
	      max_length: { value: 9999, message: to_lng_mes}
	     }
	    ]
	   });
	   if (error) {e.preventDefault();}
	   return !error;
	  });

	//login valid
	jQuery('form.formValid .enter').click(function(e){
		"use strict";
		jQuery('form.formValid form input').removeClass('error_fields_class');
		var error = formValidate( jQuery("form.formValid form"), {
			error_message_show: true,
			error_message_time: 4000,
			error_message_class: "sc_infobox sc_infobox_style_error",
			error_fields_class: "msError",
			exit_after_first_error: true,
			rules: [
				{
					field: "registration_username",
					min_length: { value: 1, message: empt },
					max_length: { value: 60, message: to_lng }
				},
				{
					field: "registration_lastname",
					min_length: { value: 1, message: empt },
					max_length: { value: 60, message: to_lng }
				},
				{
					field: "registration_email",
					min_length: { value: 7, message: empt_mail },
					max_length: { value: 60, message: to_lng_mail },
					mask: { value: "^([a-z0-9_\\-]+\\.)*[a-z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$", message: to_lng_mail }
				},
				{
					field: "registration_pwd",
					min_length: { value: 4, message: empt },
					max_length: { value: 20, message: to_lng }
				}
			]
		});
		if (error) {
			document.forms.login_form.submit();
		}
		e.preventDefault();
		return !error;
	});

