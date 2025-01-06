// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação do header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#ffffff';
    }
});

class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.init();
    }

    init() {
        // Criar dotsK
        const dotsContainer = document.querySelector('.slider-dots');
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Adicionar eventos aos botões
        document.querySelector('.prev-slide').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next-slide').addEventListener('click', () => this.nextSlide());

        // Iniciar slideshow automático
        this.startSlideshow();

        // Pausar slideshow quando o mouse estiver sobre o slider
        document.querySelector('.slider').addEventListener('mouseenter', () => this.pauseSlideshow());
        document.querySelector('.slider').addEventListener('mouseleave', () => this.startSlideshow());
    }

    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            document.querySelectorAll('.dot')[index].classList.remove('active');
        });
        this.slides[this.currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlides();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlides();
    }

    startSlideshow() {
        if (this.slideInterval) return;
        this.slideInterval = setInterval(() => this.nextSlide(), 5000); // Muda slide a cada 5 segundos
    }

    pauseSlideshow() {
        clearInterval(this.slideInterval);
        this.slideInterval = null;
    }
}

// Inicializar o slider quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new Slider();
});

// Dados dos serviços
const serviceDetails = {
    hvac: {
        title: "Projeto HVAC",
        description: "Tenha um lar mais confortável, saudável e eficiente com um sistema HVAC sob medida para você!",
        benefits: [
            "Conforto térmico o ano todo: Imagine dias frescos no verão e noites aconchegantes no inverno, sem se preocupar com picos de temperatura.",
            "Ar puro e livre de impurezas: Respire um ar mais saudável, livre de poeira, alergênicos e poluentes, ideal para você e sua família.",
            "Economia de energia: Um sistema HVAC eficiente reduz o consumo de energia, diminuindo suas contas e ajudando o meio ambiente.",
            "Valorização do imóvel: Um projeto profissional aumenta o valor do seu imóvel, tornando-o mais atraente para potenciais compradores.",
            "Tranquilidade e menos preocupações: Diga adeus às preocupações com manutenções inesperadas e tenha a garantia de um sistema confiável e durável."
        ],
        cta: "Invista em seu bem-estar e no futuro do seu lar com um projeto HVAC personalizado!"
    },
    estruturas: {
        title: "Estruturas Metálicas",
        description: "Obras mais Rápidas, Seguras e Econômicas com Projetos de Estruturas Metálicas. Construir ou reformar com estruturas metálicas é a escolha inteligente para obras mais eficientes e vantajosas!",
        benefits: [
            "Rapidez na Execução: A construção com aço é até 50% mais rápida que métodos tradicionais, reduzindo o tempo de obra e minimizando transtornos.",
            "Segurança Reforçada: O aço é um material extremamente resistente e durável, proporcionando maior segurança à sua obra, mesmo em áreas de risco sísmico.",
            "Precisão e Versatilidade: Projetos sob medida garantem estruturas precisas e com infinitas possibilidades arquitetonico, atendendo às suas necessidades e estilo desejado.",
            "Leveza e Economia: Estruturas metálicas são mais leves que concreto ou alvenaria, reduzindo a carga nas fundações e otimizando o uso de materiais, gerando economia na obra.",
            "Sustentabilidade: O aço é um material reciclável, diminuindo o impacto ambiental da construção e promovendo práticas sustentáveis.",
            "Menos Desperdício: A precisão dos projetos minimiza o desperdício de materiais e otimiza o uso de recursos, economizando dinheiro e contribuindo para o meio ambiente.",
            "Maior Espaço Útil: Estruturas metálicas permitem vãos livres maiores, proporcionando mais espaço interno e aproveitamento otimizado da área construída.",
            "Facilidade de Instalações: As tubulações e fiações podem ser facilmente instaladas dentro da estrutura metálica, agilizando o processo e evitando revestimentos desnecessários.",
            "Manutenção Simplificada: O aço é um material resistente à corrosão e com baixa necessidade de manutenção, reduzindo custos a longo prazo."
        ],
        cta: "Transforme sua obra com a eficiência e segurança das estruturas metálicas!"
    },
    gestao: {
        title: "Gestão de Obras",
        description: "Construa Tranquilidade e Segurança: Tenha um Engenheiro Gerenciando a Obra da Sua Casa. Evite dores de cabeça e garanta um resultado impecável com a gestão completa da sua obra por um profissional qualificado.",
        benefits: [
            "Obra em conformidade com normas e leis: Tenha a tranquilidade de que sua casa está sendo construída de acordo com todas as normas técnicas e exigências legais, garantindo a segurança estrutural, elétrica e hidráulica do imóvel.",
            
            "Materiais de qualidade e mão de obra qualificada: O engenheiro garante a seleção de materiais adequados e de alta qualidade, além de supervisionar o trabalho de uma equipe qualificada e experiente, evitando problemas e retrabalhos.",
            
            "Acompanhamento rigoroso: Inspeções frequentes garantem que a obra esteja progredindo conforme o cronograma e projeto, identificando e solucionando problemas desde o início, evitando surpresas desagradáveis.",
            
            "Planejamento preciso e orçamento otimizado: O engenheiro elabora um plano detalhado da obra, definindo etapas, custos e cronograma, otimizando recursos e evitando gastos desnecessários.",
            
            "Negociação eficaz com fornecedores: Obtenha os melhores preços e condições para materiais e serviços, economizando significativamente no orçamento total da obra.",
            
            "Redução de atrasos e imprevistos: A gestão profissional garante o cumprimento do cronograma, minimizando atrasos e custos adicionais causados por falhas ou imprevistos.",
            
            "Menos preocupações para você: Diga adeus às preocupações com o dia a dia da obra. O engenheiro cuida de tudo, desde a compra de materiais até a entrega final, liberando seu tempo para focar no que realmente importa.",
            
            "Comunicação clara e transparente: Mantenha-se atualizado sobre o andamento da obra através de relatórios periódicos e comunicação constante com o engenheiro, garantindo total transparência e tranquilidade.",
            
            "Resolução rápida de problemas: Em caso de imprevistos, o engenheiro atua de forma proativa para encontrar soluções rápidas e eficazes, minimizando o impacto na obra e no seu orçamento.",
            
            "Obra com alto padrão de qualidade: Uma casa construída com acompanhamento profissional de engenharia possui maior valor de mercado, devido à qualidade do projeto, execução e materiais utilizados.",
            
            "Documentos e Laudos Técnicos: O engenheiro fornece toda a documentação necessária para regularização do imóvel, incluindo laudos e ART, facilitando a venda ou aluguel da sua casa no futuro.",
            
            "Segurança para compradores e inquilinos: A qualidade da construção garante a segurança e confiabilidade do imóvel, tornando-o mais atrativo para potenciais compradores ou inquilinos."
        ],
        cta: "Garanta a qualidade e tranquilidade da sua obra com nossa gestão profissional!"
    },
    estrutural: {
        title: "Projetos Estruturais e Complementares - Em BIM",
        description: "Potencialize seus Projetos com as Vantagens Inovadoras do BIM: Integração, Precisão e Eficiência em um Novo Patamar. O BIM (Building Information Modeling) revoluciona a forma como projetos são concebidos, gerenciados e executados, oferecendo uma gama de vantagens incomparáveis para arquitetos, engenheiros, construtores e todos os envolvidos no processo.",
        benefits: [
            "Comunicação Transparente: Diga adeus à comunicação fragmentada e à desinformação. O BIM cria um modelo único e centralizado do projeto, acessível a todos os participantes da equipe, garantindo uma comunicação clara, eficiente e em tempo real.",
            
            "Colaboração em Tempo Real: A plataforma BIM permite que todos os envolvidos trabalhem no mesmo modelo simultaneamente, visualizando e interagindo com as informações em 3D, facilitando a colaboração e a resolução de conflitos desde as etapas iniciais.",
            
            "Visão Unificada do Projeto: Obtenha uma visão completa e integrada do projeto, desde a estrutura e instalações até os acabamentos, permitindo uma melhor tomada de decisões e evitando erros de compatibilização.",
            
            "Minimização de Erros e Retrabalhos: O BIM reduz drasticamente a quantidade de erros de projeto e retrabalhos em obra, economizando tempo, dinheiro e evitando frustrações.",
            
            "Detecção Precoce de Conflitos: Identifique e corrija conflitos entre diferentes disciplinas do projeto, como instalações e estruturas, em fase inicial, evitando custos adicionais e atrasos na obra.",
            
            "Simulações e Análises Avançadas: Realize simulações de desempenho energético, luminotécnica, acústica e outras análises complexas com o modelo BIM, otimizando o projeto e tomando decisões baseadas em dados concretos.",
            
            "Planejamento Detalhado e Sequenciamento Eficaz: Crie um cronograma de obra preciso e detalhado utilizando o modelo BIM, otimizando a sequência de atividades e a utilização de recursos.",
            
            "Logística e Previsão de Materiais Aprimoradas: Tenha uma visão precisa da quantidade de materiais necessários para cada etapa da obra, otimizando compras, evitando desperdícios e reduzindo custos.",
            
            "Comunicação Clara com Equipes de Campo: Forneça à equipe de campo informações precisas e detalhadas em 3D, facilitando a execução da obra e minimizando erros de interpretação.",
            
            "Análise do Ciclo de Vida e Sustentabilidade: Avalie o impacto ambiental do projeto desde o início, otimizando a escolha de materiais, sistemas construtivos e soluções sustentáveis.",
            
            "Redução do Desperdício de Materiais: O BIM minimiza o desperdício de materiais em obra, contribuindo para a sustentabilidade do projeto e a preservação do meio ambiente.",
            
            "Promoção de Práticas Construtivas Sustentáveis: O BIM facilita a implementação de práticas construtivas sustentáveis, como o uso de materiais reciclados e sistemas de energia renovável.",
            
            "Documentação Completa e Acessível: O modelo BIM serve como uma documentação completa e detalhada do projeto, facilitando a gestão da obra, a manutenção do edifício e futuras reformas.",
            
            "Acesso Rápido à Informação: Acesse facilmente todas as informações do projeto, como plantas, cortes, detalhes técnicos e lista de materiais, a qualquer momento e em qualquer lugar.",
            
            "Facilidade de Atualização e Modificações: O modelo BIM pode ser facilmente atualizado para refletir mudanças no projeto ou na manutenção do edifício, garantindo a documentação sempre atualizada."
        ],
        cta: "O BIM é a chave para o futuro da construção, impulsionando projetos mais eficientes, precisos, sustentáveis e colaborativos. Entre em contato e descubra como podemos transformar seu projeto!"
    }
};

// Controle do Modal
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceType = this.dataset.service;
        const service = serviceDetails[serviceType];
        
        if (service) {
            const modalContent = `
                <h2>${service.title}</h2>
                <p class="service-description">${service.description}</p>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                <p class="service-cta">${service.cta}</p>
            `;
            
            document.querySelector('.modal-body').innerHTML = modalContent;
            document.getElementById('serviceModal').style.display = 'block';
            document.body.style.overflow = 'hidden'; // Previne rolagem do body
        }
    });
});

// Fechar modais (tanto de serviços quanto de projetos)
document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        // Fecha o modal de serviços
        const serviceModal = document.getElementById('serviceModal');
        if (serviceModal) {
            serviceModal.style.display = 'none';
        }
        
        // Fecha o modal de projetos
        const projectModal = document.querySelector('.project-modal');
        if (projectModal) {
            projectModal.style.display = 'none';
        }
        
        // Restaura a rolagem do body
        document.body.style.overflow = 'auto';
    });
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    const serviceModal = document.getElementById('serviceModal');
    const projectModal = document.querySelector('.project-modal');
    
    if (e.target === serviceModal) {
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Dados dos projetos
const projectsData = {
    quadra: {
        title: "QUADRA POLIESPORTIVA",
        date: "Janeiro de 2024",
        description: "Projeto, cálculo estrutural, laudo e ART. Projeto 3D e detalhamento 2D para execução. Lista de peças contendo quantitativo de material.",
        image: "https://static.wixstatic.com/media/f064ac_54d4cbe0118c4598a51963bd080e06de~mv2.png"
    },
    portico: {
        title: "PÓRTICO EM ESTRUTURA DE MADEIRA",
        date: "Agosto de 2022",
        description: "Este projeto desafiador, mas gratificante. Projeto executivo para a construção do pórtico de Barretos, feito em estrutura de madeira, foi utilizado eucalipto tratado para a sua construção.\n\nO projeto executivo foi feito respeitando cada detalhe do desenho arquitetonico recebido pela construtora.",
        image: "images/projetos/1660946828jpg.jpg"
    },
    "portico-rolante": {
        title: "PÓRTICO ROLANTE MÓVEL",
        date: "Julho de 2022",
        description: "Projeto desenvolvido para AMBEV planta de Juatuba -MG.\n\nCálculo estrutural feito manualmente conforme NBR8800 Projeto de estruturas de aços e de estruturas mistas de aço e concreto para edifícios, NBR8400 Cálculo de equipamento para elevação e movimentação de cargas, NBR9974 Talhas de cabo de aço com acionamento motorizado, NBR7195 Cores para segurança.",
        image: "https://static.wixstatic.com/media/f064ac_a93d108a0f6a439bb6c78574bc8e77a9~mv2.jpeg"
    },
    "residencias": {
        title: "PROJETO, EXECUÇÃO E GESTÃO DE RESIDÊNCIAS DE ALTO PADRÃO",
        date: "2023",
        description: "Especialização em projetos residenciais de alto padrão, com foco em execução e gestão completa do processo construtivo.",
        image: "https://static.wixstatic.com/media/f064ac_44d3c7bd67f448c89964cdd8e3200cc8~mv2.jpeg",
        gallery: [
            "https://static.wixstatic.com/media/f064ac_44d3c7bd67f448c89964cdd8e3200cc8~mv2.jpeg",
            "https://static.wixstatic.com/media/f064ac_947259f333a746788ee7e08e4722a32a~mv2.jpeg",
            "https://static.wixstatic.com/media/f064ac_852671dd012c4d0bbe0546bd1cd3a938~mv2.jpeg",
            "https://static.wixstatic.com/media/f064ac_c0cbfbb2ebf94ce48b3a82370fe9ed7d~mv2.jpeg"
        ]
    },
    "linha-vida": {
        title: "PROJETO, LAUDO E ART DE LINHA DE VIDA - EDP SÃO JOSÉ DOS CAMPOS",
        date: "2024",
        description: "Adequação de linha de vida existente.\nTeste de arrancamento.",
        image: "https://static.wixstatic.com/media/f064ac_d70cd3c179e24f878f14163fe91b2e12~mv2.jpg",
        gallery: [
            "https://static.wixstatic.com/media/f064ac_d70cd3c179e24f878f14163fe91b2e12~mv2.jpg",
            "https://static.wixstatic.com/media/f064ac_6f1c181510c0436085ad264ff626ea0a~mv2.jpg",
            "https://static.wixstatic.com/media/f064ac_f6ede795063a4e04a07576976bfe7e17~mv2.png",
            "https://static.wixstatic.com/media/f064ac_a01d418c2bbd426b8e38d18618f081a8~mv2.png",
            "https://static.wixstatic.com/media/f064ac_609efbef9daa44698d9600e4682d7e52~mv2.png",
            "https://static.wixstatic.com/media/f064ac_344aa10452c04cb1aade4b3ad4632216~mv2.png"
        ]
    },
    "embalagens": {
        title: "PROJETOS E LAUDOS PARA EMBALAGENS",
        date: "2024",
        description: "Desenvolvimento de projetos e laudos técnicos especializados para embalagens industriais.",
        image: "https://static.wixstatic.com/media/f064ac_f13d4ea5b8ae42cea45552ac602abca9~mv2.png",
        gallery: [
            "https://static.wixstatic.com/media/f064ac_f13d4ea5b8ae42cea45552ac602abca9~mv2.png",
            "https://static.wixstatic.com/media/f064ac_f3ed46bdea374576a9dc4cf0b8447b6f~mv2.jpg",
            "https://static.wixstatic.com/media/f064ac_71f0d06647724fe9b2bcf1ed82565fa8~mv2.png",
            "https://static.wixstatic.com/media/f064ac_e3159ba64c2441a09fe064e9463b0109~mv2.png",
            "https://static.wixstatic.com/media/f064ac_29ecf5ba110e49d38ff3b064b7dd697e~mv2.png",
            "https://static.wixstatic.com/media/f064ac_c750943b90414378b806b1729dad044b~mv2.png"
        ]
    }
};

// Abrir modal
document.querySelectorAll('.project-card').forEach(card => {
    card.querySelector('.saiba-mais').addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = card.dataset.project;
        const project = projectsData[projectId];
        
        if (!project) {
            console.error(`Projeto não encontrado: ${projectId}`);
            return;
        }
        
        const modal = document.querySelector('.project-modal');
        modal.querySelector('h2').textContent = project.title;
        modal.querySelector('.modal-date').textContent = project.date;
        modal.querySelector('.modal-description').textContent = project.description;
        
        // Adicionar galeria se o projeto tiver imagens
        const modalInfo = modal.querySelector('.modal-info');
        modalInfo.innerHTML = ''; // Limpa o conteúdo anterior
        
        modalInfo.innerHTML = `
            <h2>${project.title}</h2>
            <span class="modal-date">${project.date}</span>
            <p class="modal-description">${project.description}</p>
        `;
        
        if (project.gallery && project.gallery.length > 0) {
            const gallery = createGallery(project.gallery);
            modalInfo.appendChild(gallery);
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.project-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Adicione estas funções para controlar a galeria
function createGallery(images) {
    const gallery = document.createElement('div');
    gallery.className = 'modal-gallery';
    
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Imagem ${index + 1} do projeto`;
        
        item.appendChild(img);
        item.addEventListener('click', () => openFullscreen(index, images));
        gallery.appendChild(item);
    });
    
    return gallery;
}

function createFullscreenGallery() {
    const fullscreen = document.createElement('div');
    fullscreen.className = 'fullscreen-gallery';
    fullscreen.innerHTML = `
        <button class="gallery-nav gallery-prev">&lt;</button>
        <img class="fullscreen-image" src="" alt="Imagem em tela cheia">
        <button class="gallery-nav gallery-next">&gt;</button>
        <button class="gallery-close">&times;</button>
    `;
    document.body.appendChild(fullscreen);
    
    return fullscreen;
}

let currentImageIndex = 0;
let galleryImages = [];
const fullscreenGallery = createFullscreenGallery();
const fullscreenImage = fullscreenGallery.querySelector('.fullscreen-image');

function openFullscreen(index, images) {
    currentImageIndex = index;
    galleryImages = images;
    fullscreenImage.src = images[index];
    fullscreenGallery.classList.add('active');
}

function closeFullscreen() {
    fullscreenGallery.classList.remove('active');
}

function navigateGallery(direction) {
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    fullscreenImage.src = galleryImages[currentImageIndex];
}

// Adicione os event listeners para a navegação da galeria
document.querySelector('.gallery-prev').addEventListener('click', () => navigateGallery(-1));
document.querySelector('.gallery-next').addEventListener('click', () => navigateGallery(1));
document.querySelector('.gallery-close').addEventListener('click', closeFullscreen);

// Modifique a função openProjectModal para incluir a galeria
function openProjectModal(project) {
    const modal = document.querySelector('.project-modal');
    const modalInfo = modal.querySelector('.modal-info');
    
    modalInfo.innerHTML = `
        <button class="close-modal">&times;</button>
        <h2>${project.title}</h2>
        <span class="modal-date">${project.date}</span>
        <p class="modal-description">${project.description}</p>
    `;
    
    // Adicione a galeria se o projeto tiver imagens
    if (project.gallery && project.gallery.length > 0) {
        const gallery = createGallery(project.gallery);
        modalInfo.appendChild(gallery);
    }
    
    modal.classList.add('active');
}

// Atualize o objeto do projeto para incluir as imagens
const residenciasAltoPadrao = {
    title: "PROJETO, EXECUÇÃO E GESTÃO DE RESIDÊNCIAS DE ALTO PADRÃO",
    date: "2023",
    description: "Especialização em projetos residenciais de alto padrão, com foco em execução e gestão completa do processo construtivo.",
    images: [
        "https://static.wixstatic.com/media/f064ac_44d3c7bd67f448c89964cdd8e3200cc8~mv2.jpeg",
        "https://static.wixstatic.com/media/f064ac_947259f333a746788ee7e08e4722a32a~mv2.jpeg",
        "https://static.wixstatic.com/media/f064ac_852671dd012c4d0bbe0546bd1cd3a938~mv2.jpeg",
        "https://static.wixstatic.com/media/f064ac_c0cbfbb2ebf94ce48b3a82370fe9ed7d~mv2.jpeg"
    ]
}; 

function openGallery(images) {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'gallery-container';
    
    const mainImage = document.createElement('img');
    mainImage.src = images[0];
    mainImage.className = 'gallery-image';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'gallery-nav gallery-prev';
    prevButton.innerHTML = '&#10094;';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'gallery-nav gallery-next';
    nextButton.innerHTML = '&#10095;';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'gallery-close';
    closeButton.innerHTML = '&times;';
    
    let currentIndex = 0;
    
    prevButton.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentIndex];
    };
    
    nextButton.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        mainImage.src = images[currentIndex];
    };
    
    closeButton.onclick = () => {
        document.body.removeChild(modal);
    };
    
    imageContainer.appendChild(mainImage);
    modal.appendChild(imageContainer);
    modal.appendChild(prevButton);
    modal.appendChild(nextButton);
    modal.appendChild(closeButton);
    
    document.body.appendChild(modal);
} 