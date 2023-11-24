import arrow from "../../assets/shared/desktop/arrow.svg";

const ImageCard = (props) => {
  return (
    <div
      className={`relative w-screen overflow-hidden text-white h-[600px] hover:-translate-y-10 transition-all duration-300 cursor-pointer ${props.className}`}
    >
      <div className="absolute inset-0">
        <div className="absolute z-10 bg-gradient-to-b from-transparent to-black h-full w-full" />
        <img
          src={props.img}
          className="w-full h-full object-cover"
          alt={props.title}
        />
      </div>
      <div className="absolute z-20 bottom-0 mx-auto py-6 px-10 flex flex-col w-full">
        <span className="text-lg font-bold">{props.title}</span>
        <p className="text-xs opacity-70">{props.author}</p>
        <hr className="border border-white opacity-40 my-5 w-full mx-auto" />
        <button className="font-bold tracking-[2px] uppercase flex items-center gap-4 hover:opacity-60 transition-all duration-200 text-white justify-between">
          <span>read story</span>
          <img src={arrow} alt="arrow" className="invert" />
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
