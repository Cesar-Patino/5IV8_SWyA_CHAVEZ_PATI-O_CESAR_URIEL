function procesarV(operacion){
    let mensaje = document.vigenere.mess.value;
    let key = document.vigenere.llave.value;
    let cifer = "";
    let dic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if(mensaje == ""){
        Swal.fire({
            icon: 'Error',
            title: 'Falta data',
            text: 'Falta el mensaje',
        });
    }else if(key == ""){
        Swal.fire({
            icon: 'Error',
            title: 'Falta data',
            text: 'Falta el mensaje',
        });
    }else{
        let j = 0;

        for(let i=0;i<mensaje.length;i++){
            if(mensaje[i] == " "){
                cifer += " ";
            }else{
                if(operacion == "c"){
                    cifer += dic[(dic.indexOf(mensaje[i]) + dic.indexOf(key[j])) % 26];
                }else if(operacion == "d"){
                    if((dic.indexOf(mensaje[i]) - (dic.indexOf(key[j])) % 26) < 0){
                        cifer += dic[26 + (dic.indexOf(mensaje[i]) - (dic.indexOf(key[j])) % 26)];
                    }else{
                        cifer += dic[(dic.indexOf(mensaje[i]) - (dic.indexOf(key[j])) % 26)];
                    }
                }
                j++;
                if(j == key.length) j = 0;
            }
        }
        document.vigenere.rs.value = cifer;
    }

    return false;
}

function validarc(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[a-z]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}