import { useState } from "react";

function Step2({ formData, setFormData, nextStep, prevStep }) {
  const [errors, setErrors] = useState({});

  const handleContinue = () => {
    const { email, phone, password, confirmPassword } = formData;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Please provide a valid email address";
    }
    if (!phone) {
      newErrors.phone = "Please provide a valid phone number.";
    }
    if (!password) {
      newErrors.password = "Password must include letters and numbers";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Password do not match. Please try again.";
    }

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
          <div className=" gap-2 ">
            <img src="/pinecone.png" alt="Logo" className="w-[60px] h-[60px]" />
            <h2 className="text-xl text-black font-semibold">Join us! 😎</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Please provide all current information accurately
          </p>
          <div className="flex flex-col gap-3">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Placeholder"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Placeholder"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Placeholder"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password *
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className={`w-full text-black border p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Placeholder"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <button
            onClick={prevStep}
            className="w-[128px] h-[44px] gap-2 bg-white "
          >
            ◀ Back
          </button>
          <button
            onClick={handleContinue}
            className="w-[280px] h-[44px] bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Continue 2/3 ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
