const mymodal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged")
const session = localStorage.getItem("session")

checklogged() 

//LOGAR NO SISTEMA

document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault()
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checksession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account){
        alert("Opss! Verifique o usuário ou a senha.")
        return
    }

    if(account){
        if(account.password !== password){
            alert("Opss! Verifique o usuário ou a senha.")
            return
        }

        saveSession(email, checksession)

        window.location.href = "home.html";
    }

    

})

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault()

    const email = document.getElementById("e-mail-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5) {
    alert("Preencha o campo com um e-mail válido")
    return
     }

     if(password.length < 4) {
         alert("Preencha a senha com no mínimo 4 digitos")
         return
     }

     salvarconta({
         login: email,
         password: password,
         transactions: []
     })
     mymodal.hide()

     alert("Conta criada com sucesso.");
});

function checklogged(){
    if(session){
        sessionStorage.setItem("logged", session)
        logged = session
    }

    if(logged){
        saveSession(logged, session)

        window.location.href = "home.html"
    }
}

function salvarconta(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data)
    }

    sessionStorage.setItem("logged", data)
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }
    
    return "";
}

