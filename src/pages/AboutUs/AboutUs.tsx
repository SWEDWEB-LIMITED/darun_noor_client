import WorkStrands from "../Home/WorkStrands/WorkStrands";
import bg from "../../assets/LogoTransparent.png";

const AboutUs = () => {
  return (
    <div className="py-2">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="container mx-auto text-justify mt-10 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-4xl text-center font-extrabold mb-5">
          Welcome to Daar Un Noor Sverige
        </h2>
        <p className="md:text-lg mb-8 px-2">
          Daar Un Noor Sverige is not just an organization; it's a commitment to
          fostering positive change and inspiring a sense of purpose within the
          Muslim community and beyond. Rooted in the Islamic faith, we
          passionately strive to encourage Muslims to be active contributors to
          society, creating a collective impact that benefits every member of
          humanity.
        </p>
        <p className="md:text-lg mb-8 px-2">
          Guided by the principles of compassion, justice, and community
          engagement, we aim to create a space where spirituality and social
          responsibility coexist harmoniously. Through worship and dedicated
          service to humanity, Daar Un Noor Sweden envisions a world transformed
          by the profound values enshrined in the Islamic faith.
        </p>
        <p className="md:text-lg mb-8 px-2">
          Our grassroots initiatives extend beyond the boundaries of cultural
          and religious differences, aiming to foster a society where diversity
          is celebrated and every individual, irrespective of background, can
          thrive. Daar Un Noor Sweden invites you to join us on this meaningful
          journey, where the light of compassion illuminates the path towards a
          better world for all.
        </p>
        <p className="md:text-lg px-2">
          Together, let's embody the spirit of unity, service, and commitment to
          creating a positive impact, guided by the timeless values of Islam.
        </p>
      </div>
      <div className="my-10 text-center container mx-auto rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Cooperation Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border bg-slate-100 border-gray-300 rounded-lg shadow-md p-4">
            <a
              href="https://www.sensus.se"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              <h3 className="text-lg font-bold mb-2">Sensus studieförbund</h3>
            </a>
          </div>
          <div className="border bg-slate-100 border-gray-300 rounded-lg shadow-md p-4">
            <a
              href="https://www.myndighetensst.se"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              <h3 className="text-lg font-bold mb-2">
                Myndigheten för stöd till trossamfund
              </h3>
            </a>
          </div>
          <div className="border bg-slate-100 border-gray-300 rounded-lg shadow-md p-4">
            <a
              href="https://www.smf-islam.se"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
            >
              <h3 className="text-lg font-bold mb-2">
                SMF – Sverige Muslimska Förbund
              </h3>
            </a>
          </div>
        </div>
      </div>

      <WorkStrands />
    </div>
  );
};

export default AboutUs;
