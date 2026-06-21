import { useCallback } from 'react';

/* ── Web Audio API fallback ── */
let _ctx: AudioContext | null = null;
function getCtx(): AudioContext {
  if (!_ctx) _ctx = new AudioContext();
  return _ctx;
}

function beep(freq: number, duration: number, type: OscillatorType = 'square', volume = 0.15) {
  try {
    const ctx = getCtx();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + duration);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch { /* AudioContext blocked */ }
}

/* ── File-based SFX (with Web Audio fallback) ── */
function tryPlayFile(src: string, fallback: () => void) {
  const audio = new Audio(src);
  audio.volume = 0.55;
  audio.play().catch(fallback);
}

export function useSound() {
  const click = useCallback(() => {
    tryPlayFile('/sounds/sfx/click.mp3', () => beep(900, 0.08, 'square', 0.13));
  }, []);

  const hover = useCallback(() => {
    beep(1200, 0.035, 'sine', 0.05);
  }, []);

  const success = useCallback(() => {
    beep(600, 0.06, 'sine', 0.1);
    setTimeout(() => beep(900, 0.1, 'sine', 0.08), 70);
  }, []);

  return { click, hover, success };
}
