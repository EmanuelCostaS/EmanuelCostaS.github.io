import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const skills = [
    'Python', 'PyTorch', 'Computer Vision', 'ROS', 'C#', 'Unity', 'Git'
  ];
  
  const languages = [
    t('about.portuguese'), t('about.english')
  ];

  return (
    <section id="about" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('about.title')}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{t('about.educationTitle')}</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t('about.education')}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{t('about.skills')}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm py-2 px-4 bg-secondary/80 hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">{t('about.languages')}</h3>
                <div className="space-y-3">
                  {languages.map((language) => (
                    <div 
                      key={language}
                      className="p-4 bg-card rounded-lg border border-border"
                    >
                      <span className="text-lg font-medium">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-lg border border-border">
                <p className="text-lg text-foreground/90 leading-relaxed italic">
                  "{t('about.quote')}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;