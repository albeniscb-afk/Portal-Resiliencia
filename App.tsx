
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import EmergencyButton from './components/EmergencyButton';
import ChatAssistant from './components/ChatAssistant';
import { Section, Resource } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);

  // Quick exit with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        window.location.replace('https://www.google.com');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                Você não está sozinha
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Espaço seguro de <span className="text-indigo-600">apoio e acolhimento</span>
              </h1>
              <p className="mt-6 text-xl text-slate-500 leading-relaxed">
                Oferecemos as ferramentas e informações necessárias para identificar situações de abuso, 
                garantir sua segurança e conhecer seus direitos fundamentais.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => setCurrentSection(Section.GET_HELP)}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all shadow-lg hover:shadow-indigo-200"
                >
                  Obter Ajuda Agora
                </button>
                <button 
                  onClick={() => setCurrentSection(Section.IDENTIFY)}
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
                >
                  Identificar Abuso
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Apoio e Solidariedade" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl lg:grid lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-6 tracking-tight sm:text-4xl">
                Por que o Portal Resiliência é <span className="text-indigo-400">essencial?</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                A violência doméstica prospera no silêncio. Criamos este portal para ser a sua voz e o seu guia. 
                Assista ao vídeo para entender como nossa plataforma conecta você a recursos vitais de forma segura, 
                privada e imediata.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">1</div>
                  <p className="text-slate-300 text-sm">Entenda os sinais precoces de comportamentos abusivos.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">2</div>
                  <p className="text-slate-300 text-sm">Acesso rápido a canais de denúncia e medidas protetivas.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold">3</div>
                  <p className="text-slate-300 text-sm">Privacidade absoluta para navegação segura.</p>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video bg-slate-800 lg:h-full">
              <iframe 
                className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                src="https://www.youtube.com/embed/YpXj-rT29iY?si=G_5v3VvX7T29iY" 
                title="A importância de denunciar a violência contra a mulher"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-r-[2.5rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Info Grid */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Privacidade Total</h3>
              <p className="mt-2 text-slate-500 text-sm">Este site não rastreia seus dados e possui um botão de saída rápida para sua segurança.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Recursos Legais</h3>
              <p className="mt-2 text-slate-500 text-sm">Entenda a Lei Maria da Penha e como solicitar medidas protetivas de urgência.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Apoio Psicológico</h3>
              <p className="mt-2 text-slate-500 text-sm">Encontre centros de acolhimento e profissionais especializados em trauma e violência.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderIdentify = () => (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Como Identificar a Violência Doméstica</h2>
      <div className="space-y-12">
        <div className="prose prose-indigo max-w-none text-slate-600 leading-relaxed">
          <p className="text-lg">A violência doméstica muitas vezes começa de forma sutil e pode ser difícil de reconhecer inicialmente. Ela não se limita a agressões físicas; envolve controle, manipulação e humilhação.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Violência Física', desc: 'Qualquer ação que ofenda a integridade ou saúde corporal, como empurrões, socos ou uso de armas.', icon: '⚡' },
            { title: 'Violência Psicológica', desc: 'Danos emocionais, diminuição da autoestima, controle de comportamentos, isolamento, humilhação e perseguição.', icon: '🧠' },
            { title: 'Violência Sexual', desc: 'Constranger a presenciar, a manter ou a participar de relação sexual não desejada mediante coerção ou força.', icon: '⚠️' },
            { title: 'Violência Patrimonial', desc: 'Retenção, subtração ou destruição parcial ou total de seus objetos, instrumentos de trabalho ou bens.', icon: '💰' },
            { title: 'Violência Moral', desc: 'Condutas que configurem calúnia, difamação ou injúria perante terceiros ou para a própria vítima.', icon: '🗣️' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-900 text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">O Ciclo da Violência</h3>
            <p className="mb-6 opacity-90">A violência doméstica geralmente segue um padrão repetitivo composto por três fases:</p>
            <ol className="list-decimal list-inside space-y-4 opacity-90">
              <li><strong>Aumento da Tensão:</strong> Irritabilidade, insultos e ameaças.</li>
              <li><strong>Ataque/Explosão:</strong> Ocorrência do ato violento propriamente dito.</li>
              <li><strong>Lua de Mel:</strong> Pedidos de perdão, promessas de mudança e demonstrações de carinho.</li>
            </ol>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );

  const renderGetHelp = () => {
    const resources: Resource[] = [
      { id: '1', title: 'Ligue 180', description: 'Central de Atendimento à Mulher. Canal gratuito e confidencial que presta informações e recebe denúncias.', phone: '180', link: 'tel:180', category: 'Emergência' },
      { id: '2', title: 'Polícia Militar', description: 'Para situações de emergência e perigo imediato. Atendimento 24 horas.', phone: '190', link: 'tel:190', category: 'Emergência' },
      { id: '3', title: 'Defensoria Pública', description: 'Assistência jurídica gratuita para mulheres que não possuem condições financeiras.', link: 'https://www.defensoria.sp.def.br/', category: 'Apoio Jurídico' },
      { id: '4', title: 'Casa da Mulher Brasileira', description: 'Centro de atendimento humanizado com diversos serviços integrados em um só local.', link: 'https://www.gov.br/mulheres/pt-br', category: 'Abrigo' },
      { id: '5', title: 'CVV - Valorização da Vida', description: 'Apoio emocional e prevenção do suicídio, atendendo voluntariamente e gratuitamente.', phone: '188', link: 'https://www.cvv.org.br/', category: 'Saúde Mental' },
    ];

    return (
      <div className="max-w-6xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Recursos e Apoio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Encontre os principais canais de denúncia, suporte emocional e assistência jurídica próximos a você.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full shadow-sm hover:border-indigo-200 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  res.category === 'Emergência' ? 'bg-red-100 text-red-600' : 
                  res.category === 'Apoio Jurídico' ? 'bg-blue-100 text-blue-600' :
                  res.category === 'Abrigo' ? 'bg-green-100 text-green-600' : 'bg-purple-100 text-purple-600'
                }`}>
                  {res.category}
                </span>
                {res.phone && (
                  <span className="text-slate-400 font-mono text-sm">{res.phone}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{res.title}</h3>
              <p className="text-slate-500 text-sm mb-6 flex-1">{res.description}</p>
              <a 
                href={res.link}
                target={res.link.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-slate-50 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold rounded-xl transition-all border border-slate-200 hover:border-indigo-600"
              >
                Acessar Canal
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Delegacias Especializadas (DEAM)</h3>
            <p className="text-slate-600 mb-6">As Delegacias de Atendimento à Mulher possuem equipes treinadas para acolhimento especializado.</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg">
              Encontrar Delegacia Próxima
            </button>
        </div>
      </div>
    );
  };

  const renderRights = () => (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Seus Direitos Legais</h2>
      <div className="space-y-8">
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Lei Maria da Penha (Lei 11.340/06)</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            A Lei Maria da Penha é o principal instrumento legal para coibir e prevenir a violência doméstica e familiar contra a mulher no Brasil.
          </p>
          <ul className="space-y-4 text-slate-600">
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Cria mecanismos para coibir e prevenir a violência.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Estabelece medidas protetivas de urgência.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>Prevê a criação de juizados especializados e delegacias.</span>
            </li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Medidas Protetivas</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              São ordens judiciais para garantir a segurança da vítima, como:
            </p>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• Afastamento do agressor do lar.</li>
              <li>• Proibição de aproximação e contato.</li>
              <li>• Restrição ou suspensão de visitas a dependentes.</li>
              <li>• Prestação de alimentos (pensão).</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Assistência Prioritária</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              A mulher em situação de violência tem direito a:
            </p>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• Prioridade em programas de habitação.</li>
              <li>• Manutenção do vínculo trabalhista por até 6 meses.</li>
              <li>• Atendimento multidisciplinar especializado.</li>
              <li>• Matrícula de dependentes em escola próxima.</li>
            </ul>
          </div>
        </section>

        <div className="bg-slate-900 text-white p-8 rounded-3xl text-center">
          <p className="text-lg mb-4 italic">"O silêncio é a alma da violência, a voz é o primeiro passo para a liberdade."</p>
          <p className="text-indigo-400 font-bold">Denuncie. Você não está sozinha.</p>
        </div>
      </div>
    </div>
  );

  const renderFAQ = () => {
    const faqs = [
      {
        question: "O que é considerado violência doméstica?",
        answer: "É qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial, no âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto."
      },
      {
        question: "Como posso denunciar anonimamente?",
        answer: "O Ligue 180 é o canal nacional para denúncias anônimas. Além disso, o Disque 100 também recebe denúncias de violações de direitos humanos. Você não precisa se identificar para que a denúncia seja investigada."
      },
      {
        question: "O que é o botão de 'Sair Rápido'?",
        answer: "É um recurso de segurança que redireciona instantaneamente o navegador para um site neutro (como o Google ou previsão do tempo). Use-o se alguém inesperado se aproximar enquanto você navega no portal."
      },
      {
        question: "A Lei Maria da Penha se aplica a quem?",
        answer: "A lei protege todas as pessoas que se identificam com o gênero feminino (mulheres cis, trans e travestis) que sofram violência em ambiente doméstico, familiar ou em relações afetivas."
      },
      {
        question: "Como o assistente virtual pode me ajudar?",
        answer: "Nossa IA foi treinada para oferecer acolhimento, explicar como identificar sinais de abuso e orientar sobre os próximos passos seguros, como onde encontrar delegacias ou centros de apoio."
      },
      {
        question: "O que fazer se eu estiver em perigo imediato?",
        answer: "Se você estiver sofrendo uma agressão ou em risco de vida agora, ligue imediatamente para o 190 (Polícia Militar). Não espere."
      }
    ];

    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-600">Esclareça suas dúvidas sobre direitos, segurança e o uso desta plataforma.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none focus:outline-none">
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100 text-center">
          <h3 className="font-bold text-indigo-900 mb-2">Ainda tem dúvidas?</h3>
          <p className="text-indigo-700 text-sm mb-6">Nossa assistente virtual está disponível 24h para conversar e tirar dúvidas específicas.</p>
          <button 
            onClick={() => {
              const chatBtn = document.querySelector('button[onClick*="setIsOpen(true)"]') as HTMLButtonElement;
              if (chatBtn) chatBtn.click();
            }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Falar com a Assistente
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Header currentSection={currentSection} setSection={setCurrentSection} />
      
      <main className="flex-grow">
        {currentSection === Section.HOME && renderHome()}
        {currentSection === Section.IDENTIFY && renderIdentify()}
        {currentSection === Section.GET_HELP && renderGetHelp()}
        {currentSection === Section.RIGHTS && renderRights()}
        {currentSection === Section.FAQ && renderFAQ()}
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">Portal Resiliência</span>
          </div>
          <p className="text-slate-400 text-sm max-w-lg mx-auto mb-8">
            Um projeto informativo para ajudar no combate à violência doméstica. 
            Informações são ferramentas de liberdade.
          </p>
          <div className="flex justify-center flex-wrap gap-6 mb-8 text-slate-400 text-sm font-medium">
             <button onClick={() => setCurrentSection(Section.HOME)} className="hover:text-white transition-colors">Início</button>
             <button onClick={() => setCurrentSection(Section.IDENTIFY)} className="hover:text-white transition-colors">Identificar</button>
             <button onClick={() => setCurrentSection(Section.GET_HELP)} className="hover:text-white transition-colors">Ajuda</button>
             <button onClick={() => setCurrentSection(Section.RIGHTS)} className="hover:text-white transition-colors">Direitos</button>
             <button onClick={() => setCurrentSection(Section.FAQ)} className="hover:text-white transition-colors">FAQ</button>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} Portal Resiliência. Todos os direitos reservados. 
              Este site é focado em segurança; use o botão de saída rápida se necessário.
            </p>
          </div>
        </div>
      </footer>

      <EmergencyButton />
      <ChatAssistant />
    </div>
  );
};

export default App;
