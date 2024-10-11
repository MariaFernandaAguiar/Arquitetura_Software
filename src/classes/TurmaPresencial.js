const Turma = require('./Turma');

class TurmaPresencial extends Turma{
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado(){
       return this.nota >= 6
    }
}

module.exports = TurmaPresencial;
