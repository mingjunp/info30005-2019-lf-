function checkLogin() {
    $.ajax({
        url:'/api/users/checkLogin',
        type:'get',
        contentType: "application/json; charset=utf-8",
        dataType:'json',
        data:JSON.stringify(""),
        success:function(result){
            // login fail
            if (result.errno == -1){
                $('#nav-right').children('li').remove();
                $('#nav-right').append($(`<li><a data-toggle="modal" data-target="#login" href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            <li><a data-toggle="modal" data-target="#register" href=""><span class="glyphicon glyphicon-user"></span>Sign up</a></li>`));

            }
            // login success
            if (result.errno == 0){
                $('#nav-right').children('li').remove();
                $('#nav-right').append($(`<li><p class="navbar-text">Hi, <a href="#" class="navbar-link">`+ result.message +`</a></p></li>
                            <li><a href="#" onclick="logout()"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>`));
            }
            console.log(result);
        },
        error:function(e){
            console.log(e);
        },
    });
}