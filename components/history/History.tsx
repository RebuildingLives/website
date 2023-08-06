import React from "react";

const embedId = "_AZ2D6BB794";

const History = () => {
  return (
    <section className="px-4 md:py-18 mx-auto max-w-7xl mt-4 md:mt-12 lg:mt-24">
      <h2 className="text-heading2 text-center">How it all started….</h2>
      <br />
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  );
};

export default History;
