'use client';

export default function SeeMoreButton() {
  return (
    <button
      onClick={() => (window.location.href = '/doctor-listings')}
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200"
    >
      See More
    </button>
  );
}
