export const revalidate = 60;

export default async function Quote() {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: 'Give me a random motivational quote.' }],
          },
        ],
        generationConfig: {
          temperature: 2.0,
        },
      }),
    }
  );

  const data = await response.json();
  const quote = data.candidates[0].content.parts[0].text;

  return (
    <p className='italic text-neutral-500 font-semibold w-full sm:w-2/3 mx-auto p-5'>
      {quote}
    </p>
  );
}
