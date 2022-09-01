import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux"
//import { noAction, readAction } from "../../../actions/articlesActions";

import api from "../../../api";
import { addToCart, readArticlesShoppingAction } from "../../../actions/shoppingActions";
import {Button} from 'react-bootstrap';

const PresentationArticles = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        api.get('/Articles')
        .then((res) => {
            if (!res.err) {
                //dispatch(readAction(res));
                dispatch(readArticlesShoppingAction(res));
              } else {
               // dispatch(noAction());
               console.log("no action");
              }
        })
    },[dispatch]);

    return(
      
        <React.Fragment>
        {state.shopping.articles.map((article,i)=>(
          <div key={i}>
            <p>{article.name}</p>
            <p>{article.stock}</p>
            
            <Button variant="primary" onClick={()=>dispatch(addToCart(article.id))}>Agregar</Button>
          </div>
        ))}
      </React.Fragment>
    );
}

export default PresentationArticles;