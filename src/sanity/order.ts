

export const order = {
    name:"order",
    type:"document",
    title:"Order",
    fields:[
        {
            name:'fullname',
            title:'Full Name',
            type:'string'
        },
        {
            name:'email',
            title:'Email',
            type:'string'
        },
        {
            name:'phone',
            title:'Phone Number',
            type:'string'
        },
        {
            name:'address',
            title:'Address',
            type:'string'
        },
        {
            name:'city',
            title:'City',
            type:'string'
        },
        {
            name:'state',
            title:'State',
            type:'string'
        },
        {
            name:'zipcode',
            title:'Zip Code',
            type:'string'
        },
        {
            name:'country',
            title:'Country',
            type:'string'
        },
        {
            name:"items",
            title:'Items',
            type:'array',
            of:[{type:'reference',to:{type:'product'}}]
        },
        {
            name:'total',
            title:'Total',
            type:'number'
        },
        {
            name: "orderDate",  
            title: "Order Date",
            type: "datetime"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" },
                    { title: "Dispatch", value: "dispatch" }
                ],
                layout: "radio"
            },
            initialValue: "pending"
        }
    ]
}