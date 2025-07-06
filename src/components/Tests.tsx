import secondImg from '../assets/second.png';

function Tests() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm">

    <img src={secondImg} alt="" className="w-full h-48 object-cover" />

    {/* Content */}
  <div className="p-4 space-y-2">
    {/* Name */}
    <h2 className="text-lg font-semibold text-gray-800">Sakura Ramen House</h2>

    {/* Rating, Category, Distance */}
    <div className="flex items-center text-sm text-gray-600 gap-2">
      <span>⭐ 4.5</span>
      <span>·</span>
      <span>Japanese</span>
      <span>·</span>
      <span>850m</span>
    </div>

    {/* Open Status */}
    <div className="text-sm text-green-600 font-medium">🟢 Open now</div>

    {/* Address */}
    <p className="text-sm text-gray-500">123 Jalan Sentosa, Kuala Lumpur</p>

    {/* Action Buttons */}
    <div className="flex gap-2 pt-2">
      <button className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600">View</button>
      <button className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded hover:bg-gray-200">Save</button>
    </div>
  </div>
</div>

    );
}

export default Tests;