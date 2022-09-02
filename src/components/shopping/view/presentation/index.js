import React from "react";
import { addToCart } from "../../../../actions/shoppingActions";
import {Button} from 'react-bootstrap';

const ShoppingViewArticle = ({ article, dispatch }) => {
    return(
            <div>
                <p>{article.name}</p>
                <p>{article.stock}</p>     
                <Button variant="primary" onClick={()=>dispatch(addToCart(article.id))}>Agregar</Button>
            </div>
    );
}

export default ShoppingViewArticle;