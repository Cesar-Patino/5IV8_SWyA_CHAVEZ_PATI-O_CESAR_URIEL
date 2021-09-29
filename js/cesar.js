function cifrarCesar(operacion){
    let mensaje = document.cesar.mensaje.value;
    let clave = document.cesar.clave.value;
    let res = "";
    let dic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if(mensaje == ""){
        Swal.fire({
            icon: 'error',
            title: 'Falta data hermano',
            text: 'No hermano, te falto el mensaje pai',
        });
    }else if(clave == ""){
        Swal.fire({
            icon: 'error',
            title: 'Falta data hermano',
            text: 'No hermano, te falto la clave pai',
        });
    }else{
        mensaje = mensaje.toLowerCase();
        clave = parseInt(clave);
        let pos = 0;
        for(let i=0;i<mensaje.length;i++){
            if(mensaje[i] == " "){
                res += " ";
            }else{
                if(operacion == "c"){
                    pos = dic.indexOf(mensaje[i]);
                    pos += clave;
                    pos %= 26;
                    res += dic[pos];
                }else if(operacion == "d"){
                    pos = dic.indexOf(mensaje[i]);
                    pos -= clave;
                    pos %= 26;
                    if(pos >= 0){
                        res += dic[pos];
                    }else{
                        res += dic[26 + pos];
                    }
                }
            }
        }
        document.cesar.resultado.value = res;
    }

    return false;
}