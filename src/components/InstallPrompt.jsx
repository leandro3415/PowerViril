import { useState, useEffect } from 'react';
import './InstallPrompt.css';

const DISMISS_KEY = 'powerViril_installDismissed';
const DISMISS_DAYS = 7; // Mostrar novamente após 7 dias se fechou

function InstallPrompt() {
  const [visible, setVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone
      || document.referrer.includes('android-app://');
    setIsStandalone(standalone);

    if (standalone) return;

    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(ios);

    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (dismissed) {
      const daysDiff = (Date.now() - parseInt(dismissed, 10)) / (1000 * 60 * 60 * 24);
      if (daysDiff < DISMISS_DAYS) return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    const timer = setTimeout(() => {
      setVisible((v) => (v || isMobile));
    }, 2500);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setVisible(false);
    }
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };

  if (!visible) return null;

  return (
    <div className="install-prompt-overlay">
      <div className="install-prompt">
        <button className="install-prompt-close" onClick={handleDismiss} type="button" aria-label="Fechar">
          ×
        </button>
        <div className="install-prompt-icon">📱</div>
        <h3>Adicione ao seu dispositivo</h3>
        <p>Para acesso rápido, adicione o app à sua tela inicial. Não precisa instalar pela loja.</p>

        {isIOS ? (
          <div className="install-prompt-instructions">
            <p><strong>No iPhone/iPad:</strong></p>
            <p>Toque em <strong>Compartilhar</strong> (ícone de seta) → <strong>Adicionar à Tela de Início</strong></p>
          </div>
        ) : deferredPrompt ? (
          <button className="install-prompt-btn" onClick={handleInstall} type="button">
            Adicionar à tela inicial
          </button>
        ) : (
          <button className="install-prompt-btn" onClick={handleDismiss} type="button">
            Entendi
          </button>
        )}

        <button className="install-prompt-skip" onClick={handleDismiss} type="button">
          Agora não
        </button>
      </div>
    </div>
  );
}

export default InstallPrompt;
