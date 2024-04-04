import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Waveform } from 'react-wavesurfer';

const AudioWaveform = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(255, 255, 255, 0.3)',
      progressColor: '#fff',
      cursorColor: '#fff',
      barWidth: 2,
      barHeight: 1,
      normalize: true,
      responsive: true,
      height: 100,
    });

    wavesurfer.current.load(audioUrl);

    return () => wavesurfer.current.destroy();
  }, [audioUrl]);

  return <div ref={waveformRef} />;
};

export default AudioWaveform;
