import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Tmember } from "../../../utils/componentType";




export default function OurTeamCard(team: Tmember) {
    return (
        <>
            <div className="w-[238px] h-[315px] mx-auto">
                <div className="w-[239px] h-[327px]">
                    <div className={` w-[316] h-[283px] flex flex-col hover:scale-95 duration-500 bg-white`}>
                        <Image src={team.imageUrl} alt='image' width={250} height={300} className='w-[316px] h-[231px]' />
                        <div className='w-full h-[152px] flex justify-center items-center flex-col gap-[10px]'>
                            <h5 className='font-bold text-[16px] leading-[24px] text-[#252B42]'>{team.username}</h5>
                            <h6 className='font-bold text-[14px] leading-[24px] text-[#737373]'>{team.profession}</h6>
                            <div className='w-[112px] h-[24px] flex justify-center items-center gap-5 text-[#23A6F0]'>
                                <FaFacebook className='w-4 h-4' />
                                <FaInstagram className='w-4 h-4' />
                                <FaTwitter className='w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}