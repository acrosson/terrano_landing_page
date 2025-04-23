import { Star } from 'lucide-react';

export function ProductRating() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <span className="text-lg font-semibold">5.0/5 Rated</span>
      </div>
    </div>
  );
}
