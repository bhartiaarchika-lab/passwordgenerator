function generatePassword(){
     let data = "";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "!@#$%&*";

    if(document.getElementById("upper").checked)
        data = data + upper;

    if(document.getElementById("lower").checked)
        data = data + lower;

    if(document.getElementById("number").checked)
        data = data + number;

    if(document.getElementById("symbol").checked)
        data = data + symbol;

    if(data==""){
        alert("Select at least one option");
        return;
    }

    let len =
    document.getElementById("length").value;
    let password = "";

    for(let i=0;i<len;i++){

        let random =
        Math.floor(Math.random()*data.length);

        password = password + data[random];
    }

    document.getElementById("password").value =
    password;
}