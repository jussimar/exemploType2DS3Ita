namespace empresa{
    class Pessoa{
        private _nome: string;
        private _idade: number;
        private _cpf: string;

        public getNome(): string{
            return this._nome;
        }

        public setNome(nome: string): void{
            this._nome = nome;
        }

        public getIdade(): string{
            return this._nome;
        }

        public setIdade(idade: number): void{
            this._idade = idade;
        }

         public getCpf(): string{
            return this._cpf;
        }

        public setCpf(cpf: string): void{
            this._cpf = cpf;
        }

    }
  
}