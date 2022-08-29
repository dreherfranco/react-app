import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { noAction, readAction } from "../../../actions/articlesActions";
import api from "../../../api";
import { url } from "../../../global/url";
//import axios from "axios";
const PresentationArticles = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { articles } = state.articles;
    const articlesUrl = url + '/Articles';

    useEffect(() => {
        api.get('/Articles')
        .then((res) => {
            if (!res.err) {
                dispatch(readAction(res));
                console.log(state);
              } else {
                dispatch(noAction());
              }
        })
    },[articlesUrl, dispatch]);
    return(
      <h1>articulos</h1>
    );
}

export default PresentationArticles;