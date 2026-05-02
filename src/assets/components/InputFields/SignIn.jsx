import { useState } from "react";

export default function SignIn({ signOpen, setSignOpen, setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!signOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);


    setSignOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50"
      onClick={() => setSignOpen(false)} // close on outside click
    >
      <div
        className="relative bg-white dark:bg-gray-900 w-full max-w-3xl rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} // prevent close inside
      >
        {/* Close button */}
        <button
          onClick={() => setSignOpen(false)}
          className="absolute top-4 right-4 text-text rounded-base hover:bg-black/15"
        >
          ✕
        </button>

        {/* Card */}
        <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs mx-auto">
          <form onSubmit={handleSubmit}>
            <h5 className="text-xl font-semibold text-heading mb-6">
              Sign in to our platform
            </h5>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base w-full px-3 py-2.5"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">
                Your password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base w-full px-3 py-2.5"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="text-text bg-accent hover:bg-hover2 font-medium rounded-base text-sm px-4 py-2.5 w-full mt-6"
            >
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}