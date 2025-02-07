let products=[];
let id=0;

const addProduct=(name,price)=>{
    if (name===undefined ||price===undefined){
        throw new Error('You need name and price')
    }
    const exist=products.find(product=>product.name.toLowerCase()===name.toLowerCase());
    if (exist){
        throw new Error(`${name} is duplicated`);
    }
    const product={
        id:++id,
        name,
        price
    }
    products.push(product);
};

const resetProducts=()=>{
    products=[];
    id=0;
}
const getProduct=(id)=>{
    return(products.find(product=>product.id===id))||
    (()=>{ throw new Error('id not exist');})();
};

const removeProduct=(id)=>{
    const remProduct=products.findIndex(product=>product.id===id);
    if(remProduct === -1){
        throw new Error('id not exist')
    }
    products.splice(remProduct,1);
}

const updateProduct=(id,name,price)=>{
    const product=getProduct(id);
    if(!product){
        throw new Error('id not exist');
    }
    if(name!==undefined){
        product.name=name;
    }
    if(price!==undefined){
        product.price=price;
    }
}


module.exports={ addProduct,resetProducts, removeProduct, getProduct, updateProduct}