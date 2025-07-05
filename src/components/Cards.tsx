interface CardsProps {
      name: string;
      description: string;
      location: string;
      rating: number;
      price: number;
      isOpen: boolean;
    }

function Cards({ name, description, location, rating, price, isOpen }: CardsProps   ) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4 max-w-sm text-xs">
            <div>Image</div>
            <div className="font-bold">{name}</div>
            <div>{description}</div>
            <div>{location}</div>
            <div>⭐{rating}</div>
            <div>{price}</div>
            <div>{isOpen}</div>

        </div>
    )
}

export default Cards;