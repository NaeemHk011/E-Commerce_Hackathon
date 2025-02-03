import React from 'react';
import Image from 'next/image';
import editpack1 from "../../../public/Home/editpick1.png";
import editpack2 from "../../../public/Home/editpick2.png";
import editpack3 from "../../../public/Home/editpick3.png";
import editpack4 from "../../../public/Home/editpick4.png";
import Button from '../components/button';

const Editpick = () => {
  return (
    <div className="w-full h-auto px-4 sm:px-8 md:px-16 lg:px-[195px] flex flex-col bg-[#FAFAFA]">
      <div className="w-full py-10 md:py-20 flex flex-col items-center">
        <h2 className="text-center text-lg md:text-2xl font-bold text-[#252B42]">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between
        </p>

        {/* Image Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* Image 1 */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[510px]">
            <Image src={editpack1} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
            <div className="absolute left-4 bottom-4">
              <Button
                title="MEN"
                style="w-[120px] sm:w-[170px] h-[40px] sm:h-[48px] bg-[#FFFFFF] text-black text-sm sm:text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[510px]">
            <Image src={editpack2} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
            <div className="absolute left-4 bottom-4">
              <Button
                title="WOMEN"
                style="w-[120px] sm:w-[170px] h-[40px] sm:h-[48px] bg-[#FFFFFF] text-black text-sm sm:text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold"
              />
            </div>
          </div>

          {/* Image 3 & 4 Container */}
          <div className="flex flex-col gap-6">
            {/* Image 3 */}
            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[242px]">
              <Image src={editpack3} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
              <div className="absolute left-4 bottom-4">
                <Button
                  title="ACCESSORIES"
                  style="w-[120px] sm:w-[170px] h-[40px] sm:h-[48px] bg-[#FFFFFF] text-black text-sm sm:text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold"
                />
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative w-full h-[150px] sm:h-[200px] lg:h-[242px]">
              <Image src={editpack4} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
              <div className="absolute left-4 bottom-4">
                <Button
                  title="KIDS"
                  style="w-[120px] sm:w-[170px] h-[40px] sm:h-[48px] bg-[#FFFFFF] text-black text-sm sm:text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpick;
