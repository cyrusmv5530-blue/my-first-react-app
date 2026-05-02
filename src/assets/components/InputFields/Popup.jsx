import { useState } from "react";

export default function Popup({open, setOpen, setType}) {
  const [selectedType, setSelectedType] = useState("food");

  return (
    <>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-md p-4">
            <div className="bg-white border border-white rounded-base shadow-sm p-4 md:p-6">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-default pb-4">
                <h3 className="text-lg font-sgummy font-bold text-text">
                  Map Options
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-base hover:bg-black/15"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="pt-4">
                <p className="font-sgummy mb-4">Select your desired map:</p>

                <ul className="space-y-4">
                  {[
                    { id: "food", label: "Food"},
                    { id: "shelter", label: "Shelter"},
                    { id: "rehab", label: "Rehab"},
                  ].map((type) => (
                    <li key={type.id}>
                      <label
                        className={`flex items-center w-full p-5 border rounded-base cursor-pointer transition
                        ${
                          selectedType === type.id
                            ? "bg-black/15 border-text"
                            : "bg-neutral-secondary-medium border-default-medium hover:bg-black/5"
                        }`}
                      >
                        <input
                          type="radio"
                          name="job"
                          value={type.id}
                          checked={selectedType === type.id}
                          onChange={() => setSelectedType(type.id)}
                          className="hidden"
                        />

                        <div className="ml-2.5">
                          <div className="text-base text-text font-medium font-sgummy">
                            {type.label}
                          </div>
                        </div>
                      </label>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-4 w-full font-sgummy text-text bg- hover:bg-hover2 hover:border-hover2 border border-default focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
                  onClick={() => {
                    console.log(selectedType);
                    setType(selectedType);
                    setOpen(false);
                  }}
                >
                  Next step
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

