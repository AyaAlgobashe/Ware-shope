import { Component } from "react";
import MenCard from "./menCard";

export default class MenProdect extends Component {
    products=[
        {id:"1", productName:"Sweet Shirt" , Price:"$80" , imgscr:"https://www.dickieslife.com/media/catalog/product/cache/e57fc8bf58628ebb14e1f384e1742bbe/d/k/dk0a4xceblk1-1.jpg"},
        {id:"2", productName:"Jacket Jeans" ,Price:"$250", imgscr:"https://media.wrangler.com/i/wrangler/6up-me-jackets-aug-2022"},
        {id:"3", productName:"Coate" ,Price:"$400", imgscr:"https://imageio.forbes.com/specials-images/imageserve/621907c6a1c1d351180dadb8/Buck-Mason-Dry-Waxed-Canvas-N1-Deck-Jacket-10/960x0.jpg?format=jpg&width=960"},
        {id:"4", productName:"Coate" ,Price:"$380", imgscr:"https://i.pinimg.com/736x/32/6a/53/326a5352c343de5d1c01fe5fda88628e.jpg"},
        {id:"5", productName:"Sleeve Shirt" ,Price:"$50", imgscr:"https://i.pinimg.com/originals/25/4e/0b/254e0bb4d5aee08b28826e9287573378.jpg"},
        {id:"6", productName:"Sleeve Shirt" ,Price:"$40", imgscr:"https://cdn.shopify.com/s/files/1/0981/8178/files/pattern-on-top-outfit-navy-pindot-shirt.jpg?5781743328389535709"},
        {id:"7", productName:"T-Shirt" ,Price:"$85", imgscr:"https://dfcdn.defacto.com.tr/7/X1925AZ_22SM_BG699_01_02.jpg"},
        {id:"8", productName:"T-Shirt" ,Price:"$70", imgscr:"https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/13328675/58181460/T3563AZ_21SP_WT34_01_01__00352.1658515071.jpg?c=1"},
        {id:"9", productName:"Suite" ,Price:"$700", imgscr:"https://dfcdn.defacto.com.tr/304/V5479AZ_21AU_GR221_01_01.jpg"},
        {id:"10", productName:"Cagol Suite" ,Price:"$600", imgscr:"https://dfcdn.defacto.com.tr/304/V5716AZ_21AU_BK27_01_01.jpg"},
        {id:"11", productName:"T-Shirt" ,Price:"$75", imgscr:"https://dfcdn.defacto.com.tr/7/X4788AZ_22SM_WT34_06_02.jpg"},
        {id:"12", productName:"T-Shirt" ,Price:"$60", imgscr:"https://dfcdn.defacto.com.tr/7/X3909AZ_22SM_ER105_01_02.jpg"},

    ]
render() {

    return (
        <div className="p-5  text-center">
            <div className="container">
                <div className="row ">
                    {this.products.map((product) => {
                        return <MenCard prdctinfo={product} key={product.id}/>;

                    })}
                </div>
            </div>

        </div>
    
        


    );
}
}
