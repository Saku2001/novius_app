export default function Banner() {
  return (
    <div className="flex justify-start items-center h-[calc(100vh-100px)] bg-primary px-4">
      <div className="w-1/2 max-w-5xl h-full  rounded-none flex items-center pt-6">
        <div className="pl-[173px]  pb-16 text-left">
          {" "}
          {/* pt-12 ≈ 48px, pb-16 = 64px */}
          <h1 className="text-[74px] font-lugrasimo font-bold leading-tight text-black">
            <span className="text-secondary px-1 py-1 rounded">Write</span>
            <br />
            today
            <br />
            inspire
            <br />
            tomorrow.
          </h1>
        </div>
      </div>
    </div>
  );
}
