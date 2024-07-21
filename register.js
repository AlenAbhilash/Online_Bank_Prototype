function register() {
    let user = {
        username: username.value,
        accontnumber: accontnumber.value,
        passWord: passWord.value
    }
    if (user.username == "" || user.accontnumber == "" || user.passWord == "") {
        alert("Please Fill The Missing Fields")
    }
    else if (user.accontnumber in localStorage) {
        alert("Already Register")
    }
    else {
        localStorage.setItem(user.accontnumber, JSON.stringify(user));
        alert("Registration Sucess");
        window.location = './login.html'
    } 


}