import slider1 from "../../assets/Learning/learning-1.png";
import slider2 from "../../assets/Learning/learning-2.png";
import slider3 from "../../assets/Learning/learning-3.png";
import Slider from "../../components/Shared/Slider/Slider";

const LearningCenter = () => {
  return (
    <>
      <Slider slider1={slider1} slider2={slider2} slider3={slider3} />
      <div className="text-white py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center font-bold mb-6">
            Learning Center
          </h1>
          <p className="mb-6">
            The aim of the learning center is to provide a guideline for Shahih
            Quran learning with Tajweed. Basic understanding of Islamic
            knowledge with reflection to become a good citizen in society. In
            parallel, we have a mother language learning section to familiarize
            kids with culture and heritage.
          </p>
          <p className="mb-6">
            Feel free to contact your nearest learning center to enroll your
            kids.
          </p>
          <p>
            If you need more information, contact coordinators:{" "}
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              072 1212808 <br /> 070 6574846
            </p>
          </p>
        </div>

        <div className="container mx-auto p-8 mt-8">
          <h2 className="text-xl text-center font-bold mb-6">
            Learning Centers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Learning Center Card 1 - Flemingsberg */}
            <div className="bg-white font-bold text-neutral rounded-lg p-4 shadow-md">
              <h2 className="text-xl mb-2 text-center md:text-justify">
                Flemingsberg
              </h2>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                073 0799424 <br /> 073 7139307
              </p>
            </div>

            {/* Learning Center Card 2 - Vårby gård */}
            <div className="bg-white font-bold text-neutral rounded-lg p-4 shadow-md">
              <h2 className="text-xl mb-2 text-center md:text-justify">
                Vårby gård
              </h2>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                070 7788558
              </p>
            </div>

            {/* Learning Center Card 3 - Bredäng */}
            <div className="bg-white font-bold text-neutral rounded-lg p-4 shadow-md">
              <h2 className="text-xl mb-2 text-center md:text-justify">
                Bredäng
              </h2>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                072 1212808
              </p>
            </div>

            {/* Learning Center Card 4 - Södertälje */}
            <div className="bg-white font-bold text-neutral rounded-lg p-4 shadow-md">
              <h2 className="text-xl mb-2 text-center md:text-justify">
                Södertälje
              </h2>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                072 7867454
              </p>
            </div>
          </div>

          <p className="mt-8">
            For more information or enrollment, feel free to contact
            coordinators at the provided numbers.
          </p>
        </div>
      </div>{" "}
    </>
  );
};

export default LearningCenter;
