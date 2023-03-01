/**@jsxImportSource @emotion/react */
'use client';

import { TrendProp } from './Trends';

export default function Trend({ name, query, tweet_volume }: TrendProp) {
  return (
    <div
      css={{
        padding: 12,
        cursor: 'pointer',
        transition: 'background-color 300ms',
        display: 'flex',
        flexDirection: 'column',
      }}
      className='hover:bg-gray-200 space-y-0.5'
    >
      <span css={{ marginRight: 5 }}>{name}</span>
      <span className='text-gray-400 text-sm'>{tweet_volume} tweets</span>
    </div>
  );
}
