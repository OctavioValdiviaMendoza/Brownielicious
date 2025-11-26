import Sidebar from "../components/sidebar"
import ItemCard from "./components/ItemCard";
import "../globals.css";


export default function Home() {

    const name: string = "Chocolate Brownie"
    const description: string = "Delicious chocolate brownie with a rich and fudgy texture, topped with a drizzle of chocolate ganache.ocolate brownie with a rich and fudgy texture, topped with a drudgy texture, topped with a drizzle of chocolate"
    const bgImage: string = "/Chocolate_Bg_ItemCard.jpeg"
    const itemImage: string = "/bronie.png"

    return (<>
        <ItemCard bgImage={itemImage} itemImage={itemImage} itemName={name} itemDescription={description} side={"left"} />
        <ItemCard bgImage={bgImage} itemImage={itemImage} itemName={name} itemDescription={description} side={"right"} />



    </>)
}