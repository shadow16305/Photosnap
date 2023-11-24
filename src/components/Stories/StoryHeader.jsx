import arrow from "../../assets/shared/desktop/arrow.svg";
import mobile_img from "../../assets/stories/mobile/moon-of-appalacia.jpg";

const StoryHeader = () => {
  return (
    <div className="md:bg-[url('assets/stories/tablet/moon-of-appalacia.jpg')] lg:bg-[url('assets/stories/desktop/moon-of-appalacia.jpg')] bg-cover bg-no-repeat text-white mt-20 sm:mt-0">
      <img
        src={mobile_img}
        className="sm:hidden w-screen"
        alt="mobile_header_img"
      />
      <div className="py-10 ps-10 md:py-32 lg:py-36 md:ps-28 bg-black sm:bg-transparent">
        <span className="font-bold text-xs">LAST MONTH’S FEATURED STORY</span>
        <h1 className="max-w-[360px] mt-6">HAZY FULL MOON OF APPALACHIA</h1>
        <span className="flex gap-2 mt-4">
          <p className="opacity-80">March 2nd 2020</p>
          <p className="text-white opacity-100"> by John Appleseed</p>
        </span>
        <p className="opacity-60 max-w-[300px] md:max-w-[387px] mt-6">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button className="font-bold tracking-[2px] uppercase mt-6 flex items-center gap-4 hover:opacity-60 transition-all duration-200">
          Read the story <img src={arrow} className="invert" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default StoryHeader;
