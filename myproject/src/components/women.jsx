import { Component } from "react";
import MenCard from "./menCard";
import WomenCard from "./womencard";

export default class WomenProdect extends Component {
    products=[
        {id:"1", productName:"T-Shirt" , Price:"$50" , imgscr:"https://img.shopstyle-cdn.com/sim/3d/81/3d81199421647b5fd7025ad9ceb32196_best/hollister-cool-girl-collegiate-t-shirt-in-light-blue.jpg"},
        {id:"2", productName:"T-Shirt" , Price:"$70" , imgscr:"https://image1.superdry.com/static/images/optimised/upload9223368955666095469.jpg"},
        {id:"3", productName:"T-Shirt" , Price:"$99" , imgscr:"https://assets.ajio.com/medias/sys_master/root/20220405/KevA/624b3cfeaeb26921af0a846e/-473Wx593H-441137206-navy-MODEL.jpg"},
        {id:"4", productName:"T-Shirt" , Price:"$40" , imgscr:"https://lp2.hm.com/hmgoepprod?set=source[/8b/ec/8beced3d1a6b3b525f8b873cb76a4334658b6e19.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"},
        {id:"5", productName:"Patern Dress" , Price:"$200" , imgscr:"https://images.asos-media.com/products/asos-design-padded-shoulder-short-sleeve-t-shirt-mini-dress-in-red-velvet-leopard-print/21890035-1-redleopard?$n_640w$&wid=513&fit=constrain"},
        {id:"6", productName:"Summer Dress" , Price:"$160" , imgscr:"https://img.shopstyle-cdn.com/sim/6f/bc/6fbce61e10b836e8a3dcd94a1d81ec30_best/womens-slinky-jersey-ditsy-empire-line-midi-dress.jpg"},
        {id:"7", productName:"Purple Dress" , Price:"$300" , imgscr:"https://www.rw-co.com/on/demandware.static/-/Sites-Rwco-site-catalog/default/dwf4b1e309/images/Ambassadors%20FA22/Sarah%20Nurse/Sarah_Nurse_L.jpg"},
        {id:"8", productName:"Long Dress" , Price:"$500" , imgscr:"https://ae01.alicdn.com/kf/Hc7ebde3d6bc54eb29868cf0686182a28h.jpg"},
        {id:"9", productName:"Puffer Jackets" , Price:"$500" , imgscr:"https://assets.ynap-content.com/story-metadata-image-1633604419682.jpeg"},
        {id:"10", productName:"Women Hoode" , Price:"$100" , imgscr:"https://www.na-kd.com/globalassets/nakd_city_print_sweatshirt_1100-004981-0260_01g.jpg?ref=DC3EB208A2"},
        {id:"11", productName:"Sweat Shirt" , Price:"$99" , imgscr:"https://cf.shopee.com.my/file/9de60f3ad6c395b4d8c149398565bec8"},
        {id:"12", productName:"Long Coate" , Price:"$799" , imgscr:"https://cdn.cliqueinc.com/posts/232551/best-camel-coats-232551-1636396829500-square.700x0c.jpg"},
    

    ]
render() {

    return (
        <div className="p-5  text-center">
            <div className="container">
                <div className="row ">
                    {this.products.map((product) => {
                        return <WomenCard prdctinfo={product} key={product.id}/>;

                    })}
                </div>
            </div>

        </div>
    
        


    );
}
}