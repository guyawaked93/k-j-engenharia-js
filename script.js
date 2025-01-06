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
            "Precisão e Versatilidade: Projetos sob medida garantem estruturas precisas e com infinitas possibilidades arquitetônicas, atendendo às suas necessidades e estilo desejado.",
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

// Fechar Modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('serviceModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura rolagem do body
});

// Fechar Modal ao clicar fora
window.addEventListener('click', (e) => {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}); 