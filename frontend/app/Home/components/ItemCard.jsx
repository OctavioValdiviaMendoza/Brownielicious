import { Lily_Script_One } from "next/font/google";

const Lily_Script_One_font = Lily_Script_One({
    weight: '400',
    subsets: ['latin'],
});

export default function ItemCard({ bgImage, itemImage, itemName, itemDescription }) {
    return (

        <div className={`w-9/12 flex flex-row justify-center 
        gap-10 rounded-xl transition-shadow hover:shadow-2xl hover:shadow-black/60 m-10`}
            style={{ backgroundImage: `url('${bgImage}')` }}>
            <div className=" flex justify-center m-3">
                <img src={itemImage} alt="Oreo Brownie" className="w-7/12 shadow-xl shadow-black/100" />


            </div>
            <div className="w-4/12 bg-black/25 rounded-r-xl hover:bg-black/40 transition-colors duration-300">
                <div className="text-center text-2xl text-black mt-17">
                    <p className={`${Lily_Script_One_font.className}`}>{itemName}</p>
                </div>
                <div className="text-white text-center p-4">
                    {itemDescription}
                </div>
            </div>
        </div>
    )
}