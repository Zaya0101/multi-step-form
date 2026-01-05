import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Step3({ formData, setFormData, nextStep, prevStep }) {
  const [error, setError] = useState("");
  const [previewURL, setPreviewURL] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (formData.profileImage) {
      const url = URL.createObjectURL(formData.profileImage);
      setPreviewURL(url);
      return () => {
        URL.revokeObjectURL(url);
        setPreviewURL(null);
      };
    } else {
      setPreviewURL(null);
    }
  }, [formData.profileImage]);

  const handlefFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      setError("");
    }
  };

  const removeImage = () => {
    if (previewURL) {
      URL.revokeObjectURL(previewURL);
      setPreviewURL(null);
    }
    setFormData({ ...formData, profileImage: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
    setError("");
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, birthDate: date });
    setError("");
  };

  const handleContinue = () => {
    if (!formData.birthDate) {
      setError("Please select a date ");
      return;
    }
    if (!formData.profileImage) {
      setError("Image cannot be blank");
      return;
    }
    setError("");
    nextStep();
  };

  const handleKeyDown = (e) => {
    if (e.key === "enter") {
      e.preventDefault();
      handleContinue();
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <img src="/pinecone.png" alt="Logo" className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Join us!</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Please provide all current information accurantely
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Of Birth *
            </label>
            <DatePicker
              selected={
                formData.birthDate ? new Date(formData.birthDate) : null
              }
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText="Select date"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              maxDate={new Date()}
              isClearable
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image *
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlefFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {previewURL && (
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={previewURL}
                  alt="preview"
                  className="w-20 h-20 rounded-full object-cover border"
                ></img>
                <button
                  type="button"
                  onClick={removeImage}
                  aria-label="Remove image"
                  className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-sm hover:bg-gray-50"
                  title="Remove image"
                >
                  x
                </button>
              </div>
            )}
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevStep}
              className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition"
              type="button"
            >
              ◀ Back
            </button>

            <button
              onClick={handleContinue}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
              type="button"
            >
              Continue 3/4 ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Step3;
