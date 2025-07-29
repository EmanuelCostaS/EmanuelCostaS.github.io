import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Emanuel Silva',
    'hero.subtitle': 'Computer Engineering Student | AI & Computer Vision Researcher',
    'hero.description': 'Fourth-year Computer Engineering student at a federal university with a strong research background in Computer Vision and Deep Learning. Proven experience developing models in PyTorch and integrating systems with ROS.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    //'hero.cv': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.education': 'Bachelor\'s Degree in Computer Engineering from the Federal University of Rio Grande (FURG).',
    'about.educationTitle': 'Education',
    'about.skills': 'Technical Skills',
    'about.languages': 'Languages',
    'about.portuguese': 'Portuguese (Native)',
    'about.english': 'English (C2 Proficient)',
    'about.quote': 'Passionate about pushing the boundaries of AI and computer vision to solve real-world challenges in autonomous systems and robotics.',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.spellforger.title': 'SpellForger',
    'projects.spellforger.tagline': 'Founder & Lead Developer of an Indie Magic FPS Game',
    'projects.spellforger.description': 'Working with a small team to develop SpellForger, a first person shooting game where players use text prompts to generate custom spells in real-time using a BERT-based model. Responsible for core gameplay mechanics, team supervision, and system architecture.',
    'projects.spellforger.button': 'Visit Website',
    'projects.underwater.title': 'Underwater Image Enhancement & Object Detection',
    'projects.underwater.tagline': 'First Author on Novel Deep Learning Models for Marine Robotics',
    'projects.underwater.description': 'Developed AquaFeat, a novel features-based image enhancement model in PyTorch to significantly improve underwater object detection and other visual tasks. This research is central to enabling autonomous navigation for UAVs in challenging, GNSS-degraded environments.',
    'projects.underwater.button': 'View Publications',
    
    // Publications Section
    'publications.title': 'Research & Publications',
    'publications.status.accepted': 'Accepted',
    'publications.status.underReview': 'Under Review',
    'publications.status.submitted': 'Submitted',
    'publications.status.inPreparation': 'In Preparation',
    'publications.status.draft': 'Draft',
    'publications.aquafeat.title': 'AquaFeat: A Features-Based Image Enhancement Model for Underwater Object Detection',
    'publications.aquafeat.subtitle': 'Novel deep learning model for underwater vision enhancement',
    'publications.aquafeat.venue': 'Proceedings of the XXXVIII Conference on Graphics, Patterns and Images (SIBGRAPI)',
    'publications.aquafeat.description': 'Novel deep learning model that significantly improves underwater object detection accuracy.',
    'publications.aquafeat2.title': 'Improving Various Underwater Vision Video Tasks Using the AquaFeat Enhancement Model',
    'publications.aquafeat2.subtitle': 'Real-time application of AquaFeat for multiple underwater vision tasks',
    'publications.aquafeat2.venue': 'The 22nd International Conference on Advanced Robotics (ICAR)',
    'publications.aquafeat2.description': 'Application of the AquaFeat model in real-time for various tasks, such as object detection, classification and tracking.',
    'publications.spellforger.title': 'SpellForger: Prompting Custom Spell Properties In-Game using BERT supervised-trained model',
    'publications.spellforger.subtitle': 'BERT-based spell generation system for interactive gameplay',
    'publications.spellforger.venue': 'Proceedings of SBGames Magica Workshop 2025',
    'publications.spellforger.description': 'Applying prompts to create spells for our game on the Unity Environment.',
    //'publications.enhancement.title': 'Deep Learning Approaches for Underwater Image Enhancement',
    //'publications.enhancement.venue': 'Computer Vision and Image Understanding 2024',
    //'publications.enhancement.description': 'Comprehensive study of enhancement techniques for underwater computer vision.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.email': 'emanuel_silva2004@hotmail.com',
    'contact.collaborate': 'Let\'s Collaborate',
    'contact.description': 'I\'m passionate about solving problems with AI and always open to new connections. Whether you want to chat about Computer Vision, have a project in mind, or know of a potential internship, please feel free to get in touch.',
    'contact.research': 'Research focused on advancing computer vision and AI applications in autonomous systems and marine robotics.',
    
    // Footer
    'footer.copyright': '© 2025 Emanuel Silva',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.publications': 'Publicações',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Emanuel Silva',
    'hero.subtitle': 'Estudante de Engenharia de Computação | Pesquisador em IA & Visão Computacional',
    'hero.description': 'Estudante do quarto ano de Engenharia de Computação em uma universidade federal com sólida experiência em pesquisa em Visão Computacional e Deep Learning. Experiência comprovada desenvolvendo modelos em PyTorch e integrando sistemas com ROS.',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    //'hero.cv': 'Baixar CV',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.education': 'Graduação em Engenharia de Computação pela Universidade Federal do Rio Grande (FURG).',
    'about.educationTitle': 'Formação',
    'about.skills': 'Habilidades Técnicas',
    'about.languages': 'Idiomas',
    'about.portuguese': 'Português (Nativo)',
    'about.english': 'Inglês (C2 Proficiente)',
    'about.quote': 'Focado em expandir os limites da IA e visão computacional para resolver desafios do mundo real em sistemas autônomos e robótica.',
    
    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.spellforger.title': 'SpellForger',
    'projects.spellforger.tagline': 'Fundador & Desenvolvedor Principal de um Jogo FPS Mágico Indie',
    'projects.spellforger.description': 'Liderando uma pequena equipe para desenvolver SpellForger, um jogo onde jogadores usam prompts de texto para gerar feitiços personalizados em tempo real usando um modelo baseado em BERT. Responsável pela mecânica central do jogo, supervisão da equipe e arquitetura do sistema.',
    'projects.spellforger.button': 'Visitar Website',
    'projects.underwater.title': 'Melhoria de Imagem Subaquática & Detecção de Objetos',
    'projects.underwater.tagline': 'Primeiro Autor em Modelos Novos de Deep Learning para Robótica Marinha',
    'projects.underwater.description': 'Desenvolvi AquaFeat, um modelo novel de melhoria de imagem baseado em features em PyTorch para melhorar significativamente a detecção de objetos subaquáticos. Esta pesquisa é central para permitir navegação autônoma de UAVs em ambientes desafiadores e degradados por GNSS.',
    'projects.underwater.button': 'Ver Publicações',
    
    // Publications Section
    'publications.title': 'Pesquisa & Publicações',
    'publications.status.accepted': 'Aceito',
    'publications.status.underReview': 'Em Revisão',
    'publications.status.submitted': 'Submetido',
    'publications.status.inPreparation': 'Em Preparação',
    'publications.status.draft': 'Rascunho',
    'publications.aquafeat.title': 'AquaFeat: A Features-Based Image Enhancement Model for Underwater Object Detection',
    'publications.aquafeat.subtitle': 'Modelo novel de deep learning para melhoria de visão subaquática',
    'publications.aquafeat.venue': 'Proceedings of the XXXVIII Conference on Graphics, Patterns and Images (SIBGRAPI)',
    'publications.aquafeat.description': 'Modelo novel de deep learning que melhora significativamente a precisão da detecção de objetos subaquáticos.',
    'publications.aquafeat2.title': 'Improving Various Underwater Vision Video Tasks Using the AquaFeat Enhancement Model',
    'publications.aquafeat2.subtitle': 'Aplicação em tempo real do AquaFeat para múltiplas tarefas de visão subaquática',
    'publications.aquafeat2.venue': 'The 22nd International Conference on Advanced Robotics (ICAR)',
    'publications.aquafeat2.description': 'Aplicação do modelo AquaFeat em tempo real para várias tarefas, como detecção, classificação e rastreamento de objetos.',
    'publications.spellforger.title': 'SpellForger: Prompting Custom Spell Properties In-Game using BERT supervised-trained model',
    'publications.spellforger.subtitle': 'Sistema de geração de feitiços baseado em BERT para gameplay interativo',
    'publications.spellforger.venue': 'Proceedings of SBGames Magica Workshop 2025',
    'publications.spellforger.description': 'Aplicando prompts para criar feitiços para nosso jogo no Ambiente Unity.',
    
    // Contact Section
    'contact.title': 'Entre em Contato',
    'contact.email': 'emanuel_silva2004@hotmail.com',
    'contact.collaborate': 'Vamos Colaborar',
    'contact.description': 'Tenho grande interesse em resolver problemas com IA e estou sempre aberto a novas conexões. Se você quer conversar sobre Visão Computacional, tem um projeto em mente ou conhece uma possível oportunidade de estágio, fique à vontade para entrar em contato.',
    'contact.research': 'Pesquisa focada em avançar visão computacional e aplicações de IA em sistemas autônomos e robótica marinha.',
    
    // Footer
    'footer.copyright': '© 2025 Emanuel Silva',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};