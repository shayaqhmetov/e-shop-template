import { useContext } from 'react';

import { ProductContext } from '../../contexts/product.context';

import ProductCard from '../../components/product-card/product-card.template';

import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className='products-container'>
            { products ? products.map(product => <ProductCard key={product.id} product={product} />) : <h1>No products</h1> }
        </div>
    )
}

export default Shop;