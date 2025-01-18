

import Card from "../components/card";
import { client } from "@/sanity/lib/client";
import { Montserrat } from 'next/font/google';

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



const BestProduct = async () => {
  const data = await client.fetch(`*[_type == "product"]{
  id,
  title,
  description,
  price,
  discountedprice,
  "imageUrl":productImage.asset->url
}`)
  

  return (
    <div className="w-screen mt-10 flex justify-center  bg-[#FAFAFA]">
      <div className="w-[328px] md:w-[1124px] py-[80px] flex flex-col items-center gap-[120px]">

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px]">
          {data.slice(8,16).map((product: Tproduct) => (
            <div key={product.id}>

              <Card
                title={product.title}
                description={product.description}
                discountedprice={product.discountedprice}
                price={product.price}
                imageUrl={product.imageUrl}
                 id={product.id} />

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BestProduct