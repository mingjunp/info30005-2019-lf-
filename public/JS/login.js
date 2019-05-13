function login(){
    if(!$('#login-erro-info').hasClass("hide")){
        $('#login-erro-info').addClass("hide");
    }
    var formObject = {};
    var formArray =$("#login-form").serializeArray();
    $.each(formArray,function(i,item){
        formObject[item.name] = item.value;
    });
    $.ajax({
        url:'/api/users/login',
        type:'post',
        contentType: "application/json; charset=utf-8",
        dataType:'json',
        data:JSON.stringify(formObject),
        success:function(result){
            // login fail
            if (result.errno == -1){
                $('#login-erro-info').text(result.message);
                $('#login-erro-info').removeClass("hide");
            }
            // login success
            if (result.errno == 0){
                $('#nav-right').children('li').remove();
                $('#nav-right').append($(`<li><p class="navbar-text">Hi, <a href="api/users/userHomepage" class="navbar-link">`+ result.data.userName +`</a></p></li>
                            <li><a href="#" onclick="logout()"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>`));

                $('#login').modal('hide');
            }
            console.log(result);
        },
        error:function(e){
            console.log(e);
        },
    });
}