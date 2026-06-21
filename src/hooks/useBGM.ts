import { useEffect, useReducer } from 'react';

export const BGM_TRACKS = [
  { src: '/sounds/bgm/bgm-1.mp3', name: 'BGM' },
];

/* ── Module-level singleton (persists across component mounts) ── */
let _audio: HTMLAudioElement | null = null;
let _idx = 0;
let _playing = false;
let _autoStarted = false;
const _subs = new Set<() => void>();

function notify() { _subs.forEach(fn => fn()); }

export const bgmSingleton = {
  toggle() {
    if (!_audio) {
      _audio = new Audio(BGM_TRACKS[_idx].src);
      _audio.loop = true;
      _audio.volume = 0.35;
    }
    if (_playing) {
      _audio.pause();
      _playing = false;
    } else {
      _audio.play().catch(() => {});
      _playing = true;
    }
    notify();
  },

  next() {
    _idx = (_idx + 1) % BGM_TRACKS.length;
    if (_audio) {
      _audio.src = BGM_TRACKS[_idx].src;
      if (_playing) _audio.play().catch(() => {});
    }
    notify();
  },

  get isPlaying() { return _playing; },
  get trackIdx()  { return _idx; },
  get trackName() { return BGM_TRACKS[_idx].name; },

  subscribe(fn: () => void) {
    _subs.add(fn);
    return () => { _subs.delete(fn); };
  },
};

/* ── React hook ── */
export function useBGM() {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

  useEffect(() => bgmSingleton.subscribe(forceUpdate), []);

  useEffect(() => {
    if (_autoStarted) return;
    const start = () => {
      if (!_autoStarted && !_playing) {
        _autoStarted = true;
        bgmSingleton.toggle();
      }
      document.removeEventListener('click', start);
    };
    document.addEventListener('click', start);
    return () => document.removeEventListener('click', start);
  }, []);

  return {
    isPlaying: bgmSingleton.isPlaying,
    trackIdx:  bgmSingleton.trackIdx,
    trackName: bgmSingleton.trackName,
    trackCount: BGM_TRACKS.length,
    toggle: () => bgmSingleton.toggle(),
    next:   () => bgmSingleton.next(),
  };
}
