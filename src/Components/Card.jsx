import { FaRegFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from "framer-motion";
const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2}  dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className="flex-shrink-0 relative w-60 h-72 rounded-[45px] text-white bg-zinc-900/90 py-10 px-5 overflow-hidden">
      <FaRegFileAlt />

      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>

      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex justify-between items-center px-8  mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoCloseSharp />: <BsDownload size=".8em" color="#fff" /> } 
          </span>
          </div>
          {
            data.tag.isOpen && ( <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": 'bg-green-600' }  flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>) 
          }
        
       
      </div>
    </motion.div>
  );
};

export default Card;
