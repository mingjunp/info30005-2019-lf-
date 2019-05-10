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
                        url: "http://192.168.1.106:3000/api/users/checkUserName",
                        message: 'username exist, please try again',
                        delay: 1000,//ajax request every 1 second
                        type: 'GET',
                        data: function(validator) {
                            return {
                                userName : $("#ruserName").val(),
                            };
                        }
                    }
                }
            },
            password: {
                validators: {
                    identical: {
                        field: 'password2',
                        message: 'consist your password'
                    }
                }
            },
            password2: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'consist your password'
                    }
                }
            }
        },
    })
}

function singup(){

    var flag = $('#register').data('bootstrapValidator').isValid()//验证是否通过true/false
    if (flag == false){
        return;
    } else{
        var formObject = {};
        var formArray =$("#myForm").serializeArray();
        $.each(formArray,function(i,item){
            formObject[item.name] = item.value;
        });
        $.ajax({
            url:'http://192.168.1.106:3000/api/users/createUser',
            type:'post',
            contentType: "application/json; charset=utf-8",
            dataType:'json',
            data:JSON.stringify(formObject),
            success:function(result){
                // sign up fail
                if (result.errno == -1){
                    alert(result.message);
                }
                // sign up success
                if (result.errno == 0){
                    //alert(result.data);
                    $('#infoModal').modal('show');
                    $('#register').modal('hide');
                }
                console.log(result);
            },
            error:function(e){
                console.log(e);
            },
        });
    }
}