import { title } from "process";


export  const product ={
    name:"product",
    title:"Product",
    type:"document",
    fields:[
        {name:"id",
        type:"number",
        title:"Product Id",
        },
        {name:"title",
         type:"string",
         title:"Title"
        },
        {name:"description",
        type:"string",
        title:"Short Description"
        },
        {name:"longdescription",
        type:"text",
        title:"Long Description",
        },
        {name:"rating",
        type:"string",
        title:"Rating"
        },
        {name:"stock",
         type:"string",
         title:"Stock"
        },
        {name:"discountedprice",
        type:"number",
        title:"Discounted Price"
        },
        {name:"price",
        type:"number",
        title:"Price"
        },
        {name:"productImage",
        type:"image",
        title:"Product Image"
        },

        
    ]
}