import Cards from "./components/Cards";

export default function App() {
  return (
    <div className="bg-orange-50 min-h-screen ">
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
      <div className="space-y-4 mt-10 ml-2 mr-2 max-w-3xl mx-auto">
        <Cards
          name="Sate Padang"
          location="Jalan Raya No. 123, "
          rating={4.5}
          isOpen={true}
        />
        <Cards
          name="Nasi Goreng Kampung"
          
          location="Jalan Kebon Jeruk No. 45,"
          rating={4.0}
          isOpen={false}
        />
      </div>
      <div>

      </div>
     
    </div>
  );
}
