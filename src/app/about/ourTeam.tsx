import React from 'react';
import OurTeamCard from '../components/ourTeamCard';
import { Montserrat } from 'next/font/google';
import { client } from '@/sanity/lib/client';

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
});



interface Tmember {
    username: string;
    profession: string;
    imageUrl: string;
}


const OurTeam = async () => {
    const member = await client.fetch(`*[_type == "ourteam"]{
      username,
      profession,
      "imageUrl": userImage.asset->url
    }`)

    return (
        <div>
            <div className='w-screen h-[1627px] md:h-[826px] flex justify-center items-center  bg-white '>
                <div className='w-full md:w-[1050px] h-[1609px] md:h-[819px] flex flex-col justify-center items-center py-[112px] gap-[112px] '>
                    {/* Heading */}
                    <div className={` ${montserrat.className}  md:w-[607px] h-[280px] md:h-[100px] flex flex-col gap-[10px] justify-center items-center `}>
                        <h2 className='font-bold text-[40px] leading-[50px] text-[#252B42]'>Meet Our Team</h2>
                        <p className='font-normal text-[14px] leading-[20px] text-[#737373] text-center'>Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    {/* card div */}
                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
                        {member.slice(6,9).map((members: Tmember, index: number) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center hover:scale-95 duration-500">
                                <OurTeamCard username={members.username} profession={members.profession} userImage={members.imageUrl} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTeam