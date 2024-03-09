// LocationGoogleMap component

export default function LocationGoogleMap() {
  return (
    <>
      <h1 className="text-4xl font-bold my-[3rem] text-center text-white">
        {/* Vår platsbelägenhet */}
        Our Location
      </h1>
      <div className="w-full">
        <div className="map-container w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.1961745280141!2d17.9379234!3d59.29628079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7689c6172307%3A0xfc0138633ef88a09!2sBred%C3%A4ngsv%C3%A4gen%20228%2C%20127%2032%20Sk%C3%A4rholmen%2C%20Sweden!5e0!3m2!1sen!2sbd!4v1709940819996!5m2!1sen!2sbd"
            width="100%"
            height="20rem"
            style={{ border: "0" }}
            className={`rounded-[0.5rem] h-[20rem] w-[100%]`}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
