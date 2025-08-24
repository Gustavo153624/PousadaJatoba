// ===================================================
// 🏡 POUSADA JATOBÁ – SCRIPT PRINCIPAL (Refatorado)
// Boas práticas: modular, acessível, performático, DRY
// ===================================================

// ==============================
// 📦 DADOS CENTRALIZADOS
// ==============================

const DATA = {
    acomodacoes: {
        amora: {
            nome: "Amora",
            tipo: "Chalé",
            descricao: "Um chalé encantador e intimista, perfeito para casais que buscam tranquilidade e conexão com a natureza. Com ambiente acolhedor e decoração charmosa, é ideal para momentos de descanso e romance.",
            capacidade: "2 pessoas (1 cama de casal)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 240/noite",
            fotos: [
                "/images/acomodacoes/amora/amora_entrada.jpg",
                "/images/acomodacoes/amora/amora_quarto.jpg",
                "/images/acomodacoes/amora/amora_quarto2.jpg",
                "/images/acomodacoes/amora/amora_banheiro.jpg"
            ]
        },
        mangaba: {
            nome: "Mangaba",
            tipo: "Chalé",
            descricao: "Aconchegante e versátil, o Chalé Mangaba acomoda até três pessoas com conforto. Rodeado por verde, oferece uma experiência rústica com toques modernos — ideal para quem valoriza simplicidade com estilo.",
            capacidade: "3 pessoas (1 cama de casal, 1 cama de solteiro)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 360/noite",
            fotos: [
                "/images/acomodacoes/mangaba/mangaba_entrada.jpg",
                "/images/acomodacoes/mangaba/mangaba_quarto.jpg",
                "/images/acomodacoes/mangaba/mangaba_banheiro.jpg"
            ]
        },
        buriti: {
            nome: "Buriti",
            tipo: "Chalé",
            descricao: "Espaçoso e elegante, o Chalé Buriti é ideal para famílias ou grupos de até cinco pessoas. Com varanda privativa e vista para a natureza, proporciona uma estadia relaxante e memorável.",
            capacidade: "5 pessoas (2 camas de casal, 1 cama de solteiro)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 600/noite",
            fotos: [
                "/images/acomodacoes/buriti/buriti_entrada.jpg",
                "/images/acomodacoes/buriti/buriti_quarto.jpg",
                "/images/acomodacoes/buriti/buriti_quarto1.jpg",
                "/images/acomodacoes/buriti/buriti_quarto2.jpg",
                "/images/acomodacoes/buriti/buriti_quarto3.jpg",
                "/images/acomodacoes/buriti/buriti_quarto4.jpg",
                "/images/acomodacoes/buriti/buriti_banheiro.jpg"
            ]
        },
        tamarindo: {
            nome: "Tamarindo",
            tipo: "Chalé",
            descricao: "Chalé ampla e vibrante, perfeita para famílias ou grupos. Com duas camas de casal e uma de solteiro, oferece conforto e praticidade em um ambiente alegre e bem equipado.",
            capacidade: "5 pessoas (2 camas de casal, 1 cama de solteiro)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 600/noite",
            fotos: [
                "/images/acomodacoes/tamarindo/tamarindo_entrada.jpg",
                "/images/acomodacoes/tamarindo/tamarindo_quarto.jpg",
                "/images/acomodacoes/tamarindo/tamarindo_quarto2.jpg",
                "/images/acomodacoes/tamarindo/tamarindo_quarto3.jpg",
                "/images/acomodacoes/tamarindo/tamarindo_banheiro.jpg"
            ]
        },
        pequi: {
            nome: "Pequi",
            tipo: "Suíte",
            descricao: "Suíte charmosa e funcional para duas pessoas. Ideal para quem busca uma estadia tranquila, com ambiente acolhedor e decoração suave inspirada na natureza local.",
            capacidade: "2 pessoas (1 cama de casal)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede"],
            preco: "A partir de R$ 160/noite",
            fotos: [
                "/images/acomodacoes/pequi/pequi_entrada.jpg",
                "/images/acomodacoes/pequi/pequi_quarto.jpg",
                "/images/acomodacoes/pequi/pequi_banheiro.jpg"
            ]
        },
        caja: {
            nome: "Cajá", // ✅ Corrigido: nome com acento
            tipo: "Suíte",
            descricao: "Descontraída e espaçosa, a Suíte Cajá acomoda até quatro pessoas em camas de solteiro. Perfeita para grupos de amigos ou viajantes que valorizam conforto e liberdade.",
            capacidade: "4 pessoas (4 camas de solteiro)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 320/noite",
            fotos: [
                "/images/acomodacoes/caja/caja_entrada.jpg",
                "/images/acomodacoes/caja/caja_quarto.jpg",
                "/images/acomodacoes/caja/caja_quarto2.jpg"
            ]
        },
        baru: {
            nome: "Barú",
            tipo: "Suíte",
            descricao: "Com estilo rústico e atmosfera acolhedora, a Suíte Barú é ideal para até três hóspedes. Uma ótima opção para quem busca equilíbrio entre conforto e simplicidade.",
            capacidade: "3 pessoas (1 cama de casal, 1 cama de solteiro)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 240/noite",
            fotos: [
                "/images/acomodacoes/baru/baru_entrada.jpg",
                "/images/acomodacoes/baru/baru_quarto.jpg",
                "/images/acomodacoes/baru/baru_varanda.jpg",
                "/images/acomodacoes/baru/baru_banheiro.jpg"
            ]
        },
        caju: {
            nome: "Caju",
            tipo: "Suíte",
            descricao: "Suíte versátil e bem equipada, ideal para pequenos grupos ou famílias. Com cama de casal e cama de solteiro, oferece praticidade e bem-estar em um ambiente agradável.",
            capacidade: "3 pessoas (1 cama de casal, 1 cama de solteiro)",
            comodidades: ["Ventilação natural", "Wi-Fi", "Varanda", "Rede", "Pet friendly"],
            preco: "A partir de R$ 240/noite",
            fotos: [
                "/images/acomodacoes/caju/caju_entrada.jpg",
                "/images/acomodacoes/caju/caju_quarto.jpg"
            ]
        }
    },

    cachoeiras: {
        santa_barbara: {
            nome: "Cachoeira Santa Bárbara",
            imagem: "/images/cachoeiras/santa_barbara.png",
            distancia: "~25 km",
            trilha: "20 min (leve a moderada)",
            descricao: "Queda d'água de cerca de 40 metros, poço profundo e águas cristalinas. Ambiente cercado pela mata nativa do Cerrado.",
            destaques: "Considerada um ponto de alta energia por muitos visitantes, devido à presença de quartzo nas rochas. Ideal para meditação e conexão com a natureza.",
            observacao: "Banho permitido, mas o poço é fundo – cuidado ao pular."
        },
        segredo: {
            nome: "Cachoeira do Segredo",
            imagem: "/images/cachoeiras/segredo.png",
            distancia: "~30 km",
            trilha: "15 min (leve)",
            descricao: "Cachoeira que cai dentro de uma caverna natural, formando um poço com águas geladas e transparentes.",
            destaques: "Efeito mágico da luz natural que entra pela abertura – melhor entre 10h e 14h, em dias ensolarados. Ambiente místico e muito procurado por quem busca experiências espirituais.",
            dica: "Leve lanterna se quiser explorar os cantos escuros da caverna."
        },
        almecegas: {
            nome: "Cachoeira Almécegas I e II",
            imagem: "/images/cachoeiras/almecegas.png",
            distancia: "~35 km (próximo ao distrito de São Jorge)",
            trilha: "10–15 min (fácil)",
            descricao: "Almécegas I: Queda livre de mais de 50 metros, visual impressionante. Almécegas II: Poço maior, ideal para banho e fotos.",
            destaques: "Uma das maiores quedas da Chapada dos Veadeiros. Vista panorâmica deslumbrante do mirante.",
            perigo: "Solo escorregadio – atenção na trilha."
        },
        cristal: {
            nome: "Cachoeira do Cristal",
            imagem: "/images/cachoeiras/cristal.png",
            distancia: "~20 km",
            trilha: "5–10 min (muito fácil)",
            descricao: "Água transparente como cristal, com tons de esmeralda e azul-turquesa. Poço raso e largo, cercado por pedras lisas.",
            destaques: "Uma das águas mais puras da região. Perfeita para fotos, relaxar e contemplar.",
            ideal: "Famílias, idosos e quem busca tranquilidade."
        },
        loquinhas: {
            nome: "Cachoeira do Loquinhas",
            imagem: "/images/cachoeiras/loquinha.png",
            distancia: "~18 km",
            trilha: "5 min (fácil)",
            descricao: "Conjunto de pequenas quedas e tobogãs naturais de pedra, com poços interligados.",
            destaques: "Diversão garantida! Muitos visitantes escorregam pelas pedras lisas (com cuidado). Ambiente: Alegre, com áreas de sombra, redes e espaço para piquenique.",
            ideal: "Crianças (com supervisão), grupos de amigos."
        },
        poco_encantado: {
            nome: "Poço Encantado",
            imagem: "/images/cachoeiras/poco_encantado.png",
            distancia: "~28 km",
            trilha: "10 min (leve)",
            descricao: "Poço profundo com águas cristalinas, onde, em dias ensolarados entre 11h e 13h, um raio de luz solar atinge o fundo (10–15m), iluminando formações subaquáticas.",
            destaques: "Semelhante ao famoso Poço Azul de Bonito (MS). Sensação de mistério e beleza única.",
            dica: "Vá no horário certo para ver o efeito da luz."
        },
        lapinha: {
            nome: "Gruta da Lapinha",
            imagem: "/images/cachoeiras/lapinha.png",
            distancia: "~22 km",
            trilha: "10 min (leve)",
            descricao: "Gruta cárstica com estalactites, estalagmites e formações rochosas milenares.",
            destaques: "Uma das poucas grutas abertas à visitação na Chapada. Ambiente fresco e misterioso.",
            dica: "Use lanterna ou luz do celular para ver os detalhes."
        }
    },

    galeria: {
        acomodacoes: {
            title: "Acomodações",
            images: [
                '/images/acomodacoes/amora/amora_entrada.jpg',
                '/images/acomodacoes/amora/amora_quarto.jpg',
                '/images/acomodacoes/amora/amora_quarto2.jpg',
                '/images/acomodacoes/amora/amora_banheiro.jpg',
                '/images/acomodacoes/mangaba/mangaba_entrada.jpg',
                '/images/acomodacoes/mangaba/mangaba_quarto.jpg',
                '/images/acomodacoes/mangaba/mangaba_banheiro.jpg',
                '/images/acomodacoes/buriti/buriti_entrada.jpg',
                '/images/acomodacoes/buriti/buriti_quarto.jpg',
                '/images/acomodacoes/buriti/buriti_quarto1.jpg',
                '/images/acomodacoes/buriti/buriti_quarto2.jpg',
                '/images/acomodacoes/buriti/buriti_quarto3.jpg',
                '/images/acomodacoes/buriti/buriti_quarto4.jpg',
                '/images/acomodacoes/buriti/buriti_banheiro.jpg',
                '/images/acomodacoes/tamarindo/tamarindo_entrada.jpg',
                '/images/acomodacoes/tamarindo/tamarindo_quarto.jpg',
                '/images/acomodacoes/tamarindo/tamarindo_quarto2.jpg',
                '/images/acomodacoes/tamarindo/tamarindo_quarto3.jpg',
                '/images/acomodacoes/tamarindo/tamarindo_banheiro.jpg',
                '/images/acomodacoes/pequi/pequi_entrada.jpg',
                '/images/acomodacoes/pequi/pequi_quarto.jpg',
                '/images/acomodacoes/pequi/pequi_banheiro.jpg',
                '/images/acomodacoes/caja/caja_entrada.jpg',
                '/images/acomodacoes/caja/caja_quarto.jpg',
                '/images/acomodacoes/caja/caja_quarto2.jpg',
                '/images/acomodacoes/baru/baru_entrada.jpg',
                '/images/acomodacoes/baru/baru_quarto.jpg',
                '/images/acomodacoes/baru/baru_varanda.jpg',
                '/images/acomodacoes/baru/baru_banheiro.jpg',
                '/images/acomodacoes/caju/caju_entrada.jpg',
                '/images/acomodacoes/caju/caju_quarto.jpg'
            ]
        },
        estrutura: {
            title: "Estrutura da Pousada",
            images: [
                '/images/estrutura/entrada.jpg',
                '/images/estrutura/varanda.jpg',
                '/images/estrutura/jacuzzi.jpg',
                '/images/estrutura/quintal.jpg',
                '/images/estrutura/quintal_1.jpg',
                '/images/estrutura/quintal_2.jpg',
                '/images/estrutura/quintal_3.jpg',
                '/images/estrutura/varanda_1.jpg',
                '/images/estrutura/varanda_2.jpg',
                '/images/estrutura/varanda_3.jpg',
                '/images/estrutura/varanda_4.jpg',
                '/images/estrutura/cozinha_1.jpg',
                '/images/estrutura/cozinha_2.jpg',
                '/images/estrutura/cozinha_3.jpg',
                '/images/estrutura/cozinha_4.jpg',
                '/images/estrutura/cozinha_5.jpg'
            ]
        },
        experiencia: {
            title: "Natureza e Experiência",
            images: [
                '/images/experiencia/arara.jpg',
                '/images/experiencia/flor.jpg',
                '/images/experiencia/flor_1.jpg',
                '/images/experiencia/flor_2.jpg',
                '/images/experiencia/flor_3.jpg',
                '/images/experiencia/flor_4.jpg',
                '/images/experiencia/flor_5.jpg',
                '/images/experiencia/flor_6.jpg',
                '/images/experiencia/flor_7.jpg',
                '/images/experiencia/flor_8.jpg',
                '/images/experiencia/flor_9.jpg',
                '/images/experiencia/flor_10.jpg',
                '/images/experiencia/flor_11.jpg',
                '/images/experiencia/fundo.jpg',
                '/images/experiencia/jacuzzi_1.jpg',
                '/images/experiencia/limoes.jpg',
                '/images/experiencia/passarinho.jpg',
                '/images/experiencia/passarinho_1.jpg',
                '/images/experiencia/passarinho_2.jpg'
            ]
        },
        pets: {
            title: "Hóspedes Pet",
            images: [
                '/images/pets/pet_1.jpg',
                '/images/pets/pet_2.jpg',
                '/images/pets/pet_3.jpg',
                '/images/pets/pet_4.jpg',
                '/images/pets/pet_5.jpg',
                '/images/pets/pet_6.jpg',
                '/images/pets/pet_7.jpg',
                '/images/pets/pet_8.jpg',
                '/images/pets/pet_9.jpg',
                '/images/pets/pet_10.jpg'
            ]
        },
        cachoeiras: {
            title: "Cachoeiras da Região",
            images: [
                '/images/cachoeiras/santa_barbara.png',
                '/images/cachoeiras/segredo.png',
                '/images/cachoeiras/almecegas.png',
                '/images/cachoeiras/almecegas_1.png',
                '/images/cachoeiras/cristal.png',
                '/images/cachoeiras/lapinha.png',
                '/images/cachoeiras/loquinha.png',
                '/images/cachoeiras/poco_encantado.png'
            ]
        }
    }
};

// ==============================
// 🧩 UTILS GLOBAIS
// ==============================

/**
 * Fecha qualquer modal
 * @param {string} id - ID do modal
 */
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

/**
 * Abre qualquer modal
 * @param {string} id - ID do modal
 */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        // Foca no botão de fechar
        const closeBtn = modal.querySelector('[aria-label="Fechar"]');
        if (closeBtn) setTimeout(() => closeBtn.focus(), 100);
    }
}

// ==============================
// 🛎️ MODAL DE ACOMODAÇÃO
// ==============================

function openAcomodacaoModal(nome) {
    const acomodacao = DATA.acomodacoes[nome];
    if (!acomodacao) return;

    document.getElementById('modal-titulo').textContent = acomodacao.nome;
    document.getElementById('modal-tipo').textContent = acomodacao.tipo;
    document.getElementById('modal-descricao').textContent = acomodacao.descricao;
    document.getElementById('modal-capacidade').textContent = acomodacao.capacidade;

    const comodidadesList = document.getElementById('modal-comodidades');
    comodidadesList.innerHTML = '';
    acomodacao.comodidades.forEach(comodidade => {
        const li = document.createElement('li');
        li.className = 'flex items-start';
        li.innerHTML = `
            <svg class="h-5 w-5 mr-2 text-[#06D6A0]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            ${comodidade}
        `;
        comodidadesList.appendChild(li);
    });

    document.getElementById('modal-preco').textContent = acomodacao.preco;
    document.getElementById('modal-reservar-btn').onclick = () => {
        const msg = encodeURIComponent(`Olá! Gostaria de reservar a ${acomodacao.tipo} ${acomodacao.nome} para [datas]. Podem me ajudar?`);
        window.open(`https://wa.me/5562996688008?text=${msg}`, '_blank', 'noopener');
    };

    const galeria = document.getElementById('modal-galeria');
    galeria.innerHTML = '';
    acomodacao.fotos.forEach((foto, index) => {
        const div = document.createElement('div');
        div.className = 'h-48 bg-cover bg-center rounded-lg cursor-pointer hover:opacity-90 transition';
        div.style.backgroundImage = `url('${foto}')`;
        div.setAttribute('role', 'button');
        div.setAttribute('aria-label', `Ver foto ${index + 1}`);
        div.tabIndex = 0;
        div.onclick = () => openLightbox(acomodacao.fotos, index);
        div.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(acomodacao.fotos, index);
            }
        };
        galeria.appendChild(div);
    });

    openModal('modal-acomodacao');
}

// ==============================
// SAIBA MAIS CACHOEIRAS
// ==============================
function toggleCachoeiras() {
    const hiddenCards = document.querySelectorAll('#cachoeiras-grid .hidden');
    const button = document.getElementById('toggle-cachoeiras-btn');

    const anyHidden = [...hiddenCards].some(card => card.classList.contains('hidden'));

    if (anyHidden) {
        hiddenCards.forEach(card => card.classList.remove('hidden'));
        button.textContent = 'Ver menos';
    } else {
        hiddenCards.forEach(card => card.classList.add('hidden'));
        button.textContent = 'Ver mais cachoeiras';
    }
}

// ==============================
// 🌊 MODAL DE CACHOEIRA
// ==============================

function openCachoeiraModal(nome) {
    const cachoeira = DATA.cachoeiras[nome];
    if (!cachoeira) return;

    document.getElementById('modal-cachoeira-titulo').textContent = cachoeira.nome;
    document.getElementById('modal-cachoeira-imagem').src = cachoeira.imagem;
    document.getElementById('modal-cachoeira-imagem').alt = cachoeira.nome;
    document.getElementById('modal-cachoeira-distancia').textContent = cachoeira.distancia;
    document.getElementById('modal-cachoeira-trilha').textContent = cachoeira.trilha;
    document.getElementById('modal-cachoeira-descricao').textContent = cachoeira.descricao;

    // Seções opcionais
    ['destaques', 'dica', 'observacao', 'perigo', 'ideal'].forEach(field => {
        const el = document.getElementById(`modal-cachoeira-${field}`);
        const textEl = document.getElementById(`modal-cachoeira-${field}-texto`);
        if (cachoeira[field]) {
            textEl.textContent = cachoeira[field];
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });

    openModal('modal-cachoeira');
}

// ==============================
// 🖼️ LIGHTBOX DE FOTOS (Reutilizável)
// ==============================

const Lightbox = {
    element: null,
    aberto: false,
    fotos: [],
    index: 0,

    init() {
        if (!this.element) {
            this.createElement();
        }
    },

    createElement() {
        this.element = document.createElement('div');
        this.element.id = 'lightbox';
        this.element.className = 'hidden fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50';
        this.element.innerHTML = `
            <button id="lightbox-close" aria-label="Fechar" class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-20">&times;</button>
            <div class="relative max-w-4xl w-full">
                <button id="lightbox-prev" aria-label="Foto anterior" class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-200 opacity-70 hover:opacity-100 z-10"><</button>
                <img id="lightbox-img" class="w-full max-h-[90vh] object-contain mx-auto" src="" alt="Foto ampliada">
                <button id="lightbox-next" aria-label="Próxima foto" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-200 opacity-70 hover:opacity-100 z-10">></button>
            </div>
        `;

        document.body.appendChild(this.element);

        // Eventos
        this.element.querySelector('#lightbox-close').onclick = () => this.close();
        this.element.querySelector('#lightbox-prev').onclick = (e) => {
            e.stopPropagation();
            this.prev();
        };
        this.element.querySelector('#lightbox-next').onclick = (e) => {
            e.stopPropagation();
            this.next();
        };
        this.element.onclick = (e) => {
            if (e.target === this.element) this.close();
        };
    },

    open(fotos, index = 0) {
        this.init();
        this.fotos = fotos;
        this.index = index;
        this.aberto = true;
        this.updateImage();
        this.element.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        this.addListeners();
    },

    updateImage() {
        if (!this.aberto) return;
        document.getElementById('lightbox-img').src = this.fotos[this.index];
    },

    next() {
        this.index = (this.index + 1) % this.fotos.length;
        this.updateImage();
    },

    prev() {
        this.index = (this.index - 1 + this.fotos.length) % this.fotos.length;
        this.updateImage();
    },

    close() {
        if (!this.aberto) return;
        this.aberto = false;
        this.element.classList.add('hidden');
        document.body.style.overflow = '';
        this.removeListeners();
    },

    addListeners() {
        this.handleKey = this.handleKey.bind(this);
        document.addEventListener('keydown', this.handleKey);
        this.addSwipe();
    },

    removeListeners() {
        document.removeEventListener('keydown', this.handleKey);
    },

    handleKey(e) {
        if (!this.aberto) return;
        if (e.key === 'Escape') this.close();
        if (e.key === 'ArrowLeft') this.prev();
        if (e.key === 'ArrowRight') this.next();
    },

    addSwipe() {
        let startX = 0;
        const img = document.getElementById('lightbox-img');

        img.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        }, {passive: true});
        img.addEventListener('touchend', e => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? this.next() : this.prev();
            }
        }, {passive: true});
    }
};

// Função de atalho
function openLightbox(fotos, index) {
    Lightbox.open(fotos, index);
}

// ==============================
// 🖼️ GALERIA COMPLETA (abas)
// ==============================

function openGalleryModal(section = 'all') {
    const content = document.getElementById('gallery-content');
    const title = document.getElementById('gallery-modal-title');

    let images = [];
    let modalTitle = "Galeria Completa";

    if (section !== 'all' && DATA.galeria[section]) {
        const sec = DATA.galeria[section];
        images = sec.images;
        modalTitle = sec.title;
    } else {
        images = Object.values(DATA.galeria).flatMap(s => s.images);
    }

    title.textContent = modalTitle;
    content.innerHTML = '';

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Foto da pousada";
        img.className = 'w-full h-32 object-cover rounded cursor-pointer hover:scale-105 transition';
        img.onclick = () => openLightbox(images, images.indexOf(src));
        content.appendChild(img);
    });

    openModal('gallery-modal');
}

// Função para fechar o modal da galeria
function closeGalleryModal() {
    closeModal('gallery-modal');
}

// Fechar ao clicar fora do conteúdo
document.getElementById('gallery-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeGalleryModal();
    }
});

// Fecha modais com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modais = ['modal-acomodacao', 'modal-cachoeira', 'gallery-modal'];
        for (const id of modais) {
            const modal = document.getElementById(id);
            if (modal && !modal.classList.contains('hidden')) {
                closeModal(id);
                break;
            }
        }
    }
});

// Abas de galeria
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');

    function setActiveTab(section) {
        tabButtons.forEach(btn => {
            btn.classList.remove('text-blue-600', 'border-blue-600');
            btn.classList.add('text-gray-600');
        });
        const active = document.querySelector(`.tab-button[data-section="${section}"]`);
        if (active) {
            active.classList.add('text-blue-600', 'border-blue-600');
            active.classList.remove('text-gray-600');
        }
    }

    // Eventos das abas
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            setActiveTab(section);
            openGalleryModal(section);
        });
    });

    // Botão "X" para fechar a galeria
    const closeButton = document.getElementById('close-gallery');
    if (closeButton) {
        closeButton.addEventListener('click', closeGalleryModal);
    }

    // Define aba inicial
    setActiveTab('all');
});

// ==============================
// 🔧 FILTROS DE ACOMODAÇÕES
// ==============================

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Atualiza botões
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('bg-[#06D6A0]', b === btn);
            b.classList.toggle('bg-[#FF6B35]', b !== btn);
        });

        // Filtra cards
        document.querySelectorAll('.acomodacao-card').forEach(card => {
            const show = filter === 'all' || card.classList.contains(filter);
            card.style.display = show ? 'block' : 'none';
        });
    });
});

// ==============================
// 📱 MENU MOBILE
// ==============================

document.getElementById('menu-toggle')?.addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('hidden');
});

// ==============================
// 📩 FORMULÁRIO PARA WHATSAPP
// ==============================

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim() || 'Não informado';
    const email = document.getElementById('email').value.trim() || 'Não informado';
    const phone = document.getElementById('phone').value.trim() || 'Não informado';
    const guests = document.getElementById('guests').value.trim() || 'Não informado';
    const accommodation = document.getElementById('accommodation').value.trim() || 'Não informado';
    const checkin = document.getElementById('checkin').value || 'Não informado';
    const checkout = document.getElementById('checkout').value || 'Não informado';
    const message = document.getElementById('message').value.trim() || 'Sem mensagem adicional.';

    const whatsappNumber = '5562996688008';
    const body = `
Olá! Gostaria de fazer uma reserva:
🔹 *Nome:* ${name}
🔹 *E-mail:* ${email}
🔹 *Telefone:* ${phone}
🔹 *Número de pessoas:* ${guests}
🔹 *Tipo de acomodação:* ${accommodation}
🔹 *Check-in:* ${formatDate(checkin)}
🔹 *Check-out:* ${formatDate(checkout)}
🔹 *Mensagem:* ${message}
    `.trim();

    const encodedBody = encodeURIComponent(body);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedBody}`, '_blank', 'noopener');
});

// Função para formatar data
function formatDate(dateStr) {
    if (!dateStr || dateStr === 'Não informado') return dateStr;
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}