    const questions = [
    //0 (Question 1)
    {
        action: "De onde é a invenção do chuveiro elétrico?",
        opt1: {
            text: "França",
            nextpoint: false,
        },
        opt2: {
            text: "Inglaterra",
            nextpoint: false,
        },
        opt3: {
            text: "Brasil",
            nextpoint: true,
        },
        opt4: {
            text: "Itália",
            nextpoint: false,
        }
    },
    //1 (Question 2)
    {
        action: "Quem é o autor de “O Príncipe”?",
        opt1: {
            text: "Nicolau Maquiavel",
            nextpoint: true,
        },
        opt2: {
            text: "Charles-Louis de Secondat",
            nextpoint: false,
        },
        opt3: {
            text: "Jean-Jacques Rousseau",
            nextpoint: false,
        },
        opt4: {
            text: "Antoine de Saint-Exupéry",
            nextpoint: false,
        }
    },
    //2 (Question 3)
    {
        action: "Que líder mundial ficou conhecida como “Dama de Ferro”?",
        opt1: {
            text: "Dilma Rousseff",
            nextpoint: false,
        },
        opt2: {
            text: "Margaret Thatcher",
            nextpoint: true,
        },
        opt3: {
            text: "Christine Lagarde",
            nextpoint: false,
        },
        opt4: {
            text: "Angela Merkel",
            nextpoint: false,
        }
    },
    //3 (Question 4) yes or not
    {
        action: "Os samurais japonese viveram ao mesmo tempo que os cowboys dos Estados Unidos?",
        opt1: {
            text: "Sim",
            nextpoint: true,
        },
        opt2: {
            text: "Não",
            nextpoint: false,
        }
    },
    //4 (Question 5)
    {
        action: "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",
        opt1: {
            text: "Tipo A",
            nextpoint: false,
        },
        opt2: {
            text: "Tipo AB",
            nextpoint: false,
        },
        opt3: {
            text: "Tipo ABO",
            nextpoint: false,
        },
        opt4: {
            text: "Tipo O",
            nextpoint: true,
        }
    },
    //5 (Question 6)
    {
        action: "Em que oceano fica Madagascar?",
        opt1: {
            text: "Oceano Atlântico",
            nextpoint: false,
        },
        opt2: {
            text: "Oceano Antártico",
            nextpoint: false,
        },
        opt3: {
            text: "Oceano Índico",
            nextpoint: true,
        },
        opt4: {
            text: "Oceano Ártico",
            nextpoint: false,
        }
    },
    //6 (Question 7)
    {
        action: "Quem inventou a lâmpada?",
        opt1: {
            text: "Thomas Edison",
            nextpoint: true,
        },
        opt2: {
            text: "Steve Jobs",
            nextpoint: false,
        },
        opt3: {
            text: "Graham Bell",
            nextpoint: false,
        },
        opt4: {
            text: "Santos Dumont",
            nextpoint: false,
        }
    },
    //7 (Question 8)
    {
        action: "Quem foi a primeira pessoa a viajar no Espaço?",
        opt1: {
            text: "Marcos Pontes",
            nextpoint: false,
        },
        opt2: {
            text: "A cadela Laika",
            nextpoint: false,
        },
        opt3: {
            text: "Yuri Gagarin",
            nextpoint: true,
        },
        opt4: {
            text: "Buzz Aldrin",
            nextpoint: false,
        }
    },
    //8 (Question 9)   
    {
        action: "Onde se localiza Machu Picchu?",
        opt1: {
            text: "Colômbia",
            nextpoint: false,
        },
        opt2: {
            text: "Peru",
            nextpoint: true,
        },
        opt3: {
            text: "Bolívia",
            nextpoint: false,
        },
        opt4: {
            text: "China",
            nextpoint: false,
        }
    },
    //9 (Question 10)
    {
        action: "Quantos ossos temos no nosso corpo?",
        opt1: {
            text: "209",
            nextpoint: false,
        },
        opt2: {
            text: "208",
            nextpoint: false,
        },
        opt3: {
            text: "206",
            nextpoint: true,
        },
        opt4: {
            text: "207",
            nextpoint: false,
        }
    },
    //10 (Question 11)
    {
        action: "Quantos continentes existem?",
        opt1: {
            text: "5",
            nextpoint: false,
        },
        opt2: {
            text: "3",
            nextpoint: false,
        },
        opt3: {
            text: "7",
            nextpoint: false,
        },
        opt4: {
            text: "6",
            nextpoint: true,
        }
    },
    //11 (Question 12)
    {
        action: "De quais elementos é composta a água?",
        opt1: {
            text: "Oxinênio e hidrogênio",
            nextpoint: true,
        },
        opt2: {
            text: "Hidrogênio e nitrogênio",
            nextpoint: false,
        },
        opt3: {
            text: "Nitrogênio e hélio",
            nextpoint: false,
        },
        opt4: {
            text: "Carbono e nitrogênio",
            nextpoint: false,
        }
    },
    //12 (Question 13)
    {
        action: "Qual é a porcentagem de acerto para uma questão com 4 alternativas de repostas com apenas uma correta?",
        opt1: {
            text: "75%",
            nextpoint: false,
        },
        opt2: {
            text: "35%",
            nextpoint: false,
        },
        opt3: {
            text: "50%",
            nextpoint: false,
        },
        opt4: {
            text: "25%",
            nextpoint: true,
        }
    },
    //13 (Question 14)
    {
        action: "Botina e sandália são:",
        opt1: {
            text: "Calçado",
            nextpoint: true,
        },
        opt2: {
            text: "Calça",
            nextpoint: false,
        },
        opt3: {
            text: "Blusa",
            nextpoint: false,
        },
        opt4: {
            text: "Edredom",
            nextpoint: false,
        }
    },
    //14 (Question 15)
    {
        action: "Qual é o principal inimigo do pica-pau?",
        opt1: {
            text: "Zeca Urubu",
            nextpoint: true,
        },
        opt2: {
            text: "Tranca-Rua",
            nextpoint: false,
        },
        opt3: {
            text: "Catatau",
            nextpoint: false,
        },
        opt4: {
            text: "Zé Colméia",
            nextpoint: false,
        }
    },
    //15 (Question 16)
    {
        action: "Em qual dia é comemorada a proclamação da república no Brasil?",
        opt1: {
            text: "15 de novembro",
            nextpoint: true
        },
        opt2: {
            text: "19 de abril",
            nextpoint: false,
        },
        opt3: {
            text: "15 de outubro",
            nextpoint: false,
        },
        opt4: {
            text: "10 de novembro",
            nextpoint: false,
        }
    },
    //16 (Question 17)
    {
        action: "Medimarímetro é um instrumento que determina  nível do...",
        opt1: {
            text: "Mar",
            nextpoint: true,
        },
        opt2: {
            text: "Ar",
            nextpoint: false,
        },
        opt3: {
            text: "Temporal",
            nextpoint: false,
        },
        opt4: {
            text: "Espaço",
            nextpoint: false,
        }
    },
    //17 (Question 18)
    {
        action: "Vivo en el ... piso",
        opt1: {
            text: "Primeira",
            nextpoint: false,
        },
        opt2: {
            text: "Primer",
            nextpoint: true,
        },
        opt3: {
            text: "Primeros",
            nextpoint: false,
        },
        opt4: {
            text: "Primero",
            nextpoint: false,
        }
    },
    //18 (Question 19)
    {
        action: "Qual destas palavras não faz parte da perna em espanhol?",
        opt1: {
            text: "Pantorrilla",
            nextpoint: false,
        },
        opt2: {
            text: "Rodilla",
            nextpoint: false,
        },
        opt3: {
            text: "Muslo",
            nextpoint: false,
        },
        opt4: {
            text: "Muñeca",
            nextpoint: true,
        }
    },
    //19 (Question 20)
    {
        action: "Qual era a formação acadêmica de Juscelino Kubitschek?",
        opt1: {
            text: "Médico",
            nextpoint: true,
        },
        opt2: {
            text: "Advogado",
            nextpoint: false,
        },
        opt3: {
            text: "Engenheiro",
            nextpoint: false,
        },
        opt4: {
            text: "Jornalista",
            nextpoint: false,
        }
    },
    //20 (Question 21)
    {
        action: "Correspondência sem identificação do remetente é chamada de:",
        opt1: {
            text: "Pseudônima",
            nextpoint: false,
        },
        opt2: {
            text: "Anônima",
            nextpoint: true,
        },
        opt3: {
            text: "Homônima",
            nextpoint: false,
        },
        opt4: {
            text: "Heterônima",
            nextpoint: false,
        }
    },
    //21 (Question 22)
    {
        action: "O símbolo C representa o elemento:",
        opt1: {
            text: "Cálcio",
            nextpoint: false,
        },
        opt2: {
            text: "Chumbo",
            nextpoint: false,
        },
        opt3: {
            text: "Cobalto",
            nextpoint: false,
        },
        opt4: {
            text: "Carbono",
            nextpoint: true,
        }
    },
    //22 (Question 23)
    {
        action: "Os glóbulos vermelhos no sanguye são também chamados de:",
        opt1: {
            text: "Anticorpos",
            nextpoint: false,
        },
        opt2: {
            text: "Plaquetas",
            nextpoint: false,
        },
        opt3: {
            text: "Leucócitos",
            nextpoint: false,
        },
        opt4: {
            text: "Hemácias",
            nextpoint: true,
        }
    },
    //23 (Question 24)
    {
        action: "Escritor Carioca, autor de triste fim de Policarpo Quaresma e os bruzundangas:",
        opt1: {
            text: "Jorge Amado",
            nextpoint: false,
        },
        opt2: {
            text: "Machado De Assis",
            nextpoint: false,
        },
        opt3: {
            text: "José De Alencar",
            nextpoint: false,
        },
        opt4: {
            text: "Lima Barreto",
            nextpoint: true,
        }
    },
    //24 (Question 25)
    {
        action: "Muitos planos econômicos ocorreram nos anos de 1980, exceto:",
        opt1: {
            text: "PLano bresser",
            nextpoint: false,
        },
        opt2: {
            text: "Plano verão",
            nextpoint: false,
        },
        opt3: {
            text: "Plano cruzado",
            nextpoint: false,
        },
        opt4: {
            text: "Plano de metas",
            nextpoint: true,
        }
    },
    //25 (Question 26)
    {
        action: "O governo vargas, entre 1937 e 1945, pode ser considerado:",
        opt1: {
            text: "Oligárquico",
            nextpoint: false,
        },
        opt2: {
            text: "Democrático",
            nextpoint: false,
        },
        opt3: {
            text: "Autocrático",
            nextpoint: false,
        },
        opt4: {
            text: "Populista",
            nextpoint: true,
        }
    },
    //26 (Question 27)
    {
        action: "Qual destes elementos não é um gás nobre?",
        opt1: {
            text: "Hélio",
            nextpoint: false,
        },
        opt2: {
            text: "Neônio",
            nextpoint: false,
        },
        opt3: {
            text: "Kriptônio",
            nextpoint: false,
        },
        opt4: {
            text: "Nitrogênio",
            nextpoint: true,
        }
    },
    //27 (Question 28)
    {
        action: "Quem escreveu a obra 'Romeu e Julieta'?",
        opt1: {
            text: "William Shakespeare",
            nextpoint: true,
        },
        opt2: {
            text: "Charles Dickens",
            nextpoint: false,
        },
        opt3: {
            text: "Jane Austen",
            nextpoint: false,
        },
        opt4: {
            text: "Mark Twain",
            nextpoint: false,
        }
    },
    //28 (Question 29)
    {
        action: "Qual é o maior planeta do nosso sistema solar?",
        opt1: {
            text: "Saturno",
            nextpoint: false,
        },
        opt2: {
            text: "Júpiter",
            nextpoint: true,
        },
        opt3: {
            text: "Urano",
            nextpoint: false,
        },
        opt4: {
            text: "Netuno",
            nextpoint: false,
        }
    },
    //29 (Question 30)
    {
        action: "Qual é o elemento químico mais abundante na crosta terrestre?",
        opt1: {
            text: "Oxigênio",
            nextpoint: false,
        },
        opt2: {
            text: "Silício",
            nextpoint: false,
        },
        opt3: {
            text: "Alumínio",
            nextpoint: true,
        },
        opt4: {
            text: "Ferro",
            nextpoint: false,
        }
    },
    //30 (Question 31)
    {
        action: "Qual é o nome da famosa pintura de Leonardo da Vinci que retrata uma mulher sorrindo?",
        opt1: {
            text: "A Última Ceia",
            nextpoint: false,
        },
        opt2: {
            text: "Mona Lisa",
            nextpoint: true,
        },
        opt3: {
            text: "A Noite Estrelada",
            nextpoint: false,
        },
        opt4: {
            text: "Guernica",
            nextpoint: false,
        }
    },
    //31 (Question 32)
    {
        action: "Qual é a capital da França?",
        opt1: {
            text: "Londres",
            nextpoint: false,
        },
        opt2: {
            text: "Madri",
            nextpoint: false,
        },
        opt3: {
            text: "Roma",
            nextpoint: false,
        },
        opt4: {
            text: "Paris",
            nextpoint: true,
        }
    },
    //32 (Question 33)
    {
        action: "Qual é o nome da constelação que representa um caçador na mitologia grega?",
        opt1: {
            text: "Orion",
            nextpoint: true,
        },
        opt2: {
            text: "Pégaso",
            nextpoint: false,
        },
        opt3: {
            text: "Andrômeda",
            nextpoint: false,
        },
        opt4: {
            text: "Cassiopeia",
            nextpoint: false,
        }
    },
    //33 (Question 34)
    {
        action: "Qual é o elemento químico com o símbolo 'H'?",
        opt1: {
            text: "Hidrogênio",
            nextpoint: true,
        },
        opt2: {
            text: "Carbono",
            nextpoint: false,
        },
        opt3: {
            text: "Hélio",
            nextpoint: false,
        },
        opt4: {
            text: "Oxigênio",
            nextpoint: false,
        }
    },
    //34 (Question 35)
    {
        action: "Quem foi o primeiro presidente dos Estados Unidos?",
        opt1: {
            text: "George Washington",
            nextpoint: true,
        },
        opt2: {
            text: "John Adams",
            nextpoint: false,
        },
        opt3: {
            text: "Thomas Jefferson",
            nextpoint: false,
        },
        opt4: {
            text: "Abraham Lincoln",
            nextpoint: false,
        }
    },
    //35 (Question 36)
    {
        action: "Qual é o processo pelo qual as plantas fabricam seu próprio alimento?",
        opt1: {
            text: "Fotossíntese",
            nextpoint: true,
        },
        opt2: {
            text: "Respiração celular",
            nextpoint: false,
        },
        opt3: {
            text: "Digestão",
            nextpoint: false,
        },
        opt4: {
            text: "Metabolismo",
            nextpoint: false,
        }
    },
    //36 (Question 37)
    {
        action: "Qual é a unidade de medida de temperatura utilizada nos Estados Unidos?",
        opt1: {
            text: "Celsius",
            nextpoint: false,
        },
        opt2: {
            text: "Fahrenheit",
            nextpoint: true,
        },
        opt3: {
            text: "Kelvin",
            nextpoint: false,
        },
        opt4: {
            text: "Rankine",
            nextpoint: false,
        }
    },
    //37 (Question 38)
    {
        action: "Qual é o maior órgão do corpo humano?",
        opt1: {
            text: "Coração",
            nextpoint: false,
        },
        opt2: {
            text: "Pulmões",
            nextpoint: false,
        },
        opt3: {
            text: "Pele",
            nextpoint: true,
        },
        opt4: {
            text: "Cérebro",
            nextpoint: false,
        }
    },
    //38 (Question 39)
    {
        action: "Qual é o país mais populoso do mundo?",
        opt1: {
            text: "Mongólia",
            nextpoint: false,
        },
        opt2: {
            text: "Índia",
            nextpoint: true,
        },
        opt3: {
            text: "China",
            nextpoint: false,
        },
        opt4: {
            text: "Rússia",
            nextpoint: false,
        }
    },
    //39 (Question 40)
    {
        action: "Qual é o elemento químico representado pelo símbolo 'Na'?",
        opt1: {
            text: "Sódio",
            nextpoint: true,
        },
        opt2: {
            text: "Níquel",
            nextpoint: false,
        },
        opt3: {
            text: "Nitrogênio",
            nextpoint: false,
        },
        opt4: {
            text: "Neônio",
            nextpoint: false,
        }
    },
    //40 (Question 41)
    {
        action: "Quem é o autor da obra 'Dom Quixote'?",
        opt1: {
            text: "William Shakespeare",
            nextpoint: false,
        },
        opt2: {
            text: "Miguel de Cervantes",
            nextpoint: true,
        },
        opt3: {
            text: "Charles Dickens",
            nextpoint: false,
        },
        opt4: {
            text: "Leo Tolstoy",
            nextpoint: false,
        }
    },
    //41 (Question 42)
    {
        action: "Qual é o maior mamífero terrestre do mundo?",
        opt1: {
            text: "Elefante Africano",
            nextpoint: true,
        },
        opt2: {
            text: "Rinoceronte Branco",
            nextpoint: false,
        },
        opt3: {
            text: "Gorila da Montanha",
            nextpoint: false,
        },
        opt4: {
            text: "Baleia Azul",
            nextpoint: false,
        }
    },
    //42 (Question 43)
    {
        action: "Qual é o planeta conhecido como o 'Planeta Vermelho'?",
        opt1: {
            text: "Marte",
            nextpoint: true,
        },
        opt2: {
            text: "Vênus",
            nextpoint: false,
        },
        opt3: {
            text: "Júpiter",
            nextpoint: false,
        },
        opt4: {
            text: "Saturno",
            nextpoint: false,
        }
    },
    //43 (Question 44)
    {
        action: "Qual é o metal mais abundante na crosta terrestre?",
        opt1: {
            text: "Ferro",
            nextpoint: true,
        },
        opt2: {
            text: "Cobre",
            nextpoint: false,
        },
        opt3: {
            text: "Alumínio",
            nextpoint: false,
        },
        opt4: {
            text: "Ouro",
            nextpoint: false,
        }
    },
    //44 (Question 45)
    {
        action: "Qual é o maior osso do corpo humano?",
        opt1: {
            text: "Fêmur",
            nextpoint: true,
        },
        opt2: {
            text: "Tíbia",
            nextpoint: false,
        },
        opt3: {
            text: "Úmero",
            nextpoint: false,
        },
        opt4: {
            text: "Rádio",
            nextpoint: false,
        }
    },
    //45 (Question 46)
    //46 (Question 47)
    {
        action: "Qual é o menor país do mundo em extensão territorial?",
        opt1: {
            text: "Nauru",
            nextpoint: false,
        },
        opt2: {
            text: "Vaticano",
            nextpoint: true,
        },
        opt3: {
            text: "Mônaco",
            nextpoint: false,
        },
        opt4: {
            text: "Malta",
            nextpoint: false,
        }
    },
    //47 (Question 48)
    {
        action: "Qual é o maior deserto do mundo?",
        opt1: {
            text: "Deserto do Saara",
            nextpoint: true,
        },
        opt2: {
            text: "Deserto de Atacama",
            nextpoint: false,
        },
        opt3: {
            text: "Deserto da Arábia",
            nextpoint: false,
        },
        opt4: {
            text: "Deserto de Gobi",
            nextpoint: false,
        }
    },
    //48 (Question 49)
    {
        action: "Qual é o maior rio do mundo em volume de água?",
        opt1: {
            text: "Rio Amazonas",
            nextpoint: true,
        },
        opt2: {
            text: "Rio Nilo",
            nextpoint: false,
        },
        opt3: {
            text: "Rio Mississipi",
            nextpoint: false,
        },
        opt4: {
            text: "Rio Yangtzé",
            nextpoint: false,
        }
    },
    //49 (Question 50)
    {
        action: "Qual é o país mais populoso da África?",
        opt1: {
            text: "Nigéria",
            nextpoint: false,
        },
        opt2: {
            text: "Etiópia",
            nextpoint: false,
        },
        opt3: {
            text: "Egito",
            nextpoint: false,
        },
        opt4: {
            text: "Níger",
            nextpoint: true,
        }
    },
    //50 (Question 51)
    {
        action: "Qual é o principal gás responsável pelo efeito estufa na atmosfera?",
        opt1: {
            text: "Dióxido de enxofre",
            nextpoint: false,
        },
        opt2: {
            text: "Metano",
            nextpoint: true,
        },
        opt3: {
            text: "Óxido nitroso",
            nextpoint: false,
        },
        opt4: {
            text: "Hidrocarbonetos",
            nextpoint: false,
        }
    },
    //51 (Question 52)
    {
        action: "Qual é o primeiro elemento da Tabela Periódica?",
        opt1: {
            text: "Berílio",
            nextpoint: false,
        },
        opt2: {
            text: "Lítio",
            nextpoint: false,
        },
        opt3: {
            text: "Hélio",
            nextpoint: false,
        },
        opt4: {
            text: "Hidrogênio",
            nextpoint: true,
        }
    },
    //52 (Question 53)
    {
        action: "Quantas linhas tem no logo do serviço de streaming de música Spotify?",
        opt1: {
            text: "3 linhas",
            nextpoint: true,
        },
        opt2: {
            text: "4 linhas",
            nextpoint: false,
        },
        opt3: {
            text: "5 linhas",
            nextpoint: false,
        },
        opt4: {
            text: "2 linhas",
            nextpoint: false,
        }
    },
    //53 (Question 54)
    {
        action: "Qual é o formato do salgadinho Doritos?",
        opt1: {
            text: "Quadrado",
            nextpoint: false,
        },
        opt2: {
            text: "Oval",
            nextpoint: false,
        },
        opt3: {
            text: "Triangular",
            nextpoint: true,
        },
        opt4: {
            text: "Redondo",
            nextpoint: false,
        }
    },
    //54 (Question 55)
    {
        action: "Qual animal representa o símbolo da paz?",
        opt1: {
            text: "Cobra",
            nextpoint: false,
        },
        opt2: {
            text: "Pomba",
            nextpoint: true,
        },
        opt3: {
            text: "Elefante",
            nextpoint: false,
        },
        opt4: {
            text: "Cachorro Caramelo",
            nextpoint: false,
        }
    },
    //55 (Question 56)
    {
        action: "O sushi é um prato original de qual país?",
        opt1: {
            text: "Tailândia",
            nextpoint: false,
        },
        opt2: {
            text: "China",
            nextpoint: false,
        },
        opt3: {
            text: "Japão",
            nextpoint: true,
        },
        opt4: {
            text: "Coreia do Sul",
            nextpoint: false,
        }
    },
    //56 (Question 57)
    {
        action: "Qual é o animal que aparece no logotipo da Ferrari?",
        opt1: {
            text: "Cavalo",
            nextpoint: true,
        },
        opt2: {
            text: "Leão",
            nextpoint: false,
        },
        opt3: {
            text: "Leopardo",
            nextpoint: false,
        },
        opt4: {
            text: "Tigre",
            nextpoint: false,
        }
    },
    //57 (Question 58)
    {
        action: "Qual é o nome da empresa de tecnologia que criou o iPhone?",
        opt1: {
            text: "Google",
            nextpoint: false,
        },
        opt2: {
            text: "Amazon",
            nextpoint: false,
        },
        opt3: {
            text: "Microsoft",
            nextpoint: false,
        },
        opt4: {
            text: "Apple",
            nextpoint: true,
        }
    },
    //58 (Question 59)
    {
        action: "Qual é o sobrenome mais comum no Brasil?",
        opt1: {
            text: "Oliveira",
            nextpoint: false,
        },
        opt2: {
            text: "Silva",
            nextpoint: true,
        },
        opt3: {
            text: "Santos",
            nextpoint: false,
        },
        opt4: {
            text: "Souza",
            nextpoint: false,
        }
    },
    //59 (Question 60)
    {
        action: "Qual é o nome do inventor do telefone?",
        opt1: {
            text: "Thomas Edison",
            nextpoint: false,
        },
        opt2: {
            text: "Thomas Edison",
            nextpoint: false,
        },
        opt3: {
            text: "Alexander Graham Bell",
            nextpoint: true,
        },
        opt4: {
            text: "Guglielmo Marconi",
            nextpoint: false,
        }
    },
    //60 (Question 61)
    {
        action: "Quantos lados tem um dado?",
        opt1: {
            text: "Sete",
            nextpoint: false,
        },
        opt2: {
            text: "Cinco",
            nextpoint: false,
        },
        opt3: {
            text: "Seis",
            nextpoint: true,
        },
        opt4: {
            text: "Vinte",
            nextpoint: false,
        }
    },
    //61 (Question 62)
    {
        action: "O vinho é feito com qual fruta?",
        opt1: {
            text: "Maçã",
            nextpoint: false,
        },
        opt2: {
            text: "Abacaxi",
            nextpoint: false,
        },
        opt3: {
            text: "Morango",
            nextpoint: false,
        },
        opt4: {
            text: "Uva",
            nextpoint: true,
        }
    },
    //62 (Question 63)
    {
        action: "O pão de queijo é um prato típico de qual estado brasileiro?",
        opt1: {
            text: "Rio de Janeiro",
            nextpoint: false,
        },
        opt2: {
            text: "São Paulo",
            nextpoint: false,
        },
        opt3: {
            text: "Minas Gerais",
            nextpoint: true,
        },
        opt4: {
            text: "Bahia",
            nextpoint: false,
        }
    },
    //63 (Question 64)
    {
        action: "Segundo a lenda original, quantas vidas um gato teria?",
        opt1: {
            text: "Seis.",
            nextpoint: false,
        },
        opt2: {
            text: "Sete.",
            nextpoint: false,
        },
        opt3: {
            text: "Oito.",
            nextpoint: false,
        },
        opt4: {
            text: "Nove",
            nextpoint: true,
        }
    },
    //64 (Question 65)
    {
        action: "Qual inventor brasileiro é conhecido com o “pai da aviação”?",
        opt1: {
            text: "Santos Dumont",
            nextpoint: true,
        },
        opt2: {
            text: "Paulo Coelho",
            nextpoint: false,
        },
        opt3: {
            text: "Tom Jobim",
            nextpoint: false,
        },
        opt4: {
            text: "Ary Barroso",
            nextpoint: false,
        }
    },
    //65 (Question 66)
    {
        action: "Qual cidade brasileira é conhecida como Terra da Garoa?",
        opt1: {
            text: "Salvador",
            nextpoint: false,
        },
        opt2: {
            text: "São Paulo",
            nextpoint: true,
        },
        opt3: {
            text: " Rio de Janeiro",
            nextpoint: false,
        },
        opt4: {
            text: "Brasília",
            nextpoint: false,
        }
    },
    //66 (Question 67)
    {
        action: "Quantos dias tem um ano bissexto?",
        opt1: {
            text: "364 dias",
            nextpoint: false,
        },
        opt2: {
            text: "365 dias",
            nextpoint: false,
        },
        opt3: {
            text: "366 dias",
            nextpoint: true,
        },
        opt4: {
            text: "600 dias",
            nextpoint: false,
        }
    },
    //67 (Question 68)
    {
        action: "Qual é a cor que resulta da mistura das cores amarelo e vermelho?",
        opt1: {
            text: "Azul",
            nextpoint: false,
        },
        opt2: {
            text: "Laranja",
            nextpoint: true,
        },
        opt3: {
            text: "Roxo",
            nextpoint: false,
        },
        opt4: {
            text: "Marrom",
            nextpoint: false,
        }
    },
    //68 (Question 69)
    {
        action: "Qual dos doces abaixo é tipicamente brasileiro?",
        opt1: {
            text: "Brigadeiro",
            nextpoint: true,
        },
        opt2: {
            text: "Macaron",
            nextpoint: false,
        },
        opt3: {
            text: "Tiramissú",
            nextpoint: false,
        },
        opt4: {
            text: "Brownie",
            nextpoint: false,
        }
    },
    //69 (Question 70)
    {
        action: "Complete a frase: “Penso, logo ….”.",
        opt1: {
            text: "Cresço",
            nextpoint: false,
        },
        opt2: {
            text: "Evoluo",
            nextpoint: false,
        },
        opt3: {
            text: "Existo",
            nextpoint: true,
        },
        opt4: {
            text: "Aprendo",
            nextpoint: false,
        }
    },
    //70 (Question 71)
    {
        action: "Qual é a cor da caixa-preta do avião?",
        opt1: {
            text: "Laranja",
            nextpoint: true,
        },
        opt2: {
            text: "Verde",
            nextpoint: false,
        },
        opt3: {
            text: "Vermelha",
            nextpoint: false,
        },
        opt4: {
            text: "Preta",
            nextpoint: false,
        }
    },
    //71 (Question 72)
    {
        action: "Qual animal representa o signo de câncer?",
        opt1: {
            text: "Caranguejo",
            nextpoint: true,
        },
        opt2: {
            text: "Leão",
            nextpoint: false,
        },
        opt3: {
            text: "Águia",
            nextpoint: false,
        },
        opt4: {
            text: "Cobra",
            nextpoint: false,
        }
    },
    //72 (Question 73)
    {
        action: "Qual evento histórico aconteceu entre os anos de 1914 e 1918?",
        opt1: {
            text: "Primeira Guerra Mundial",
            nextpoint: true,
        },
        opt2: {
            text: "Chegada do homem à Lua",
            nextpoint: false,
        },
        opt3: {
            text: "Queda do muro de Berlim",
            nextpoint: false,
        },
        opt4: {
            text: "Primeiro Rock in Rio",
            nextpoint: false,
        }
    },
    //73 (Question 74)
    {
        action: "Em qual data é comemorada a Independência do Brasil?",
        opt1: {
            text: "25 de dezembro",
            nextpoint: false,
        },
        opt2: {
            text: "12 de outubro",
            nextpoint: false,
        },
        opt3: {
            text: "15 de novembro",
            nextpoint: false,
        },
        opt4: {
            text: "7 de setembro",
            nextpoint: true,
        }
    },
    //74 (Question 75)
    {
        action: "Qual foi o navegador português que chegou ao Brasil em 1500?",
        opt1: {
            text: "Vasco da Gama",
            nextpoint: false,
        },
        opt2: {
            text: "Pedro Álvares Cabral",
            nextpoint: true,
        },
        opt3: {
            text: "Cristóvão Colombo",
            nextpoint: false,
        },
        opt4: {
            text: "Fernão de Magalhães",
            nextpoint: false,
        }
    },
    //75 (Question 76)
    {
        action: "Qual é o nome da primeira mulher a se tornar presidente do Brasil?",
        opt1: {
            text: "Ana Júlia Carepa",
            nextpoint: false,
        },
        opt2: {
            text: "Marina Silva.",
            nextpoint: false,
        },
        opt3: {
            text: "Dilma Rousseff",
            nextpoint: true,
        },
        opt4: {
            text: "Marta Suplicy",
            nextpoint: false,
        }
    },
    //76 (Question 77)
    {
        action: "A queda do muro de Berlim, em 1989, marcou o fim de qual conflito?",
        opt1: {
            text: "Segunda Guerra Mundial",
            nextpoint: false,
        },
        opt2: {
            text: "Guerra do Vietnã",
            nextpoint: false,
        },
        opt3: {
            text: "Guerra Fria",
            nextpoint: true,
        },
        opt4: {
            text: "Guerra de Berlim",
            nextpoint: false,
        }
    },
    //77 (Question 78)
    {
        action: "Quem liderou a revolta conhecida como Inconfidência Mineira?",
        opt1: {
            text: "Dom Pedro II",
            nextpoint: false,
        },
        opt2: {
            text: "Dom João VI",
            nextpoint: false,
        },
        opt3: {
            text: "Dom Pedro I",
            nextpoint: false,
        },
        opt4: {
            text: "Tiradentes",
            nextpoint: true,
        }
    },
    //78 (Question 79)
    {
        action: "Qual país foi o pioneiro na Revolução Industrial?",
        opt1: {
            text: "Brasil",
            nextpoint: false,
        },
        opt2: {
            text: "Portugal",
            nextpoint: false,
        },
        opt3: {
            text: "Grécia",
            nextpoint: false,
        },
        opt4: {
            text: "Inglaterra",
            nextpoint: true,
        }
    },
    //79 (Question 80)
    {
        action: "Qual rei ou rainha ocupou por mais tempo o trono do Reino Unido?",
        opt1: {
            text: "Rei Eduardo VII",
            nextpoint: false,
        },
        opt2: {
            text: "Rainha Vitória",
            nextpoint: false,
        },
        opt3: {
            text: "Rainha Elizabeth II",
            nextpoint: true,
        },
        opt4: {
            text: "Rei George V",
            nextpoint: false,
        }
    },
    //80 (Question 81)
    {
        action: "Os Estados Unidos da América foram colonizados, até 1776, por qual país?",
        opt1: {
            text: "França",
            nextpoint: false,
        },
        opt2: {
            text: "Portugal",
            nextpoint: false,
        },
        opt3: {
            text: "Espanha",
            nextpoint: false,
        },
        opt4: {
            text: "Inglaterra",
            nextpoint: true,
        }
    },
    //81 (Question 82)
    {
        action: "Qual foi o líder sul-africano que lutou contra o apartheid e se tornou presidente do país em 1994?",
        opt1: {
            text: "Nelson Mandela",
            nextpoint: true,
        },
        opt2: {
            text: "Robert Mugabe",
            nextpoint: false,
        },
        opt3: {
            text: "Fidel Castro",
            nextpoint: false,
        },
        opt4: {
            text: "Margaret Thatcher",
            nextpoint: false,
        }
    },
    //82 (Question 83)
    {
        action: "Em qual continente aconteceu a pandemia da chamada Peste Negra?",
        opt1: {
            text: "América",
            nextpoint: false,
        },
        opt2: {
            text: "Europa",
            nextpoint: true,
        },
        opt3: {
            text: "Ásia",
            nextpoint: false,
        },
        opt4: {
            text: "África",
            nextpoint: false,
        }
    },
    //83 (Question 84)
    {
        action: " Qual foi o famoso navio que naufragou em sua viagem inaugural, em 1912?",
        opt1: {
            text: "Britannic",
            nextpoint: false,
        },
        opt2: {
            text: "Titanic",
            nextpoint: true,
        },
        opt3: {
            text: "Lusitania",
            nextpoint: false,
        },
        opt4: {
            text: "Queen Mary",
            nextpoint: false,
        }
    },
    //84 (Question 85)
    {
        action: "Qual é o nome do presidente do Brasil que ficou conhecido pelo apelido de Jango?",
        opt1: {
            text: "Jânio Quadros",
            nextpoint: false,
        },
        opt2: {
            text: "João Goulart",
            nextpoint: true,
        },
        opt3: {
            text: "João Figueiredo",
            nextpoint: false,
        },
        opt4: {
            text: "Getúlio Vargas",
            nextpoint: false,
        }
    },
    //85 (Question 86)
    {
        action: "A qual país europeu a Rússia declarou guerra em 2022?",
        opt1: {
            text: "Alemanha",
            nextpoint: false,
        },
        opt2: {
            text: "Itália",
            nextpoint: false,
        },
        opt3: {
            text: "Ucrânia",
            nextpoint: true,
        },
        opt4: {
            text: "França",
            nextpoint: false,
        }
    },
    //86 (Question 87)
    {
        action: "Quantos anos tem um século?",
        opt1: {
            text: "1000",
            nextpoint: false,
        },
        opt2: {
            text: "10",
            nextpoint: false,
        },
        opt3: {
            text: "110",
            nextpoint: false,
        },
        opt4: {
            text: "100",
            nextpoint: true,
        }
    },
    //87 (Question 88)
    {
        action: "Entre quais países ocorreu a Guerra Fria?",
        opt1: {
            text: "Reino Unido e Itália",
            nextpoint: false,
        },
        opt2: {
            text: "Japão e China",
            nextpoint: false,
        },
        opt3: {
            text: "Estados Unidos e União Soviética",
            nextpoint: true,
        },
        opt4: {
            text: "Israel e Alemanha",
            nextpoint: false,
        }
    },
    //88 (Question 89)
    {
        action: "Qual é século em que vivemos atualmente?",
        opt1: {
            text: "XX",
            nextpoint: false,
        },
        opt2: {
            text: "XXI",
            nextpoint: true,
        },
        opt3: {
            text: "XIX",
            nextpoint: false,
        },
        opt4: {
            text: "XXII",
            nextpoint: false,
        }
    },
    //89 (Question 90)
    {
        action: "Qual é o nome do primeiro brasileiro presidente eleito após o fim da Ditadura Militar?",
        opt1: {
            text: "Tancredo Neves",
            nextpoint: false,
        },
        opt2: {
            text: "Fernando Collor de Mello",
            nextpoint: true,
        },
        opt3: {
            text: "José Sarney",
            nextpoint: false,
        },
        opt4: {
            text: "Itamar Franco",
            nextpoint: false,
        }
    },
    //90 (Question 91)
    {
        action: "Quem veio para o Brasil no ano de 1808?",
        opt1: {
            text: "Família Real Portuguesa",
            nextpoint: true,
        },
        opt2: {
            text: "Napoleão Bonaparte",
            nextpoint: false,
        },
        opt3: {
            text: "Família Real Holandesa",
            nextpoint: false,
        },
        opt4: {
            text: "Leonardo da Vinci",
            nextpoint: false,
        }
    },
    //91 (Question 92)
    {
        action: "Qual era o nome do partido político do qual Adolf Hitler foi líder?",
        opt1: {
            text: "Partido Nacional-Socialista dos Trabalhadores Alemães",
            nextpoint: true,
        },
        opt2: {
            text: "Partido Nazi-Facista",
            nextpoint: false,
        },
        opt3: {
            text: "Partido Fascista Alemão",
            nextpoint: false,
        },
        opt4: {
            text: "Partido Reich",
            nextpoint: false,
        }
    },
    //92 (Question 93)
    {
        action: " Qual é o planeta mais próximo do Sol?",
        opt1: {
            text: "Marte",
            nextpoint: false,
        },
        opt2: {
            text: "Vênus",
            nextpoint: false,
        },
        opt3: {
            text: "Mercúrio",
            nextpoint: true,
        },
        opt4: {
            text: "Júpiter",
            nextpoint: false,
        }
    },
    //93 (Question 94)
    {
        action: "Qual é o animal mais pesado do mundo?",
        opt1: {
            text: "Elefante-africano",
            nextpoint: false,
        },
        opt2: {
            text: "Baleia-azul",
            nextpoint: true,
        },
        opt3: {
            text: "Hipopótamo",
            nextpoint: false,
        },
        opt4: {
            text: "Rinoceronte-branco",
            nextpoint: false,
        }
    },
    //94 (Question 95)
    {
        action: "Qual é o animal mais alto do mundo?",
        opt1: {
            text: "Girafa",
            nextpoint: true,
        },
        opt2: {
            text: "Leão",
            nextpoint: false,
        },
        opt3: {
            text: "Zebra",
            nextpoint: false,
        },
        opt4: {
            text: "Elefante",
            nextpoint: false,
        }
    },
    //95 (Question 96)
    {
        action: "Qual é a única parte do corpo humano que continua do mesmo tamanho desde o nascimento?",
        opt1: {
            text: "Língua",
            nextpoint: false,
        },
        opt2: {
            text: "Orelhas",
            nextpoint: false,
        },
        opt3: {
            text: "Nariz",
            nextpoint: false,
        },
        opt4: {
            text: "Olhos",
            nextpoint: true,
        }
    },
    //96 (Question 97)
    {
        action: "Qual elemento representa o O na tabela periódica?",
        opt1: {
            text: "Oxigênio",
            nextpoint: true,
        },
        opt2: {
            text: "Oganessônio",
            nextpoint: false,
        },
        opt3: {
            text: "Ouro",
            nextpoint: false,
        },
        opt4: {
            text: "Ósmio",
            nextpoint: false,
        }
    },
    //97 (Question 98)
    {
        action: "Qual é a ciência que estuda os seres vivos?",
        opt1: {
            text: "Botânica",
            nextpoint: false,
        },
        opt2: {
            text: "Ecologia ",
            nextpoint: false,
        },
        opt3: {
            text: "Zoologia",
            nextpoint: false,
        },
        opt4: {
            text: "Biologia",
            nextpoint: true,
        }
    },
    //98 (Question 99)
    {
        action: "Quantos dentes normalmente tem um ser humano adulto?",
        opt1: {
            text: "32 dentes",
            nextpoint: true,
        },
        opt2: {
            text: "28 dentes",
            nextpoint: false,
        },
        opt3: {
            text: "24 dentes",
            nextpoint: false,
        },
        opt4: {
            text: "20 dentes",
            nextpoint: false,
        }
    },
    //99 (Question 100)
    {
        action: "Quantos tentáculos tem um polvo?",
        opt1: {
            text: "6 tentáculos",
            nextpoint: false,
        },
        opt2: {
            text: "8 tentáculos",
            nextpoint: true,
        },
        opt3: {
            text: "10 tentáculos",
            nextpoint: false,
        },
        opt4: {
            text: "12 tentáculos",
            nextpoint: false,
        }
    },
    //100 (Question 101)
    {
        action: "Como é chamado o filhote do sapo?",
        opt1: {
            text: "Célula-ovo",
            nextpoint: false,
        },
        opt2: {
            text: "Embrião",
            nextpoint: false,
        },
        opt3: {
            text: "Larva",
            nextpoint: false,
        },
        opt4: {
            text: "Girino",
            nextpoint: true,
        }
    },
    //101 (Question 102)
    {
        action: "Qual é o nome do satélite natural da Terra?",
        opt1: {
            text: "Titã",
            nextpoint: false,
        },
        opt2: {
            text: "Lua",
            nextpoint: true,
        },
        opt3: {
            text: "Europa",
            nextpoint: false,
        },
        opt4: {
            text: "Io",
            nextpoint: false,
        }
    },
    //102 (Question 103)
    {
        action: "Os morcegos pertencem a qual classe animal?",
        opt1: {
            text: "Aves",
            nextpoint: false,
        },
        opt2: {
            text: "Anfíbios",
            nextpoint: false,
        },
        opt3: {
            text: "Mamíferos",
            nextpoint: true,
        },
        opt4: {
            text: "Répteis",
            nextpoint: false,
        }
    },
    //103 (Question 104)
    {
        action: "Qual é o mamífero que possui um bico?",
        opt1: {
            text: "Ornitorrinco",
            nextpoint: true,
        },
        opt2: {
            text: "Pelicano",
            nextpoint: false,
        },
        opt3: {
            text: "Baleia Beluga",
            nextpoint: false,
        },
        opt4: {
            text: "Ornitorrinco",
            nextpoint: false,
        }
    },
    //104 (Question 105)
    {
        action: "Quais são as estações do ano?",
        opt1: {
            text: "Norte, sul, leste, oeste",
            nextpoint: false,
        },
        opt2: {
            text: "Primavera, verão, outono e inverno",
            nextpoint: true,
        },
        opt3: {
            text: "Frio, calor, chuva e vento",
            nextpoint: false,
        },
        opt4: {
            text: "Aurora, boreal, polar e glacial.",
            nextpoint: false,
        }
    },
    //105 (Question 106)
    {
        action: "Qual é o nome da galáxia onde a Terra se encontra?",
        opt1: {
            text: "Galáxia de Andrômeda",
            nextpoint: false,
        },
        opt2: {
            text: "Via Láctea",
            nextpoint: true,
        },
        opt3: {
            text: "Galáxia do Girassol",
            nextpoint: false,
        },
        opt4: {
            text: "Galáxia do Rodamoinho",
            nextpoint: false,
        }
    },
    //106 (Question 107)
    {
        action: "Qual foi o primeiro mamífero clonado por cientistas?",
        opt1: {
            text: "Cachorro",
            nextpoint: false,
        },
        opt2: {
            text: "Vaca",
            nextpoint: false,
        },
        opt3: {
            text: "Cavalo",
            nextpoint: false,
        },
        opt4: {
            text: "Ovelha",
            nextpoint: true,
        }
    },
    //107 (Question 108)
    {
        action: "Qual animal se transforma em borboleta?",
        opt1: {
            text: "Minhoca",
            nextpoint: false,
        },
        opt2: {
            text: "Besouro",
            nextpoint: false,
        },
        opt3: {
            text: "Lagarta",
            nextpoint: true,
        },
        opt4: {
            text: "Larva",
            nextpoint: false,
        }
    },
    //108 (Question 109)
    {
        action: "Qual planeta é conhecido como 'planeta vermelho'?",
        opt1: {
            text: "Terra",
            nextpoint: false,
        },
        opt2: {
            text: "Marte",
            nextpoint: true,
        },
        opt3: {
            text: "Júpiter",
            nextpoint: false,
        },
        opt4: {
            text: "Mercúrio",
            nextpoint: false,
        }
    },
    //109 (Question 110)
    {
        action: "Como é chamada a água em estado sólido?",
        opt1: {
            text: "Vapor",
            nextpoint: false,
        },
        opt2: {
            text: "Gelo",
            nextpoint: true,
        },
        opt3: {
            text: "Rígida",
            nextpoint: false,
        },
        opt4: {
            text: "Dura",
            nextpoint: false,
        }
    },
    //110 (Question 111)
    {
        action: "Qual é a moeda oficial da Espanha?",
        opt1: {
            text: "Peseta",
            nextpoint: false,
        },
        opt2: {
            text: "Rublo",
            nextpoint: false,
        },
        opt3: {
            text: "Escudo",
            nextpoint: false,
        },
        opt4: {
            text: "Euro",
            nextpoint: true,
        }
    },
    //111 (Question 112)
    {
        action: "Em qual cidade fica o famoso monumento do Coliseu?",
        opt1: {
            text: "Barcelona",
            nextpoint: false,
        },
        opt2: {
            text: "Pisa",
            nextpoint: false,
        },
        opt3: {
            text: "Atenas",
            nextpoint: false,
        },
        opt4: {
            text: "Roma",
            nextpoint: true,
        }
    },
    //112 (Question 113)
    {
        action: "Qual é a montanha mais alta do mundo?",
        opt1: {
            text: "Monte Everest",
            nextpoint: true,
        },
        opt2: {
            text: "Monte Aconcágua",
            nextpoint: false,
        },
        opt3: {
            text: "Pico da Neblina",
            nextpoint: false,
        },
        opt4: {
            text: "Monte Quilimanjaro",
            nextpoint: false,
        }
    },
    //113 (Question 114)
    {
        action: "Qual é a capital da Argentina?",
        opt1: {
            text: "Assunção",
            nextpoint: false,
        },
        opt2: {
            text: "Buenos Aires",
            nextpoint: true,
        },
        opt3: {
            text: "Bogotá",
            nextpoint: false,
        },
        opt4: {
            text: "Brasília",
            nextpoint: false,
        }
    },
    //114 (Question 115)
    {
        action: "Qual foi a primeira capital do Brasil?",
        opt1: {
            text: "Brasília",
            nextpoint: false,
        },
        opt2: {
            text: "Salvador",
            nextpoint: true,
        },
        opt3: {
            text: "Rio de Janeiro",
            nextpoint: false,
        },
        opt4: {
            text: "São Paulo",
            nextpoint: false,
        }
    },
    //115 (Question 116)
    {
        action: "Qual é a cor da bandeira do Japão?",
        opt1: {
            text: "Vermelha e amarela",
            nextpoint: false,
        },
        opt2: {
            text: "Branca e azul",
            nextpoint: false,
        },
        opt3: {
            text: "Vermelha e branca",
            nextpoint: true,
        },
        opt4: {
            text: "Vermelha e azul",
            nextpoint: false,
        }
    },
    //116 (Question 117)
    {
        action: "Qual é o nome do famoso monumento que fica na Baía de Nova York?",
        opt1: {
            text: "Cristo Redentor",
            nextpoint: false,
        },
        opt2: {
            text: "Estátua da Liberdade",
            nextpoint: true,
        },
        opt3: {
            text: "Torre Eiffel",
            nextpoint: false,
        },
        opt4: {
            text: "Torre de Pisa",
            nextpoint: false,
        }
    },
    //117 (Question 118)
    {
        action: "O Brasil é dividido em quantas regiões?",
        opt1: {
            text: "Três",
            nextpoint: false,
        },
        opt2: {
            text: "Quatro",
            nextpoint: false,
        },
        opt3: {
            text: "Cinco",
            nextpoint: true,
        },
        opt4: {
            text: "Seis",
            nextpoint: false,
        }
    },
    //118 (Question 119)
    {
        action: "Qual é o idioma oficial da China?",
        opt1: {
            text: "Hindi",
            nextpoint: false,
        },
        opt2: {
            text: "Mandarim",
            nextpoint: true,
        },
        opt3: {
            text: "Urdu",
            nextpoint: false,
        },
        opt4: {
            text: "Telugo",
            nextpoint: false,
        }
    },
    //119 (Question 120)
    {
        action: "Em qual cidade fica a praia de Copacabana?",
        opt1: {
            text: "Santos",
            nextpoint: false,
        },
        opt2: {
            text: "Porto Alegre",
            nextpoint: false,
        },
        opt3: {
            text: "Vitória",
            nextpoint: false,
        },
        opt4: {
            text: "Rio de Janeiro",
            nextpoint: true,
        }
    },
    //120 (Question 121)
    {
        action: "Qual é o continente que conta com o maior número de países?",
        opt1: {
            text: "Ásia",
            nextpoint: false,
        },
        opt2: {
            text: "África",
            nextpoint: true,
        },
        opt3: {
            text: "Europa",
            nextpoint: false,
        },
        opt4: {
            text: "Oceania",
            nextpoint: false,
        }
    },
    //121 (Question 122)
    {
        action: "Qual país é conhecido como o 'mais fechado do mundo'?",
        opt1: {
            text: "Rússia",
            nextpoint: false,
        },
        opt2: {
            text: "Estados Unidos",
            nextpoint: false,
        },
        opt3: {
            text: "China",
            nextpoint: false,
        },
        opt4: {
            text: "Coreia do Norte  ",
            nextpoint: true,
        }
    },
    //122 (Question 123)
    {
        action: "Quais são os quatro pontos cardeais?",
        opt1: {
            text: "Primavera, Verão, Outono e Inverno",
            nextpoint: true,
        },
        opt2: {
            text: "Yin, Yang, Pin e Pang",
            nextpoint: false,
        },
        opt3: {
            text: "Norte, Sul, Leste e Oeste",
            nextpoint: true,
        },
        opt4: {
            text: "Batismo, Crisma, Eucaristia e Reconciliação",
            nextpoint: false,
        }
    },
    //123 (Question 124)
    {
        action: "O Brasil é banhado por qual oceano?",
        opt1: {
            text: "Atlântico",
            nextpoint: true,
        },
        opt2: {
            text: "Índico",
            nextpoint: false,
        },
        opt3: {
            text: "Pacífico",
            nextpoint: false,
        },
        opt4: {
            text: "Glacial Ártico",
            nextpoint: false,
        }
    },
    //124 (Question 125)
    {
        action: "Qual é o idioma oficial da Arábia Saudita?",
        opt1: {
            text: "Turco",
            nextpoint: false,
        },
        opt2: {
            text: "Tâmil",
            nextpoint: false,
        },
        opt3: {
            text: "Árabe",
            nextpoint: true,
        },
        opt4: {
            text: "Francês",
            nextpoint: false,
        }
    },
    //125 (Question 126)
    {
        action: "Como é chamada a pessoa que nasce na cidade de Salvador, na Bahia?",
        opt1: {
            text: "Salvadorenho(a)",
            nextpoint: false,
        },
        opt2: {
            text: "Salvador(a)",
            nextpoint: false,
        },
        opt3: {
            text: "Salvatoriano(a)",
            nextpoint: false,
        },
        opt4: {
            text: "Soteropolitano(a)",
            nextpoint: true,
        }
    },
    //126 (Question 127)
    {
        action: "Em qual continente fica a Suíça?",
        opt1: {
            text: "América",
            nextpoint: false,
        },
        opt2: {
            text: "Europa",
            nextpoint: true,
        },
        opt3: {
            text: "Oceania",
            nextpoint: false,
        },
        opt4: {
            text: "Ásia",
            nextpoint: false,
        }
    },
    //127 (Question 128)
    {
        action: "Qual país é conhecido como 'Terra do Sol Nascente'?",
        opt1: {
            text: "Japão",
            nextpoint: true,
        },
        opt2: {
            text: "China",
            nextpoint: false,
        },
        opt3: {
            text: "Taiwan",
            nextpoint: false,
        },
        opt4: {
            text: "Coreia do Sul",
            nextpoint: false,
        }
    },
    //128 (Question 129)
    {
        action: "Qual é o maior rio do Brasil?",
        opt1: {
            text: "Tietê",
            nextpoint: false,
        },
        opt2: {
            text: "Solimões",
            nextpoint: false,
        },
        opt3: {
            text: "Rio Negro",
            nextpoint: false,
        },
        opt4: {
            text: "Amazonas",
            nextpoint: true,
        }
    },
    //129 (Question 130)
    {
        action: "Qual é o monumento mais famoso de Paris?",
        opt1: {
            text: "Estátua da Liberdade",
            nextpoint: false,
        },
        opt2: {
            text: "Torre Eiffel",
            nextpoint: true,
        },
        opt3: {
            text: "Big Ben",
            nextpoint: false,
        },
        opt4: {
            text: "Estátua da Liberdade",
            nextpoint: false,
        }
    },
    //130 (Question 131)
    {
        action: "Qual grupo lançou a música Ragatanga?",
        opt1: {
            text: "Spice Girls",
            nextpoint: false,
        },
        opt2: {
            text: "As Meninas",
            nextpoint: false,
        },
        opt3: {
            text: "Banana Split",
            nextpoint: false,
        },
        opt4: {
            text: "Rouge",
            nextpoint: true,
        }
    },
    //131 (Question 132)
    {
        action: "Na animação “Procurando Nemo”, qual é a espécie de peixe do Nemo?",
        opt1: {
            text: "Dourado-do-mar",
            nextpoint: false,
        },
        opt2: {
            text: "Peixe-palhaço",
            nextpoint: true,
        },
        opt3: {
            text: "Quatro-olhos",
            nextpoint: false,
        },
        opt4: {
            text: "Barracuda",
            nextpoint: false,
        }
    },
    //132 (Question 133)
    {
        action: "Qual cantor brasileiro é chamado de Rei?",
        opt1: {
            text: "Roberto Carlos",
            nextpoint: true,
        },
        opt2: {
            text: "Erasmo Carlos",
            nextpoint: false,
        },
        opt3: {
            text: "Francisco Carlos",
            nextpoint: false,
        },
        opt4: {
            text: "Antônio Carlos",
            nextpoint: false,
        }
    },
    //133 (Question 134)
    {
        action: "Quem pintou o quadro chamado 'Mona Lisa' (também conhecido como Gioconda)?",
        opt1: {
            text: "Pablo Picasso",
            nextpoint: false,
        },
        opt2: {
            text: "Claude Monet",
            nextpoint: false,
        },
        opt3: {
            text: "Salvador Dalí",
            nextpoint: false,
        },
        opt4: {
            text: "Leonardo da Vinci",
            nextpoint: true,
        }
    },
    //134 (Question 135)
    {
        action: "Qual é o nome do instrumento musical de cordas tocado com um arco?",
        opt1: {
            text: "Piano",
            nextpoint: false,
        },
        opt2: {
            text: "Guitarra",
            nextpoint: false,
        },
        opt3: {
            text: "Violino",
            nextpoint: true,
        },
        opt4: {
            text: "Saxofone",
            nextpoint: false,
        }
    },
    //135 (Question 136)
    {
        action: "Qual artista canta a música Show das Poderosas?",
        opt1: {
            text: "Gretchen",
            nextpoint: false,
        },
        opt2: {
            text: "Anitta",
            nextpoint: true,
        },
        opt3: {
            text: "Ludmilla",
            nextpoint: false,
        },
        opt4: {
            text: "Lexa",
            nextpoint: false,
        }
    },
    //136 (Question 137)
    {
        action: "Qual é o nome do lugar onde os livros são guardados e emprestados?",
        opt1: {
            text: "Biblioteca",
            nextpoint: true,
        },
        opt2: {
            text: "Papelaria",
            nextpoint: false,
        },
        opt3: {
            text: "Supermercado",
            nextpoint: false,
        },
        opt4: {
            text: "Escola",
            nextpoint: false,
        }
    },
    //137 (Question 138)
    {
        action: "Qual super-herói dos quadrinhos é conhecido como Homem-Morcego?",
        opt1: {
            text: "Super-Homem",
            nextpoint: false,
        },
        opt2: {
            text: "Homem-Aranha",
            nextpoint: false,
        },
        opt3: {
            text: "Capitão América",
            nextpoint: false,
        },
        opt4: {
            text: "Batman",
            nextpoint: true,
        }
    },
    //138 (Question 139)
    {
        action: "Qual é o nome da filha de Morticia e Gomez, na série de filmes Família Addams?",
        opt1: {
            text: "Lily",
            nextpoint: false,
        },
        opt2: {
            text: "Wandinha",
            nextpoint: true,
        },
        opt3: {
            text: "Pugsley",
            nextpoint: false,
        },
        opt4: {
            text: "Morticinha",
            nextpoint: false,
        }
    },
    //139 (Question 140)
    {
        action: "Que animal é o personagem Patrick, do desenho animado Bob Esponja?",
        opt1: {
            text: "Esponja-do-mar",
            nextpoint: false,
        },
        opt2: {
            text: "Estrela-do-mar",
            nextpoint: true,
        },
        opt3: {
            text: "Moreia",
            nextpoint: false,
        },
        opt4: {
            text: "Polvo",
            nextpoint: false,
        }
    },
    //140 (Question 141)
    {
        action: "Qual artista ficou mundialmente conhecida por usar um turbante com frutas na cabeça?",
        opt1: {
            text: "Carmen Miranda",
            nextpoint: true,
        },
        opt2: {
            text: "Sandra de Sá",
            nextpoint: false,
        },
        opt3: {
            text: "Sula Miranda",
            nextpoint: false,
        },
        opt4: {
            text: "Maysa",
            nextpoint: false,
        }
    },
    //141 (Question 142)
    {
        action: "Qual é o nome do personagem que não quer crescer?",
        opt1: {
            text: "Peter Pan",
            nextpoint: true,
        },
        opt2: {
            text: "Edward Mãos de Tesoura",
            nextpoint: false,
        },
        opt3: {
            text: "Pinóquio",
            nextpoint: false,
        },
        opt4: {
            text: "Benjamin Button",
            nextpoint: false,
        }
    },
    //142 (Question 143)
    {
        action: "Qual é o nome da autora da série de livros 'Harry Potter'?",
        opt1: {
            text: "J. K. Rowling",
            nextpoint: true,
        },
        opt2: {
            text: "Stephenie Meyer",
            nextpoint: false,
        },
        opt3: {
            text: "Suzanne Collins",
            nextpoint: false,
        },
        opt4: {
            text: "Veronica Roth",
            nextpoint: false,
        }
    },
    //143 (Question 144)
    {
        action: "Qual cantora de música sertaneja ficou conhecida como rainha da sofrência?",
        opt1: {
            text: "Paula Fernandes",
            nextpoint: false,
        },
        opt2: {
            text: "Roberta Miranda",
            nextpoint: false,
        },
        opt3: {
            text: "Naiara Azevedo",
            nextpoint: false,
        },
        opt4: {
            text: "Marília Mendonça",
            nextpoint: true,
        }
    },
    //144 (Question 145)
    {
        action: "Quem é o criador das histórias em quadrinhos da Turma da Mônica?",
        opt1: {
            text: "Ziraldo",
            nextpoint: false,
        },
        opt2: {
            text: "Walt Disney",
            nextpoint: false,
        },
        opt3: {
            text: "Maurício de Sousa",
            nextpoint: true,
        },
        opt4: {
            text: "Monteiro Lobato",
            nextpoint: false,
        }
    },
    //145 (Question 146)
    {
        action: "Uma trilogia é composta por quantos filmes?",
        opt1: {
            text: "Três",
            nextpoint: true,
        },
        opt2: {
            text: "Treze",
            nextpoint: false,
        },
        opt3: {
            text: "Trinta",
            nextpoint: false,
        },
        opt4: {
            text: "Trinta e três",
            nextpoint: false,
        }
    },
    //146 (Question 147)
    {
        action: "Qual personagem do folclore brasileiro tem os pés voltados para trás?",
        opt1: {
            text: "Saci",
            nextpoint: false,
        },
        opt2: {
            text: "Curupira",
            nextpoint: true,
        },
        opt3: {
            text: "Boitatá",
            nextpoint: false,
        },
        opt4: {
            text: "Caipora",
            nextpoint: false,
        }
    },
    //147 (Question 148)
    {
        action: "Na série de livros Harry Potter, Harry Potter é um:",
        opt1: {
            text: "Fantasma",
            nextpoint: false,
        },
        opt2: {
            text: "Vampiro",
            nextpoint: false,
        },
        opt3: {
            text: "Cantor",
            nextpoint: false,
        },
        opt4: {
            text: "Bruxo",
            nextpoint: true,
        }
    },
    //148 (Question 149)
    {
        action: "Qual é o nome do instrumento musical que é conhecido por ter teclas brancas e pretas?",
        opt1: {
            text: "Piano",
            nextpoint: true,
        },
        opt2: {
            text: "Guitarra",
            nextpoint: false,
        },
        opt3: {
            text: "Bateria",
            nextpoint: false,
        },
        opt4: {
            text: "Violino",
            nextpoint: false,
        }
    },
    //149 (Question 150)
    {
        action: "Com qual esporte o norte-americano Michael Phelps conquistou 28 medalhas olímpicas?",
        opt1: {
            text: "Judô",
            nextpoint: false,
        },
        opt2: {
            text: "Canoagem",
            nextpoint: false,
        },
        opt3: {
            text: "Ciclismo",
            nextpoint: false,
        },
        opt4: {
            text: "Natação",
            nextpoint: true,
        }
    },
    //150 (Question 151)
    {
        action: "Quantos anéis compõem o símbolo dos Jogos Olímpicos?",
        opt1: {
            text: "Três",
            nextpoint: false,
        },
        opt2: {
            text: "Cinco",
            nextpoint: true,
        },
        opt3: {
            text: "Seis",
            nextpoint: false,
        },
        opt4: {
            text: "Oito",
            nextpoint: false,
        }
    },
    //151 (Question 152)
    {
        action: "Quanta vezes o Brasil foi campeão da Copa do Mundo?",
        opt1: {
            text: "Três",
            nextpoint: false,
        },
        opt2: {
            text: "Quatro",
            nextpoint: false,
        },
        opt3: {
            text: "Cinco",
            nextpoint: true,
        },
        opt4: {
            text: "Seis",
            nextpoint: false,
        }
    },
    //152 (Question 153)
    {
        action: "O atleta argentino Diego Maradona praticava qual esporte?",
        opt1: {
            text: "Basquete",
            nextpoint: false,
        },
        opt2: {
            text: "Boxe",
            nextpoint: false,
        },
        opt3: {
            text: "Futebol",
            nextpoint: true,
        },
        opt4: {
            text: "Badminton",
            nextpoint: false,
        }
    },
    //153 (Question 154)
    {
        action: "Quantos quilômetros são percorridos em uma maratona?",
        opt1: {
            text: "27 km",
            nextpoint: false,
        },
        opt2: {
            text: "38 km",
            nextpoint: false,
        },
        opt3: {
            text: "40 km",
            nextpoint: false,
        },
        opt4: {
            text: "42 km",
            nextpoint: true,
        }
    },
    //154 (Question 155)
    {
        action: "Quantos jogadores tem um time de basquete?",
        opt1: {
            text: "Cinco",
            nextpoint: true,
        },
        opt2: {
            text: "Seis",
            nextpoint: false,
        },
        opt3: {
            text: "Sete",
            nextpoint: false,
        },
        opt4: {
            text: "Nove",
            nextpoint: false,
        }
    },
    //155 (Question 156)
    {
        action: "Qual esporte praticava o ídolo brasileiro Ayrton Senna?",
        opt1: {
            text: "Atletismo",
            nextpoint: false,
        },
        opt2: {
            text: "Automobilismo",
            nextpoint: true,
        },
        opt3: {
            text: "Futebol",
            nextpoint: false,
        },
        opt4: {
            text: "Natação",
            nextpoint: false,
        }
    },
    //156 (Question 157)
    {
        action: "Qual é o esporte mais popular do Japão?",
        opt1: {
            text: "Judô",
            nextpoint: false,
        },
        opt2: {
            text: "Sumô",
            nextpoint: true,
        },
        opt3: {
            text: "Taekwondo",
            nextpoint: false,
        },
        opt4: {
            text: "Sujô",
            nextpoint: false,
        }
    },
    //157 (Question 158)
    {
        action: "Qual é a nacionalidade do atleta que ganhou a primeira medalha olímpica de ouro no surfe, em 2021?",
        opt1: {
            text: "Norte-americana",
            nextpoint: false,
        },
        opt2: {
            text: "Japonesa",
            nextpoint: false,
        },
        opt3: {
            text: "Mexicana",
            nextpoint: false,
        },
        opt4: {
            text: "Brasileira",
            nextpoint: true,
        }
    },
    //158 (Question 159)
    {
        action: "Como se chama a luta criada por escravos que usa passos de dança?",
        opt1: {
            text: "Boxe",
            nextpoint: false,
        },
        opt2: {
            text: "Caratê",
            nextpoint: false,
        },
        opt3: {
            text: "Capoeira",
            nextpoint: true,
        },
        opt4: {
            text: "Muay Thai",
            nextpoint: false,
        }
    },
    //159 (Question 160)
    {
        action: "Qual país foi o campeão da Copa do Mundo de 2022?",
        opt1: {
            text: "Alemanha",
            nextpoint: false,
        },
        opt2: {
            text: "França",
            nextpoint: false,
        },
        opt3: {
            text: "Brasil",
            nextpoint: false,
        },
        opt4: {
            text: "Argentina",
            nextpoint: true,
        }
    },
    //160 (Question 161)
    {
        action: "Qual é o nome do esporte em que os jogadores precisam acertar o gol usando as mãos?",
        opt1: {
            text: "Basquete",
            nextpoint: false,
        },
        opt2: {
            text: "Handebol",
            nextpoint: true,
        },
        opt3: {
            text: "Beisebol",
            nextpoint: false,
        },
        opt4: {
            text: "Vôlei",
            nextpoint: false,
        }
    },
    //161 (Question 162)
    {
        action: "Para qual país a seleção brasileira perdeu por 7 a 1 na Copa do Mundo de 2014?",
        opt1: {
            text: "Alemanha",
            nextpoint: true,
        },
        opt2: {
            text: "Argentina",
            nextpoint: false,
        },
        opt3: {
            text: "França",
            nextpoint: false,
        },
        opt4: {
            text: "Bélgica",
            nextpoint: false,
        }
    },
    //162 (Question 163)
    {
        action: "Qual é o esporte praticado com raquetes e em que há uma rede sobre uma mesa?",
        opt1: {
            text: "Vôlei",
            nextpoint: false,
        },
        opt2: {
            text: "Pinball",
            nextpoint: false,
        },
        opt3: {
            text: "Frescobol",
            nextpoint: false,
        },
        opt4: {
            text: "Tênis de mesa",
            nextpoint: true,
        }
    },
    //163 (Question 164)
    {
        action: "Qual esporte utiliza aparelhos como trave, argolas e cavalo com alças?",
        opt1: {
            text: "Escalada",
            nextpoint: false,
        },
        opt2: {
            text: "Hipismo",
            nextpoint: false,
        },
        opt3: {
            text: "Tênis de mesa",
            nextpoint: false,
        },
        opt4: {
            text: "Ginástica olímpica",
            nextpoint: true,
        }
    },
    //164 (Question 165)
    {
        action: "Por qual feito bizarro o lutador de boxe Mike Tyson é lembrado?",
        opt1: {
            text: "Lamber a axila do adversário",
            nextpoint: false,
        },
        opt2: {
            text: "Arrancar um pedaço da orelha do adversário",
            nextpoint: true,
        },
        opt3: {
            text: "Ficar nu no meio da luta",
            nextpoint: false,
        },
        opt4: {
            text: "Arrancar os próprios cabelos",
            nextpoint: false,
        }
    },
    //165 (Question 166)
    {
        action: "Como se chama o esporte onde o atleta salta barreiras em cima de um cavalo?",
        opt1: {
            text: "Cavaleirismo",
            nextpoint: false,
        },
        opt2: {
            text: "Montaria",
            nextpoint: false,
        },
        opt3: {
            text: "Hipismo",
            nextpoint: true,
        },
        opt4: {
            text: "Cavalgada",
            nextpoint: false,
        }
    },
    //166 (Question 167)
    {
        action: "Como se chama a jogada em que um jogador de vôlei faz ponto de saque?",
        opt1: {
            text: "Nice",
            nextpoint: false,
        },
        opt2: {
            text: "Ace",
            nextpoint: true,
        },
        opt3: {
            text: "Vibe",
            nextpoint: false,
        },
        opt4: {
            text: "Ice",
            nextpoint: false,
        }
    },
    //167 (Question 168)
    {
        action: "Qual é o nome do esporte em que se pode fazer um strike?",
        opt1: {
            text: "Handebol",
            nextpoint: false,
        },
        opt2: {
            text: "Tênis",
            nextpoint: false,
        },
        opt3: {
            text: "Boliche",
            nextpoint: true,
        },
        opt4: {
            text: "Golfe",
            nextpoint: false,
        }
    },
    //168 (Question 169)
    {
        action: "Qual estilo de dança se tornará um esporte olímpico em 2024?",
        opt1: {
            text: "Bolero",
            nextpoint: false,
        },
        opt2: {
            text: "Breaking",
            nextpoint: true,
        },
        opt3: {
            text: "Balé",
            nextpoint: false,
        },
        opt4: {
            text: "Jazz",
            nextpoint: false,
        }
    },
    //169 (Question 170)
    {
        action: "Qual anime segue a jornada de um jovem ninja em busca de reconhecimento?",
        opt1: {
            text: "Naruto",
            nextpoint: true,
        },
        opt2: {
            text: "One Piece",
            nextpoint: false,
        },
        opt3: {
            text: "Bleach",
            nextpoint: false,
        },
        opt4: {
            text: "Attack on Titan",
            nextpoint: false,
        }
    },
    //170 (Question 171)
    {
        action: "Em qual anime os personagens frequentemente participam de batalhas de cartas?",
        opt1: {
            text: "Yu Yu Hakusho",
            nextpoint: false,
        },
        opt2: {
            text: "Yu-Gi-Oh!",
            nextpoint: true,
        },
        opt3: {
            text: "Cardcaptor Sakura",
            nextpoint: false,
        },
        opt4: {
            text: "Digimon",
            nextpoint: false,
        }
    },
    //171 (Question 172)
    {
        action: "Quem é o personagem principal de 'Naruto'?",
        opt1: {
            text: "Naruto Uzumaki",
            nextpoint: true,
        },
        opt2: {
            text: "Sasuke Uchiha",
            nextpoint: false,
        },
        opt3: {
            text: "Sakura Haruno",
            nextpoint: false,
        },
        opt4: {
            text: "Kakashi Hatake",
            nextpoint: false,
        }
    },
    //172 (Question 173)
    {
        action: "Qual anime se passa em um mundo onde humanos lutam contra gigantes humanoides?",
        opt1: {
            text: "Attack on Titan",
            nextpoint: true,
        },
        opt2: {
            text: "Death Note",
            nextpoint: false,
        },
        opt3: {
            text: "Fullmetal Alchemist  ",
            nextpoint: false,
        },
        opt4: {
            text: "My Hero Academia",
            nextpoint: false,
        }
    },
    //173 (Question 174)
    {
        action: "Qual desses animes segue a história de um alquimista em busca da Pedra Filosofal?",
        opt1: {
            text: "Fullmetal Alchemist",
            nextpoint: true,
        },
        opt2: {
            text: "Cowboy Bebop",
            nextpoint: false,
        },
        opt3: {
            text: "Neon Genesis Evangelion",
            nextpoint: false,
        },
        opt4: {
            text: "Hunter x Hunter",
            nextpoint: false,
        }
    },
    //174 (Question 175)
    {
        action: "Qual anime é conhecido por seu elenco de personagens com poderes baseados em diferentes elementos?",
        opt1: {
            text: "Avatar: A Lenda de Aang",
            nextpoint: false,
        },
        opt2: {
            text: "Fairy Tail",
            nextpoint: true,
        },
        opt3: {
            text: "Inuyasha",
            nextpoint: false,
        },
        opt4: {
            text: "Black Clover",
            nextpoint: false,
        }
    },
    //175 (Question 176)
    {
        action: "Em qual anime os personagens são transportados para um mundo de realidade virtual?",
        opt1: {
            text: "Sword Art Online",
            nextpoint: true,
        },
        opt2: {
            text: "Log Horizon",
            nextpoint: false,
        },
        opt3: {
            text: "Accel World",
            nextpoint: false,
        },
        opt4: {
            text: "No Game No Life",
            nextpoint: false,
        }
    },
    //176 (Question 177)
    {
        action: "Qual desses animes segue as aventuras de um grupo de piratas em busca do tesouro supremo?",
        opt1: {
            text: "One Piece",
            nextpoint: true,
        },
        opt2: {
            text: "Fairy Tail",
            nextpoint: false,
        },
        opt3: {
            text: "Black Clover",
            nextpoint: false,
        },
        opt4: {
            text: "Magi",
            nextpoint: false,
        }
    },
    //177 (Question 178)
    {
        action: "Qual é o nome do protagonista de 'Dragon Ball'?",
        opt1: {
            text: "Goku",
            nextpoint: true,
        },
        opt2: {
            text: "Vegeta",
            nextpoint: false,
        },
        opt3: {
            text: "Piccolo",
            nextpoint: false,
        },
        opt4: {
            text: "Gohan",
            nextpoint: false,
        }
    },
    //178 (Question 179)
    {
        action: "Em qual anime os personagens fazem parte de uma guilda de magos?",
        opt1: {
            text: "Fairy Tail",
            nextpoint: true,
        },
        opt2: {
            text: "Bleach",
            nextpoint: false,
        },
        opt3: {
            text: "Naruto",
            nextpoint: false,
        },
        opt4: {
            text: "My Hero Academia",
            nextpoint: false,
        }
    },
    //179 (Question 180)
    {
        action: "Qual anime segue a jornada de um jovem ninja em busca de reconhecimento?",
        opt1: {
            text: "Naruto",
            nextpoint: true,
        },
        opt2: {
            text: "One Piece",
            nextpoint: false,
        },
        opt3: {
            text: "Bleach",
            nextpoint: false,
        },
        opt4: {
            text: "Attack on Titan",
            nextpoint: false,
        }
    },
    //180 (Question 181)
    {
        action: "Em qual anime os personagens usam um cardeno para eliminar pessoas?",
        opt1: {
            text: "Death Note",
            nextpoint: true,
        },
        opt2: {
            text: "Tokyo Ghoul",
            nextpoint: false,
        },
        opt3: {
            text: "Parasyte",
            nextpoint: false,
        },
        opt4: {
            text: "Code Geass",
            nextpoint: false,
        }
    },
    //181 (Question 182)
    {
        action: "Qual é o nome do personagem principal em 'One Punch Man'?",
        opt1: {
            text: "Saitama",
            nextpoint: true,
        },
        opt2: {
            text: "Genos",
            nextpoint: false,
        },
        opt3: {
            text: "Sonic da Sega",
            nextpoint: true,
        },
        opt4: {
            text: "Mumen Rider",
            nextpoint: false,
        }
    },
    //182 (Question 183)
    {
        action: "Qual anime apresenta um grupo de alunos que têm que assassinar seu professor?",
        opt1: {
            text: "Assassination Classroom",
            nextpoint: true,
        },
        opt2: {
            text: "Classroom of the Elite",
            nextpoint: false,
        },
        opt3: {
            text: "Danganronpa",
            nextpoint: false,
        },
        opt4: {
            text: "My Hero Academia",
            nextpoint: false,
        }
    },
    //183 (Question 184)
    {
        action: "Em qual anime os personagens lutam contra monstros titânicos conhecidos como 'Colossus'?",
        opt1: {
            text: "Neon Genesis Evangelion",
            nextpoint: false,
        },
        opt2: {
            text: "Fullmetal Alchemist",
            nextpoint: false,
        },
        opt3: {
            text: "One Punch Man",
            nextpoint: false,
        },
        opt4: {
            text: "Attack on Titan",
            nextpoint: true,
        }
    },
    //184 (Question 185)
    {
        action: "Qual é o nome do anime em que os personagens têm habilidades únicas chamadas 'Quirks'?",
        opt1: {
            text: "My Hero Academia",
            nextpoint: true,
        },
        opt2: {
            text: "Black Clover",
            nextpoint: false,
        },
        opt3: {
            text: "Hunter x Hunter",
            nextpoint: false,
        },
        opt4: {
            text: "Bleach",
            nextpoint: false,
        }
    },
    //185 (Question 186)
    {
        action: "Qual desses animes segue as aventuras de um grupo de magos que viaja no tempo?",
        opt1: {
            text: "Fairy Tail",
            nextpoint: false,
        },
        opt2: {
            text: "The Seven Deadly Sins",
            nextpoint: false,
        },
        opt3: {
            text: "Rave Master",
            nextpoint: true,
        },
        opt4: {
            text: "Magi",
            nextpoint: false,
        }
    },
    //186 (Question 187)
    {
        action: "Em qual anime os personagens competem em batalhas de robôs chamados 'Gunpla'?",
        opt1: {
            text: "Mobile Suit Gundam",
            nextpoint: true,
        },
        opt2: {
            text: "Code Geass",
            nextpoint: false,
        },
        opt3: {
            text: "Eureka Seven",
            nextpoint: false,
        },
        opt4: {
            text: "Aldnoah.Zero",
            nextpoint: false,
        }
    },
    //187 (Question 188)
    {
        action: "Qual é o nome do protagonista de 'One Piece'?",
        opt1: {
            text: "Roronoa Zoro",
            nextpoint: false,
        },
        opt2: {
            text: "Nami",
            nextpoint: false,
        },
        opt3: {
            text: "Monkey D. Luffy",
            nextpoint: true,
        },
        opt4: {
            text: "Sanji",
            nextpoint: false,
        }
    },
    //188 (Question 189)
    {
        action: "Em qual anime os personagens participam de um torneio de artes marciais?",
        opt1: {
            text: "Yu Yu Hakusho",
            nextpoint: false,
        },
        opt2: {
            text: "Hunter x Hunter",
            nextpoint: false,
        },
        opt3: {
            text: "Dragon Ball",
            nextpoint: false,
        },
        opt4: {
            text: "Baki",
            nextpoint: true,
        }
    },
    //189 (Question 190)
    {
        action: "Qual anime segue as aventuras de um grupo de caçadores de monstros profissionais?",
        opt1: {
            text: "Hunter x Hunter",
            nextpoint: true,
        },
        opt2: {
            text: "Tokyo Ghoul",
            nextpoint: false,
        },
        opt3: {
            text: "Attack on Titan",
            nextpoint: false,
        },
        opt4: {
            text: "Demon Slayer",
            nextpoint: false,
        }
    },
    //190 (Question 191)
    {
        action: "Em qual anime os personagens possuem dispositivos chamados 'Relógios do Vento' para lutar contra criaturas sombrias?",
        opt1: {
            text: "Katekyo Hitman Reborn!",
            nextpoint: false,
        },
        opt2: {
            text: "Bleach",
            nextpoint: false,
        },
        opt3: {
            text: "D.Gray-man",
            nextpoint: true,
        },
        opt4: {
            text: "Shaman King",
            nextpoint: false,
        }
    },
    //191 (Question 192)
    {
        action: "Qual é o nome do estudante que se transforma em um herói após comer o cabelo de All Might em 'My Hero Academia'?",
        opt1: {
            text: "Izuku Midoriya",
            nextpoint: true,
        },
        opt2: {
            text: "Katsuki Bakugo",
            nextpoint: false,
        },
        opt3: {
            text: "Tenya Iida",
            nextpoint: false,
        },
        opt4: {
            text: "Shoto Todoroki",
            nextpoint: false,
        }
    },
    //192 (Question 193)
    {
        action: "Em qual anime os personagens lutam contra seres conhecidos como 'Hollows'?",
        opt1: {
            text: "Tokyo Ghoul",
            nextpoint: false,
        },
        opt2: {
            text: "Noragami",
            nextpoint: false,
        },
        opt3: {
            text: "Blue Exorcist",
            nextpoint: false,
        },
        opt4: {
            text: "Bleach",
            nextpoint: true,
        }
    },
    //193 (Question 194)
    {
        action: "Qual é o nome do protagonista de 'Death Note'?",
        opt1: {
            text: "Misa Amane",
            nextpoint: false,
        },
        opt2: {
            text: "L Lawliet",
            nextpoint: false,
        },
        opt3: {
            text: "Light Yagami",
            nextpoint: true,
        },
        opt4: {
            text: "Ryuk",
            nextpoint: false,
        }
    },
    //194 (Question 195)
    {
        action: "Em qual anime os personagens participam de uma guerra entre humanos e alienígenas?",
        opt1: {
            text: "Terra Formars",
            nextpoint: false,
        },
        opt2: {
            text: "Gantz",
            nextpoint: true,
        },
        opt3: {
            text: "Parasyte",
            nextpoint: false,
        },
        opt4: {
            text: "Seraph of the End",
            nextpoint: false,
        }
    },
    //195 (Question 196)
    {
        action: "Qual é o nome do protagonista de 'Bleach'?",
        opt1: {
            text: "Ichigo Kurosaki",
            nextpoint: true,
        },
        opt2: {
            text: "Rukia Kuchiki",
            nextpoint: false,
        },
        opt3: {
            text: "Uryu Ishida",
            nextpoint: false,
        },
        opt4: {
            text: "Orihime Inoue",
            nextpoint: false,
        }
    },
    //196 (Question 197)
    {
        action: "Qual anime segue a história de um grupo de piratas espaciais que caçam recompensas?",
        opt1: {
            text: "Space Dandy",
            nextpoint: false,
        },
        opt2: {
            text: "Outlaw Star",
            nextpoint: false,
        },
        opt3: {
            text: "Trigun",
            nextpoint: false,
        },
        opt4: {
            text: "Cowboy Bebop",
            nextpoint: true,
        }
    },
    //197 (Question 198)
    {
        action: "Em qual anime os personagens vivem em uma cidade dominada por gangues de delinquentes?",
        opt1: {
            text: "Crows Zero",
            nextpoint: false,
        },
        opt2: {
            text: "Beelzebub",
            nextpoint: false,
        },
        opt3: {
            text: "Great Teacher Onizuka",
            nextpoint: true,
        },
        opt4: {
            text: "GTO: Great Teacher Onizuka",
            nextpoint: false,
        }
    },
    //198 (Question 199)
    {
        action: "Qual é o nome do protagonista de 'Sword Art Online'?",
        opt1: {
            text: "Kirito (Kazuto Kirigaya)",
            nextpoint: true,
        },
        opt2: {
            text: "Sinon (Shino Asada)",
            nextpoint: false,
        },
        opt3: {
            text: "Yui",
            nextpoint: false,
        },
        opt4: {
            text: "Asuna Yuuki",
            nextpoint: false,
        }
    },
    //199 (Question 200)
    {
        action: "Qual anime segue a jornada de um grupo de guerreiros mágicos em busca das sete Esferas do Dragão?",
        opt1: {
            text: "Dragon Ball",
            nextpoint: true,
        },
        opt2: {
            text: "Fairy Tail",
            nextpoint: false,
        },
        opt3: {
            text: "Magi",
            nextpoint: false,
        },
        opt4: {
            text: "Inuyasha",
            nextpoint: false,
        }
    },
    //200 (Question 201)
    {
        action: "Em qual anime os personagens fazem parte de uma organização que exorciza demônios?",
        opt1: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt2: {
            text: "Noragami",
            nextpoint: false,
        },
        opt3: {
            text: "Devilman Crybaby",
            nextpoint: false,
        },
        opt4: {
            text: "Blue Exorcist",
            nextpoint: true,
        }
    },
    //201 (Question 202)
    {
        action: "Qual é o nome do protagonista de 1Attack on Titan'?",
        opt1: {
            text: "Eren Yeager",
            nextpoint: true,
        },
        opt2: {
            text: "Mikasa Ackerman",
            nextpoint: false,
        },
        opt3: {
            text: "Armin Arlert",
            nextpoint: false,
        },
        opt4: {
            text: "Levi Ackerman    ",
            nextpoint: false,
        }
    },
    //202 (Question 203)
    {
        action: "Em qual anime os personagens competem em partidas de um jogo chamado 'Gungi'?",
        opt1: {
            text: "Hikaru no Go",
            nextpoint: false,
        },
        opt2: {
            text: "JoJo's Bizarre Adventure",
            nextpoint: false,
        },
        opt3: {
            text: "No Game No Life",
            nextpoint: false,
        },
        opt4: {
            text: "Hunter x Hunter",
            nextpoint: true,
        }
    },
    //203 (Question 204)
    {
        action: "Em qual anime os personagens viajam em um trem infinito enfrentando um demônio que controla o tempo?",
        opt1: {
            text: "Demon Slayer",
            nextpoint: false,
        },
        opt2: {
            text: "Inuyasha",
            nextpoint: false,
        },
        opt3: {
            text: "Bleach",
            nextpoint: false,
        },
        opt4: {
            text: "Kimetsu no Yaiba: Mugen Train Arc",
            nextpoint: true,
        }
    },
    //204 (Question 205)
    {
        action: "Qual anime segue as aventuras de um jovem alquimista e seu irmão em busca da Pedra Filosofal?",
        opt1: {
            text: "Black Clover",
            nextpoint: false,
        },
        opt2: {
            text: "Soul Eater",
            nextpoint: false,
        },
        opt3: {
            text: "Fullmetal Alchemist",
            nextpoint: true,
        },
        opt4: {
            text: "Hunter x Hunter",
            nextpoint: false,
        }
    },
    //205 (Question 206)
    {
        action: "Em qual anime os personagens devem sobreviver a uma série de jogos mortais?",
        opt1: {
            text: "Mirai Nikki",
            nextpoint: false,
        },
        opt2: {
            text: "The Promised Neverland",
            nextpoint: false,
        },
        opt3: {
            text: "Danganronpa",
            nextpoint: true,
        },
        opt4: {
            text: "Future Diary",
            nextpoint: false,
        }
    },
    //206 (Question 207)
    {
        action: "Qual é o nome do shinigami que dá a Light Yagami o 'Death Note'?",
        opt1: {
            text: "Ryuk",
            nextpoint: true,
        },
        opt2: {
            text: "Rem",
            nextpoint: false,
        },
        opt3: {
            text: "Misa Amane",
            nextpoint: false,
        },
        opt4: {
            text: "L Lawliet",
            nextpoint: false,
        }
    },
    //207 (Question 208)
    {
        action: "Em qual anime os personagens fazem parte de uma equipe especializada em lidar com aparições sobrenaturais?",
        opt1: {
            text: "Ghost Hunt",
            nextpoint: true,
        },
        opt2: {
            text: "Tokyo Ghoul",
            nextpoint: false,
        },
        opt3: {
            text: "Death Parade",
            nextpoint: false,
        },
        opt4: {
            text: "Parasyte",
            nextpoint: false,
        }
    },
    //208 (Question 209)
    {
        action: "Em qual anime os personagens são treinados para se tornarem exorcistas em uma academia especial?",
        opt1: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt2: {
            text: "Devilman Crybaby",
            nextpoint: false,
        },
        opt3: {
            text: "Blue Exorcist",
            nextpoint: true,
        },
        opt4: {
            text: "Noragami",
            nextpoint: false,
        }
    },
    //209 (Question 210)
    {
        action: "Qual é o nome do protagonista de 'Hunter x Hunter'?",
        opt1: {
            text: "Killua Zoldyck",
            nextpoint: false,
        },
        opt2: {
            text: "Kurapika",
            nextpoint: false,
        },
        opt3: {
            text: "Gon Freecss",
            nextpoint: true,
        },
        opt4: {
            text: "Leorio Paradinight",
            nextpoint: false,
        }
    },
    //210 (Question 211)
    {
        action: "Em qual anime os personagens devem enfrentar criaturas conhecidas como 'Aranhas' em uma dungeon?",
        opt1: {
            text: "Danjon ni Deai o Motomeru no wa Machigatteiru Darō ka",
            nextpoint: true,
        },
        opt2: {
            text: "Grimgar, Ashes and Illusions",
            nextpoint: false,
        },
        opt3: {
            text: "Log Horizon",
            nextpoint: false,
        },
        opt4: {
            text: "Sword Art Online",
            nextpoint: false,
        }
    },
    //211 (Question 212)
    {
        action: "Qual anime segue a jornada de um exorcista que combate demônios para proteger sua cidade?",
        opt1: {
            text: "Noragami",
            nextpoint: false,
        },
        opt2: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt3: {
            text: "Blue Exorcist",
            nextpoint: true,
        },
        opt4: {
            text: "Devilman Crybaby",
            nextpoint: false,
        }
    },
    //212 (Question 213)
    {
        action: "Em qual anime os personagens devem lutar em um torneio para se tornarem o rei dos piratas?",
        opt1: {
            text: "Magi",
            nextpoint: false,
        },
        opt2: {
            text: "One Piece",
            nextpoint: true,
        },
        opt3: {
            text: "Black Clover",
            nextpoint: false,
        },
        opt4: {
            text: "Fairy Tail",
            nextpoint: false,
        }
    },
    //213 (Question 214)
    {
        action: "Qual é o nome do protagonista de 'Fairy Tail'?",
        opt1: {
            text: "Gray Fullbuster",
            nextpoint: false,
        },
        opt2: {
            text: "Erza Scarlet",
            nextpoint: false,
        },
        opt3: {
            text: "Natsu Dragneel",
            nextpoint: true,
        },
        opt4: {
            text: "Lucy Heartfilia",
            nextpoint: false,
        }
    },
    //214 (Question 215)
    {
        action: "Em qual anime os personagens usam armas chamadas 'Symphogears' para combater inimigos misteriosos?",
        opt1: {
            text: "Symphogear",
            nextpoint: false,
        },
        opt2: {
            text: "AKB0048",
            nextpoint: false,
        },
        opt3: {
            text: "Senki Zesshou Symphogear",
            nextpoint: true,
        },
        opt4: {
            text: "Guilty Crown",
            nextpoint: false,
        }
    },
    //215 (Question 216)
    {
        action: "Qual é o nome do shinigami que acompanha Ichigo em 'Bleach'?",
        opt1: {
            text: "Uryu Ishida",
            nextpoint: false,
        },
        opt2: {
            text: "Orihime Inoue",
            nextpoint: false,
        },
        opt3: {
            text: "Renji Abarai",
            nextpoint: false,
        },
        opt4: {
            text: "Rukia Kuchiki",
            nextpoint: true,
        }
    },
    //216 (Question 217)
    {
        action: "Em qual anime os personagens vivem em um mundo pós-apocalíptico dominado por titãs gigantes?",
        opt1: {
            text: "Neon Genesis Evangelion",
            nextpoint: false,
        },
        opt2: {
            text: "Blue Exorcist",
            nextpoint: false,
        },
        opt3: {
            text: "Attack on Titan",
            nextpoint: true,
        },
        opt4: {
            text: "Devilman Crybaby",
            nextpoint: false,
        }
    },
    //217 (Question 218)
    {
        action: "Qual anime segue as aventuras de um grupo de ninjas em uma vila oculta?",
        opt1: {
            text: "One Piece",
            nextpoint: false,
        },
        opt2: {
            text: "Fairy Tail",
            nextpoint: false,
        },
        opt3: {
            text: "Naruto",
            nextpoint: true,
        },
        opt4: {
            text: "Bleach",
            nextpoint: false,
        }
    },
    //218 (Question 219)
    {
        action: "Qual anime segue a jornada de um grupo de caçadores de vampiros?",
        opt1: {
            text: "Vampire Knight",
            nextpoint: false,
        },
        opt2: {
            text: "Hellsing",
            nextpoint: true,
        },
        opt3: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt4: {
            text: "Trinity Blood",
            nextpoint: false,
        }
    },
    //219 (Question 220)
    {
        action: "Em qual anime os personagens são membros de uma organização de investigação de fenômenos paranormais?",
        opt1: {
            text: "Ghost Hunt",
            nextpoint: true,
        },
        opt2: {
            text: "Tokyo Ghoul",
            nextpoint: false,
        },
        opt3: {
            text: "Death Parade",
            nextpoint: false,
        },
        opt4: {
            text: "Parasyte",
            nextpoint: false,
        }
    },
    //220 (Question 221)
    {
        action: "Qual é o nome do protagonista em 'Yu Yu Hakusho'?",
        opt1: {
            text: "Hiei",
            nextpoint: false,
        },
        opt2: {
            text: "Yusuke Urameshi",
            nextpoint: true,
        },
        opt3: {
            text: "Kurama",
            nextpoint: false,
        },
        opt4: {
            text: "Kuwabara",
            nextpoint: false,
        }
    },
    //221 (Question 222)
    {
        action: "Em qual anime os personagens lutam contra seres chamados 'Ghouls'?",
        opt1: {
            text: "Parasyte",
            nextpoint: false,
        },
        opt2: {
            text: "Blue Exorcist",
            nextpoint: false,
        },
        opt3: {
            text: "Tokyo Ghoul",
            nextpoint: true,
        },
        opt4: {
            text: "Noragami",
            nextpoint: false,
        }
    },
    //222 (Question 223)
    {
        action: "Qual é o nome do protagonista de 'Black Clover'?",
        opt1: {
            text: "Noelle Silva",
            nextpoint: false,
        },
        opt2: {
            text: "Asta",
            nextpoint: true,
        },
        opt3: {
            text: "Yuno",
            nextpoint: false,
        },
        opt4: {
            text: "Finral Roulacase",
            nextpoint: false,
        }
    },
    //223 (Question 224)
    {
        action: "Em qual anime os personagens são invocados para outro mundo com a finalidade de lutar contra monstros?",
        opt1: {
            text: "Konosuba: God's Blessing on This Wonderful World!",
            nextpoint: false,
        },
        opt2: {
            text: "Re:Zero - Starting Life in Another World",
            nextpoint: false,
        },
        opt3: {
            text: "Grimgar, Ashes and Illusions",
            nextpoint: true,
        },
        opt4: {
            text: "No Game No Life",
            nextpoint: false,
        }
    },
    //224 (Question 225)
    {
        action: "Qual anime segue a história de um exorcista que possui uma arma demoníaca?",
        opt1: {
            text: "Blue Exorcist",
            nextpoint: false,
        },
        opt2: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt3: {
            text: "D.Gray-man",
            nextpoint: true,
        },
        opt4: {
            text: "Noragami",
            nextpoint: false,
        }
    },
    //225 (Question 226)
    {
        action: "Em qual anime os personagens são membros de um grupo de mercenários espaciais chamados 'Bebop'?",
        opt1: {
            text: "Trigun",
            nextpoint: false,
        },
        opt2: {
            text: "Space Dandy",
            nextpoint: false,
        },
        opt3: {
            text: "Outlaw Star",
            nextpoint: false,
        },
        opt4: {
            text: "Cowboy Bebop",
            nextpoint: true,
        }
    },
    //226 (Question 227)
    {
        action: "Qual é o nome do protagonista de 'Neon Genesis Evangelion'?",
        opt1: {
            text: "Rei Ayanami",
            nextpoint: false,
        },
        opt2: {
            text: "Shinji Ikari",
            nextpoint: true,
        },
        opt3: {
            text: "Asuka Langley Soryu",
            nextpoint: false,
        },
        opt4: {
            text: "Misato Katsuragi",
            nextpoint: false,
        }
    },
    //227 (Question 228)
    {
        action: "Em qual anime os personagens se transformam em super-heróis usando trajes especiais chamados 'Kigurumis'?",
        opt1: {
            text: "Rascal Does Not Dream of Bunny Girl Senpai",
            nextpoint: false,
        },
        opt2: {
            text: "My Hero Academia",
            nextpoint: false,
        },
        opt3: {
            text: "Gatchaman Crowds",
            nextpoint: false,
        },
        opt4: {
            text: "Kill la Kill",
            nextpoint: true,
        }
    },
    //228 (Question 229)
    {
        action: "Em qual anime os personagens lutam contra monstros conhecidos como 'Aragami'?",
        opt1: {
            text: "God Eater",
            nextpoint: true,
        },
        opt2: {
            text: "Noragami",
            nextpoint: false,
        },
        opt3: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt4: {
            text: "Blue Exorcist",
            nextpoint: false,
        }
    },
    //229 (Question 230)
    {
        action: "Qual é o nome do protagonista de 'Soul Eater'?",
        opt1: {
            text: "Maka Albarn",
            nextpoint: false,
        },
        opt2: {
            text: "Soul Eater Evans",
            nextpoint: true,
        },
        opt3: {
            text: "Black☆Star",
            nextpoint: false,
        },
        opt4: {
            text: "Death the Kid",
            nextpoint: false,
        }
    },
    //230 (Question 231)
    {
        action: "Em qual anime os personagens são membros de uma organização que investiga atividades paranormais?",
        opt1: {
            text: "Death Parade",
            nextpoint: false,
        },
        opt2: {
            text: "Tokyo Ghoul",
            nextpoint: false,
        },
        opt3: {
            text: "Ghost Hunt",
            nextpoint: true,
        },
        opt4: {
            text: "Parasyte",
            nextpoint: false,
        }
    },
    //231 (Question 232)
    {
        action: "Qual anime segue a história de um grupo de estudantes que enfrentam criaturas sobrenaturais chamadas 'Kaiju'?",
        opt1: {
            text: "Darling in the Franxx",
            nextpoint: false,
        },
        opt2: {
            text: "Promare",
            nextpoint: false,
        },
        opt3: {
            text: "Gurren Lagann",
            nextpoint: false,
        },
        opt4: {
            text: "SSSS.Gridman",
            nextpoint: true,
        }
    },
    //232 (Question 233)
    {
        action: "Em qual anime os personagens devem sobreviver em um mundo habitado por gigantes predadores?",
        opt1: {
            text: "Kabaneri of the Iron Fortress",
            nextpoint: false,
        },
        opt2: {
            text: "Attack on Titan",
            nextpoint: false,
        },
        opt3: {
            text: "Blue Gender",
            nextpoint: false,
        },
        opt4: {
            text: "Knights of Sidonia",
            nextpoint: true,
        }
    },
    //233 (Question 234)
    {
        action: "Qual é o nome do protagonista de 'JoJo's Bizarre Adventure: Stardust Crusaders'?",
        opt1: {
            text: "Jotaro Kujo",
            nextpoint: true,
        },
        opt2: {
            text: "Avdol",
            nextpoint: false,
        },
        opt3: {
            text: "Joseph Joestar",
            nextpoint: false,
        },
        opt4: {
            text: "Polnareff",
            nextpoint: false,
        }
    },
    //234 (Question 235)
    {
        action: "Em qual anime os personagens são treinados por um exorcista para derrotar demônios?",
        opt1: {
            text: "Noragami",
            nextpoint: false,
        },
        opt2: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt3: {
            text: "Blue Exorcist",
            nextpoint: true,
        },
        opt4: {
            text: "Devilman Crybaby",
            nextpoint: false,
        }
    },
    //235 (Question 236)
    {
        action: "Qual é o nome do protagonista de 'Mob Psycho 100'?",
        opt1: {
            text: "Shigeo Kageyama",
            nextpoint: true,
        },
        opt2: {
            text: "Ritsu Kageyama",
            nextpoint: false,
        },
        opt3: {
            text: "Arataka Reigen",
            nextpoint: false,
        },
        opt4: {
            text: "Teruki Hanazawa",
            nextpoint: false,
        }
    },
    //236 (Question 237)
    {
        action: "Em qual anime os personagens são parte de uma equipe de resgate de alienígenas?",
        opt1: {
            text: "Terra Formars",
            nextpoint: true,
        },
        opt2: {
            text: "Gantz",
            nextpoint: false,
        },
        opt3: {
            text: "Seraph of the End",
            nextpoint: false,
        },
        opt4: {
            text: "Parasyte",
            nextpoint: false,
        }
    },
    //237 (Question 238)
    {
        action: "Qual anime segue a jornada de um grupo de aventureiros em um mundo de fantasia?",
        opt1: {
            text: "Sword Art Online",
            nextpoint: false,
        },
        opt2: {
            text: "Log Horizon",
            nextpoint: false,
        },
        opt3: {
            text: "Grimgar, Ashes and Illusions",
            nextpoint: false,
        },
        opt4: {
            text: "Is It Wrong to Try to Pick Up Girls in a Dungeon? (DanMachi)",
            nextpoint: true,
        }
    },
    //238 (Question 239)
    {
        action: "Qual é o nome do encanador italiano que é o protagonista da série de jogos da Nintendo?",
        opt1: {
            text: "Luigi",
            nextpoint: false,
        },
        opt2: {
            text: "Mario",
            nextpoint: true,
        },
        opt3: {
            text: "Bowser",
            nextpoint: false,
        },
        opt4: {
            text: "Wario",
            nextpoint: false,
        }
    },
    //239 (Question 240)
    {
        action: "Qual jogo é conhecido por seu mundo aberto e possibilidade de construção, onde os jogadores podem criar praticamente qualquer coisa?",
        opt1: {
            text: "Fortnite",
            nextpoint: false,
        },
        opt2: {
            text: "The Legend of Zelda: Breath of the Wild",
            nextpoint: false,
        },
        opt3: {
            text: "Grand Theft Auto V",
            nextpoint: false,
        },
        opt4: {
            text: "Minecraft",
            nextpoint: true,
        }
    },
    //240 (Question 241)
    {
        action: "Qual é o título da série de jogos de tiro em primeira pessoa da Valve, conhecida pelo modo de jogo 'Counter-Strike: Global Offensive'?",
        opt1: {
            text: "Half-Life",
            nextpoint: false,
        },
        opt2: {
            text: "Portal",
            nextpoint: false,
        },
        opt3: {
            text: "Counter-Strike",
            nextpoint: true,
        },
        opt4: {
            text: "Team Fortress",
            nextpoint: false,
        }
    },
    //241 (Question 242)
    {
        action: "Qual franquia de jogos é ambientada em um universo de ficção científica onde jogadores assumem o papel de 'Spartans'?",
        opt1: {
            text: "Mass Effect",
            nextpoint: false,
        },
        opt2: {
            text: "Halo",
            nextpoint: true,
        },
        opt3: {
            text: "Destiny",
            nextpoint: false,
        },
        opt4: {
            text: "Titanfall",
            nextpoint: false,
        }
    },
    //242 (Question 243)
    {
        action: "Qual é o nome do jogo de batalha real que popularizou o gênero, onde 100 jogadores competem para ser o último sobrevivente?",
        opt1: {
            text: "Fortnite",
            nextpoint: false,
        },
        opt2: {
            text: "PlayerUnknown's Battlegrounds (PUBG)",
            nextpoint: true,
        },
        opt3: {
            text: "Call of Duty: Warzone",
            nextpoint: false,
        },
        opt4: {
            text: "Apex Legends",
            nextpoint: false,
        }
    },
    //243 (Question 244)
    {
        action: "Qual é o nome do mascote elétrico da Nintendo que protagoniza uma série de jogos de plataforma?",
        opt1: {
            text: "Sonic",
            nextpoint: false,
        },
        opt2: {
            text: "Crash Bandicoot",
            nextpoint: false,
        },
        opt3: {
            text: "Pikachu",
            nextpoint: true,
        },
        opt4: {
            text: "Spyro",
            nextpoint: false,
        }
    },
    //244 (Question 245)
    {
        action: "Qual jogo de luta é conhecido por seu grande elenco de personagens, incluindo Ryu, Chun-Li e Guile?",
        opt1: {
            text: "Mortal Kombat",
            nextpoint: false,
        },
        opt2: {
            text: "Super Smash Bros.",
            nextpoint: false,
        },
        opt3: {
            text: "Tekken",
            nextpoint: false,
        },
        opt4: {
            text: "Street Fighter",
            nextpoint: true,
        }
    },
    //245 (Question 246)
    {
        action: "Qual é o título da série de jogos de role-playing da Bethesda que se passa em um mundo pós-apocalíptico?",
        opt1: {
            text: "The Elder Scrolls",
            nextpoint: false,
        },
        opt2: {
            text: "Fallout",
            nextpoint: true,
        },
        opt3: {
            text: "Final Fantasy",
            nextpoint: false,
        },
        opt4: {
            text: "Dragon Age",
            nextpoint: false,
        }
    },
    //246 (Question 247)
    {
        action: "Qual é o nome do jogo de estratégia em tempo real onde jogadores controlam diferentes facções em um conflito épico?",
        opt1: {
            text: "StarCraft",
            nextpoint: true,
        },
        opt2: {
            text: "Total War",
            nextpoint: false,
        },
        opt3: {
            text: "Age of Empires",
            nextpoint: false,
        },
        opt4: {
            text: "Civilization",
            nextpoint: false,
        }
    },
    //247 (Question 248)
    {
        action: "Qual é o nome do jogo que popularizou o gênero 'Battle Royale' e é conhecido por suas construções e modos criativos?",
        opt1: {
            text: "Minecraft",
            nextpoint: false,
        },
        opt2: {
            text: "Apex Legends",
            nextpoint: false,
        },
        opt3: {
            text: "Fortnite",
            nextpoint: true,
        },
        opt4: {
            text: "PUBG",
            nextpoint: false,
        }
    },
    //248 (Question 249)
    {
        action: "Qual é o nome do jogo de aventura e exploração espacial da Hello Games, conhecido por seu vasto universo gerado proceduralmente?",
        opt1: {
            text: "Starbound",
            nextpoint: false,
        },
        opt2: {
            text: "Elite Dangerous",
            nextpoint: false,
        },
        opt3: {
            text: "No Man's Sky",
            nextpoint: true,
        },
        opt4: {
            text: "Stellaris",
            nextpoint: false,
        }
    },
    //249 (Question 250)
    {
        action: "Em qual jogo os jogadores controlam um grupo de sobreviventes em um mundo pós-apocalíptico cheio de zumbis?",
        opt1: {
            text: "Left 4 Dead",
            nextpoint: false,
        },
        opt2: {
            text: "The Walking Dead: The Game",
            nextpoint: false,
        },
        opt3: {
            text: "State of Decay",
            nextpoint: true,
        },
        opt4: {
            text: "DayZ",
            nextpoint: false,
        }
    },
    //250 (Question 251)
    {
        action: "Qual é o nome da série de jogos de RPG da CD Projekt Red, baseada em uma série de livros polonesa?",
        opt1: {
            text: "The Witcher",
            nextpoint: true,
        },
        opt2: {
            text: "Dragon Age",
            nextpoint: false,
        },
        opt3: {
            text: "Dark Souls",
            nextpoint: false,
        },
        opt4: {
            text: "Divinity: Original Sin",
            nextpoint: false,
        }
    },
    //251 (Question 252)
    {
        action: "Em qual jogo os jogadores assumem o papel de um caçador que enfrenta monstros gigantes em batalhas épicas?",
        opt1: {
            text: "Monster Hunter World",
            nextpoint: true,
        },
        opt2: {
            text: "Toukiden 2",
            nextpoint: false,
        },
        opt3: {
            text: "Evolve",
            nextpoint: false,
        },
        opt4: {
            text: "Dauntless",
            nextpoint: false,
        }
    },
    //252 (Question 253)
    {
        action: "Qual é o título da série de jogos de plataforma estrelada por um ouriço azul em alta velocidade?",
        opt1: {
            text: "Crash Bandicoot",
            nextpoint: false,
        },
        opt2: {
            text: "Spyro the Dragon",
            nextpoint: false,
        },
        opt3: {
            text: "Sonic the Hedgehog",
            nextpoint: true,
        },
        opt4: {
            text: "Jak and Daxter",
            nextpoint: false,
        }
    },
    //253 (Question 254)
    {
        action: "Em qual jogo os jogadores exploram um mundo subterrâneo cheio de criaturas e recursos para sobreviver?",
        opt1: {
            text: "Terraria",
            nextpoint: false,
        },
        opt2: {
            text: "Subnautica",
            nextpoint: true,
        },
        opt3: {
            text: "Stardew Valley",
            nextpoint: false,
        },
        opt4: {
            text: "Don't Starve",
            nextpoint: false,
        }
    },
    //254 (Question 255)
    {
        action: "Qual é o nome da franquia de jogos de estratégia por turnos da Nintendo, onde personagens icônicos se enfrentam em batalhas táticas?",
        opt1: {
            text: "Fire Emblem",
            nextpoint: true,
        },
        opt2: {
            text: "Advance Wars",
            nextpoint: false,
        },
        opt3: {
            text: "Tactics Ogre",
            nextpoint: false,
        },
        opt4: {
            text: "Final Fantasy Tactics",
            nextpoint: false,
        }
    },
    //255 (Question 256)
    {
        action: "Em qual jogo os jogadores são transportados para um universo virtual onde podem criar mundos e jogos?",
        opt1: {
            text: "Roblox",
            nextpoint: true,
        },
        opt2: {
            text: "Minecraft",
            nextpoint: false,
        },
        opt3: {
            text: "LittleBigPlanet",
            nextpoint: false,
        },
        opt4: {
            text: "Dreams",
            nextpoint: false,
        }
    },
    //256 (Question 257)
    {
        action: "Qual é o nome do jogo de luta onde personagens da Marvel e da Capcom se enfrentam em batalhas frenéticas?",
        opt1: {
            text: "Injustice",
            nextpoint: false,
        },
        opt2: {
            text: "Mortal Kombat",
            nextpoint: false,
        },
        opt3: {
            text: "Marvel vs. Capcom",
            nextpoint: true,
        },
        opt4: {
            text: "Street Fighter",
            nextpoint: false,
        }
    },
    //257 (Question 258)
    {
        action: "Em qual jogo os jogadores exploram um mundo aberto no Velho Oeste, enfrentando desafios e realizando missões?",
        opt1: {
            text: "The Witcher 3: Wild Hunt",
            nextpoint: false,
        },
        opt2: {
            text: "Grand Theft Auto V",
            nextpoint: false,
        },
        opt3: {
            text: "Assassin's Creed Odyssey",
            nextpoint: false,
        },
        opt4: {
            text: "Red Dead Redemption",
            nextpoint: true,
        }
    },
    //258 (Question 259)
    {
        action: "Qual é o nome do jogo de batalha em equipe que se passa em um mundo futurista e é conhecido por seus heróis variados?",
        opt1: {
            text: "Team Fortress 2",
            nextpoint: false,
        },
        opt2: {
            text: "Overwatch",
            nextpoint: true,
        },
        opt3: {
            text: "Paladins",
            nextpoint: false,
        },
        opt4: {
            text: "Apex Legends",
            nextpoint: false,
        }
    },
    //259 (Question 260)
    {
        action: "Em qual jogo os jogadores exploram um mundo pixelizado, construindo estruturas e enfrentando monstros à noite?",
        opt1: {
            text: "Stardew Valley",
            nextpoint: false,
        },
        opt2: {
            text: "Terraria",
            nextpoint: true,
        },
        opt3: {
            text: "Starbound",
            nextpoint: false,
        },
        opt4: {
            text: "Don't Starve",
            nextpoint: false,
        }
    },
    //260 (Question 261)
    {
        action: "Qual é o nome da série de jogos de stealth onde os jogadores controlam um assassino altamente treinado chamado 'Agent 47'?",
        opt1: {
            text: "Metal Gear Solid",
            nextpoint: false,
        },
        opt2: {
            text: "Dishonored",
            nextpoint: false,
        },
        opt3: {
            text: "Hitman",
            nextpoint: true,
        },
        opt4: {
            text: "Splinter Cell",
            nextpoint: false,
        }
    },
    //261 (Question 262)
    {
        action: "Em qual jogo os jogadores controlam um grupo de personagens em uma missão para salvar o universo da aniquilação?",
        opt1: {
            text: "Mass Effect",
            nextpoint: true,
        },
        opt2: {
            text: "Warframe",
            nextpoint: false,
        },
        opt3: {
            text: "Star Wars: Knights of the Old Republic",
            nextpoint: false,
        },
        opt4: {
            text: "Destiny",
            nextpoint: false,
        }
    },
    //262 (Question 263)
    {
        action: "Qual é o título da série de jogos de simulação de vida onde os jogadores constroem e gerenciam cidades?",
        opt1: {
            text: "The Sims",
            nextpoint: false,
        },
        opt2: {
            text: "SimCity",
            nextpoint: true,
        },
        opt3: {
            text: "Cities: Skylines",
            nextpoint: false,
        },
        opt4: {
            text: "Civilization",
            nextpoint: false,
        }
    },
    //263 (Question 264)
    {
        action: "Em qual jogo de aventura os jogadores assumem o papel de um herói corajoso que enfrenta desafios em um reino mágico?",
        opt1: {
            text: "The Legend of Zelda",
            nextpoint: true,
        },
        opt2: {
            text: "Final Fantasy",
            nextpoint: false,
        },
        opt3: {
            text: "Dark Souls",
            nextpoint: false,
        },
        opt4: {
            text: "Kingdom Hearts",
            nextpoint: false,
        }
    },
    //264 (Question 265)
    {
        action: "Qual é o nome do jogo de estratégia onde os jogadores devem administrar uma prisão de segurança máxima?",
        opt1: {
            text: "Prison Architect",
            nextpoint: true,
        },
        opt2: {
            text: "SimCity",
            nextpoint: false,
        },
        opt3: {
            text: "RimWorld",
            nextpoint: false,
        },
        opt4: {
            text: "The Escapists",
            nextpoint: false,
        }
    },
    //265 (Question 266)
    {
        action: "Em qual jogo de terror os jogadores exploram uma mansão assombrada em busca de pistas sobre o desaparecimento de um personagem?",
        opt1: {
            text: "Outlast",
            nextpoint: false,
        },
        opt2: {
            text: "Resident Evil",
            nextpoint: true,
        },
        opt3: {
            text: "Amnesia: The Dark Descent",
            nextpoint: false,
        },
        opt4: {
            text: "Until Dawn",
            nextpoint: false,
        }
    },
    //266 (Question 267)
    {
        action: "Qual é o nome da série de jogos de RPG de ação da FromSoftware conhecida por sua dificuldade elevada?",
        opt1: {
            text: "Bloodborne",
            nextpoint: false,
        },
        opt2: {
            text: "Sekiro: Shadows Die Twice",
            nextpoint: false,
        },
        opt3: {
            text: "Demon's Souls",
            nextpoint: false,
        },
        opt4: {
            text: "Dark Souls",
            nextpoint: true,
        }
    },
    //267 (Question 268)
    {
        action: "Em qual jogo os jogadores assumem o papel de um caçador de monstros profissional em um mundo de fantasia sombria?",
        opt1: {
            text: "The Witcher",
            nextpoint: true,
        },
        opt2: {
            text: "Dragon Age: Inquisition",
            nextpoint: false,
        },
        opt3: {
            text: "Bloodborne",
            nextpoint: false,
        },
        opt4: {
            text: "Dark Souls",
            nextpoint: false,
        }
    },
    //268 (Question 269)
    {
        action: "Qual é o nome do jogo de estratégia em tempo real onde os jogadores comandam exércitos em batalhas épicas?",
        opt1: {
            text: "Age of Empires",
            nextpoint: false,
        },
        opt2: {
            text: "Total War",
            nextpoint: true,
        },
        opt3: {
            text: "Command & Conquer",
            nextpoint: false,
        },
        opt4: {
            text: "StarCraft",
            nextpoint: false,
        }
    },
    //269 (Question 270)
    {
        action: "Em qual jogo os jogadores assumem o papel de um aventureiro que explora masmorras e enfrenta monstros?",
        opt1: {
            text: "Diablo",
            nextpoint: true,
        },
        opt2: {
            text: "Torchlight",
            nextpoint: false,
        },
        opt3: {
            text: "Path of Exile",
            nextpoint: false,
        },
        opt4: {
            text: "Grim Dawn",
            nextpoint: false,
        }
    },
    //270 (Question 271)
    {
        action: "Qual é o nome da série de jogos de tiro em primeira pessoa que se passa em uma Terra pós-apocalíptica?",
        opt1: {
            text: "Fallout",
            nextpoint: false,
        },
        opt2: {
            text: "Metro",
            nextpoint: true,
        },
        opt3: {
            text: "S.T.A.L.K.E.R.",
            nextpoint: false,
        },
        opt4: {
            text: "RAGE",
            nextpoint: false,
        }
    },
    //271 (Question 272)
    {
        action: "Em qual jogo os jogadores assumem o papel de um caçador de tesouros em busca de um artefato lendário?",
        opt1: {
            text: "Tomb Raider",
            nextpoint: false,
        },
        opt2: {
            text: "Assassin's Creed",
            nextpoint: false,
        },
        opt3: {
            text: "Indiana Jones and the Fate of Atlantis",
            nextpoint: false,
        },
        opt4: {
            text: "Uncharted",
            nextpoint: true,
        }
    },
    //272 (Question 273)
    {
        action: "Qual é o título da série de jogos de estratégia baseados em turnos que se passa em um mundo de fantasia medieval?",
        opt1: {
            text: "Fire Emblem",
            nextpoint: false,
        },
        opt2: {
            text: "Age of Wonders",
            nextpoint: false,
        },
        opt3: {
            text: "Heroes of Might and Magic",
            nextpoint: true,
        },
        opt4: {
            text: "Disciples",
            nextpoint: false,
        }
    },
    //273 (Question 274)
    {
        action: "Em qual jogo os jogadores controlam um time de heróis e enfrentam ondas de inimigos em arenas e é o mais famoso?",
        opt1: {
            text: "Dota 2",
            nextpoint: false,
        },
        opt2: {
            text: "League of Legends",
            nextpoint: true,
        },
        opt3: {
            text: "Heroes of the Storm",
            nextpoint: false,
        },
        opt4: {
            text: "Smite",
            nextpoint: false,
        }
    },
    //274 (Question 275)
    {
        action: "Qual é o nome do jogo de terror de sobrevivência onde os jogadores devem fugir de uma criatura implacável?",
        opt1: {
            text: "Outlast",
            nextpoint: false,
        },
        opt2: {
            text: "Alien: Isolation",
            nextpoint: true,
        },
        opt3: {
            text: "Resident Evil 7: Biohazard",
            nextpoint: false,
        },
        opt4: {
            text: "Dead Space",
            nextpoint: false,
        }
    },
    //275 (Question 276)
    {
        action: "Em qual jogo os jogadores controlam um personagem chamado 'Chell' que deve resolver quebra-cabeças em laboratórios futuristas?",
        opt1: {
            text: "Portal",
            nextpoint: true,
        },
        opt2: {
            text: "Half-Life",
            nextpoint: false,
        },
        opt3: {
            text: "The Talos Principle",
            nextpoint: false,
        },
        opt4: {
            text: "Antichamber",
            nextpoint: false,
        }
    },
    //276 (Question 277)
    {
        action: "Qual é o nome da série de jogos de estratégia em tempo real onde os jogadores assumem o controle de esquadrões militares?",
        opt1: {
            text: "Warhammer 40,000: Dawn of War",
            nextpoint: false,
        },
        opt2: {
            text: "Company of Heroes",
            nextpoint: true,
        },
        opt3: {
            text: "Men of War",
            nextpoint: false,
        },
        opt4: {
            text: "Command & Conquer: Generals",
            nextpoint: false,
        }
    },
    //277 (Question 278)
    {
        action: "Em qual jogo os jogadores exploram um mundo de blocos e podem construir praticamente qualquer coisa?",
        opt1: {
            text: "Roblox",
            nextpoint: false,
        },
        opt2: {
            text: "Lego Worlds",
            nextpoint: false,
        },
        opt3: {
            text: "Terraria",
            nextpoint: false,
        },
        opt4: {
            text: "Minecraft",
            nextpoint: true,
        }
    },
    //278 (Question 279)
    {
        action: "Qual é o nome do jogo de aventura em mundo aberto onde os jogadores controlam um garoto em busca de sua irmã sequestrada?",
        opt1: {
            text: "The Legend of Zelda: Breath of the Wild",
            nextpoint: false,
        },
        opt2: {
            text: "Shadow of the Colossus",
            nextpoint: true,
        },
        opt3: {
            text: "Journey",
            nextpoint: false,
        },
        opt4: {
            text: "Ico",
            nextpoint: false,
        }
    },
    //279 (Question 280)
    {
        action: "Em qual jogo de simulação os jogadores assumem o papel de um fazendeiro, cuidando de plantações e animais?",
        opt1: {
            text: "Stardew Valley",
            nextpoint: true,
        },
        opt2: {
            text: "Harvest Moon",
            nextpoint: false,
        },
        opt3: {
            text: "Farming Simulator",
            nextpoint: false,
        },
        opt4: {
            text: "Hay Day",
            nextpoint: false,
        }
    },
    //280 (Question 281)
    {
        action: "Qual é o nome da série de jogos de estratégia baseados em cartas, onde os jogadores competem com decks personalizados?",
        opt1: {
            text: "Hearthstone",
            nextpoint: true,
        },
        opt2: {
            text: "Gwent",
            nextpoint: false,
        },
        opt3: {
            text: "Magic: The Gathering",
            nextpoint: false,
        },
        opt4: {
            text: "Yu-Gi-Oh!",
            nextpoint: false,
        }
    },
    //281 (Question 282)
    {
        action: "Em qual jogo de ação em terceira pessoa os jogadores controlam um guerreiro espartano em batalhas épicas?",
        opt1: {
            text: "God of War",
            nextpoint: true,
        },
        opt2: {
            text: "Dante's Inferno",
            nextpoint: false,
        },
        opt3: {
            text: "Ryse: Son of Rome",
            nextpoint: false,
        },
        opt4: {
            text: "Shadow of Mordor",
            nextpoint: false,
        }
    },
    //282 (Question 283)
    {
        action: "Qual é o título da série de jogos de tiro em primeira pessoa onde os jogadores enfrentam hordas de zumbis?",
        opt1: {
            text: "Dead Space",
            nextpoint: false,
        },
        opt2: {
            text: "Dying Light",
            nextpoint: false,
        },
        opt3: {
            text: "Dead Island",
            nextpoint: false,
        },
        opt4: {
            text: "Left 4 Dead",
            nextpoint: true,
        }
    },
    //283 (Question 284)
    {
        action: "Em qual jogo de estratégia os jogadores constroem e gerenciam uma cidade em um cenário histórico?",
        opt1: {
            text: "Age of Empires",
            nextpoint: false,
        },
        opt2: {
            text: "Civilization",
            nextpoint: false,
        },
        opt3: {
            text: "Anno",
            nextpoint: true,
        },
        opt4: {
            text: "Rise of Nations",
            nextpoint: false,
        }
    },
    //284 (Question 285)
    {
        action: "Qual é o nome do jogo de luta que conta com personagens famosos da DC Comics e da Marvel Comics?",
        opt1: {
            text: "Marvel vs. Capcom",
            nextpoint: false,
        },
        opt2: {
            text: "Injustice",
            nextpoint: true,
        },
        opt3: {
            text: "Mortal Kombat vs. DC Universe",
            nextpoint: false,
        },
        opt4: {
            text: "Super Smash Bros.",
            nextpoint: false,
        }
    },
    //285 (Question 286)
    {
        action: "Em qual jogo de RPG os jogadores exploram uma terra devastada após um apocalipse nuclear?",
        opt1: {
            text: "Wasteland",
            nextpoint: false,
        },
        opt2: {
            text: "Fallout",
            nextpoint: true,
        },
        opt3: {
            text: "Metro Exodus",
            nextpoint: false,
        },
        opt4: {
            text: "The Last of Us",
            nextpoint: false,
        }
    },
    //286 (Question 287)
    {
        action: "Qual é o nome da série de jogos de estratégia onde os jogadores constroem e gerenciam um parque de diversões?",
        opt1: {
            text: "Theme Hospital",
            nextpoint: false,
        },
        opt2: {
            text: "Sim Theme Park",
            nextpoint: false,
        },
        opt3: {
            text: "Planet Coaster",
            nextpoint: false,
        },
        opt4: {
            text: "RollerCoaster Tycoon",
            nextpoint: true,
        }
    },
    //287 (Question 288)
    {
        action: "Em qual jogo de ação-aventura os jogadores controlam um caçador que enfrenta criaturas colossais?",
        opt1: {
            text: "Monster Hunter World",
            nextpoint: false,
        },
        opt2: {
            text: "Shadow of the Colossus",
            nextpoint: true,
        },
        opt3: {
            text: "Evolve",
            nextpoint: false,
        },
        opt4: {
            text: "Dauntless",
            nextpoint: false,
        }
    },
    //288 (Question 289)
    {
        action: "Qual é o nome do jogo de estratégia onde os jogadores constroem e gerenciam uma prisão de segurança máxima?",
        opt1: {
            text: "Prison Architect",
            nextpoint: true,
        },
        opt2: {
            text: "SimCity",
            nextpoint: false,
        },
        opt3: {
            text: "The Escapists",
            nextpoint: false,
        },
        opt4: {
            text: "RimWorld",
            nextpoint: false,
        }
    },
    //289 (Question 290)
    {
        action: "Em qual jogo de RPG os jogadores exploram um vasto mundo aberto habitado por dragões e outras criaturas fantásticas?",
        opt1: {
            text: "The Elder Scrolls V: Skyrim",
            nextpoint: true,
        },
        opt2: {
            text: "Dragon Age: Inquisition",
            nextpoint: false,
        },
        opt3: {
            text: "Divinity: Original Sin 2",
            nextpoint: false,
        },
        opt4: {
            text: "The Witcher 3: Wild Hunt",
            nextpoint: false,
        }
    },
    //290 (Question 291)
    {
        action: "Qual é o nome da série de jogos de luta onde os jogadores controlam personagens do universo de anime e mangá que buscam esferas?",
        opt1: {
            text: "Naruto Shippuden: Ultimate Ninja Storm",
            nextpoint: false,
        },
        opt2: {
            text: "My Hero One's Justice",
            nextpoint: false,
        },
        opt3: {
            text: "Dragon Ball FighterZ",
            nextpoint: true,
        },
        opt4: {
            text: "One Piece: Pirate Warriors",
            nextpoint: false,
        }
    },
    //291 (Question 292)
    {
        action: "Em qual jogo de plataforma os jogadores controlam um guaxinim e um guaxinim-lince em uma busca para salvar o mundo?",
        opt1: {
            text: "Yooka-Laylee",
            nextpoint: false,
        },
        opt2: {
            text: "A Hat in Time",
            nextpoint: false,
        },
        opt3: {
            text: "Sly Cooper: Thieves in Time",
            nextpoint: true,
        },
        opt4: {
            text: "Ratchet & Clank: A Crack in Time",
            nextpoint: false,
        }
    },
    //292 (Question 293)
    {
        action: "Qual é o título da série de jogos de tiro em primeira pessoa que se passa em um universo de ficção científica?",
        opt1: {
            text: "Destiny",
            nextpoint: false,
        },
        opt2: {
            text: "Borderlands",
            nextpoint: true,
        },
        opt3: {
            text: "Titanfall",
            nextpoint: false,
        },
        opt4: {
            text: "Anthem",
            nextpoint: false,
        }
    },
    //293 (Question 294)
    {
        action: "Em qual jogo de ação-aventura os jogadores assumem o papel de um guerreiro espartano em um mundo antigo?",
        opt1: {
            text: "Assassin's Creed Odyssey",
            nextpoint: false,
        },
        opt2: {
            text: "God of War",
            nextpoint: true,
        },
        opt3: {
            text: "Immortals Fenyx Rising",
            nextpoint: false,
        },
        opt4: {
            text: "Ryse: Son of Rome",
            nextpoint: false,
        }
    },
    //294 (Question 295)
    {
        action: "Qual é o nome do jogo de estratégia em tempo real onde os jogadores comandam exércitos de humanos, orcs, elfos, entre outros?",
        opt1: {
            text: "Warcraft III",
            nextpoint: true,
        },
        opt2: {
            text: "Age of Mythology",
            nextpoint: false,
        },
        opt3: {
            text: "Starcraft II",
            nextpoint: false,
        },
        opt4: {
            text: "Command & Conquer: Red Alert",
            nextpoint: false,
        }
    },
    //295 (Question 296)
    {
        action: "Em qual jogo de aventura os jogadores exploram uma cidade subterrânea pós-apocalíptica?",
        opt1: {
            text: "Metro Exodus",
            nextpoint: true,
        },
        opt2: {
            text: "S.T.A.L.K.E.R.: Shadow of Chernobyl",
            nextpoint: false,
        },
        opt3: {
            text: "Fallout 3",
            nextpoint: false,
        },
        opt4: {
            text: "RAGE",
            nextpoint: false,
        }
    },
    //296 (Question 297)
    {
        action: "Qual é o nome da série de jogos de tiro em primeira pessoa onde os jogadores enfrentam inimigos em cenários históricos?",
        opt1: {
            text: "Call of Duty",
            nextpoint: false,
        },
        opt2: {
            text: "Battlefield",
            nextpoint: false,
        },
        opt3: {
            text: "Medal of Honor",
            nextpoint: true,
        },
        opt4: {
            text: "Wolfenstein",
            nextpoint: false,
        }
    },
    //297 (Question 298)
    {
        action: "Em qual jogo de simulação os jogadores constroem e administram um hospital?",
        opt1: {
            text: "Theme Hospital",
            nextpoint: false,
        },
        opt2: {
            text: "Surgeon Simulator",
            nextpoint: false,
        },
        opt3: {
            text: "Hospital Tycoon",
            nextpoint: false,
        },
        opt4: {
            text: "Two Point Hospital",
            nextpoint: true,
        }
    },
    //300 (Question 299)
    {
        action: "Qual é o seu estilo de música preferido entre os seguintes?",
        opt1: {
            text: "Rock",
            nextpoint: true,
        },
        opt2: {
            text: "Eletrônica",
            nextpoint: true,
        },
        opt3: {
            text: "Hip-Hop",
            nextpoint: true,
        },
        opt4: {
            text: "Clássica",
            nextpoint: false,
        }
    },
    //301 (Question 300)
    {
        action: "Qual habilidade artística você gostaria de dominar instantaneamente?",
        opt1: {
            text: "Pintura",
            nextpoint: true,
        },
        opt2: {
            text: "Dança",
            nextpoint: true,
        },
        opt3: {
            text: "Escultura",
            nextpoint: true,
        },
        opt4: {
            text: "Composição Musical",
            nextpoint: true,
        }
    },
];

var score = 0
var lifes = 3
function reload(){
    score += 100
   
    draw();
    ctx.clearRect()
  }
var playerImage = new Image();
playerImage.src = "https://github.com/andrewflorence2208/FINAL_PROJECT/blob/main/pixil-frame-0%20(5).png?raw=true"
function draw() { //Movement test / Left

var gamestatus = 0
var clock = 0
var spawnx = 0
var spawny = 0
var button1spawnx = 0
var button1spawny = 0
var button2spawnx = 0
var button2spawny = 0
var button3spawnx = 0
var button3spawny = 0
var doorspawnx = 0
var doorspawny = 0
var g = 3
var canvas  = document.getElementById("tela");
canvas.width = 600;
canvas.height = 600;
var ctx = canvas.getContext("2d");
var timer = 90;
var player = {
    speed: 128,
    width: 10,
    height: 10,
    lifes: lifes,
    key_pieces: 0, 
    x : 0,
    y : 0,
    currentx: 0,
    currenty: 0,
    drawSide : 0   
}

player.drawSide = function() {
    ctx.fillStyle = "green"
    ctx.drawImage(playerImage, this.x, this.y, this.width, this.height)
};

var mapa = []
function plano_labirinto(){
    

var linhas = canvas.width
var colunas = canvas.height

var salas = []
var collide = false;

var quantia = 10 // quantia de salas
var tamanho = 20
var tamanhoMin = 20 //tamanho das salas será entre tamanhoMin e tamanhoMin + tamanho

var disx
var disy
var corredorLargura = 4

function parede(col, lin, x, y){
    this.col = col
    this.lin = lin 
    this.x = x
    this.y = y 
    this.empty = false //atributos dos blocos que formação a parede do labirinto 
    
    this.show = function() {
        if (this.empty == false) {
            ctx.fillStyle = "rgb(50,50,50,1)";
            ctx.fillRect(this.x, this.y, g, g);
        } else {
            ctx.fillStyle = "rgb(105,105,102,1)";
            ctx.fillRect(this.x, this.y, g, g);
        }
    }
    
    
    this.carve = function(dis, x, y) {
        for (var i = 0; i < salas.length; i++) {
        if (
            this.col >= salas[i].y / g &&
            this.col < salas[i].y / g + salas[i].h / g &&
            this.lin >= salas[i].x / g &&
            this.lin  < salas[i].x / g + salas[i].w / g
        ) {
        this.empty = true;
            }
        }   
    };// determinante de, caso parte do labirinto seja uma sala, não possuirá paredes

    this.carveH = function(dis, x, y) {
        if (
        this.lin >= x &&
        this.lin < x + dis &&
        this.col < y + corredorLargura &&
        this.col > y - corredorLargura
    ) {
    this.empty = true;
    
        }
    };// determinante da geraçã dos corredores, caso certa coordenada seja um corredor, não será parede

    this.carveV = function(dis, x, y) {
        if (
            this.col >= y &&
            this.col < y + dis &&
            this.lin < x + corredorLargura &&
            this.lin > x - corredorLargura
            ) {
        this.empty = true;
        
            }
    };//mesmo que anterior mas para outro eixo   
}

function makeGrid() {
    for (var lin = 0; lin < linhas; lin++) {
    for (var col = 0; col < colunas; col++) {
        var y = col * g;
        var x = lin * g;
        var cell = new parede(col, lin, x, y);
        mapa.push(cell);
        
    }
    }
    
} // inserir dados das celulas individuais na matriz do mapa

function Sala(x, y, largura, altura, i) {
    this.x = (x - 1) * g;
    this.y = (y - 1) * g;
    this.w = largura * g;
    this.h = altura * g;

    this.center = [
        Math.floor(this.x / g + largura / 2),
        Math.floor(this.y / g + altura / 2)
    ];
    

    
} // gerar posição das salas do labirinto

function gerarSalas() {
    for (var i = 0; i < quantia; i++) {
         sala = new Sala(
            Math.floor(Math.random() * linhas) + 1,
            Math.floor(Math.random() * colunas) + 1,
            Math.floor(Math.random() * tamanho) + tamanhoMin,
            Math.floor(Math.random() * tamanho) + tamanhoMin,
            i
        );
        
    
        

        if (i > 0) {
        if (
            salas[0].x + salas[0].w >= canvas.width ||
            salas[0].x <= 0 ||
            salas[0].y + salas[0].h >= canvas.height ||
            salas[0].y <= 0
        ) {
            salas = [];
            gerarSalas();
            break;
        }

        for (var e = 0; e < salas.length; e++) {
            collide = false;

            if (
                sala.x <= salas[e].x + salas[e].w &&
                sala.x + sala.w >= salas[e].x &&
                sala.y <= salas[e].y + salas[e].h &&
                sala.y + sala.h >= salas[e].y
            ) {
            collide = true;
            i--;
            break;
        } else if (
            sala.x + sala.w >= canvas.width ||
            sala.x <= 0 ||
            sala.y + sala.h >= canvas.height ||
            sala.y <= 0
        ) {
        collide = true;
        i--;
        break;
        }
        }
        }

        if (collide == false) {
            if (i > 0) {
                hCorridor(
                    salas[i - 1].center[0],
                    sala.center[0],
                    salas[i - 1].center[1],
                    sala.center[1]
            );
                vCorridor(
                    salas[i - 1].center[0],
                    sala.center[0],
                    salas[i - 1].center[1],
                    sala.center[1]
                );
            }
            salas.push(sala)
            if (i == 3) {
                button1spawnx = salas[i].center[0] * g
                button1spawny = salas[i].center[1] * g
            } else if (i == 7) {
                button2spawnx = salas[i].center[0] * g
                button2spawny = salas[i].center[1] * g
            } else if (i == 5) {
                button3spawnx = salas[i].center[0] * g
                button3spawny = salas[i].center[1] * g
            } else if (i == 9) {
                doorspawnx = salas[i].center[0] * g
                doorspawny = salas[i].center[1] * g
            }
        }
    }
}// inserir dados da sala na matriz salas caso não haja colisão entre salas

function hCorridor(x1, x2, y1, y2) {
    if (x1 > x2) {
        disX = x1 - x2;
        disX += 1;

    for (var i = 0; i < mapa.length; i++) {
        mapa[i].carveH(disX, x2, y2);
    }
    } else {
        disX = x2 - x1;
        disX += 1;
        for (var i = 0; i < mapa.length; i++) {
        mapa[i].carveH(disX, x1, y1);
    }
}
}

function vCorridor(x1, x2, y1, y2) {
    var x;

    if (y1 > y2) {
        disY = y1 - y2;
        disY += 1;

    if (x2 + (disX - 1) > x1 + (disX - 1)) {
        x = x2;
    } else {
        x = x2 + (disX - 1);
    }

    for (var i = 0; i < mapa.length; i++) {
        mapa[i].carveV(disY, x, y2);
    }
    } else {
        disY = y2 - y1;
        disY += 1;

    if (x1 + (disX - 1) > x2 + (disX - 1)) {
        x = x1;
    } else {
        x = x1 + (disX - 1);
    }

    for (var i = 0; i < mapa.length; i++) {
        mapa[i].carveV(disY, x, y1);
    }
}
spawnx = salas[0].center[0] * g
player.x = spawnx
spawny = salas[0].center[1] * g;
player.y = spawny

}

function gerar() {
for (var i = 0; i < mapa.length; i++) {
    mapa[i].carve();
    mapa[i].show();
}

} // gerar o mapa


function render() {
    makeGrid();
    gerarSalas()
    gerar();
}
render()
}


function plano_jogo(){
var lifesImage = new Image()
lifesImage.src = "https://github.com/andrewflorence2208/FINAL_PROJECT/blob/main/pixil-frame-0%20(2).png?raw=true"


//geração dos corredores entre salas

// fim codigo do labirinto


var tela_quiz = {
    pergunta: {},
    respostas: {}
}
document.getElementById("tela_quiz").innerHTML = ""



    

  

class button  {
    constructor(x, y, width, height, status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.status = status
    }
    drawSide(){
        ctx.fillStyle = "cyan"
    ctx.fillRect(this.x,this.y,this.width,this.height);}
}

class square  {
    constructor(x, y, width, height, squarecolor, status) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.color = squarecolor
        this.status = status
    }
    drawSide() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height);           
    }
}

var buttons = [new button(button1spawnx, button1spawny, 15, 15, 0), new button(button2spawnx, button2spawny, 15, 15, 0), new button(button3spawnx, button3spawny, 15, 15, 0)]
var door = new square(doorspawnx, doorspawny, 15, 15, "yellow", 0)

var keysDown = {};

addEventListener("keydown", function (event) {
    keysDown[event.key] = true;
}, false);

addEventListener("keyup", function (event) {
    delete keysDown[event.key];
}, false);
var update = function (modifier) {
    player.currentx = player.x
    player.currenty = player.y
    if(document.getElementById("gameplay_screen").style.display != "none") {

    
    if ("ArrowUp" in keysDown || "w" in keysDown) { // Player is holding up key
        player.y -= player.speed * modifier;
    }
    if ("ArrowDown" in keysDown || "s" in keysDown) { // Player is holding down key
        player.y += player.speed * modifier;
    }
    if ("ArrowLeft" in keysDown || "a" in keysDown) { // Player is holding left key
        player.x -= player.speed * modifier;
    }
    if ("ArrowRight" in keysDown || "d" in keysDown) { // Player is holding right key
        player.x += player.speed * modifier;
    }
}
};


var collision = function(){
    var color = "black";
    for (var i = 0; i < buttons.length; i++){
        if(player.x+player.width >= buttons[i].x && 
            player.x <= buttons[i].x+buttons[i].width && 
            player.y <= buttons[i].y+buttons[i].height && 
            player.y+player.height >= buttons[i].y && buttons[i].status == 0){
                color = "red"
                buttons[i].status = 1
                player.key_pieces += 1
                questning()
           }
        if (player.key_pieces == 3) {
            door.status = 1
        } else {
            door.status = 0
        }
        if(player.x+player.width >= door.x && 
            player.x <= door.x+door.width && 
            player.y <= door.y+door.height && 
            player.y+player.height >= door.y && door.status == 1 ){
                document.getElementById("tela_quiz").innerHTML = score + " " + "TESTE" + " " + player.lifes + " " + player.key_pieces + " " + gamestatus
                buttons[0].status = 0;
                buttons[1].status = 0;
                buttons[2].status = 0; 
                reload();
            }
        ctx.fillStyle = color;
        }
        for(var i = 0; i < mapa.length; i++){
                if (player.x+player.width >= mapa[i].x &&
                player.x <= mapa[i].x+4 &&
                player.y <= mapa[i].y+4 &&
                player.y+player.height >= mapa[i].y && mapa[i].empty == false) {
                    player.x = player.currentx
                    player.y = player.currenty

                }
            
        }
            
}





var main = function () {
    update(0.02);
    document.getElementById("player_data").innerHTML = timer
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.drawSide();
    for (i = 0; i < buttons.length; i++){ 
        if (buttons[i].status == 0) {
        buttons[i].drawSide()
        }
        }
        collision()
    for (i = player.lifes; i > 0; i--) {
        ctx.drawImage(lifesImage, (800 - (i * 50)), 750, 50, 50)
    }
    if (door.status == 1) {
        door.drawSide()
    }
    requestAnimationFrame(main);
}
main()
if ( document.getElementById("gameplay_screen") != "none") {
clock = setInterval(function(){
    timer -= 1
    if (timer == 0) {
        quit();
    }
}, 1000)} }

plano_labirinto();
var img = new Image();
img.src = canvas.toDataURL('image/png');
const element = document.querySelector("#tela")
element.style.backgroundImage = 'url('+canvas.toDataURL("image/png")+')';
plano_jogo();

    
    
}


function gamestart() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("logo").style.display = "none";
    document.getElementById("gameplay_screen").style.display = "grid";

    const elem = document.documentElement;
    if(elem.requestFullscreen){
        elem.requestFullscreen();
    }
    draw()};
    function quit() {
    document.getElementById("gameplay_screen").style.display = "none";
    document.getElementById("menu").style.display = "grid";
    document.getElementById("logo").style.display = "grid";
    document.getElementById("quest_screen").style.display = "none"
    
    }

    function questning() {
    
        document.getElementById("gameplay_screen").style.display = "none";
        document.getElementById("quest_screen").style.display = "grid";
    
        var slct_quest = Math.floor(Math.random() * (questions.length));
    
        console.log(questions[slct_quest])
        document.getElementById("quest").innerHTML = questions[slct_quest].action;
    
        document.getElementById("option-1 opt1").innerHTML = questions[slct_quest].opt1.text;
    
        document.getElementById("option-1 opt2").innerHTML = questions[slct_quest].opt2.text;
    
        document.getElementById("option-1 opt3").innerHTML = questions[slct_quest].opt3.text;
    
        document.getElementById("option-1 opt4").innerHTML = questions[slct_quest].opt4.text;
    
        const bt1 = document.getElementById("option-1-pushable opt1");
        const bt2 = document.getElementById("option-1-pushable opt2");
        const bt3 = document.getElementById("option-1-pushable opt3");
        const bt4 = document.getElementById("option-1-pushable opt4");
    
    
        if(questions[slct_quest].opt1.nextpoint === true){
            bt1.setAttribute("onclick", "correct()");
        }
        else if(questions[slct_quest].opt1.nextpoint === false){
            bt1.setAttribute("onclick", "incorrect()");
        }
        if(questions[slct_quest].opt2.nextpoint === true){
            bt2.setAttribute("onclick", "correct()");
        }
        else if(questions[slct_quest].opt2.nextpoint === false){
            bt2.setAttribute("onclick", "incorrect()");
        }
        if(questions[slct_quest].opt3.nextpoint === true){
            bt3.setAttribute("onclick", "correct()");
        }
        else if(questions[slct_quest].opt3.nextpoint === false){
            bt3.setAttribute("onclick", "incorrect()");
        }
        if(questions[slct_quest].opt4.nextpoint === true){
            bt4.setAttribute("onclick", "correct()");
        }
        else if(questions[slct_quest].opt4.nextpoint === false){
            bt4.setAttribute("onclick", "incorrect()");
        }
    };
    
    function correct(){
        document.getElementById("gameplay_screen").style.display = "grid";
        document.getElementById("quest_screen").style.display = "none";
    };
    
    function incorrect(){
        lifes -= 1;
        if (lifes != 0) {
            questning();
        }else if (lifes == 0 ) {
            document.getElementById("gameplay_screen").style.display = "grid";
            document.getElementById("quest_screen").style.display = "none";
            quit();
        }}
