import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import api from "../../../api";
import { readArticlesShoppingAction } from "../../../actions/shoppingActions";
import { Col } from 'react-bootstrap';
import ShoppingViewContainer from "../view/container";

const ShoppingPresentation = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        api.get('/Articles')
        .then((res) => {
            if (!res.err) {
                dispatch(readArticlesShoppingAction(res));
              } else {
               // dispatch(noAction());
               console.log("no action");
              }
        })
    },[dispatch]);

    return(
      
        <Col>
         <ShoppingViewContainer shopping={state.shopping} dispatch={dispatch}></ShoppingViewContainer>
      </Col>
    );
}

export default ShoppingPresentation;