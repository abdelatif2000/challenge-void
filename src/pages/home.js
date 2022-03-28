import Item from "../components/Item";
import axios from "axios";
import Modal from "../components/modal";
import { useEffect, useState } from "react";
import api from './api.txt'

function Home(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [iframe, setIframe] = useState('');
  // display modal 'rendez vous'
  const getDate=(id)=>{
    const fetchData = async () =>{
      try {
       const {data: response} = await axios.get(api);
       let item=response.data.find((item)=>item.id=id);
       console.log(item);
       let iframe=item.attributes.field_elsan_rdv.uri;
       setIsOpen(true);
       setIframe(iframe);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
 } 
//handel close modal 'rendez vous'
 const handelCloseModal=()=>{
    setIsOpen(false); 
 }
  //i am just use the onoffline data because ' CORS' block all my request 
  //get the data use API:
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data: response } = await axios.get(
          api
        );
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return(
    <div>
       <Modal isOpen={isOpen} iframe={iframe} closeModal={handelCloseModal} ></Modal>
      <div className="mx-auto w-full sm:w-9/12  md:w-8/12 z-1  lg:w-3/5 bg-white shadow-sm rounded-lg h-4/5">
        <div>
          <button className="P bg-primary w-70 text text-lg font-bold p-0  px-6 rounded-t-md text-white py-3">
            Spécialistes
          </button>
          <span className="bg-primary block w-100 bg-blue-300 h-1"></span>
        </div>
        {!loading ? (
          data.map((item, index) => <Item getDate={getDate} key={index} info={item} />)
        ) : (
         ''
        )}
      </div>
    </div>
  );
}
export default Home;
