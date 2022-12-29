function check(){
    var name = document.getElementById("username").value;
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
    if (name == ""){
        alert("請輸入使用者名稱");
        username.focus();
        return false;
    }
    if (pass1 == ""){
        alert("請輸入密碼");
        password1.focus();
        return false;
    }
    if (pass2 == ""){
        alert("請輸入密碼");
        password2.focus();
        return false;
    }
    if (name != "" && pass1 != "" && pass2 != ""){
        if (pass1 != pass2){
            password1.value = "";
            password2.value = "";
            alert("兩次密碼不相同，請重新輸入！");
            password1.focus();
            return false;
        }
        else{
            return true;
        }
    }
}