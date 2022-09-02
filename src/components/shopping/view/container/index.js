import React from "react";
import ShoppingViewArticle from "../presentation";

const ShoppingViewContainer = ({ shopping, dispatch }) => {
    return(
      
        <React.Fragment>
            {shopping.articles.map((article,i)=>(
                <ShoppingViewArticle article={article} dispatch={dispatch} key={i} />
            ))}
        </React.Fragment>
    );
}

export default ShoppingViewContainer;