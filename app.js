let accontnumber = localStorage.getItem('logined');
let user = JSON.parse(localStorage.getItem(accontnumber));
let username = user.username;
usernamedisplay.innerHTML = username ? `Welcome, ${username}, to Your Online Bank` : "User not found";
usernamesheet.innerHTML = `Name: ${username}`;
accontnumbersheet.innerHTML = `Account Number: ${accontnumber}`;

function deposite() {
    if (!user.balance) {
        user.balance = 0;
    }
    let deposite = Number(depositeamount.value);
    if (deposite <= 0 || (deposite == '')) {
        alert("Enter a valid amount to add to your account");
    } else {
        user.balance += deposite;
        localStorage.setItem(accontnumber, JSON.stringify(user));
        alert(deposite ? `Amount Added: Rs:${deposite}` : `The Entery is Not A Number`);
        depositeamount.value = '';
        showbalance();
    }
}

function showbalance() {
    showbalancesheet.innerHTML = user.balance ? `Balance: Rs ${user.balance}` : `Balance: Rs 0`;
}

function withdraw() {
    let withdraw = Number(withdrawamount.value);
    if (withdraw <= 0 || (withdraw == '')) {
        alert("Enter a valid amount to withdraw from your account");
    } else if (withdraw > user.balance) {
        alert("Insufficient funds");
    } else {
        user.balance -= withdraw;
        localStorage.setItem(accontnumber, JSON.stringify(user));
        alert(withdraw ? `The Withdraw Amount: Rs:${withdraw}` : `The Entery is Not A Number`);
        alert(`After Withdrawal Balance Amount: Rs:${user.balance}`);
        withdrawamount.value = '';
        showbalance();
    }
}
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('logined');
    }
}

