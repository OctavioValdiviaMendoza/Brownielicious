import Link from "next/link";
import Image from "next/image";
import { Lily_Script_One } from "next/font/google";
import {
  HouseHeart,
  Package,
  Truck,
  History,
  UserRoundCog,
  LogOut,
} from "lucide-react";

const lily = Lily_Script_One({ subsets: ["latin"], weight: "400" });
export default function Sidebar() {
  return (
    <div
      className="bg-[#FC51AF] w-[300px] min-h-screen p-4  place-content-start flex flex-col 
        flex-start gap-4 border-black border-2 rounded resize-none"
    >
      <div className="flex flex-row gap-4">
        <Image
          className="mb-4 border-black border-1 rounded"
          src="/brownieliciousLogo.jpg"
          alt="Brownielicious Logo"
          width={40}
          height={40}
        />

        <Link
          className={`${lily.className} text-white text-3xl flex flex`}
          href="/Home"
        >
          Brownielicious
        </Link>
      </div>
      <Link
        className={`${lily.className} text-white text-3xl hover:bg-[#ff75c1] w-full`}
        href="/Home"
      >
        <HouseHeart className="inline mr-2 w-9 h-9" />
        Home
      </Link>
      <Link
        href=""
        className={`${lily.className} text-white text-3xl hover:bg-[#ff75c1] w-full`}
      >
        <Package className="inline mr-2 w-9 h-9" />
        Brownie Boxes
      </Link>
      <Link
        href=""
        className={`${lily.className} text-white text-3xl hover:bg-[#ff75c1] w-full`}
      >
        <Truck className="inline mr-2 w-9 h-9" />
        Catering
      </Link>
      <Link
        href=""
        className={`${lily.className} text-white text-3xl hover:bg-[#ff75c1] w-full`}
      >
        <History className="inline mr-2 w-9 h-9" />
        Order History
      </Link>
      <Link
        href=""
        className={`${lily.className} text-white text-3xl hover:bg-[#ff75c1] w-full mt-auto`}
      >
        <UserRoundCog className="inline mr-2 w-9 h-9" />
        Account Settings
      </Link>
      <div className="flex flex-row gap-4">
        <Image
          className="mb-4 border-black border-1 rounded-full mt-2"
          src="/blankpfp.jpg"
          alt="Profile Picture"
          width={50}
          height={40}
        />
        <div className="flex flex-row gap-0">
          <div className="flex flex-col gap-0 ml-2 mt-1">
            <>
              <h1 className={`${lily.className} text-white text-1xl mt-1`}>
                JOHN DOE
              </h1>
            </>
            <>
              <h1 className={`${lily.className} text-white text-sm`}>
                {" "}
                Customer
              </h1>
            </>
          </div>
          <LogOut className="inline ml-15 mt-3 w-7 h-7 mt-4 cursor-pointer hover:text-black text-white" />
        </div>
      </div>
    </div>
  );
}
