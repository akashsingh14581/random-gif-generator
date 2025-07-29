import React from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Random() {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='flex flex-col items-center w-full max-w-xl px-4 py-8 mx-auto mt-6 bg-green-500 sm:px-6 md:px-10 rounded-xl gap-y-5'>
      <h2 className="text-xl font-semibold text-center text-white underline uppercase sm:text-2xl md:text-3xl">
  🎲 Random GIF Generator
</h2>

      {loading ? (
        <Spinner />
      ) : (
        <img
          src={gif}
          alt="gif"
          className='w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-md shadow-md'
        />
      )}

      <button
        disabled={loading}
        className='w-full p-2 font-medium capitalize transition-all bg-green-200 rounded-md hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed'
        onClick={fetchData}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>
    </div>
  );
}

export default Random;
