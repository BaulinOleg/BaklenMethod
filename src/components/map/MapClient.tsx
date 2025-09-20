'use client';

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Загрузка карты...</p>,
});

export default Map;
