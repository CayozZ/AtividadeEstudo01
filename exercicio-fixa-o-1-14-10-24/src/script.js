let nome = prompt("Olá, qual seu nome?")

let pesquisa = prompt("Olá " + nome + ", qual exame você deseja realizar? Temos as opções: hemograma, ultrassom, raio-x, ressonância magnética, tomografia, eletrocardiograma, endoscopia, colposcopia")

if (pesquisa = 'hemograma') {
  console.log("O exame de Hemograma custa R$50,00")
} 
else if (pesquisa = 'ultrassom') {
  console.log("O exame de Ultrassom custa R$120,00")
} 
else if (pesquisa = 'raio-x') {
  console.log("O exame de Raio-X custa R$90,00")
} 
else if (pesquisa = 'ressonância magnética') {
  console.log("O exame de Ressonância Magnética custa R$350,00")
} 
else if (pesquisa = 'tomografia') {
  console.log("O exame de Tomografia custa R$300,00")
} 
else if (pesquisa = 'eletrocardiograma') {
  console.log("O exame de Eletrocardiograma custa R$70,00")
} 
else if (pesquisa = 'endoscopia') {
  console.log("O exame de Endoscopia custa R$250,00")
} 
else if (pesquisa = 'colposcopia') {
  console.log("O exame de Colposcopia custa R$180,00")
} 
else {
  console.log("Desculpe, esse exame não está disponível no nosso catálogo de exames.")
}
