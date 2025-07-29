import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('contact.title')}</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-semibold mb-4">{t('contact.collaborate')}</h3>
                <p className="text-lg text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {t('contact.description')}
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="mailto:emanuel_silva2004@hotmail.com"
                  className="block p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors"
                >
                  <span className="text-xl font-medium text-foreground">
                    {t('contact.email')}
                  </span>
                </a>
                
                <div className="flex justify-center space-x-6 pt-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() => window.open('https://linkedin.com', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {t('hero.linkedin')}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="group"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    {t('hero.github')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;