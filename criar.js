const fs = require('fs');
const path = require('path');

// Nomes dos alunos (substitua pelos nomes reais)
const nomesAlunos = ["ANDRE VINICIUS BARROS LOUREIRO",
     "ARTHUR HENRIQUE HOLANDA QUINILATO",
     "BRENO LIRA ROCHA",
     "CLARA LYRA SOUZA",
     "CRISTIAN ARAUJO ROQUE DE ALMEIDA",
     "DANILO HIPOLITO BARBOSA JATOBA",
     'DAVI FERNANDO COSTA MEDEIROS',
     'DAVID DANIEL BARROS PAIVA',
     'DAVID RAPHAEL SILVA',
     'ELOANY BEATRYZ LEMOS DOS SANTOS',
     'EMANUEL CAVALCANTE LOPES',
     'EWERTON ARTHUR PITA DA SILVA',
     'GABRIEL HENRY DIAS FERREIRA',
     'GABRIEL VITOR SANTOS BARROS PEREIRA',
     'GLEICY VITORIA BARROS GOMES',
     'ITAUANNY RAFAELLE DE JESUS OLIVEIRA',
     'JOAO GABRIEL DE MESSIAS ARENA SILVA',
     'JOAO VICTOR FRANCA GALVAO',
     'JOAO VITOR SILVA MEDEIROS',
     'JOSE MATEUS RODRIGUES FERNANDES VIEIRA',
     'JULIO CEZAR CORREA BRASIL',
     'KAUA EMANUEL VICENTE CRESCENCIO',
     'KAUE GOMES DE ANDRADE',
     'LARISSA PROCOPIO MOTA',
     'LAURA STHEFANY CAVALCANTI SILVA',
     'LEVI BARRETO DE ANDRADE',
     'LINCOLN GOMES PEREIRA',
     'LUCAS EMANUEL OLIVEIRA DA GRACA',
     'LUIS FERNANDO LIMA FREIRE',
     'MARIA EDUARDA MONTEIRO DO NASCIMENTO BARBOSA',
     'MARILIA BARROSO DE ARAUJO',
     'MATHEUS PEDROSA DE LIMA PEREIRA',
     'NYCOLAS MENEZES ARAUJO',
     'PAULO GABRIEL SOARES ARAUJO',
     'PAULO VINICIUS DOS SANTOS GOES',
     'PEDRO MEIRELES FARIAS',
     'RAPHAELE VIEIRA FIRMINO',
     'VINICIUS MATIAS FERRO',
     'YAN GABRIEL DE OLIVEIRA FORTALEZA'
    ];

// Caminho da pasta "Alunos"
const caminhoPastaAlunos = path.join(__dirname, "Alunos");

// Verifica se a pasta "Alunos" já existe; se não, cria-a
if (!fs.existsSync(caminhoPastaAlunos)) {
    fs.mkdirSync(caminhoPastaAlunos);
}

// Cria uma pasta para cada aluno dentro da pasta "Alunos"
nomesAlunos.forEach(nomeAluno => {
    const caminhoAluno = path.join(caminhoPastaAlunos, nomeAluno);
    fs.mkdirSync(caminhoAluno);
    console.log(`Pasta criada para o aluno: ${nomeAluno}`);
});

console.log("Pastas dos alunos foram criadas com sucesso!");