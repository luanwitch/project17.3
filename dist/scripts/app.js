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
    ]
};

let idiomaAtual = "pt";

function gerarFrase() {
    const fraseAleatoria = idiomas[idiomaAtual][Math.floor(Math.random() * idiomas[idiomaAtual].length)];
    document.getElementById("frase").textContent = fraseAleatoria.frase;
}

function alternarIdioma() {
    idiomaAtual = idiomaAtual === "pt" ? "en" : idiomaAtual === "en" ? "es" : idiomaAtual === "es" ? "fr" : "pt";
    const frase = idiomas[idiomaAtual][Math.floor(Math.random() * idiomas[idiomaAtual].length)];
    document.getElementById("frase").textContent = frase.frase;
}

function lerFrase() {
    const frase = document.getElementById("frase").textContent;
    const utterance = new SpeechSynthesisUtterance(frase);
    utterance.lang = idiomaAtual === "pt" ? "pt-BR" : idiomaAtual === "en" ? "en-US" : idiomaAtual === "es" ? "es-ES" : "fr-FR";
    utterance.rate = 1;  
    utterance.pitch = 1;  
    utterance.volume = 1; 
    speechSynthesis.speak(utterance); 
}
