import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;