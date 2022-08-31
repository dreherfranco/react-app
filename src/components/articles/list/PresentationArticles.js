import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux"
import { noAction, readAction } from "../../../actions/articlesActions";
import api from "../../../api";

const PresentationArticles = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        api.get('/Articles')
        .then((res) => {
            if (!res.err) {
                dispatch(readAction(res));
              } else {
                dispatch(noAction());
              }
        })
    },[dispatch]);

    return(
      <React.Fragment>
        
        {state.articles.articles.map((article)=>(
          <p>{article.name}</p>
        ))}

      </React.Fragment>
    );
}

export default PresentationArticles;