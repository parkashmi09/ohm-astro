import { useSelector } from 'react-redux';
import translations from '../../components/translations/translations';

const KundaliMatchingForm = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);
  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );
  const meridiem = ["AM", "PM"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const language = useSelector((state) => state.language.language);
  const t = translations[language];

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Form Header */}
        {/* <h2 className="text-center text-lg font-semibold text-red-500 mb-8">
          ENTER DETAILS
        </h2> */}

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Boy Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BoyName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BirthDate} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.BirthTime} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <div className="grid grid-cols-4 gap-2 flex-grow">
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {hours.map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </select>
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {minutes.map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </select>
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {minutes.map((second) => (
                          <option key={second} value={second}>
                            {second}
                          </option>
                        ))}
                      </select>
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {meridiem.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-pink-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {t.DontKnowBirthTime}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.PlaceOfBirth} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="New Delhi, India"
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>

              {/* Right Column - Girl Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t.GirlName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                  {t.BirthDate} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                    <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="max-w-md mx-auto">
                    <label className="block text-gray-700 mb-2">{t.Email}</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                  {t.BirthTime} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <div className="grid grid-cols-4 gap-2 flex-grow">
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {hours.map((hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        ))}
                      </select>
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {minutes.map((minute) => (
                          <option key={minute} value={minute}>
                            {minute}
                          </option>
                        ))}
                      </select>
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {minutes.map((second) => (
                          <option key={second} value={second}>
                            {second}
                          </option>
                        ))}
                      </select>
                      <select className="p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500">
                        {meridiem.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="ml-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox text-pink-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          Don't Know Birth Time
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                  {t.PlaceOfBirth} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="New Delhi, India"
                    className="w-full p-2 border border-pink-200 rounded focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-2 rounded-full font-medium transition-colors"
              >
                {t.GetReport}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KundaliMatchingForm;
