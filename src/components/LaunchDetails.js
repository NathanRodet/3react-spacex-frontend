import React from 'react';
import { useParams } from "react-router-dom";

export default function LaunchDetails() {
  let { params } = useParams();
  console.log(params);

  return (
    <div>
      <h1>URL PARAMS IS : </h1>
      <h1>LaunchDetails {params}</h1>
    </div>
  )
}
