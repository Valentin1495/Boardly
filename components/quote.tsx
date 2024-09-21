export const revalidate = 3600;

import { quotesArray } from '@/constants';
import { Button } from './ui/button';

export default async function Quote() {
  const randomIdx = Math.floor(Math.random() * quotesArray.length);
  const randomQuote = quotesArray[randomIdx];
  const author = randomQuote.author;

  // const response = await fetch(
  //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       contents: [
  //         {
  //           parts: [
  //             {
  //               text: `Give me a random fact about ${author}`,
  //             },
  //           ],
  //         },
  //       ],
  //       generationConfig: {
  //         temperature: 2.0,
  //       },
  //     }),
  //   }
  // );

  // const data = await response.json();
  // const randomFact = data.candidates[0].content.parts[0].text;

  return (
    <div>
      <blockquote>
        <p className='text-neutral-500 font-semibold w-full sm:w-2/3 mx-auto p-5 text-center'>
          {randomQuote.quote}
        </p>
      </blockquote>
      <section className='text-center'>
        <Button className='font-semibold' variant='secondary'>
          {author}
        </Button>
      </section>
    </div>
  );
}
