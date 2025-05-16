export default function Banner() {
  return (
    <div className="flex justify-center items-center h-[600px] bg-gradient-to-b from-gray-800 to-white px-4">
      <div className="w-full max-w-5xl p-10 rounded-xl shadow-lg bg-white/10 border border-gray-500">
        <div className="text-center">
          <h1 className="text-5xl font-tinos font-bold leading-[5rem] text-white">
            <span className="text-primary border-4 border-primary px-1 py-1 rounded">
              Write
            </span>{" "}
            Today, Inspire Tomorrow.
            <br />
            Inspiring{" "}
            <span className="text-primary border-4 border-primary px-1 py-1 rounded">
              Stories
            </span>
            , One{" "}
            <span className="text-primary border-4 border-primary px-1 py-1 rounded">
              Article
            </span>{" "}
            at a Time.
            <br />
            Where{" "}
            <span className="text-primary border-4 border-primary px-2 py-1 rounded">
              Ideas
            </span>{" "}
            Meet the World.
          </h1>
        </div>
      </div>
    </div>
  );
}
