const { default: Add } = require("../page/Add/Add");
const { default: Detail } = require("../page/Detail/Detail");
const { default: Home } = require("../page/Home/Home");
const { default: SiteRoot } = require("../page/SiteRoot");
const { default: Wishlist } = require("../page/Wishlist/Wishlist");


const Router=[{
    path:"/",
    element:<SiteRoot/>,

    children:[{
        path:"",
        element:<Home/>
    },
{
    path:":id",
    element:<Detail/>
},

{
    path:"wishlist",
    element:<Wishlist/>
},

{
    path:"add",
    element:<Add/>
}
]
}]


export default Router