import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <BoxColor r={255} g={0} b={0} />
      <Random min={1} max={10} />
      <IdCard
        lastName="Salazar"
        firstName="Gabe"
        gender="male"
        height={6}
        birth={new Date('1998-08-26')}
        picture="https://media.licdn.com/dms/image/C4E03AQFh6r1AEIIjbQ/profile-displayphoto-shrink_800_800/0/1659391179393?e=1689206400&v=beta&t=vGTZwD0BqiEJ9xZFXYI8A558dUOKlXh8DcJLf9sBAhw"
      />
      <Greeting lang="de">Johann</Greeting>
      <Greeting lang="es">Juan</Greeting>
      <Greeting lang="en">John</Greeting>
      <Greeting lang="fr">Jean</Greeting>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
