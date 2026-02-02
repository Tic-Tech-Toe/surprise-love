interface BoringModeProps {
  onTransform: () => void;
}

const BoringMode = ({ onTransform }: BoringModeProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="border border-black p-6 bg-white">
          <h1 className="font-boring text-2xl md:text-3xl font-normal text-black mb-2 text-center">
            Valentine Form (Very Boring)
          </h1>
          <p className="font-boring text-base text-black mb-6 text-center">
            Please fill out the form honestly.
          </p>

          <div className="space-y-4">
            <div>
              <label className="font-boring text-sm text-black block mb-1">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input-boring"
                onFocus={onTransform}
                onClick={onTransform}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoringMode;
