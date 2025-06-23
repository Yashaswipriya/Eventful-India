import Header from './components/Header';
import Link from "next/link";
import { categories } from './data/categories';

export default function Home() {
  return (
    <main>
      <Header />
       <section className="text-center py-20 px-6 bg-blue-50 dark:bg-zinc-800">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Welcome to Artistly
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto dark:text-white">
         A platform to connect Event Planners with Performing Artists
        </p>
        <div className='flex justify-center items-center space-x-4'>
          <Link href="/artists" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Explore Artists
          </Link>
          <Link href="/onboard" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Register as Artist
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-white dark:bg-zinc-900">
        <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800 dark:text-white">Browse by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
