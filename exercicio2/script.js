const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

console.log('A) Primeiro ator/atriz: ', filme.elenco[0])
console.log('B) Ultimo ator/atriz: ', filme.elenco[3])
console.log('C) Programação: ', filme.transmissoesHoje)
console.log('D) Horario Canal Brasil: ', filme.transmissoesHoje[1].horario)