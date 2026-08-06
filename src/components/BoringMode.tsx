import { useState } from "react";
import MemoriesPanel from "./MemoriesPanel";


interface BoringModeProps {
  onTransform: () => void;
}

const PASSWORD = "tothemoonandback";
const NEAR_MISS = "iloveyoutothemoonandback";

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z]/g, "");

const BoringMode = ({ onTransform }: BoringModeProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [hint, setHint] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = normalize(password);

    if (entry === PASSWORD) {
      setMessage("");
      setHint("");
      onTransform();
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    if (entry === NEAR_MISS) {
      setMessage("Wrong password.");
      setHint("Hint: just the second part.");
      return;
    }

    const left = Math.max(3 - nextAttempts, 0);

    if (left === 0) {
      setMessage("Wrong password. No chances left... but okay, try again.");
      setHint('Hint: "I love you"');
      return;
    }

    setMessage(
      `Wrong password. ${left} ${left === 1 ? "chance" : "chances"} left.`
    );
    setHint(left === 1 ? 'Hint: "I love you"' : "");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <MemoriesPanel />

      <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="border border-black p-6 bg-white">
            <h1 className="font-boring text-2xl md:text-3xl font-normal text-black mb-2 text-center">
              Valentine Form (Very Boring)
            </h1>
            <p className="font-boring text-base text-black mb-6 text-center">
              Please fill out the form honestly.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="font-boring text-sm text-black block mb-1" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input-boring"
                  maxLength={60}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="font-boring text-sm text-black block mb-1" htmlFor="password">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter the password"
                  className="input-boring"
                  maxLength={80}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {message && (
                <p className="font-boring text-sm text-black" role="alert">
                  {message}
                </p>
              )}
              {hint && <p className="font-boring text-sm text-black">{hint}</p>}

              <button
                type="submit"
                className="font-boring text-sm text-black border border-black px-4 py-2 w-full bg-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BoringMode;
