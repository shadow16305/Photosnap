import arrow from "../../assets/shared/desktop/arrow.svg";

const InviteQuicklink = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center text-white bg-[url('assets/shared/desktop/bg-beta.jpg')] bg-cover bg-no-repeat py-[68px] md:px-20 ps-8 md:ps-0 lg:px-40">
      <h1 className="max-w-[330px] md:max-w-[400px] text-[32px] md:text-[40px]">
        We’re in beta. Get your invite today!
      </h1>
      <button className="font-bold tracking-[2px] uppercase mt-12 flex items-center gap-4 hover:opacity-60 transition-all duration-200">
        get an invite <img src={arrow} className="invert" alt="arrow" />
      </button>
    </div>
  );
};

export default InviteQuicklink;
