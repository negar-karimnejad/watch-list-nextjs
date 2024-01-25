"use client";

import { useState } from "react";
import { editWatch } from "../server-actions/editWatch";

function EditWatch({ watch }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: watch.brand,
    model: watch.model,
    referenceNumber: watch.reference_number,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white p-8 rounded shadow-lg">
            <span
              className="absolute text-gray-500 top-2 right-4 text-xl cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <form
              action={editWatch}
              onSubmit={() => setShowModal(false)}
              className="space-y-4"
            >
              <input type="hidden" name="id" value={watch.id} />
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="text-gray-800 mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="model"
                  className="block text-sm font-medium text-gray-700"
                >
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="text-gray-800 mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="referenceNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Reference Number
                </label>
                <input
                  type="text"
                  id="referenceNumber"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="text-gray-800 mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
              >
                Update Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditWatch;
