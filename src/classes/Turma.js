class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }   

    aprovado(nota){
        return this.nota >= 6
    }
}

module.exports = Turma;