const { addProduct,resetProducts, removeProduct, getProduct, updateProduct} = require('./product');

afterEach(() => {
    resetProducts();
});

describe('addProduct',()=>{
    it('should throw an error if you not have a name and price', ()=>{
        expect(()=> addProduct()).toThrow('You need name and price');
        expect(()=> addProduct('Product')).toThrow('You need name and price');
        expect(()=> addProduct(1)).toThrow('You need name and price');
    });
    it('should throw an error if the product is duplicate',()=>{
        addProduct('Product', 1);
        expect(()=>addProduct('Product',1)).toThrow(`Product is duplicated`);
    });
});

describe('removeProduct',()=>{
    it('should throw an error if id not exist', ()=>{
        expect(()=> removeProduct(1)).toThrow('id not exist');
    });
});

describe('getProduct',()=>{
    it('should throw an error if id not exist', ()=>{
        expect(()=> getProduct(1)).toThrow('id not exist');
    });
});

describe('updateProduct',()=>{
    beforeEach(()=>{
        addProduct('Product1',1);
    });

    it('should update product if only have name', () => {
        updateProduct(1, 'newName', undefined);
        const product = getProduct(1); // Obtener el producto actualizado
        expect(product.name).toBe('newName');
    });
    
    it('should update product if only have price', () => {
        updateProduct(1, undefined, 2);
        const product = getProduct(1); // Obtener el producto actualizado
        expect(product.price).toBe(2);
    });
    
    it('should update product if have name and price', () => {
        updateProduct(1, 'updatedName', 2);
        const product = getProduct(1); // Obtener el producto actualizado
        expect(product.name).toBe('updatedName');
        expect(product.price).toBe(2);
    });

    it('should throw an error if id not exist', ()=>{
        expect(()=> updateProduct(2,'regla',2)).toThrow('id not exist');
    });
    
/*    
    it('should update product if only have name', ()=>{
        expect(()=> updateProduct(1,'newName',undefined)).not.toThrow();
        expect(updateProduct.name).toBe('newName')
    });
    it('should update product if only have price', ()=>{
        expect(()=> updateProduct(1,undefined,2)).not.toThrow();
        expect(updateProduct.price).toBe(2);
    });
    it('should update product if have name and price', ()=>{
        expect(()=> updateProduct(1,'updateName',2)).not.toThrow();
        /* const updateProduct=getProduct(1); */
/*         expect(updateProduct.name).toBe('updatedName');
        expect(updateProduct.price).toBe(2);

    });  */
});