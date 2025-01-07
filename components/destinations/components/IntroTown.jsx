const IntroTown = () => {
  return (
    <>
      <div className="col-xl-8">
        <p className="text-15 text-dark-1">
          London is a shining example of a metropolis at the highest peak of
          modernity and boasts an economy and cultural diversity that’s the envy
          of other global superpowers.
          <br />
          <br />
          Take the opportunity to acquaint yourself with its fascinating history
          chronicled by institutions like the British Museum as well as see how
          far it has come by simply riding the Tube and passing by celebrated
          landmarks like Buckingham Palace, Westminster Abbey, and marvels like
          Big Ben, the London Eye, and the Tower Bridge.
          <br />
          <br />
          You can also immerse yourself in its ever-evolving and impactful
          culture by visiting places like the National Gallery, the Tate Modern,
          West End, Abbey Road, the Royal Albert Hall, Oxford Street and the
          Westfield Shopping Centers, and areas referenced and seen in
          literature and film.
        </p>
       
      </div>
      {/* End .col */}

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          <img
            src="/img/pages/destinations/map.png"
            alt="image"
            className="col-12 rounded-4"
          />
          
        </div>
      </div>
    </>
  );
};

export default IntroTown;
