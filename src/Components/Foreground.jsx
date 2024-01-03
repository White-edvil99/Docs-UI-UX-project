import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
 
const refElem = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".6mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing this is card withe heavy material download.",
      filesize: ".3mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "upload Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "upload how",
        tagColor: "green",
      },
    },
  ];
  return (
    <>
      <div ref={refElem} key={data.filesize} className="fixed flex gap-10 flex-wrap z-[3] p-5 top-0 left-0 w-full h-full">
      {data.map((item, index)=> <Card  data={item} reference = {refElem} />)}
      </div>
    </>
  );
};
export default Foreground;
