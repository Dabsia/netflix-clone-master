import React, {useEffect} from "react";
import requests, {initialURL} from "../../Requests";

const NetflixShow = () => {

  useEffect(() => {
    fetch(`${initialURL}${requests.fetchHorrorMovies}`).then(res => res.json()).then(data => console.log(data))
  }, [])

  

  
  return (
    <div>
      <h2>NetFlix</h2>
    </div>
  );
};

export default NetflixShow;
