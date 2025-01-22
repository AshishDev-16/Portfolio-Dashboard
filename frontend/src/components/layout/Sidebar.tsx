"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { 
    name: "Dashboard", 
    href: "/dashboard", 
    icon: "/pajamas_overview.svg"
  },
  { 
    name: "Portfolio", 
    href: "/portfolio",
    icon: "/material-symbols_campaign.svg"
  },
  { 
    name: "Inputs", 
    href: "/inputs", 
    icon: "/material-symbols_design-services-outline-sharp.svg"
  },
  { 
    name: "Profile", 
    href: "/profile", 
    icon: "/material-symbols_contacts.svg"
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-[#DF5532] text-white w-[236px] h-[1024px]">
      {/* Logo */}
      <div className="h-[63px] px-4 flex items-center gap-1">
        <Image 
          src="/fad_logo-juce.svg"
          alt="Logo"
          width={30}
          height={30}
        />
        <span className="text-2xl font-bold text-white h-[34px] w-[16px] font-roboto">LOGO</span>
      </div>

      {/* Navigation */}
      <div className="pt-[77px]">
        <nav className="h-[184px] flex flex-col">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center h-[46px] px-6 ${
                  isActive 
                    ? "[background:linear-gradient(91.41deg,#FFAD98_0%,#DF5532_100%)] rounded-l-[9px]" 
                    : "hover:bg-white/10"
                } transition-colors`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image 
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    className={`w-5 h-5 ${isActive ? '' : 'brightness-0 invert'}`}
                  />
                </div>
                <span className="ml-3 text-[15px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 