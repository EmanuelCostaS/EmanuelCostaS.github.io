import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const PublicationsSection = () => {
  const { t, language } = useLanguage();
  
  const publications = [
    {
      titleEn: 'AquaFeat: A Features-Based Image Enhancement Model for Underwater Object Detection',
      titlePt: 'AquaFeat: Um Modelo de Melhoramento de Imagens Baseado em Features para Detecção de objetos Subaquática',
      conference: t('publications.aquafeat.venue'),
      summary: t('publications.aquafeat.description'),
      status: "under-review",
      doi: null
    },
    {
      titleEn: 'Improving Various Underwater Vision Video Tasks Using the AquaFeat Enhancement Model',
      titlePt: 'Melhorando Várias Tarefas de Visão em Vídeos Subaquáticos Usando o Modelo de Melhoria AquaFeat',
      conference: t('publications.aquafeat2.venue'),
      summary: t('publications.aquafeat2.description'),
      status: "in-preparation",
      doi: null
    },
    {
      titleEn: 'SpellForger: Prompting Custom Spell Properties In-Game using BERT supervised-trained model',
      titlePt: 'SpellForger: Prompting Propriedades de Feitiços Personalizados No Jogo usando modelo BERT supervisionado',
      conference: t('publications.spellforger.venue'),
      summary: t('publications.spellforger.description'),
      status: "accepted",
      doi: null
    },
    //{
    //  title: t('publications.enhancement.title'),
    //  conference: t('publications.enhancement.venue'),
    //  summary: t('publications.enhancement.description'),
    //  status: "accepted"
    //}
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-600/20 text-green-400 border-green-600/30';
      case 'under-review':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
      case 'submitted':
        return 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
      case 'in-preparation':
        return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepted':
        return t('publications.status.accepted');
      case 'under-review':
        return t('publications.status.underReview');
      case 'submitted':
        return t('publications.status.submitted');
      case 'in-preparation':
        return t('publications.status.inPreparation');
      default:
        return t('publications.status.draft');
    }
  };

  return (
    <section id="publications" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('publications.title')}</h2>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-foreground leading-tight">
                      {publication.titleEn}
                    </h3>
                    {language === 'pt' && (
                      <p className="text-sm text-muted-foreground mb-2 italic">
                        {publication.titlePt}
                      </p>
                    )}
                    <p className="text-lg text-primary font-semibold mb-2">
                      {publication.conference}
                    </p>
                    {publication.doi && (
                      <a 
                        href={publication.doi} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 underline"
                      >
                        DOI: {publication.doi.replace('https://doi.org/', '')}
                      </a>
                    )}
                  </div>
                  <Badge className={`${getStatusColor(publication.status)} font-medium`}>
                    {getStatusText(publication.status)}
                  </Badge>
                </div>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  {publication.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            {t('contact.research')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;