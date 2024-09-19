'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBox() {
  const [focus, setFocus] = useState(false);

  return (
    <form
      className={cn(
        'flex items-center gap-1.5  group p-2 rounded-md max-w-fit transition-shadow',
        focus ? 'shadow-lg' : 'shadow-md'
      )}
    >
      <Search className='text-neutral-400' size={20} />
      <input
        placeholder='Search'
        className='outline-none bg-transparent w-40 placeholder:text-neutral-400'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </form>
  );
}
