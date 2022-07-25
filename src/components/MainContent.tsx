import PlacesInfo from "./PlacesInfo";

function MainContent(): JSX.Element {
  return (
    <main>
      <PlacesInfo
        title={"To Edinburgh with love"}
        name={"Edinburgh"}
        country={"Scotland"}
        image={
          "https://chelseamamma.co.uk/wp-content/uploads/2017/03/shutterstock_576394141.jpg"
        }
        mapsLocation={
          "https://www.google.co.uk/maps/@55.9503053,-3.1918862,14z"
        }
        reason={
          "great to walk, marvelous landsacapes, amazing views, history in every corner"
        }
      />
    </main>
  );
}

export default MainContent;
