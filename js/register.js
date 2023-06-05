let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');
let confirm_password = document.getElementById('confirm_password');
let box_alert = document.getElementsByClassName('alert-danger')[0];
let alert_success = document.getElementsByClassName('alert-success')[0];
let url = window.location.search;
let urlSearch = new URLSearchParams(url);
let success = urlSearch.get("success");
let reg = /\w+@\w+.com/;
console.log('Danh ky ');
if (success == "1") {
    console.log('dang ky thanh cong');
    alert_success.style.display = 'block';
    alert_success.innerHTML = 'Đăng ký thành công:  <a href="./login.html">Đăng nhập ngay</a>';
}

function handelSubmit(e){
    if(email.value=='' && password.value==''){
        box_alert.innerHTML = 'Vui lòng nhập tài khoản và mật khẩu';
        box_alert.style.display = 'block';
        return false;
    }
    if (email.value == '') {
        box_alert.innerHTML = 'Vui lòng nhập tài khoản';
        box_alert.style.display = 'block';
        return false;
    } else {
        if (!reg.test(email.value)) {
            box_alert.innerHTML = 'Dinh dang email khong chinh xac';
            box_alert.style.display = 'block';
            return false;
        }
        
    }

    if(username.value == ''){
        box_alert.innerHTML='Vui lòng nhập tên người dùng';
        box_alert.style.display = 'block';
        return false;
    }
    if(password.value==''){
        box_alert.innerHTML = 'Vui lòng nhập mật khẩu';
        box_alert.style.display = 'block';
        return false;
    }
    if(confirm_password.value==''){
        box_alert.innerHTML = 'Vui lòng nhập mật khẩu xác nhận';
        box_alert.style.display = 'block';
        return false;
    }
    if(password.value !== confirm_password.value){
        box_alert.innerHTML = 'Mật khẩu và mật khẩu xác nhận không trùng khớp';
        box_alert.style.display = 'block';
        return false;
    }
    
        box_alert.innerHTML = '';
        return true;
}