import Cards from "./components/Cards";

export default function App() {
  return (
    <div className="bg-orange-50 h-screen r">
      <div className="font-bold text-center text-2xl p-3 text-neutral-700">
        Makan Mana 🍽️ ?{" "}
      </div>
      <div className="text-center text-neutral-500">
        Can't decide what to eat? Let us pick something tasty near you!
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
          Pick a Restaurant
        </button>
      </div>
      <div className="flex">
        <Cards
          name="Sate Padang"
          description="Delicious Sate Padang with spicy peanut sauce"
          location="Jalan Raya No. 123, "
          rating={4.5}
          price={15000}
          isOpen={true}
        />
        <Cards
          name="Nasi Goreng Kampung"
          description="Authentic Nasi Goreng with a touch of home"
          location="Jalan Kebon Jeruk No. 45,"
          rating={4.0}
          price={12000}
          isOpen={false}
        />
      </div>
    </div>
  );
}
