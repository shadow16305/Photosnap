import { planFeatures } from "../../tools/items-database";

const PricingTable = () => {
  return (
    <>
      {/* TABLET AND DESKTOP */}
      <div className="hidden md:block">
        <table className="table-auto mx-auto">
          <thead className="border-b border-black">
            <tr className="uppercase">
              <th>the Features</th>
              <th>Basic</th>
              <th>Pro</th>
              <th>Business</th>
            </tr>
          </thead>
          <tbody>
            {planFeatures.map((feature) => (
              <tr
                key={feature.id}
                className="border-b border-[#D8D8D8] uppercase text-xs font-bold tracking-[2px]"
              >
                <td>{feature.feature}</td>
                <td className="md:px-12 lg:px-20 py-8">
                  {feature.basic && <img src={feature.basic} alt="" />}
                </td>
                <td className="md:px-12 lg:px-20">
                  {feature.pro && <img src={feature.pro} alt="" />}
                </td>
                <td className="md:px-12 lg:px-28">
                  {feature.business && <img src={feature.business} alt="" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col md:hidden tracking-[2px] max-w-[318px] mx-auto">
        <p className="text-sm border-b border-black font-bold">THE FEATURES</p>
        {planFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col pt-6 border-b border-[#DFDFDF] uppercase"
          >
            <p className="text-sm font-bold">{feature.feature}</p>
            <div className="flex justify-center items-start gap-14 py-6">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs opacity-60">BASIC</span>
                <img src={feature.basic} className="w-[20px]" alt="" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs opacity-60">PRO</span>
                <img src={feature.pro} className="w-[20px]" alt="" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs opacity-60">BUSINESS</span>
                <img src={feature.business} className="w-[20px]" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingTable;
