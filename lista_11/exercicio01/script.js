function validarCampo(idCampo, expReg, classeSucesso, classeErro) {
    var valor = document.getElementById(idCampo).value;

    var estiloSucesso = '.' + classeSucesso + ' { background-color:#E2FFE1; color:#333333; border:green 1px solid; padding:3px; }';
    var estiloErro = '.' + classeErro + ' { background-color:#FFF4F4; border:#FF6666 1px solid; padding:3px; }';

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = estiloSucesso + estiloErro;
    document.getElementsByTagName('head')[0].appendChild(style);

    if (expReg.test(valor)) {
        if (classeSucesso === "") {
            document.getElementById(idCampo).className = 'classeGenericaSucesso';
        } else {
            document.getElementById(idCampo).className = classeSucesso;
        }
    } else if (classeErro === "") {
        document.getElementById(idCampo).className = 'classeGenericaErro';
    } else {
        document.getElementById(idCampo).className = classeErro;
    }
}
