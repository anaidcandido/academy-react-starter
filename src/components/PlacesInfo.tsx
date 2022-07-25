interface PlaceInfoProps {
    title: string;
    name: string;
    country: string;
    image: string;
    mapsLocation: string;
    reason: string;
  }
  
  function PlacesInfo(props: PlaceInfoProps): JSX.Element {
    return (
      <main>
        <img src={props.image} alt="Edinburgh Castle" />
        <h2>{props.title}</h2>
        <h3>
          {props.name}, {props.country} (
          <a href={props.mapsLocation}>maps link</a> )
        </h3>
        <p>{props.reason}</p>
      </main>
    );
  }
  
  export default PlacesInfo;