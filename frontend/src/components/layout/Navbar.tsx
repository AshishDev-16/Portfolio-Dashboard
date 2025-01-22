"use client";
import { useEffect, useState } from 'react';
import { getProfile } from '@/services/api';
import { Profile } from '@/types/profile';
import Image from "next/image";

export default function Navbar() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="h-[72px] px-6 flex justify-end items-center">
        {/* Right Section */}
        <div className="flex items-center gap-8">
          {/* Notification Bell */}
          <div className="relative cursor-pointer">
            <button className="relative w-[18px] h-[20px]">
              <Image 
                src="/Vector.svg"
                alt="Notifications"
                width={18}
                height={20}
                className="text-[#303030]"
              />
              <span className="absolute -top-1 -right-1 w-[6px] h-[6px] bg-[#DF5532] rounded-full"></span>
            </button>
          </div>
          
          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src={profile?.Avatar?.url 
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${profile.Avatar.url}`
                  : '/placeholder-avatar.jpg'
                }
                alt={profile?.Name || 'Profile'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium text-[#303030]">
                  {profile?.Name || 'Guest'}
                </span>
                <Image 
                  src="/lets-icons_arrow-drop-down.svg"
                  alt="Dropdown"
                  width={24}
                  height={24}
                  className="text-[#303030]"
                />
              </div>
              <span className="text-xs text-[#8D8D8D]">
                {profile?.Role || 'User'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 