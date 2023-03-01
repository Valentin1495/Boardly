/**@jsxImportSource @emotion/react */
'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Search() {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div
      css={{
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        padding: '12px 0',
      }}
    >
      <form
        className={`space-x-2 border ${
          focused ? 'bg-white border-twitter' : 'bg-gray-200 border-gray-200'
        }`}
        css={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 9999,
          padding: 12,
        }}
      >
        <MagnifyingGlassIcon
          css={{ width: 25, height: 25 }}
          className={`${focused && 'text-twitter'}`}
        />
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Search Twitter'
          type='text'
          css={{ backgroundColor: 'transparent', outline: 'none' }}
        />
      </form>
    </div>
  );
}
