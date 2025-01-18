import Image from "next/image";
import coloursIcon from "../../../public/Home/product-colors.png"
import Link from "next/link";
import { Montserrat } from 'next/font/google';
import ColorCircles from "./colors";

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

interface Tproduct {
  title: string;
  description: string;
  discountedprice: number;
  price: number;
  imageUrl: string;
  id:string;
}

export default function Card(product: Tproduct) {
  return (
    <>
      <div className="w-[238px] h-[530px] mx-auto">
        <div className="w-[239px] h-full rounded-md shadow-lg">
          <Image src={product.imageUrl} alt={product.title} width={200} height={250} className="w-[250px] h-[350px] object-cover  hover:scale-95 duration-500 hover:opacity-80" />
          <Link href={`productList/${product.id}`}>
            <div className={`${montserrat.className} w-full h-[158px] py-[25px] px-[5px] flex flex-col items-center justify-center `}>
              <h5 className="w-full  font-bold text-[16px] leading-[20px] text-center text-[#252B42]">
                {product.title}
              </h5>
              <p className="w-full  font-bold text-[12px] leading-[20px] text-center text-[#737373]">
                {product.description}
              </p>
              <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
                <h5 className=" font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                  ${product.price}
                </h5>
                <h5 className=" font-bold text-[16px] leading-[24px] text-[#23856D]">
                  ${product.discountedprice}
                </h5>
              </div>
              <div className="w-[82.2px] h-[16px] flex justify-center">
                <ColorCircles/>
              </div>
            </div></Link>
        </div>
      </div>
    </>
  );
}