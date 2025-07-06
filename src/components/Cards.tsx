

interface CardsProps {
      name: string;
      location: string;
      rating: number;
      isOpen: boolean;
      image?: string;

    }

function Cards({ name, location, rating, isOpen, image }: CardsProps   ) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">
            <img src={image} alt="" className="w-full h-48 object-cover" />
            <div className="font-bold">🍜 {name}</div>
            <div>⭐ {rating}</div>
            <div>{isOpen}</div>
            <div>📍 {location}</div>

        </div>
    )
}

export default Cards;