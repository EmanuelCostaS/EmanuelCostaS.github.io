import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBackground from '@/assets/herobg.jpg';
import emanuelPhoto from '@/assets/photo2.jpeg';

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col items-center mb-8">
          <img 
            src={emanuelPhoto} 
            alt="Emanuel Silva" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 border-4 border-primary/30 shadow-elegant"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          {t('hero.subtitle')}
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        
        <div className="flex justify-center space-x-6">
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open('https://github.com/EmanuelCostaS', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {t('hero.github')}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open('https://www.linkedin.com/in/emanuel-da-costa/', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            {t('hero.linkedin')}
          </Button>
          
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;