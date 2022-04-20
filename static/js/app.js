const userDate = 'admin';
const passwdDate = 'admin';

$("#submit").on('click', function (e) {
    e.preventDefault();
    let user = document.getElementById("user");
    let pass = document.getElementById("passwd");
    let msg = document.getElementById("msg_result");
    msg.style.display = 'block';
    pass.disabled = true;
    user.disabled = true;
    if (user.value === '') {
        msg.innerHTML = 'Preencher os campos. (Usuário)';
        setTimeout(() => {
            console.log(true);
            msg.style.display = 'none';
            user.disabled = false;
            pass.disabled = false;
        }, 1000);
    }
    else {
        if (pass.value === '') {
            msg.innerHTML = 'Preencher os campos. (Senha)';
            setTimeout(() => {
                msg.style.display = 'none';
                user.disabled = false;
                pass.disabled = false;
            }, 1000);
        }
        else {

            if (user.value === userDate) {

                if (pass.value === passwdDate) {
                    msg.innerHTML = 'Logado com sucesso!!!';
                    msg.style.color = 'green';
                }

                else {
                    msg.innerHTML = 'Usuário e Senha incorreta.';
                    setTimeout(() => {
                        msg.style.display = 'none';
                        user.disabled = false;
                        pass.disabled = false;
                    }, 1000);
                }
            }
            else {
                    msg.innerHTML = 'Usuário e Senha incorreta.';
                    setTimeout(() => {
                        msg.style.display = 'none';
                        user.disabled = false;
                        pass.disabled = false;
                    }, 1000);
                }



        }
    }

})
