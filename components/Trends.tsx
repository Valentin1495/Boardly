/**@jsxImportSource @emotion/react */
'use client';

import Trend from './Trend';

export interface TrendProp {
  name: string;
  query: string;
  tweet_volume: number;
}

export default function Trends({ trends }: { trends: TrendProp[] }) {
  return (
    <div
      css={{ width: '100%', borderRadius: 10, overflow: 'hidden' }}
      className='bg-gray-100'
    >
      <h1 className='text-xl' css={{ fontWeight: 'bold', padding: 12 }}>
        Trending in US
      </h1>
      {trends.map((trend, idx) => (
        <Trend key={idx} {...trend} />
      ))}
    </div>
  );
}
