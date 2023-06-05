
let username = document.getElementById('email');
let password = document.getElementById('password');
let box_alert = document.getElementsByClassName('alert-danger')[0];
let url = window.location.search;
let urlSearch = new URLSearchParams(url);
let success = urlSearch.get("success");
let reg = /\w+@\w+.com/;
if ( success === "0" )
{
    console.log("email or password don't exactly");
    box_alert.style.display = 'block';
    box_alert.innerHTML = 'Tài khoản hoặc mật khẩu không chính xác';
}
function handelSubmit(e){
    if(username.value=='' && password.value==''){
        box_alert.innerHTML = 'Vui lòng nhập tài khoản và mật khẩu';
        box_alert.style.display = 'block';
        return false;
    }
    if (username.value == '') {
        box_alert.innerHTML = 'Vui lòng nhập tài khoản';
        box_alert.style.display = 'block';
        return false;
    } else {
        if (!reg.test(username.value)) {
            box_alert.innerHTML = 'Dinh dang email khong chinh xac';
            box_alert.style.display = 'block';
            return false;
        }
    }
    if(password.value==''){
        box_alert.innerHTML = 'Vui lòng nhập mật khẩu';
        box_alert.style.display = 'block';
        return false;
    } 
        box_alert.innerHTML = '';
        return true;
}