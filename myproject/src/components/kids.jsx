import { Component } from "react";
import KidsCard from "./kidCard";
import MenCard from "./menCard";

export default class KidsProdect extends Component {
    products=[
        {id:"1", productName:"Mine-Dress" , Price:"$50" , imgscr:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/olivier-baby-1623232815.jpg?crop=1xw:1xh;center,top&resize=480:*"},
        {id:"2", productName:"Small-Dress" , Price:"$70" , imgscr:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pepa-and-co1-1623232825.jpg"},
        {id:"3", productName:"Girle-Dress" , Price:"$50" , imgscr:"https://i.pinimg.com/originals/12/61/d3/1261d3d2e2814926de92b9f35db532d4.jpg"},
        {id:"4", productName:"Girle-Dress" , Price:"$80" , imgscr:"https://johnlewis.scene7.com/is/image/JohnLewis/005660481alt3?$fashion-ui$"},
        {id:"5", productName:"Boy Jumsuite" , Price:"$120" , imgscr:"https://i.pinimg.com/550x/13/0e/e8/130ee8f37c085e514b2d47ef37803334.jpg"},
        {id:"6", productName:"Boy Pant" , Price:"$100" , imgscr:"https://www.honestlymodern.com/wp-content/uploads/2018/09/jumping-on-bed.jpg?w=640"},
        {id:"7", productName:"Denam Jacket Jeans" , Price:"$200" , imgscr:"https://www.next.de/nxtcms/resource/blob/5106996/bf01efdbf4a85ab92971925ea9e9c513/boys-autumn-edit-a78-144s-data.jpg"},
        {id:"8", productName:"Boy Jumsuite" , Price:"$160" , imgscr:"https://i.pinimg.com/736x/97/d2/b2/97d2b291b46c77b598e05d5f05b9fca1.jpg"},
        {id:"9", productName:"Boy T-Shirt" , Price:"$30" , imgscr:"https://cdn.shopify.com/s/files/1/1665/1305/products/wild-child-green-7-tshirt_1600x.jpg?v=1627072194"},
        {id:"10", productName:"Jacket" , Price:"$60" , imgscr:"https://www.sheknows.com/wp-content/uploads/2021/09/Screen-Shot-2022-02-17-at-9.56.44-AM.png?w=800"},
        {id:"11", productName:"Girl T-Shirt" , Price:"$70" , imgscr:"https://12.cdn.ekm.net/ekmps/shops/8647db/images/nono-kris-vintage-rose-t-shirt-14511-1-p.jpg?w=480&h=720&v=05EEBA2C-9777-4897-844E-35756CE90D7C"},
        {id:"12", productName:"Black Jacket Jeans" , Price:"$299" , imgscr:"https://www.marlot-paris.com/5302-home_default/shirt-sachou-indigo-blue-corduroy.jpg"},
        
    

    ]
render() {

    return (
        <div className="p-5  text-center">
            <div className="container">
                <div className="row ">
                    {this.products.map((product) => {
                        return <KidsCard prdctinfo={product} key={product.id}/>;

                    })}
                </div>
            </div>

        </div>
    
        


    );
}
}