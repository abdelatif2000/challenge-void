function Item({ info, getDate }) {
  return (
    <div className="place-content-around md:hover:bg-orange-50  ">
      <div className=" md:flex  items-center justify-between border-b-2 border-gray-200 px-5 py-5">
        <div className="flex items-center ">
          <div className="relative inline-block mr-8 hover:underline  cursor-pointer ">
            <img
              className="rounded-full w-20"
              src="https://www.elsan.care/sites/default/files/styles/elsan_map_praticien_image/public/praticien_default.gif?h=4626e670"
              alt=""
            />
            <i className="absolute  top-0 -right-3 p-2 fas fa-plus bg-[#f9b004] text-white font-bold font-md rounded-full"></i>
          </div>
          <div>
            <h1 className="font-medium text-xl  prose lg:text-3xl mb-0  hover:underline  cursor-pointer  ">
              {info.attributes.field_vactory_first_name +
                " " +
                info.attributes.field_vactory_last_name}
            </h1>
            <p className="text-md mb-0">{info.attributes.field_elsan_profession} </p>
            <p className="text-yellow-400 font-medium text-md mb-0 hover:underline  cursor-pointer ">
              Clinique Saint-François
            </p>
            <p className="hover:underline hidden  lg:inline-block  cursor-pointer">
              {" "}
              Tel : {info.attributes.field_vactory_telephone}
            </p>
          </div>
        </div  >
        {info.attributes.field_elsan_rdv != null ? (
          <button
            onClick={() => getDate(info.id)}
            className="mt-4  mr-4 md:mt-0 md:mr-0 rounded-md bg-[#f9b004] text-white cursor-pointer font-bold px-2 py-1 "
          >
            <i className="fa-solid fa-calendar-check"></i> Rendez-vous
          </button>
        ) : (
          ""
        )}
        <button className="mt-4 md:mt-0 rounded-md md:hidden text-black bg-white  shadow-md   hover:bg-[#f9b004] hover:text-white  cursor-pointer font-bold px-2 py-1 ">
        <i className="fa-solid fa-phone"></i> Téléphone
        </button>
      </div>
    </div>
  );
}
export default Item;
