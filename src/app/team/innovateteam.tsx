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

const InnovateTeam = async () => {
    const member = await client.fetch(`*[_type == "ourteam"]{
  username,
  profession,
  "imageUrl": userImage.asset->url
}`)


    return (
        <div className="w-screen bg-white flex justify-center  mt-10 items-center py-12">
            <div className=" mx-auto px-4">
                {/* Heading */}
                <div className={`text-center mb-12 ${montserrat.className}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
                </div>

                {/* Card  */}
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
                    {member.map((members: Tmember, index: number) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center hover:scale-95 duration-500">
                            <OurTeamCard username={members.username} profession={members.profession} userImage={members.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InnovateTeam;