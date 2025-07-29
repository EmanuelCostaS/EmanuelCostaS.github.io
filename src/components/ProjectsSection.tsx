import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import spellforgerImage from '@/assets/spellforger-preview.jpg';
import underwaterImage from '@/assets/dp.jpg';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const scrollToPublications = () => {
    const element = document.getElementById('publications');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('projects.title')}</h2>
        
        {/* Underwater Research Project */}
        <div className="rounded-2xl overflow-hidden bg-gradient-blue shadow-elegant mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <img
                src={underwaterImage}
                alt="Underwater Computer Vision Research"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-project-blue/20 to-transparent" />
            </div>
            <div className="p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-project-blue-foreground">
                {t('projects.underwater.title')}
              </h3>
              <p className="text-xl mb-6 text-project-blue-foreground/80 font-medium">
                {t('projects.underwater.tagline')}
              </p>
              <p className="text-lg mb-8 text-project-blue-foreground/90 leading-relaxed">
                {t('projects.underwater.description')}
              </p>
              <Button
                size="lg"
                className="self-start bg-project-blue-foreground text-project-blue hover:bg-project-blue-foreground/90 group"
                onClick={scrollToPublications}
              >
                {t('projects.underwater.button')}
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* SpellForger Project */}
        <div className="mb-20 rounded-2xl overflow-hidden bg-gradient-purple shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-project-purple-foreground">
                {t('projects.spellforger.title')}
              </h3>
              <p className="text-xl mb-6 text-project-purple-foreground/80 font-medium">
                {t('projects.spellforger.tagline')}
              </p>
              <p className="text-lg mb-8 text-project-purple-foreground/90 leading-relaxed">
                {t('projects.spellforger.description')}
              </p>
              <Button
                size="lg"
                className="self-start bg-project-purple-foreground text-project-purple hover:bg-project-purple-foreground/90 group"
                onClick={() => window.open('https://spellforger-3880c.web.app/', '_blank')}
              >
                {t('projects.spellforger.button')}
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={spellforgerImage}
                alt="SpellForger Game Interface"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-project-purple/20 to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;