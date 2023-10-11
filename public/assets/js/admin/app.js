// before page load start

$(document).ready(function () {
    $('#provider_name_check').hide();
    $('#provider_email_check').hide();
    $('#provider_mobile_check').hide();
    $("#provider_edit_cancel").hide();
});

// before page load end

// provider page start 

function Add_Provider () { 
    $("#loading").fadeIn("slow");
    $.ajax({
    type: "POST",
    url: "/admin/add_provider",
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: {
        "Provider_Name":$("#Provider_Name").val(),
        "Provider_Email":$("#Provider_Email").val(),
        "Provider_Mobile_Number":$("#Provider_Mobile_Number").val(),
    },
    dataType: 'json',
    
    success: function (data) {
        console.log(data);
        if(data.status == true){
            $.toast({ text: data.message, heading: 'Success', icon: 'success', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
            $("#loading").fadeOut("slow");
            location.reload();
        }
        else{  
            $("#loading").fadeOut("slow");             
            $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#F21915' });
        }
    },
    error: function (jqXHR, exception) {
        $("#loading").fadeOut("slow");
        var response = jqXHR.responseText;
        var obj = JSON.parse(response);
        var message = obj.message;
        $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
    }
    }); 
}

$("#Add_Provider").on('click', function () {
    provider_name_validation();
    provider_email_validation();
    provider_mobile_validation();
    if (
        Provider_Name_Error == false &&
        Provider_Email_Error == false &&
        Provider_Mobile_Error == false
    ) {
        Add_Provider ();
    } else {
        return false;
    }
});

let Provider_Name_Error = false;
let Provider_Email_Error = false;
let Provider_Mobile_Error = false;

$("#Provider_Name").keyup(function () {
    provider_name_validation();
});

$("#Provider_Email").keyup(function () {
    provider_email_validation();
});

$("#Provider_Mobile_Number").keyup(function () {
    provider_mobile_validation();
});

$('#provider_model_close_icon').click(function (){
    $('#Provider_Name').val('');
    $('#Provider_Email').val('');
    $('#Provider_Mobile_Number').val('');
    $('#provider_name_check').hide();
    $('#provider_email_check').hide();
    $('#provider_mobile_check').hide();
});

$('#provider_model_cancel_btn').click(function () {
    $('#Provider_Name').val('');
    $('#Provider_Email').val('');
    $('#Provider_Mobile_Number').val('');
    $('#provider_name_check').hide();
    $('#provider_email_check').hide();
    $('#provider_mobile_check').hide();
});

function provider_name_validation() {
    var Provider_Name = $('#Provider_Name').val();
    if(Provider_Name.length == 0){
        Provider_Name_Error = true;
        $('#provider_name_check').show();
        $('#provider_name_check').text('Please Enter Provider Name');
    }else if(Provider_Name.length < 3 || Provider_Name.length > 40){
        Provider_Name_Error = true;
        $('#provider_name_check').show();
        $('#provider_name_check').text('Length of provider name must be between 3 and 40');
    }else{
        Provider_Name_Error = false;
        $('#provider_name_check').hide();
    }
}

function provider_email_validation() {
    var Provider_Email = $('#Provider_Email').val();
    let validate_email = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if(Provider_Email.length == ''){
        Provider_Email_Error = true;
        $('#provider_email_check').show();
        $('#provider_email_check').text('Please Enter Provider Email');
    }else if(Provider_Email.length < 5 || Provider_Email.length > 40){
        Provider_Email_Error = true;
        $('#provider_email_check').show();
        $('#provider_email_check').text('Length of provider Email must be between 3 and 40');
    }else if(validate_email.test(Provider_Email) == false){
        Provider_Email_Error = true;
        $('#provider_email_check').show();
        $('#provider_email_check').text('Please enter valid Email');
    }else{
        Provider_Email_Error = false;
        $('#provider_email_check').hide();
    }
}

function provider_mobile_validation() {
    var Provider_Mobile = $('#Provider_Mobile_Number').val();
    if(Provider_Mobile.length == ''){
        Provider_Mobile_Error = true;
        $('#provider_mobile_check').show();
        $('#provider_mobile_check').text('Please Enter Provider Mobile Number');
    }else if(Provider_Mobile.length < 10 || Provider_Mobile.length > 10){
        Provider_Mobile_Error = true;
        $('#provider_mobile_check').show();
        $('#provider_mobile_check').text('Length of Provider Mobile Number must be 10 digit');
    }else{
        Provider_Mobile_Error = false;
        $('#provider_mobile_check').hide();
    }
}

let selected_provider = "";

function provider_action(){
    $("#loading").fadeIn("slow");
    $.ajax({
        type: "POST",
        url: "/admin/provider_status",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            "status":0,
            "provider_id":selected_provider,
        },
        dataType: 'json',
        
        success: function (data) {
            console.log(data);
            if(data.status == true){
                $.toast({ text: data.message, heading: 'Success', icon: 'success', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
                $("#loading").fadeOut("slow");
                $('#Confirmation_model').modal('hide');
                location.reload();
            }
            else{  
                $("#loading").fadeOut("slow");             
                $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#F21915' });
            }
        },
        error: function (jqXHR, exception) {
            $("#loading").fadeOut("slow");
            var response = jqXHR.responseText;
            var obj = JSON.parse(response);
            var message = obj.message;
            $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
        }
        }); 
};   

$('tr #provider_handle_off').click(function () {
    $('#Provider_Table_List tbody').on('click', 'tr', function () {
        selected_provider = $(this).closest("tr").find("td:eq(0) input").val();
    });
    if($("tr #provider_handle_off").prop('checked') == false){
        $('#provider_handle_label_off').text('OFF');
        var html = ' <div class="modal-header">'+
        '<h5 class="modal-title" id="modalCenterTitle">Confirmation</h5>'+
        '<button'+
         ' type="button"'+
          'class="btn-close"'+
          'data-bs-dismiss="modal"'+
          'aria-label="Close"'+
          
        '></button>'+
      '</div>'+
      '<div class="modal-body">'+
       ' <div class="row">'+
        '  <div class="col">'+
         '   <center><h4>Do you want to continue?</h4></center><br>'+
          '  <center><h6>All services related to this provider will be <strong>Turned OFF</strong> </h6></center>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="modal-footer">'+
       ' <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">'+
        'No, I Need'+
        '</button>'+
        '<button type="button" onclick=provider_action(); class="btn btn-primary">Yes, Proceed</button>'+
      '</div>';
        $('#Confirmation_model .modal-content').html(html);
        $('#Confirmation_model').modal('show');
     }else{
        $('tr #provider_handle_label_on').text('ON');
        var html = ' <div class="modal-header">'+
        '<h5 class="modal-title" id="modalCenterTitle">Confirmation</h5>'+
        '<button'+
         ' type="button"'+
          'class="btn-close"'+
          'data-bs-dismiss="modal"'+
          'aria-label="Close"'+
          
        '></button>'+
      '</div>'+
      '<div class="modal-body">'+
       ' <div class="row">'+
        '  <div class="col">'+
         '   <center><h4>Need atleast one service to Turned ON this provider</h4></center><br>'+
          '  <center><h6>Add service for this provider and try again</h6></center>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>'+
      '</div>';
        $('#Confirmation_model .modal-content').html(html);
        $('#Confirmation_model').modal('show');
     }
});

$('tr #provider_handle_on').click(function () {
    $('#Provider_Table_List tbody').on('click', 'tr', function () {
        selected_provider = $(this).closest("tr").find("td:eq(0) input").val();
    });
    if($("tr #provider_handle_off").prop('checked') == false){
        $('#provider_handle_label_off').text('OFF');
        var html = ' <div class="modal-header">'+
        '<h5 class="modal-title" id="modalCenterTitle">Confirmation</h5>'+
        '<button'+
         ' type="button"'+
          'class="btn-close"'+
          'data-bs-dismiss="modal"'+
          'aria-label="Close"'+
          
        '></button>'+
      '</div>'+
      '<div class="modal-body">'+
       ' <div class="row">'+
        '  <div class="col">'+
         '   <center><h4>Do you want to continue?</h4></center><br>'+
          '  <center><h6>All services related to this provider will be <strong>Turned OFF</strong> </h6></center>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="modal-footer">'+
       ' <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">'+
        'No, I Need'+
        '</button>'+
        '<button type="button" onclick=provider_action(); class="btn btn-primary">Yes, Proceed</button>'+
      '</div>';
        $('#Confirmation_model .modal-content').html(html);
        $('#Confirmation_model').modal('show');
     }else{
        $('tr #provider_handle_label_on').text('ON');
        var html = ' <div class="modal-header">'+
        '<h5 class="modal-title" id="modalCenterTitle">Confirmation</h5>'+
        '<button'+
         ' type="button"'+
          'class="btn-close"'+
          'data-bs-dismiss="modal"'+
          'aria-label="Close"'+
          
        '></button>'+
      '</div>'+
      '<div class="modal-body">'+
       ' <div class="row">'+
        '  <div class="col">'+
         '   <center><h4>Need atleast one service to Turned ON this provider</h4></center><br>'+
          '  <center><h6>Add service for this provider and try again</h6></center>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>'+
      '</div>';
        $('#Confirmation_model .modal-content').html(html);
        $('#Confirmation_model').modal('show');
     }
});

$("#provider_edit").click(function () {
    $("#provider_edit").hide();
    $("#Edit_Provider").show();
    $("#provider_edit_cancel").show();
    $("#Provider_Name").prop('disabled', false);
    $("#Provider_Email").prop('disabled', false);
    $("#Provider_Mobile_Number").prop('disabled', false);
});

$("#provider_edit_cancel").click(function () {
    $("#provider_edit").show();
    $("#Edit_Provider").hide();   
    $("#provider_edit_cancel").hide();
    $("#Provider_Name").prop('disabled', true);
    $("#Provider_Email").prop('disabled', true);
    $("#Provider_Mobile_Number").prop('disabled', true);
});

$("#Edit_Provider").on('click', function () {
    provider_name_validation();
    provider_email_validation();
    provider_mobile_validation();
    if (
        Provider_Name_Error == false &&
        Provider_Email_Error == false &&
        Provider_Mobile_Error == false
    ) {
        Edit_Provider ();
    } else {
        return false;
    }
});

function Edit_Provider () { 
    $("#loading").fadeIn("slow");
    $.ajax({
    type: "PUT",
    url: "/admin/edit_provider",
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    data: {
        "provider_id":$("#provider_id").val(),
        "Provider_Name":$("#Provider_Name").val(),
        "Provider_Email":$("#Provider_Email").val(),
        "Provider_Mobile_Number":$("#Provider_Mobile_Number").val(),
    },
    dataType: 'json',
    
    success: function (data) {
        console.log(data);
        if(data.status == true){
            $.toast({ text: data.message, heading: 'Success', icon: 'success', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
            $("#loading").fadeOut("slow");
            location.reload();
        }
        else{  
            $("#loading").fadeOut("slow");             
            $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#F21915' });
        }
    },
    error: function (jqXHR, exception) {
        $("#loading").fadeOut("slow");
        var response = jqXHR.responseText;
        var obj = JSON.parse(response);
        var message = obj.message;
        $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
    }
    }); 
}
// provider page end

// service page start 

$("#fetch_service_type").click( function () { 
    $("#service_type option").remove();
    $.ajax({
        type: "GET",
        url: "/admin/service_types",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'json',
        success: function (data) {
            if(data.status == true){
                $("#service_type").append("<option selected disabled value='0'>Select Service Type</option>");
                $.each(data.message, function(i,j) {
                    $("#service_type").append("<option value="+j['service_type_id']+">"+j['service_type_name']+"</option>");
                });
            }
            else{ 
                $("#Add_Service_Model").modal('hide');
                $("#loading").fadeOut("slow");             
                $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#F21915' });
            }
        },
        error: function (jqXHR, exception) {
            $("#Add_Service_Model").modal('hide');
            $("#loading").fadeOut("slow");
            var response = jqXHR.responseText;
            var obj = JSON.parse(response);
            var message = obj.message;
            $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
        }
    }); 
});

let Service_Name_Error = false;
let Service_Type_Error = false;

$("#Service_Name").keyup(function () {
    service_name_validation();
});

$("#service_type").change(function () {
    service_type_validation();
});

$("#Add_Service").click(function () {
    service_name_validation();
    service_type_validation();
    if (
        Service_Name_Error == false &&
        Service_Type_Error == false
    ) {
        Add_Service();
    } else {
        return false;
    }
});

function service_name_validation () {
    var service_name = $('#Service_Name').val();
    if(service_name.length == 0){
        Service_Name_Error = true;
        $('#service_name_check').show();
        $('#service_name_check').text('Please Enter Service Name');
    }else if(service_name.length < 3 || service_name.length > 40){
        Service_Name_Error = true;
        $('#service_name_check').show();
        $('#service_name_check').text('Length of service name must be between 3 and 40');
    }else{
        Service_Name_Error = false;
        $('#service_name_check').hide();
    }
}

function service_type_validation () {
    var service_type = $('#service_type').find(":selected").val();
    if(service_type == 0){
        Service_Type_Error = true;
        $('#service_type_check').show();
        $('#service_type_check').text('Please Select Service Type');
    }else{
        Service_Type_Error = false;
        $('#service_type_check').hide();
    }
}

function Add_Service () {
    $("#loading").fadeIn("slow");
    $.ajax({
        type: "POST",
        url: "/admin/add_service",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            "service_type":$('#service_type').find(":selected").val(),
            "service_name":$('#Service_Name').val(),
            "provider_id":$("#s_provider_id").val(),
        },
        dataType: 'json',
        success: function (data) {
            if(data.status == true){
                $("#loading").fadeOut("slow");
                $.toast({ text: data.message, heading: 'Success', icon: 'success', showHideTransition: 'fade', allowToastClose: true, hideAfter: 10000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
                location.reload();
            }
            else{  
                $("#loading").fadeOut("slow");             
                $.toast({ text: data.message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#F21915' });
            }
        },
        error: function (jqXHR, exception) {
            $("#loading").fadeOut("slow");
            var response = jqXHR.responseText;
            var obj = JSON.parse(response);
            var message = obj.message;
            $.toast({ text: message, heading: 'Error', icon: 'error', showHideTransition: 'fade', allowToastClose: true, hideAfter: 5000, stack: 5, position: 'top-right', textAlign: 'left', loader: true, loaderBg: '#9EC600' });
        }
    }); 
}
// service page end 