function Modal({isOpen,iframe,closeModal}) {
  return (
    <div className={`absolute  ${
      isOpen ? "" : "hidden" 
    } z-40 bg-black bg-opacity-30 top-0 right-0 bottom-0 left-0`} >
      <div
      className={`fixed w-full h-full md:w-3/4 md:h-5/6 bg-white p-0  md:p-8 z-10 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4`}
      >
        <div className="relative w-full h-full">
        <iframe
        className="w-full h-full "
        src={iframe}
      ></iframe>
        <i
        onClick={() =>closeModal()}
        className="fa-solid fa-xmark absolute top-1 leading-3 right-3 font-bold text-xl rounded-full p-5 cursor-pointer bg-white text-yellow-400  "
      ></i>
        </div>
    </div>
      </div>
  );
}
export default Modal;
