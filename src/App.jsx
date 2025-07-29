import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 py-10 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
     <h1 className="px-8 py-4 mb-16 text-3xl font-extrabold text-center text-gray-800 uppercase shadow-lg sm:text-4xl md:text-5xl bg-white/80 rounded-xl">
  🌈 Welcome to GIF Genie 🎉
</h1>

      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-12 lg:flex-row">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
