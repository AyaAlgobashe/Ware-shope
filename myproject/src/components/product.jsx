import { Component } from "react";
import TrendsCard from "./trend";

export default class MyProdect extends Component {
    products=[
        {id:"1", productName:"Sweet Shirt" ,Price:"100 $", imgscr:"https://cf.shopee.com.my/file/9de60f3ad6c395b4d8c149398565bec8"},
        {id:"2", productName:"Men's Sweet Shirt" , Price:"80 $" , imgscr:"https://www.dickieslife.com/media/catalog/product/cache/e57fc8bf58628ebb14e1f384e1742bbe/d/k/dk0a4xceblk1-1.jpg"},
        {id:"3", productName:"Puffer Jackets" , Price:"900 $", imgscr:"https://sterlingstyleacademy.com/blog/wp-content/uploads/2021/10/Are-puffer-coats-still-in-style.jpg"},
        {id:"4", productName:"Coate" ,Price:"1050 $", imgscr:"https://stylecaster.com/wp-content/uploads/2021/11/Paris-str-F21-104.jpg?w=447"},
        {id:"5", productName:"Puffer Jackets" , Price:"800 $" , imgscr:"https://i.styleoholic.com/2021/10/02-a-pretty-winter-look-with-a-neutral-top-light-blue-jeans-white-sneakers-a-tan-midi-puffer-coat-and-a-white-beanie.jpg"},
        {id:"6", productName:"Kid Jacket" , Price:"300 $", imgscr:"https://ae01.alicdn.com/kf/Sb0d71ab62d624e9a8ec0da4c3a34c9aeh/2022-Winter-Children-s-Mid-length-Hooded-Cotton-Padded-Jacket-Boys-Girls-New-Thickened-Warm-Coats.jpg_Q90.jpg_.webp"},
        {id:"7", productName:"Men's Coat" ,Price:"550 $", imgscr:"https://imageio.forbes.com/specials-images/imageserve/621907c6a1c1d351180dadb8/Buck-Mason-Dry-Waxed-Canvas-N1-Deck-Jacket-10/960x0.jpg?format=jpg&width=960"},
        {id:"8", productName:"Kid Jacket" ,Price:"50 $", imgscr:"https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/843976.jpg"},
    ]
render() {

    return (
        <div className="p-5  text-center">
            <div className="container">
                <div className="row ">
                    {this.products.map((product) => {
                        return <TrendsCard prdctinfo={product} key={product.id}/>;

                    })}
                </div>
            </div>

        </div>
    
        


    );
}
}