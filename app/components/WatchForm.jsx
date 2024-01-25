import { addWatch } from "../server-actions/addWatch";

function WatchForm() {
  return (
    <form
      action={addWatch}
      className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          required
          className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="model"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          required
          className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="referenceNumber"
          className="block text-gray-700 text-sm font-semibold mb-2"
        >
          Reference Number
        </label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          required
          className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Add Watch
      </button>
    </form>
  );
}

export default WatchForm;
