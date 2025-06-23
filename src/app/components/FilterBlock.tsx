import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui/select";

type FilterBlockProps = {
  selectedCategory: string[];
  setSelectedCategory: (value: string[]) => void;
  selectedLocation: string[];
  setSelectedLocation: (value: string[]) => void;
  selectedPrice: string;
  setSelectedPrice: (value: string) => void;
};

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const locations = ["Mumbai", "Delhi", "Bangalore", "Kolkata"];
const priceRanges = ["All", "Under ₹10k", "₹10k - ₹25k", "Above ₹25k"];

export default function FilterBlock({
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedPrice,
  setSelectedPrice,
}: FilterBlockProps) {
  const toggleItem = (
    item: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(
      list.includes(item)
        ? list.filter((v) => v !== item)
        : [...list, item]
    );
  };

  return (
    <aside className="w-full md:w-1/4 p-4 bg-gray-50 rounded-md shadow-sm space-y-6 dark:bg-zinc-900">
      <div>
       <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">Category</h3>
            <button
                onClick={() => {
                setSelectedCategory([]);
                setSelectedLocation([]);
                setSelectedPrice('All');
                }}
                className="text-sm text-blue-600 hover:underline"
            >
                Clear All
            </button>
     </div>

        {categories.map((cat) => (
          <div key={cat} className="flex items-center space-x-2 mb-1">
            <Checkbox
              id={`cat-${cat}`}
              checked={selectedCategory.includes(cat)}
              onCheckedChange={() => toggleItem(cat, selectedCategory, setSelectedCategory)}
            />
            <label htmlFor={`cat-${cat}`} className="text-sm">
              {cat}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Location</h3>
        {locations.map((loc) => (
          <div key={loc} className="flex items-center space-x-2 mb-1">
            <Checkbox
              id={`loc-${loc}`}
              checked={selectedLocation.includes(loc)}
              onCheckedChange={() => toggleItem(loc, selectedLocation, setSelectedLocation)}
            />
            <label htmlFor={`loc-${loc}`} className="text-sm">
              {loc}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2">Price Range</h3>
        <Select
          value={selectedPrice}
          onValueChange={setSelectedPrice}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a range" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
}
