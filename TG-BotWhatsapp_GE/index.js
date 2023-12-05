let { Client } = require('whatsapp-web.js');
const { MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const stringSimilarity = require('string-similarity');
const mysql = require('mysql2');
const client = new Client();


const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'suasenha',
  database: 'botwhats'
});




const resp1 = [
  "A gestão empresarial é um processo fundamentado em planejamento e estratégias que visam alcançar melhores resultados para o negócio. Para isso, são realizadas ações para mensurar problemas, evitar falhas, corrigir erros e medir números.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "O curso de Gestão Empresarial na Fatec é gratuito, ou seja, não há cobrança de mensalidades, apenas um pagamento para a realização da prova ou caso não tenha condições, pode pedir isenção.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "Os formados no curso de Gestão Empresarial pela FATEC Ourinhos podem atuar em diversas áreas, tais como: Consultoria em seu próprio negócio, nos setores de turismo, comércio, indústria, entre outros. Empresas de pequeno porte. Modernização e continuidade de empresas familiares. Médias empresas da região. Setor público. Entidades particulares, como cooperativas e associações.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "A carga horária total do curso é de 2800 horas, distribuídas da seguinte forma: 2400 horas em aulas teóricas, 240 horas de Estágio Curricular e 160 horas dedicadas ao Trabalho de Graduação.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "O curso forma profissionais tecnólogos em Gestão Empresarial.\n\nDigite 0 - Voltar menu principal\nDigite 1 - Voltar menu anterior",
  "A duração mínima do curso de Gestão Empresarial na FATEC Ourinhos é de 3 anos, divididos em 6 semestres e no máximo 5 anos, divididos em 10 semestres.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "A plataforma utilizada para as aulas do curso de gestão empresarial é o TEAMS. A onde será fornecida uma conta para que você possa ter acesso à ela.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "O curso de Gestão Empresarial é oferecido na modalidade 100% online (EAD	), portanto, é necessário ter acesso à internet em um computador ou celular.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
  "O site de gestão empresarial da FATEC OURINHOS é: https://www.fatecourinhos.edu.br/cursos/gestao/\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
];

const resp2 = [
    "Para acessar suas notas, faltas e matérias, visite o site SIGA por meio do seguinte link: https://siga.cps.sp.gov.br/aluno/login.aspx. Em seguida, vá para a seção de Consultas e selecione o que deseja visualizar. Se você está acessando o SIGA pela primeira vez, insira seu RA (Registro Acadêmico) e senha, que são fornecidos pelo professor ou coordenador. Depois, o site solicitará a troca de senha, permitindo que você escolha uma senha de sua preferência.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
     "Se você deseja conhecer o projeto pedagógico do curso, pode acessar o site da Fatec Ourinhos (https://www.fatecourinhos.edu.br/cursos/gestao/) e baixar o PDF do projeto pedagógico.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
     "Cada docente adota seu próprio método de avaliação, mas todos seguem o mesmo critério: a média final do aluno para aprovação deve ser igual ou superior a 6, e a presença deve ser superior a 75%. Se a média for igual ou superior a 6, mas a presença for inferior a 75%, o aluno será automaticamente reprovado por excesso de faltas.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
     "Para obter detalhes sobre as disciplinas que serão abordadas ao longo dos 6 semestres do curso de Gestão Empresarial na Fatec Ourinhos, você pode acessar o seguinte link: https://www.fatecourinhos.edu.br/cursos/gestao/ e baixar o PDF do projeto pedagógico.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
     "Cada aula dura 50 minutos.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
];

const resp3 = [
    "Para entrar no curso de gestão empresarial é necessário se cadastrar para o vestibular e realizar o mesmo, segue o link: https://www.vestibularfatec.com.br/home/\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
    "São disponibilizadas 40 vagas para o curso de Gestão Empresarial.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
];

const resp4 = [
     "A coordenadora responsável pelo curso de gestão empresarial atual se chama Viviane Bartholo e para entrar em contato com ela segue o email: viviane.bartholo@fatecourinhos.edu.br.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
     "O número de telefone para entrar em contato com a faculdade para tirar dúvidas é: (14) 3512-2024, ou desejar utilize o seguinte e-mail: secretaria@fatecourinhos.edu.br\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
];

const resp5 = [
  "Para fazer o tutorial segue o link do vídeo: www.tutorialsiga.com.br\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",
];


const resp6 = [
  "Você escolheu dar sugestões, no máximo é possível registrar até 5 sugestões, se esse número for alcançado volte no próximo dia ! se deseja cancelar uma sugestão *digite 0*!",
];

const resp7 = [
  "Você escolheu a conversa livre, lembre-se o algoritmo ainda está sendo melhorado e erros podem acontecer, as respostas são baseadas nas já existentes no menu, caso faça uma pergunta e dê uma resposta errada ou não dê uma resposta, tente fazer a pergunta de outro jeito ou dê alguma sugestão de resposta.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior**",
];
const resp8 = [

  "*ADS NOTURNO/6º SEMESTRE*\n\n*Programação*\n\n *Paulo Henrique Amaro Vieira:* Fez toda a programação do algoritmo, banco de questões, hospedagem e implementação da aplicação no Whatsapp, Contato: (18)997935920.\n*RA:0210482113022*\n\n*Documentação*\n\n*Lourenço de Oliveira Deziró:* Fez a documentação do projeto e ajudou a melhorar o banco de questões.\n*RA:0210482113041*\n\n*Rodrigo Mota Garrido:* Ajudou com a documentação.\n*RA:0210482113026*\n\n\n*Orientadora*\n\n*Viviane Bartholo:* Forneceu o tema para o TG e ajudou na correção da documentação.\n\n*Digite 0 - Voltar menu principal*\n*Digite 1 - Voltar menu anterior*",

];



const respostas = [
  { resposta: "A coordenadora responsável pelo curso de gestão empresarial atual se chama Viviane Bartholo.", palavrasChave: { "nome": 5, "nome da pessoa":10, "pessoa":10, "quem":10, "coordenadora": 9,"cordenadora":9, "nome da coordenadora": 10,"coordenadora do curso":10, "viviane":9, "viviane bartholo":9, "responsável":9, "gere o curso":10,"gere":10,"gerindo":10, "gerenciamento":10, "chama a coordenadora":10, "manda":10,"coordenação":9,"cordenação":6,"coordena":9, "coordena":9, "encarregada":9 } },
  { resposta: "Para entrar em contato com a coordenadora do curso segue o email: viviane.bartholo@fatecourinhos.edu.br", palavrasChave: { "contato": 5, "email": 7,"e-mail":10, "coordenadora":7,"cordenadora":7,"contato da coordenadora":10, "email da coordenadora":10,"email da coordenação":10,"email da viviane":10,"viviane":5} },
  { resposta: "Para entrar no curso de gestão empresarial é necessário se cadastrar para o vestibular e realizar o mesmo, segue o link: https://www.vestibularfatec.com.br/home/", palavrasChave: { "curso": 10, "vestibulinho": 10, "cadastrar":10, "entrar":10,"entro":10,"entra":10, "realizar":10,"prova":9,"fazer":10,"faço":10,"feito":10 } },
  { resposta: "O nome do curso é gestão empresarial", palavrasChave: { "nome": 10, "curso": 10,"chama o curso":10 } },
  { resposta: "A duração mínima do curso de Gestão Empresarial na FATEC Ourinhos é de 3 anos, divididos em 6 semestres e no máximo 5 anos, divididos em 10 semestres.", palavrasChave: { "duração": 10, "semestres": 10, "semestre":10,"dura":5, "anos":10,"ano":10 } },
  { resposta: "O curso forma profissionais tecnólogos em Gestão Empresarial.", palavrasChave: { "perfil": 10, "profissional": 10,"profissionais":10, "forma":10 } },
  { resposta: "O site de gestão empresarial da FATEC OURINHOS é: https://www.fatecourinhos.edu.br/cursos/gestao/", palavrasChave: { "site": 10, "fatec ourinhos": 10, "fatec":10, "link":5 } },
  { resposta: "A carga horária total do curso é de 2800 horas, distribuídas da seguinte forma: 2400 horas em aulas teóricas, 240 horas de Estágio Curricular e 160 horas dedicadas ao Trabalho de Graduação.", palavrasChave: { "carga": 10, "horas": 10 ,"hora":10,"distribuida":10, "distribuidas":10} },
  { resposta: "A plataforma utilizada para as aulas do curso de gestão empresarial é o TEAMS. A onde será fornecida uma conta para que você possa ter acesso à ela.", palavrasChave: { "plataforma": 10, "aulas": 5, "teams":10,"lecionada":10, "onde":5, "dadas":5, "conta":5 } },
  { resposta: "Cada aula dura 50 minutos.", palavrasChave: {"ola":10, "duração": 8, "aula": 10, "aulas":10, "tempo":10, "minutos":10, "minuto":10 } },
  { resposta: "São disponibilizadas 40 vagas para o curso de Gestão Empresarial.", palavrasChave: {"vaga":10,"vagas":10,"disponibilizado":10,"disponibilizados":10,"demanda":10,"demandas":10 } },
  { resposta: "O curso de Gestão Empresarial é oferecido na modalidade 100% online (EAD), portanto, é necessário ter acesso à internet em um computador ou celular.", palavrasChave: { "presencial": 10, "ead": 10, "online":10, "internet":10, "computador":10,"dispositivo":10,"modalidade":10} },
  { resposta: "Os formados no curso de Gestão Empresarial pela FATEC Ourinhos podem atuar em diversas áreas, tais como: Consultoria em seu próprio negócio, nos setores de turismo, comércio, indústria, entre outros. Empresas de pequeno porte. Modernização e continuidade de empresas familiares. Médias empresas da região. Setor público. Entidades particulares, como cooperativas e associações.", palavrasChave: { "formados": 10,"formado":10,"concluir":10,"área":10,"áreas":10,"atuar":10,"empresa":10,"empresas":10  } },
  { resposta: "Se você deseja conhecer o projeto pedagógico do curso, pode acessar o site da Fatec Ourinhos (https://www.fatecourinhos.edu.br/cursos/gestao/) e baixar o PDF do projeto pedagógico.", palavrasChave: { "pdf": 10, "baixar": 10, "projeto":10,"projetos":10,"pedagógico":10,"site":7 } },
  { resposta: "Para obter detalhes sobre as disciplinas que serão abordadas ao longo dos 6 semestres do curso de Gestão Empresarial na Fatec Ourinhos, você pode acessar o seguinte link: https://www.fatecourinhos.edu.br/cursos/gestao/ e baixar o PDF do projeto pedagógico.", palavrasChave: { "disciplina": 10, "disciplinas": 10,"matéria":10,"matérias":10,"pdf":5,"baixar":5,"aulas":10,"dadas":10 } },
  { resposta: "O curso de Gestão Empresarial na Fatec é gratuito, ou seja, não há cobrança de mensalidades, apenas um pagamento para a realização da prova ou caso não tenha condições, pode pedir isenção.", palavrasChave: { "pago": 10, "gratuito": 10, "graça":10, "caro":10, "barato":10,"isenção":10,"cota":10,"cotas":10,"prova":10 } },
  { resposta: "Para acessar suas notas, faltas e matérias, visite o site SIGA por meio do seguinte link: https://siga.cps.sp.gov.br/aluno/login.aspx. Em seguida, vá para a seção de Consultas e selecione o que deseja visualizar. Se você está acessando o SIGA pela primeira vez, insira seu RA (Registro Acadêmico) e senha, que são fornecidos pelo professor ou coordenador. Depois, o site solicitará a troca de senha, permitindo que você escolha uma senha de sua preferência.", palavrasChave: { "siga": 10, "nota": 10,"notas":10,"falta":10,"faltas":10,"senha":10,"ra":10,"registro":10 } },
  { resposta: "Cada docente adota seu próprio método de avaliação, mas todos seguem o mesmo critério: a média final do aluno para aprovação deve ser igual ou superior a 6, e a presença deve ser superior a 75%. Se a média for igual ou superior a 6, mas a presença for inferior a 75%, o aluno será automaticamente reprovado por excesso de faltas.", palavrasChave: { "docente": 10, "professor": 10, "média":10, "aprovação":10, "aprovado":10, "reprovado":10, "faltas":5, "método":10, "métodos":10, "avaliação":10, "avaliações":10,"avaliado":10,"avaliada":10, "critério":10, "critérios":10,"passar":10,"presença":5,"superior":10,"inferior":10 } },
  { resposta: "O número de telefone para entrar em contato com a faculdade para tirar dúvidas é: (14) 3512-2024, ou desejar utilize o seguinte e-mail: secretaria@fatecourinhos.edu.br", palavrasChave: {"duvida":10, "contato": 6, "telefone": 10,"celular":10,"secretaria":10, "email":8,"e-mail":8, "número":3,"faculdade":8 } },
  { resposta: "A gestão empresarial é um processo fundamentado em planejamento e estratégias que visam alcançar melhores resultados para o negócio. Para isso, são realizadas ações para mensurar problemas, evitar falhas, corrigir erros e medir números.", palavrasChave: {"gestão empresarial": 10, "gestão":10, "empresarial":10 } },
  { resposta: "Oi, eu sou um chat bot com intuito de responder as perguntas sobre o curso de gestão empresarial", palavrasChave: {"oi": 10, "ola":10, "olá":10, "hello":10,"hi":10,"como vai":10 } }
  
];

const menu = [
  "*MENU PRINCIPAL*\n\n\n *1* - Sobre o curso de gestão empresarial 🎓\n *2* - Notas, faltas, disciplinas e projeto pedagógico 🗒️\n *3* - Vestibular 🧾\n *4* - Contatos 📞\n *5* - Tutoriais 💁🏻‍♂️\n *6* - Sugestões 📬 \n *7* - Conversa livre 🗣️\n *8* - Créditos do projeto ✨\n\n*// Escreva um desses menus acima, de 1 a 8*",
	"*SOBRE O CURSO*\n\n*|Voltar Home: 0|*\n\n *1* - O que é o curso de gestão empresarial ?\n *2* - Ele é pago ? \n *3* - O que farei quando me formar ? \n *4* - Qual é a carga horária ? \n *5* - O que o curso forma ? \n *6* - Qual a duração minima do curso ? \n *7* - Qual plataforma será utilizada ?\n *8* - Qual o site do curso ?\n\n*// Escreva um desses números acima, de 1 a 8*",
	"*NOTAS, FALTAS, DISCIPLINAS E PROJETO PEDAGÓGICO*\n\n*|Voltar Home: 0|*\n\n *1* - Notas,faltas,matérias\n *2* - Projeto pedagogico \n *3* - Metodo de avaliacao \n *4* - Disciplinas \n *5* - Duração das aulas\n\n*// Escreva um desses números acima, de 1 a 5*",
	"*VESTIBULAR*\n\n*|Voltar Home: 0|*\n\n *1* - Como entrar no curso ?\n *2* - São quantas vagas ?\n\n*// Escreva um desses números acima, de 1 a 2*",
	"*CONTATOS*\n\n*|Voltar Home: 0|*\n\n *1* - Contato da coordenadora \n *2* - Contato da secretaria e da fatec \n\n*// Escreva um desses números acima, de 1 a 2*",
	"*TUTORIAIS*\n\n*|Voltar Home: 0|*\n\n *1* - Tutorial de como entrar no SIGA\n\n*// Escreva um desses números acima, de 1 a 1*",
	"*SUGESTÕES*\n\n*|Voltar Home: 0|*\n\n *1* - Digite as sugestões ou dúvidas que tem sobre o curso\n para que futuramente elas sejam adicionadas\n\n*// Lembrando para sair desse modo digite 0*",
	"*CONVERSA LIVRE*\n\n*|Voltar Home: 0|*\n\n *1* - Faça perguntas sobre o curso\n\n*// Para voltar a home digite 0*",
  "*CRÉDITOS*\n\n*|Voltar Home: 0|*\n\n *1* - Créditos do projeto\n\n*// Para voltar a home digite 0*",

];




function preprocessText(text) {
  return text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}


function calcularSimilaridade(pergunta) {
  const perguntaPreprocessada = preprocessText(pergunta);
  let similaridades = respostas.map((resposta) => {
    const respostaPreprocessada = preprocessText(resposta.resposta);
    let similaridade = stringSimilarity.compareTwoStrings(perguntaPreprocessada, respostaPreprocessada);
    Object.keys(resposta.palavrasChave).forEach((palavra) => {
      if (perguntaPreprocessada.includes(preprocessText(palavra))) {
        similaridade += (resposta.palavrasChave[palavra] / 10);
      }
    });

    return similaridade;
  });

  const maxSimilarity = Math.max(...similaridades);
  const respostaIdx = similaridades.indexOf(maxSimilarity);

  return { indice: respostaIdx, similaridade: maxSimilarity };
}

function obterResposta(pergunta) {
  const { indice, similaridade } = calcularSimilaridade(pergunta);

  if (similaridade >= 0.5) {
    return respostas[indice].resposta;
  } else {
    return "Desculpe, não tenho uma resposta para essa pergunta. Poderia fazer a pergunta novamente?";
  }
}

function inputError(chat) {
  if (chat) {
    chat.sendMessage("Entrada inválida! Digite apenas números!");
  }
}


function voltarMenuPrincipal(chat){
  whichmenu = 0;
  whichresp = 0;
  chat.sendMessage(menu[0]);
}

function erroSemMenu(chat) {
  chat.sendMessage("*Desculpe, mas esse menu não existe, voltarei para o menu principal !*\n\n\n");
}

function voltandoMenu(chat) {
  chat.sendMessage("*Voltando para o menu principal...*\n\n\n");
}

function voltandoMenuAnt(chat) {
  chat.sendMessage("*Voltando para o menu anterior...*\n\n\n");
}

function  erroSemResposta(chat) {
  chat.sendMessage("*Não tenho essa resposta, voltarei para o menu anterior !*\n\n\n");
}

function  ErroComando(chat) {
  chat.sendMessage("*Este comando é inválido, digite 0 para voltar ao menu principal ou 1 para voltar o histórico do menu !*\n\n\n");
}

function  whichrespelif(chat) {
  voltandoMenu(chat);
}

function whichrespelse(chat) {
  erroSemResposta(chat);

};
function aftererro(chat){
  chat.sendMessage("*Este comando é inválido! Mas mesmo assim voltarei para o menu anterior para você !*\n\n\n");

}

async function Cadastro(message) {
  const numerocadastro = message.from;
  try {
    const query = `SELECT COUNT(numerocadastro) as count FROM cadastro where numerocadastro = ?`;
    const results = await new Promise((resolve, reject) => {
      dbConnection.query(query, [numerocadastro], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const count = results[0].count;

    if (count === 0) {
      const insertQuery = 'INSERT INTO cadastro (numerocadastro) VALUES (?)';
      await new Promise((resolve, reject) => {
        dbConnection.query(insertQuery, [numerocadastro], (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

      return 0;
    } else if (count === 1) {
      return 1;
    }
  } catch (error) {
    throw error;
  }
}


async function GravarSugestao(chat, message) {

  const userNumber = message.from;
  const currentDate = new Date().toISOString().slice(0, 10);
  const quantidade = await ContarSugestoes(userNumber,currentDate);
 
  if((5 - quantidade) > 0){
  const userSuggestion = await waitForUserMessage(chat, 'Digite sua sugestão:');
  if (userSuggestion === '0') {
    await chat.sendMessage('Sugestão cancelada.');
    return 6;
  }
  InsertSugestao(userNumber, userSuggestion, currentDate);
  await chat.sendMessage('Sugestão registrada com sucesso! Obrigado por contribuir.');
  
  if(quantidade >1 && quantidade <=5){
  await chat.sendMessage('Você tem mais ' + (4 - quantidade) + ' sugestões');
  }
  else{
    await chat.sendMessage('Você tem mais ' + (4 - quantidade)  + ' sugestão');
  }
  return (5 - quantidade);
}
else{
  await chat.sendMessage('Você atingiu o limite máximo de sugestões hoje, volte amanhã !');
  return 0;

}
}


function InsertSugestao(number, suggestion, date) {
  const query = 'INSERT INTO sugestoes (numerowhats, sugestao, data) VALUES (?, ?, ?)';
  dbConnection.query(query, [number, suggestion, date], (error, results) => {
    if (error) {
      console.error('Erro ao inserir sugestão:', error);
    } else {
      console.log('Sugestão inserida com sucesso!');
    }
  });
}


async function ContarSugestoes(numerowhats,data) {
  const numero = numerowhats;
  const date = data;
  

  return new Promise((resolve, reject) => {
    const query = `SELECT COUNT(numerowhats) as count FROM sugestoes where numerowhats = ? and DATE(data) = ?`;
    dbConnection.query(query, [numero,date], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const count = results[0].count;
        resolve(count);
      }
    });
  });
}

async function CriarSessao(message){
  const numerocadastro = message.from;
  const token = GerarToken();
  const generationDate = new Date();
  const expirationDate = new Date(generationDate.getTime() + 10 * 60 * 1000); // 10 minutos em milissegundos

 


    const query = `SELECT (id_cadastro) as id FROM cadastro where numerocadastro = ?`;
     const results = await new Promise((resolve, reject) => {
      dbConnection.query(query, [numerocadastro], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const userId = results[0].id;


     const query2 = `SELECT COUNT(id_user) as existe FROM Sessao where id_user = ? and revoked = 0`;
      const results2 = await new Promise((resolve, reject) => {
      dbConnection.query(query2, [userId], (error, results2) => {

        if (error) {
          reject(error);
        } else {
          
          resolve(results2);
        }
      });
    });
   const count = results2[0].existe;


    if (count === 0) {
    const updateQuery = 'INSERT INTO Sessao (id_user, token, generation_date, expiration_date,numerowhats_sessao) VALUES (?, ?, ?, ?, ?)';
    await new Promise((resolve, reject) => {
      dbConnection.query(updateQuery, [userId, token, generationDate, expirationDate, numerocadastro], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  

  }
 
}


  async function VerSessao(message) {
    const numerowhats = message.from;
    let resultado = null; // Inicializa resultado como null
  
    const query = `SELECT (token) as token FROM Sessao where numerowhats_sessao = ?`;
      const results = await new Promise((resolve, reject) => {
        dbConnection.query(query, [numerowhats], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
  
      // Verifica se há resultados antes de acessar a propriedade token
      if (results && results.length > 0) {
        return resultado = results[0].token;
      }
      
    } 
  
   
  // Função para gerar um token aleatório
  function GerarToken() {
    return Math.random().toString(36).substr(2); // Exemplo de token simples
  }
  

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});


const conversas = {}; 

client.on('message', async (message) => {
      chat = await message.getChat();
      cadastro = await Cadastro(message);
      sessao = await CriarSessao(message);
      
      if(cadastro === 0){
      await chat.sendMessage('Olá 😃');
      await chat.sendMessage('Eu sou um algoritmo desenvolvido para sanar dúvidas sobre o curso de gestão empresarial');
      await chat.sendMessage('Vi que é a sua primeira vez por aqui, seja bem vindo(a), por meio desse chat você poderá sanar suas dúvidas sobre o curso de gestão empresarial da Fatec Ourinhos, caso não encontre o que procura você poderá fazer uma sugestão que no futuro será adicionada 😁');
      await chat.sendMessage('Vamos iniciar então !');
      await chat.sendMessage('Carregando os menus...');
      }
      token = await VerSessao(message); 
      conversa = conversas[token];
      if (!conversa) {
        // Se não existir uma conversa para esse token, crie uma nova
        conversa = {
          input: true,
          whichmenu: 0,
          afteresp: 0,
          whichresp: 0,
          sugestoes: 5,
          dataAtual: new Date(),
          proximoDia: new Date(),
          token: token

        };
        conversas[token] = conversa;
      }

      await chat.sendMessage(menu[0]);
      while(true){
        console.log('Token da Conversa:', conversa.token);
        console.log('conversas[token]:', conversas[token]);
    if (conversa.input === true) {
      console.log('Token da Conversa:', conversa.token);
        console.log('conversas[token]:', conversas[token]);
      conversa.whichmenu = await waitForUserMessage(chat, 'Escolha o número do menu');
      conversa.whichmenu = parseInt(conversa.whichmenu);
    
      if (isNaN(conversa.whichmenu)) {
        inputError(chat);
      }
    }
    
      switch (conversa.whichmenu) {
    case 0:
      conversa.afteresp = 0;
      break;
    case 1:
      await chat.sendMessage(menu[conversa.whichmenu]);
      conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a resposta');
      conversa.whichresp = parseInt(conversa.whichresp);
      if (isNaN(conversa.whichresp)) {
        inputError(chat);

      }
    
        if (conversa.whichresp >= 1 && conversa.whichresp <= 8) {
           await chat.sendMessage(resp1[conversa.whichresp - 1]);
           conversa.afteresp = await waitForUserMessage(chat);
           conversa.afteresp = parseInt(conversa.afteresp);
          if (isNaN(conversa.afteresp)) {
            inputError(chat);
       
          }
        } 
        else if(conversa.whichresp == 0){
          conversa.whichmenu = 0;
          conversa.afteresp = 0;
          whichrespelif(chat);
        } 
        else {
          conversa.afteresp = 1;
          whichrespelse(chat);
        }
        break;
      case 2:
      await chat.sendMessage(menu[conversa.whichmenu]);
      conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a resposta');
      conversa.whichresp = parseInt(conversa.whichresp);
      if (isNaN(conversa.whichresp)) {
        inputError(chat);
      }
    
        if (conversa.whichresp >= 1 && conversa.whichresp <= 5) {
           await chat.sendMessage(resp2[conversa.whichresp - 1]);
           conversa.afteresp = await waitForUserMessage(chat);
           conversa.afteresp = parseInt(conversa.afteresp);
          if (isNaN(conversa.afteresp)) {
            inputError(chat);
          }
        } 
        else if(conversa.whichresp == 0){
          conversa.whichmenu = 0;
          conversa.afteresp = 0;
          whichrespelif(chat);
        } 
         else {
          conversa.afteresp = 1;
          whichrespelse(chat);
        }
        break;
        case 3:
        await chat.sendMessage(menu[conversa.whichmenu]);
        conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a resposta');
        conversa.whichresp = parseInt(conversa.whichresp);
        if (isNaN(conversa.whichresp)) {
        inputError(chat);
        }
    
        if (conversa.whichresp >= 1 &&  conversa.whichresp <= 2) {
           await chat.sendMessage(resp3[conversa.whichresp - 1]);
           conversa.afteresp = await waitForUserMessage(chat);
           conversa.afteresp = parseInt(conversa.afteresp);
          if (isNaN(conversa.afteresp)) {
            inputError(chat);
          }
        } 
        else if(conversa.whichresp == 0){
          conversa.whichmenu = 0;
          conversa.afteresp = 0;
          whichrespelif(chat);
        } 
        else {
          conversa.afteresp = 1;
          whichrespelse(chat);
        }
        break;
        case 4:
        await chat.sendMessage(menu[conversa.whichmenu]);
        conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a resposta');
        conversa.whichresp = parseInt(conversa.whichresp);
        if (isNaN(conversa.whichresp)) {
        inputError(chat);
        }
    
        if (conversa.whichresp >= 1 &&  conversa.whichresp <= 2) {
           await chat.sendMessage(resp4[conversa.whichresp - 1]);
           conversa.afteresp = await waitForUserMessage(chat);
           conversa.afteresp = parseInt(conversa.afteresp);
          if (isNaN(conversa.afteresp)) {
            inputError(chat);
          }
        } 
        else if(conversa.whichresp == 0){
          conversa.whichmenu = 0;
          conversa.afteresp = 0;
          whichrespelif(chat);
        } 
        else {
          conversa.afteresp = 1;
          whichrespelse(chat);
        }
        break;
        case 5:
        await chat.sendMessage(menu[conversa.whichmenu]);
        conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a resposta');
        conversa.whichresp = parseInt(conversa.whichresp);
        if (isNaN(conversa.whichresp)) {
        inputError(chat);
        }
    
        if (conversa.whichresp === 1) {
           await chat.sendMessage(resp5[conversa.whichresp - 1]);
           conversa.afteresp = await waitForUserMessage(chat);
           conversa.afteresp = parseInt(conversa.afteresp);
          if (isNaN(conversa.afteresp)) {
            inputError(chat);
          }
          
        } 
        else if(conversa.whichresp == 0){
          conversa.whichmenu = 0;
          conversa.afteresp = 0;
          whichrespelif(chat);
        } 
         else {
          conversa.afteresp = 1;
          whichrespelse(chat);
        }
        break;
        case 6: 
        await chat.sendMessage(menu[conversa.whichmenu]);
        conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a resposta');
        conversa.whichresp = parseInt(conversa.whichresp);
        if (isNaN(conversa.whichresp)) {
        inputError(chat);
        }
        if (conversa.whichresp === 1) {
          await chat.sendMessage(resp6[conversa.whichresp - 1]);
          conversa.dataAtual = new Date();
          if(conversa.ataAtual >= conversa.proximoDia){
            conversa.sugestoes = 5;
            conversa.proximoDia = new Date();
            conversa.proximoDia.setDate(conversa.proximoDia.getDate() + 1);
          }
          if(conversa.sugestoes > 0 && conversa.sugestoes <=6){

          while(conversa.sugestoes > 0){
            conversa.sugestoes = await GravarSugestao(chat, message);
            conversa.dataAtual = new Date();
          if(conversa.dataAtual >= conversa.proximoDia){
            
            conversa.sugestoes = 5;
            conversa.proximoDia = new Date();
            conversa.proximoDia.setDate(conversa.proximoDia.getDate() + 1);
          }
          if(conversa.sugestoes === 6){
            break;
          }
        }
        }
        } 
        else if(conversa.whichresp == 0){
          conversa.whichmenu = 0;
          conversa.afteresp = 0;
          whichrespelif(chat);
        } 
         else {
          conversa.afteresp = 1;
          whichrespelse(chat);
        }
        break;
        case 7:
          await chat.sendMessage(menu[conversa.whichmenu]);
          conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a opção 1 se deseja começar a conversa livre');
          conversa.whichresp = parseInt(conversa.whichresp);
          if (isNaN(conversa.whichresp)) {
          inputError(chat);
          }
      
          if (conversa.whichresp === 1) {
             await chat.sendMessage(resp7[conversa.whichresp - 1]);
        
            while(true){
            const pergunta = await waitForUserMessage(chat);
            if(pergunta === '0'){
              livre = false;
              conversa.whichmenu = 0;
              conversa.afteresp = 0;
              whichrespelif(chat);
              break;
            }
            else if(pergunta == '1'){
  
              conversa.afteresp = 1;
            break;

            }
            const resposta = obterResposta(pergunta);
            await chat.sendMessage(resposta);
            }
      }
      else if(conversa.whichresp == 0){
        conversa.whichmenu = 0;
        conversa.afteresp = 0;
        whichrespelif(chat);
      } 
       else {
        afteresp = 1;
        whichrespelse(chat);
      }
         
          break;
          case 8:
          await chat.sendMessage(menu[conversa.whichmenu]);
          conversa.whichresp = await waitForUserMessage(chat, 'Por favor, selecione a opção 1 se deseja ver os créditos');
          conversa.whichresp = parseInt(conversa.whichresp);
          if (isNaN(conversa.whichresp)) {
          inputError(chat);
          }
      
          if (conversa.whichresp === 1) {
             await chat.sendMessage(resp8[conversa.whichresp - 1]);
             conversa.afteresp = await waitForUserMessage(chat);
             conversa.afteresp = parseInt(conversa.afteresp);
            if (isNaN(conversa.afteresp)) {
              inputError(chat);
            }
          }
          else if(conversa.whichresp == 0){
            conversa.whichmenu = 0;
            conversa.afteresp = 0;
            whichrespelif(chat);
          }  
          else {
            conversa.afteresp = 1;
            whichrespelse(chat);
          }
          break;

      default:
        erroSemMenu(chat);
        voltandoMenu(chat);
        conversa.input = true;
        break;
    }
  

    switch (conversa.afteresp) {
      case 0:
        voltarMenuPrincipal(chat);
        conversa.input = true;
        break;
      case 1:
        voltandoMenuAnt(chat);
        conversa.input = false;
        break;
      default:
        aftererro(chat);
        voltandoMenuAnt(chat);
        conversa.input = false;
        break;
    }
    
   
  }

  }
  
);

// Função que aguarda uma mensagem do usuário e retorna a mensagem
async function waitForUserMessage(chat, question = '') {
  if (question) {
    await chat.sendMessage(question);
  }

  return new Promise((resolve) => {
    const messageListener = (message) => {
      if (!message.fromMe && !message.isMedia && message.body.trim() !== '') {
        resolve(message.body);
      }
    };

    // Remove existing listeners and add the new one
    client.removeAllListeners('message');
    client.on('message', messageListener);
  });
}
async function main() {
  await client.initialize();
}

main();