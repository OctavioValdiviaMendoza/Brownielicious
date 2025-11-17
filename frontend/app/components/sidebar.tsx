import Link from "next/link";
import Image from 'next/image'
import {Lily_Script_One} from 'next/font/google'

const lily = Lily_Script_One({subsets: ['latin'], weight: '400'})
export default function Sidebar() {
    return (
        <div className="bg-[#FC51AF] w-[300px] min-h-screen p-4  place-content-start flex flex-col 
        flex-start gap-4 border-black border-2 rounded" >
            <div className="flex flex-row gap-4">
                <Image className= "mb-4 border-black border-1 rounded" 
                src="/brownieliciousLogo.jpg" alt="Brownielicious Logo" width={40} height={40} />
                <Link className ={`${lily.className} text-white text-[30px]`} href="/Home">Brownielicious</Link>
            </div>
            <Link href="" className ={`${lily.className} text-white text-[30px] `}>Brownie Boxes</Link>
            <Link href="" className ={`${lily.className} text-white text-[30px]`}>Catering</Link>
            <Link href="" className ={`${lily.className} text-white text-[30px]`}>Order History</Link>
        </div>
    );
}