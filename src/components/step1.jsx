import { useState } from "react";

function Step1({ formData, setFormData, nextStep }) {
  const [errors, setErrors] = useState({});
  const handleContinue = () => {
    const { firstName, lastName, username } = formData;
    const newErrors = {};

    if (!firstName || /[^a-zA-Z]/.test(firstName))
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";

    if (!lastName || /[^a-zA-Z]/.test(lastName))
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";

    if (!username || /[^a-zA-Z0-9]/.test(username))
      newErrors.username =
        "Username cannot contain special characters or numbers.";

    if (username === "taken") newErrors.username = "Username already taken.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    nextStep();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleContinue();
  };

  return (
    <div onKeyDown={handleKeyPress}>
      <div className="bg-white p-8 w-[480px] h-[655px]">
        <div className="flex flex-col w-[416px] h-[469px]">
          <div className="  gap-2 ">
            <img src="/pinecone.png" alt="Logo" className="w-[60px] h-[60px]" />
            <h2 className="text-xl text-black font-semibold"> Join us! 😎 </h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Please provide all current information accurantely
          </p>
          <div className="flex flex-col gap-3">
            {/* *first name* */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First name *
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* *last name* */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm ">{errors.lastName}</p>
              )}
            </div>

            {/* *username* */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username *
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-19">
          <button
            onClick={handleContinue}
            className="flex items-center justify-center w-full bg-black text-white rounded-md hover:bg-gray-700 transition"
          >
            Continue 1/3
            <img src="/continue.png" alt="Logo" className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Step1;
