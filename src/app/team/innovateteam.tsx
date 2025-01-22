"use client"; 
import React, { useEffect, useState } from "react";
import OurTeamCard from "../components/ourTeamCard";
import { client } from "@/sanity/lib/client";
import { Tmember } from "../../../utils/componentType";



const InnovateTeam = () => {
  const [members, setMembers] = useState<Tmember[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const data = await client.fetch(`*[_type == "ourteam"]{
        username,
        profession,
        "imageUrl": userImage.asset->url
      }`);
      setMembers(data);
    };

    fetchMembers();
  }, []);

  return (
    <div className="w-screen bg-white flex justify-center mt-10 items-center py-12">
      <div className="mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center hover:scale-95 duration-500"
            >
              <OurTeamCard
                username={member.username}
                profession={member.profession}
                userImage={member.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovateTeam;
