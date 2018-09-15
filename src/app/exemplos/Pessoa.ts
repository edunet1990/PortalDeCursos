class Pessoa {
    static total: number = 0;

    constructor(protected nome: string, protected idade: number){
        Pessoa.total += 1;
    } // e uma função que é executada toda vez qye crimos um objeto da class
}

class Aluno extends Pessoa{
    private curso: string;
    public setCurso(curso: string){
        this.curso = curso;
    }

    public getCurso() : string{
        return this.nome;
    }

    constructor(curso: string, nome: string, idade: number){
      super(nome, idade); //usamos o super para definir os dois parametros da class 
    }// criar todo estado icial de um objeto qdo for necessario

}

interface IPonto{
    x: number;
    y: number;

    ehQuadrado() : boolean;
}// é algo aprecido com uma classe começar com uma letraI, ela define apenas um template, um contrato

class Ponto implements IPonto{
    public x:number;
    public y:number;

    public ehQuadrado(): boolean{
        return this.x == this.y;
    }

}

class Teste {
    public testar(): void{
        let aluno = new Aluno("javascript","Emilio", 16);
        aluno.setCurso("Angular 4");

        let ponto = new Ponto();
        ponto.x = 10;
        ponto.y = 10;

        alert(ponto.ehQuadrado() ? "É um quadrado" : "Não é quadrado");
    }
    
        
    }