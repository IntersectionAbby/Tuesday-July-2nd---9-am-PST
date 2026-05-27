import { useEffect } from 'react';

const HUBSPOT_EMBED_SCRIPT =
  'https://js-na2.hsforms.net/forms/embed/50180818.js';

let scriptPromise: Promise<void> | null = null;

function loadHubSpotFormScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_EMBED_SCRIPT}"]`,
    );
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('HubSpot form script failed to load')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.src = HUBSPOT_EMBED_SCRIPT;
    script.defer = true;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error('HubSpot form script failed to load'));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export function useHubSpotFormScript() {
  useEffect(() => {
    loadHubSpotFormScript().catch(() => {
      // HubSpot embed is optional for local preview; hero copy still works.
    });
  }, []);
}
