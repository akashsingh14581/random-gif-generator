import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('car');
  const { gif, fetchData, loading } = useGif(tag);

  return (
    <div className='flex flex-col items-center w-full max-w-xl px-4 py-8 mx-auto mt-6 bg-blue-500 sm:px-6 md:px-10 rounded-xl gap-y-5'>
     <h2 className="text-xl font-semibold text-center text-white underline uppercase sm:text-2xl md:text-3xl">
  🔍 Search GIF for: <span className="text-yellow-200">{tag}</span>
</h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="gif"
          className='w-full h-[200px] sm:h-[250px] md:h-[300px] object-contain rounded-md shadow-md'
        />
      )}

      <input
        type="text"
        className='w-full p-2 text-center text-black rounded-md placeholder:text-gray-500'
        placeholder='Search GIF...'
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />

      <button
        disabled={loading}
        className='w-full p-2 font-medium capitalize transition-all bg-blue-200 rounded-md hover:bg-blue-300 disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={() => fetchData(tag)}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>
    </div>
  );
}

export default Tag;
