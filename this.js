function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa1 = {
	nome: 'Marcia',
	idade: 30,
};

const pessoa2 = {
	nome: 'Carla',
	idade: 20,
};

const animal = {
	nome: 'Marley',
	idade: 3,
    raca: 'Golden'
};

console.log(calculaIdade.call(pessoa2));
