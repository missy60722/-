function check(){
    var name = document.getElementById("username").value;
    var pass1 = document.getElementById("password1").value;
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
    else{
        var count = 0;
        var element = document.getElementsByName('identity');
        for(i = 0; i < element.length; i++) {
            if (element[i].checked){
                count += 1;
                if (element[i].value == 'Manager'){
                    form_login.action = "/Users/missy/大二上/軟體工程/軟體工程/Manager/manager.html";
                    form_login.submit();
                    return true;
                }
                else if (element[i].value == 'Staff'){
                    form_login.action = "/Users/missy/大二上/軟體工程/軟體工程/Staff/deskStep1.html";
                    form_login.submit();
                    return true;
                }
                else if (element[i].value == 'Chef'){
                    form_login.action = "/Users/missy/大二上/軟體工程/軟體工程/Chef/chef.html";
                    form_login.submit();
                    return true;
                }
            }
        }
        if (count == 0){
                alert("請選擇身份");
                return false;
        }
    }
}