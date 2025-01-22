"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", icon: "/Home.svg" },
  { name: "Portfolio", href: "/portfolio", icon: "/Portfolia.svg" },
  { name: "Input", href: "/inputs", icon: "/Input.svg" },
  { name: "Profile", href: "/profile", icon: "/Profile.svg" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden">
      <div className="flex justify-around items-center h-[72px] bg-white rounded-t-[20px] shadow-lg">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center ${
                isActive ? "text-[#DF5532]" : "text-[#D6D1D5]"
              }`}
            >
              <div className="mb-1">
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={20} 
                  height={20}
                  className={isActive ? "text-[#DF5532]" : ""}
                />
              </div>
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 