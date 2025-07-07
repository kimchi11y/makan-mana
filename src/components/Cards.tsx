interface CardsProps {
  name: string;
  location: string;
  rating: number;
  isOpen: boolean;
  image?: string;
}

function Cards({ name, location, rating, isOpen, image }: CardsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
      <img src={image} alt="" className="w-full h-48 object-cover" />
      {/* Name */}
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

      {/* Rating, Category, Distance */}
      <div className="flex items-center text-sm text-gray-600 gap-2">
        <span>⭐ {rating}</span>
        <span>·</span>
        <span>Japanese</span>
        <span>·</span>
        <span>850m</span>
      </div>

      {/* Open Status */}
      <div className="text-sm text-green-600 font-medium">${isOpen ? '🟢 Open now' : '🔴 Closed'  }</div>

      {/* Address */}
      <p className="text-sm text-gray-500">{location}</p>
      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600">
          View
        </button>
        <button className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded hover:bg-gray-200">
          Save
        </button>
      </div>
    </div>
  );
}

export default Cards;
