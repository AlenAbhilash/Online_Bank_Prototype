function login() {
    let key = accontnumber.value;
    let user = JSON.parse(localStorage.getItem(key));
    if (accontnumber.value === "" || passWord.value === "") {
        alert("Please Fill The Missing Fields");
    } else if (user && accontnumber.value === user.accontnumber && passWord.value === user.passWord) {
        alert("Login Successful");
        localStorage.setItem('logined', accontnumber.value);
        window.location = './home.html';
    } else {
        alert("Wrong Account Number or Password");
    }
}