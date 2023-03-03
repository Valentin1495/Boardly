import Search from './Search';
import Trends from './Trends';

export default function RightSideBar() {
  const data = [
    {
      trends: [
        {
          name: 'Lori Lightfoot',
          url: 'http://twitter.com/search?q=%22Lori+Lightfoot%22',
          promoted_content: null,
          query: '%22Lori+Lightfoot%22',
          tweet_volume: 36051,
        },

        {
          name: 'Dennis',
          url: 'http://twitter.com/search?q=Dennis',
          promoted_content: null,
          query: 'Dennis',
          tweet_volume: 28886,
        },

        {
          name: 'Vallas',
          url: 'http://twitter.com/search?q=Vallas',
          promoted_content: null,
          query: 'Vallas',
          tweet_volume: 16437,
        },

        {
          name: '#WWENXT',
          url: 'http://twitter.com/search?q=%23WWENXT',
          promoted_content: null,
          query: '%23WWENXT',
          tweet_volume: 13654,
        },

        {
          name: 'Brandon Johnson',
          url: 'http://twitter.com/search?q=%22Brandon+Johnson%22',
          promoted_content: null,
          query: '%22Brandon+Johnson%22',
          tweet_volume: 11331,
        },
        {
          name: 'Wray',
          url: 'http://twitter.com/search?q=Wray',
          promoted_content: null,
          query: 'Wray',
          tweet_volume: 30839,
        },

        {
          name: 'Dave Grohl',
          url: 'http://twitter.com/search?q=%22Dave+Grohl%22',
          promoted_content: null,
          query: '%22Dave+Grohl%22',
          tweet_volume: 21981,
        },

        {
          name: 'Raskin',
          url: 'http://twitter.com/search?q=Raskin',
          promoted_content: null,
          query: 'Raskin',
          tweet_volume: 52634,
        },

        {
          name: 'Maxi',
          url: 'http://twitter.com/search?q=Maxi',
          promoted_content: null,
          query: 'Maxi',
          tweet_volume: 15384,
        },

        {
          name: 'Suki',
          url: 'http://twitter.com/search?q=Suki',
          promoted_content: null,
          query: 'Suki',
          tweet_volume: 35328,
        },
      ],
    },
  ];

  return (
    <div className='hidden lg:block w-2/5 px-3 pb-3'>
      <Search />

      <Trends trends={data[0].trends} />
    </div>
  );
}
