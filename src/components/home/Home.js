import React from "react";
import { useSelector } from "react-redux";
import Counter from "../counter/Counter";

export default function Home() {
    console.log(useSelector((state)=>state));
    return (
        <React.Fragment>
            <Counter />
        </React.Fragment>
    );
}
