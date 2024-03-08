export default function WorkStrands() {
  const loopData = [
    {
      img: "clining.webp",
      heading: "Traning and Development",
    },
    {
      img: "clining.webp",
      heading: "Promoting Common Good",
    },
    {
      img: "clining.webp",
      heading: "Seeking Fairness and Justice",
    },
    {
      img: "clining.webp",
      heading: "Collective Community Endeavour",
    },
  ];
  return (
    <>
      <div className="py-[5rem] bg-teal-900 text-white">
        <p className="text-center text-3xl font-bold ">Our Work Strands</p>

        <div className="flex justify-center items-center gap-[2rem] flex-row flex-wrap p-[3rem]">
          {loopData.map((data, index) => {
            return (
              <div key={index}>
                <img
                  src={data.img}
                  alt="img"
                  className="w-[13rem] h-[10rem] rounded-xl"
                />
                <p className="text-center mt-3">{data.heading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
