$(document).ready(function () {
  $('#addRow').show();
  function checkInternetConnection(){
  var status = navigator.onLine;
  if (status) {
      $(':button').prop('disabled', false);
    } else {
      $(':button').prop('disabled', true);
      $.toast({ text: 'Kindly Check your Internet Connection', heading: 'Internet Disconnected', icon: 'error', showHideTransition: 'fade', allowToastClose: false, hideAfter: 1000, stack: false, position: 'top-right', textAlign: 'left', loader: false, loaderBg: '#9EC600' });
    }  
    setTimeout(function() {
        checkInternetConnection();
    }, 1000);
  }
  checkInternetConnection();

    $("#loading").fadeOut("slow");

    var t = $('#example').DataTable();
    var counter = 1;
 
    $('#addRow').on('click', function () {
        t.row.add([counter + '.1', counter + '.2', counter + '.3', counter + '.4', counter + '.5']).draw(false);
        counter++;
    });
 
    $("#manage_Retailer").hide();
    $("#r_profile_form :input").prop("disabled", true);
    $("#r_profile_action :input").prop("disabled", false);

    $('#managedistributor').DataTable();
    $("#manage_Distributor").hide();
    $("#d_profile_form :input").prop("disabled", true);
    $("#d_profile_action :input").prop("disabled", false);

});

let usernameError = true;
let phone_numberError = true;
let emailError = true;
let passwordError = true;
let verify_otpError = true;
let loginPasswordError = true;
let loginUsernameError = true;

$("#login_username").keyup(function () {
    validateLoginUsername();
});

$("#login_password").keyup(function () {
  validateLoginPassword();
});

$("#username").keyup(function () {
  validateUsername();
});

$("#verify_otp").keyup(function () {
  var newotp = $(this).val().replace(".", ""); 
	$(this).val(newotp); 
  validateOtp();
});

$("#phone_number").keyup(function () {
    var newVal = $(this).val().replace(".", ""); 
	$(this).val(newVal); 
    validatePhoneNumber();
});
$("#email").keyup(function () {
    validateEmail();
});
$("#password").keyup(function () {
    validatePassword();
});

function validateLoginUsername() {
  let loginUsernameValue = $("#login_username").val();
  if (loginUsernameValue.length === "" || $.trim(loginUsernameValue) === "") {
    $("#login_username_check").html("phone number or username is required");
    $("#login_username").focus();
    loginUsernameError = false;
    return false;
  } else if (loginUsernameValue.length < 3 || loginUsernameValue.length > 10) {
    $("#login_username_check").show();
    $("#login_username_check").html("Length of phone number or username must be between 3 and 10");
    $("#login_username").focus();
    loginUsernameError = false;
    return false;
  } else {
    loginUsernameError = true;
    $("#login_username_check").hide();
  }
}

function validateLoginPassword() {
  let loginPasswordValue = $("#login_password").val();
  if (loginPasswordValue.length === "" || $.trim(loginPasswordValue) === "") {
    $("#login_password_check").html("Password is required");
    $("#login_password").focus();
    loginPasswordError = false;
    return false;
  } else if (loginPasswordValue.length < 8 || loginPasswordValue.length > 20) {
    $("#login_password_check").show();
    $("#login_password_check").html("Length of Password must be between 8 and 20");
    $("#login_password").focus();
    loginPasswordError = false;
    return false;
  } else {
    loginPasswordError = true;
    $("#login_password_check").hide();
  }
}

function validateUsername() {
    let usernameValue = $("#username").val();
    if (usernameValue.length === "" || $.trim(usernameValue) === "") {
      $("#username_check").html("Username is required");
      $("#username").focus();
      usernameError = false;
      return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
      $("#username_check").show();
      $("#username_check").html("Length of username must be between 3 and 10");
      $("#username").focus();
      usernameError = false;
      return false;
    } else {
      usernameError = true;
      $("#username_check").hide();
    }
}

function validatePhoneNumber() {
   
    let phone_numberValue = $("#phone_number").val();
    if (phone_numberValue.length == "") {
      $("#phone_number_check").html("Phone number is required");
      $("#phone_number").focus();
      phone_numberError = false;
      return false;
    } else if (phone_numberValue.length < 10 || phone_numberValue.length > 10 ) {
      $("#phone_number_check").show();
      $("#phone_number_check").html("Length of phone number must be between 10 digits");
      $("#phone_number").focus();
      phone_numberError = false;
      return false;
    } else {
      phone_numberError = true;
      $("#phone_number_check").hide();
    }
}

function validateOtp() {
   
  let verify_otpValue = $("#verify_otp").val();
  if (verify_otpValue.length == "") {
    $("#verify_otp_check").html("OTP is required");
    $("#verify_otp").focus();
    verify_otpError = false;
    return false;
  } else if (verify_otpValue.length < 6 || verify_otpValue.length > 6 ) {
    $("#verify_otp_check").show();
    $("#verify_otp_check").html("Length of OTP must be between 6 digits");
    $("#verify_otp").focus();
    verify_otpError = false;
    return false;
  } else {
    verify_otpError = true;
    $("#verify_otp_check").hide();
  }
}


function validateEmail() {
    let emailValue = $("#email").val();
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (emailValue.length == "") {
      $("#email_check").html("Email is required");
      $("#email").focus();
      emailError = false;
      return false;
    } else if (emailValue.length < 3 || emailValue.length > 40) {
      $("#email_check").show();
      $("#email_check").html("Length of email must be between 3 and 40");
      $("#email").focus();
      emailError = false;
      return false;
    } 
    else if (regex.test(emailValue)) {
        $("#email_check").hide();
        emailError = true;
    } else {
        $("#email_check").html("Invalid email");
        emailError = false;
    }
}

function validatePassword() {
    let passwordValue = document.getElementById("password").value;
    if (passwordValue.length == "") {
      $("#password_check").html("Password is required");
      $("#password").focus();
      passwordError = false;
      return false;
    } else if (passwordValue.length < 8 || passwordValue.length > 20) {
      $("#password_check").show();
      $("#password_check").html("Length of password must be between 8 and 20");
      $("#password").focus();
      passwordError = false;
      return false;
    } else {
      passwordError = true;
      $("#password_check").hide();
    }
}

$('#signup').on('click', function () {
    validateUsername();
    validatePhoneNumber();
    validateEmail();
    validatePassword();
    if (
      usernameError === true && phone_numberError === true && emailError === true &&
      passwordError === true
    ) {
        return true;
    } else {
      return false;
    }
});

$('#verifyOtp').on('click', function () {
  validateOtp();
  if (verify_otpError === true) {
    return true;
  } else {
    return false;
  }
});

$('#login_btn').on('click', function () {
  validateLoginUsername();
  validateLoginPassword()
  if (loginUsernameError === true && loginPasswordError === true) {
    return true;
  } else {
    return false;
  }
});

// function otpvalidation () { 
//   $.ajax({
//     type: "GET",
//     url: "verifyOtp",
//     data: {
//       "type":"verify",
//       "key" : $('#temp').val(),
//       "_token": "{{ csrf_token() }}",
//       "otp" :  $("#verify_otp").val(),
//     },
//     dataType: 'json',
   
//     success: function (data) {
//         console.log(data);
//         if(data.status == true){
//             $.toast({ text: data.message, heading: 'Success', icon: 'success', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
//             $("#loading").fadeOut("slow");
//             window.location.href = "admin/dashboard";
//         }
//         else{               
//             $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
//         }
//     },
//     error: function (jqXHR, exception) {
//        $("#loading").fadeOut("slow");
//        var response = jqXHR.responseText;
//        var obj = JSON.parse(response);
//        var message = obj.message;
//        $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
//     }
//  }); 
// }

// function registeration (register) {
//     $.ajax({
//         type: "POST",
//         url: "authentication",
//         data: {
//           "username" : $("#username").val(),
//           "phone_number" : $("#phone_number").val(),
//           "email" : $("#email").val(),
//           "password" : $("#password").val(),
//         },
//         headers: {
//           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         },
//         dataType: 'json', 
//         success: function (data) {
//             // console.log(data);
//             if(data.status == true){
//                 $.toast({ text: data.message, heading: 'Success', icon: 'success', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
//                 $("#loading").fadeOut("slow");
//                 // alert(data.token);
//                 // alert($('#checkt').val());
//                 // $('#checkt').text(data.token);
//                 // document.getElementById("checkt").value = data.token;
//                 // alert($('#checkt').val());
//                 window.location.href = "verifyOtp/"+data.token;
//                 // window.location.href = "Otp/token="+data.token;
//             }
//             else{               
//                 $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
//             }
//         },
//         error: function (jqXHR, exception) {
//            $("#loading").fadeOut("slow");
//            var response = jqXHR.responseText;
//            var obj = JSON.parse(response);
//            var message = obj.message;
//            $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
//         }
//      }); 
// }

$('#example tbody').on('click', 'tr', function () {

    var value = $(this).closest("tr").find("td:eq(0)").text();
    var value2 = $(this).closest("tr").find("td:eq(1)").text();
    $("#example").hide();
    $("#example_wrapper").hide();
    $("#user_data").text(value);
    $(".provider_name").val(value2);
    $("#basic-icon-default-fullname").val(value);
    $("#manage_Retailer").show();
    $("#manage_Distributor").show();
    $('#addRow').hide();
} );

$('#managedistributor tbody').on('click', 'tr', function () {

    var value = $(this).closest("tr").find("td:eq(0)").text();
    $("#managedistributor").hide();
    $("#managedistributor_wrapper").hide();
    $("#user_data").text(value);
    $("#manage_Distributor").show();
    
} );

$('#user_data_back').on('click', function () {
    $('#addRow').show();
    $("#manage_Retailer").hide();
    $("#example").show();
    $("#example_wrapper").show();

});

$('#user_data_back1').on('click', function () {

    $("#manage_Distributor").hide();
    $("#managedistributor").show();
    $("#managedistributor_wrapper").show();
    
});

$('#r_profile_edit').on('click', function () {
    $("#r_profile_form :input").prop("disabled", false);
});

$('#d_profile_edit').on('click', function () {
    $("#d_profile_form :input").prop("disabled", false);
});


