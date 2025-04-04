document.getElementById("expressao").addEventListener("input", function() {
    try {
        let expressao = this.value;
        if (expressao.trim() !== "") {
            let resultado = eval(expressao);
            document.getElementById("resultado").innerHTML = "= " + resultado;
        } else {
            document.getElementById("resultado").innerHTML = "= ?";
        }
    } catch {
        document.getElementById("resultado").innerHTML = "= ?";
    }
});
