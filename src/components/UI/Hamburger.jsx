const Hamburger = ({ value }) => {
  const { isOpen, setIsOpen } = value;

  const hamburgerLine =
    "h-1 w-6 my-1 transition ease transform duration-300 bg-black";

  return (
    <button
      className={`flex flex-col h-12 w-12 ${
        isOpen ? "justify-center" : "justify-start"
      } items-center group relative z-30`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${hamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3" : "opacity-0"
        }`}
      />
      <div className={`${hamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${hamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
