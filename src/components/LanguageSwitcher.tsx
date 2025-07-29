import { useLanguage } from '@/contexts/LanguageContext';
import brazilFlag from '@/assets/brazilflag.png';
import usFlag from '@/assets/united-states.png';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-1 px-2 py-1 rounded transition-all duration-200 ${
          language === 'en' 
            ? 'bg-primary/20 text-primary' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <img src={usFlag} alt="English" className="w-4 h-4" />
        <span className="text-sm font-medium">EN</span>
      </button>
      
      <button
        onClick={() => setLanguage('pt')}
        className={`flex items-center space-x-1 px-2 py-1 rounded transition-all duration-200 ${
          language === 'pt' 
            ? 'bg-primary/20 text-primary' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <img src={brazilFlag} alt="Português" className="w-4 h-4" />
        <span className="text-sm font-medium">PT</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;