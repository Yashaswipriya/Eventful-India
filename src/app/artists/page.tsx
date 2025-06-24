'use client';
import Header from '../components/Header';
import { useState } from 'react';
import artistsData from '@/app/data/artists.json';
import FilterBlock from '../components/FilterBlock';
import ArtistCard from '../components/ArtistCard';

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
};

export default function ArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('All');

  //converts price range string to numeric min/max values
  const parsePrice = (priceStr: string) => {
    const [minStr, maxStr] = priceStr.replace(/[₹,]/g, '').split(' - ');
    return {
      min: parseInt(minStr, 10),
      max: parseInt(maxStr || minStr, 10),
    };
  };

  //returns artists that match all the selcted filters
  const filteredArtists = (artistsData as Artist[]).filter((artist) => {
    const { min, max } = parsePrice(artist.price);

    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(artist.category);

    const locationMatch =
      selectedLocation.length === 0 || selectedLocation.includes(artist.location);

    const priceMatch =
      selectedPrice === 'All' ||
      (selectedPrice === 'Under ₹10k' && max < 10000) ||
      (selectedPrice === '₹10k - ₹25k' && min >= 10000 && max <= 25000) ||
      (selectedPrice === 'Above ₹25k' && min > 25000);

    return categoryMatch && locationMatch && priceMatch;
  });

  return (
     <>
    <Header />
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <FilterBlock
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No artists match your filters.</p>
        )}
      </section>
    </div>
      </>
  );
}
