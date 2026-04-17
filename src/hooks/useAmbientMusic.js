import { useEffect, useState } from 'react';

export function useAmbientMusic() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (window.__portfolioAudioCleanup) {
        window.__portfolioAudioCleanup();
        window.__portfolioAudioCleanup = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    const audioState = window.__portfolioAudioState || {
      actx: null,
      masterGain: null,
      oscillators: [],
      playing: false,
    };

    if (!audioState.playing) {
      const actx = new (window.AudioContext || window.webkitAudioContext)();
      const masterGain = actx.createGain();
      masterGain.gain.setValueAtTime(0, actx.currentTime);
      masterGain.gain.linearRampToValueAtTime(.06, actx.currentTime + 2.5);
      masterGain.connect(actx.destination);

      const oscillators = [];
      [220, 261.63, 293.66, 349.23, 392, 440, 523.25].forEach((f, i) => {
        const o = actx.createOscillator();
        const g = actx.createGain();
        o.type = 'sine';
        o.frequency.value = f;
        g.gain.value = .12 / 7;

        const lfo = actx.createOscillator();
        const lg = actx.createGain();
        lfo.frequency.value = .2 + i * .05;
        lg.gain.value = 1.5;
        lfo.connect(lg);
        lg.connect(o.frequency);
        lfo.start();

        o.connect(g);
        g.connect(masterGain);
        o.start();
        oscillators.push(o, lfo);
      });

      window.__portfolioAudioState = { actx, masterGain, oscillators, playing: true };
      window.__portfolioAudioCleanup = () => {
        try {
          masterGain.gain.cancelScheduledValues(actx.currentTime);
          masterGain.gain.setValueAtTime(masterGain.gain.value, actx.currentTime);
          masterGain.gain.linearRampToValueAtTime(0, actx.currentTime + .2);
          window.setTimeout(() => {
            oscillators.forEach((osc) => {
              try { osc.stop(); } catch {}
            });
            try { actx.close(); } catch {}
          }, 250);
        } catch {}
      };
      setPlaying(true);
    } else {
      audioState.masterGain.gain.linearRampToValueAtTime(0, audioState.actx.currentTime + 1.2);
      window.setTimeout(() => {
        audioState.oscillators.forEach((osc) => {
          try { osc.stop(); } catch {}
        });
        try { audioState.actx.close(); } catch {}
        window.__portfolioAudioState = { actx: null, masterGain: null, oscillators: [], playing: false };
      }, 1300);
      setPlaying(false);
    }
  };

  return { playing, toggleMusic };
}
