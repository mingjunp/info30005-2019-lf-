//initial form validation
$(document).ready(function () {
    formValidator();
    /*manual validate form when it is normal button*/
    $('#register').data('bootstrapValidator').validate();
});

//form validation rule
function formValidator() {
    $("#register").bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                message: 'fail',
                validators: {
                    notEmpty: {
                        message: 'username cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'cannot over 30 chars'
                    },
                    threshold: 2,//2 chars send ajax request
                    remote: {//ajax验证。server result:{"valid",true or false}
                        url: "/api/users/checkUserName",
                        message: 'username exist, please try again',
                        delay: 1000,//ajax request every 1 second
                        type: 'GET',
                        data: function (validator) {
                            return {
                                userName: $("#ruserName").val(),
                            };
                        }
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'password cannot be empty'
                    },
                    identical: {
                        field: 'password2',
                        message: 'consist your password'
                    }
                }
            },
            password2: {
                validators: {
                    notEmpty: {
                        message: 'password cannot be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'consist your password'
                    }
                }
            }
        },
    })
}


function singup() {

    var flag = $('#register').data('bootstrapValidator').isValid() //true/false
    if (flag == false){
        $('#register').data('bootstrapValidator').validate();
        return;
    } else {
        var formObject = {};
        var formArray = $("#myForm").serializeArray();
        $.each(formArray, function (i, item) {
            formObject[item.name] = item.value;
        });
        $.ajax({
            url: '/api/users/createUser',
            type: 'post',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data: JSON.stringify(formObject),
            success: function (result) {
                // sign up fail
                if (result.errno == -1) {
                    alert(result.message);
                }
                // sign up success
                if (result.errno == 0) {
                    //alert(result.data);
                    $('#infoModal').modal('show');
                    $('#register').modal('hide');
                    loginAftersignup(formObject);
                }
                console.log(result);
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
}

// make user login directly after signing up
function loginAftersignup(formObject) {
    $.ajax({
        url: '/api/users/login',
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(formObject),
        success: function (result) {
            // login fail
            if (result.errno == -1) {
                $('#login-erro-info').removeClass("hide");
            }
            // login success
            if (result.errno == 0) {
                $('#nav-right').children('li').remove();
                $('#nav-right').append($(`<li><p class="navbar-text">Hi, <a href="api/users/userHomepage" class="navbar-link">` + result.data.userName + `</a></p></li>
                            <li><a href="#" onclick="logout()"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>`));

                $('#login').modal('hide');
            }
            console.log(result);
        },
        error: function (e) {
            console.log(e);
        },
    });
}