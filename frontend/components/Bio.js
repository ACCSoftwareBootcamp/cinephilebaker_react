import React from "react";

function Bio(props) {
  return (
    <p className="text-justify pb-4 px-5 md:px-0">
      Steven resides in Austin, TX and explores storytelling and representation
      through film photography. With a background in film production and
      studies, Steven takes inspiration from cinema as well as the lives of the
      people around him. By portraying reality by way of the hyper reality and
      making the everyday cinematic, Stevens goal is to reflect what makes us
      human and unique within a concept informed by motion picture film; his
      desire is that you don't just see a portrait but rather a whole world you
      can visualize and a story you want to explore that goes beyond the
      photograph, and beyond reality.
      {props.about}
    </p>
  );
}

export default Bio;
