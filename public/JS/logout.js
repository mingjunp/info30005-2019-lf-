function logout() {
    $.ajax({
        url:'http://localhost:3000/api/users/logout',
        type:'get',
        contentType: "application/json; charset=utf-8",
        dataType:'json',
        success:function(result){
            // login fail
            if (result.errno == -1){
                alert(result.message);
            }
            // login success
            if (result.errno == 0){
                $('#nav-right').children('li').remove();
                $('#nav-right').append($(`<li><a data-toggle="modal" data-target="#login" href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            <li><a data-toggle="modal" data-target="#register" href=""><span class="glyphicon glyphicon-user"></span>Sign up</a></li>`));
            }
            console.log(result);
        },
        error:function(e){
            console.log(e);
        },
    });
}