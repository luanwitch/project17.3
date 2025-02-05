    // Definindo os idiomas e suas frases
    const idiomas = {
        pt: [
            { frase: "A vida é uma aventura ousada ou nada.", autor: "Helen Keller" },
            { frase: "O sucesso nasce do querer, da determinação e persistência.", autor: "Júlio César" },
            { frase: "Seja a mudança que você quer ver no mundo.", autor: "Mahatma Gandhi" },
            { frase: "Grandes conquistas começam com pequenos passos.", autor: "Lao Tzu" },
            { frase: "O futuro pertence àqueles que acreditam na beleza dos seus sonhos.", autor: "Eleanor Roosevelt" }
        ],
        en: [
            { frase: "Life is either a daring adventure or nothing.", autor: "Helen Keller" },
            { frase: "Success is born from desire, determination, and persistence.", autor: "Julius Caesar" },
            { frase: "Be the change that you want to see in the world.", autor: "Mahatma Gandhi" },
            { frase: "Great achievements start with small steps.", autor: "Lao Tzu" },
            { frase: "The future belongs to those who believe in the beauty of their dreams.", autor: "Eleanor Roosevelt" }
        ],
        es: [
            { frase: "La vida es una aventura atrevida o nada.", autor: "Helen Keller" },
            { frase: "El éxito nace del deseo, la determinación y la persistencia.", autor: "Julio César" },
            { frase: "Sé el cambio que deseas ver en el mundo.", autor: "Mahatma Gandhi" },
            { frase: "Grandes logros comienzan con pequeños pasos.", autor: "Lao Tzu" },
            { frase: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt" }
        ],
        fr: [
            { frase: "La vie est soit une aventure audacieuse, soit rien.", autor: "Helen Keller" },
            { frase: "Le succès naît du désir, de la détermination et de la persévérance.", autor: "Jules César" },
            { frase: "Soyez le changement que vous voulez voir dans le monde.", autor: "Mahatma Gandhi" },
            { frase: "Les grandes réalisations commencent par de petits pas.", autor: "Lao Tzu" },
            { frase: "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.", autor: "Eleanor Roosevelt" }
        ],
        de: [
            { frase: "Das Leben ist entweder ein gewagtes Abenteuer oder nichts.", autor: "Helen Keller" },
            { frase: "Erfolg entsteht aus dem Wunsch, der Entschlossenheit und der Ausdauer.", autor: "Julius Caesar" }
        ],
        it: [
            { frase: "La vita è un'avventura audace o niente.", autor: "Helen Keller" },
            { frase: "Il successo nasce dal desiderio, dalla determinazione e dalla perseveranza.", autor: "Giulio Cesare" }
        ]
    };

    // Definindo o idioma inicial
    let idiomaAtual = "pt";  // Idioma padrão é português

    // Função para gerar uma frase aleatória
    function gerarFrase() {
        const fraseAleatoria = idiomas[idiomaAtual][Math.floor(Math.random() * idiomas[idiomaAtual].length)];
        document.getElementById("frase").textContent = `"${fraseAleatoria.frase}" - ${fraseAleatoria.autor}`;
    }

    // Função para alternar entre os idiomas
    function alternarIdioma() {
        const idiomasDisponiveis = ["pt", "en", "es", "fr", "de", "it"];
        const indiceAtual = idiomasDisponiveis.indexOf(idiomaAtual);
        const indiceProximo = (indiceAtual + 1) % idiomasDisponiveis.length;
        idiomaAtual = idiomasDisponiveis[indiceProximo];  // Alterar para o próximo idioma

        // Exibindo uma frase aleatória do idioma atual
        const frase = idiomas[idiomaAtual][Math.floor(Math.random() * idiomas[idiomaAtual].length)];
        const fraseElement = document.getElementById("frase");
        fraseElement.textContent = frase.frase;
        
        // Alterando a classe do elemento para o idioma atual
        fraseElement.className = idiomaAtual;
    }

    // Função para ler a frase em voz alta
    function lerFrase() {
        const frase = document.getElementById("frase").textContent;
        const utterance = new SpeechSynthesisUtterance(frase);
        utterance.lang = idiomaAtual === "pt" ? "pt-BR" : 
                        idiomaAtual === "en" ? "en-US" : 
                        idiomaAtual === "es" ? "es-ES" : 
                        idiomaAtual === "fr" ? "fr-FR" : 
                        idiomaAtual === "de" ? "de-DE" : "it-IT";

        // Configurações de voz
        utterance.rate = 1;  // Velocidade
        utterance.pitch = 1;  // Tom de voz
        utterance.volume = 1; // Volume
        speechSynthesis.speak(utterance);
    }
