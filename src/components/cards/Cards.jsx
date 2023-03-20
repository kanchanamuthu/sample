import Card from 'react-bootstrap/Card';
import logo1 from '../../assets/images/1.png';
import logo2 from '../../assets/images/2.png';
import logo3 from '../../assets/images/3.jpg';
import logo4 from '../../assets/images/4.png';
import logo5 from '../../assets/images/5.jpg';
import logo6 from '../../assets/images/6.png';
import './cards.css';

const Cards=()=> {
  return (
<div className='div-style'>
    <Card className='card-style'>
      <Card.Body >
      <img variant="top" src={logo1} width='80px' height = '80px'/>
      <Card.Title>Angular</Card.Title>
      </Card.Body>

      <Card.Body >
      <img src = {logo2} width='80px' height = '80px'/>
      <Card.Title>React</Card.Title>
      </Card.Body>

      <Card.Body >
      <img src = {logo3} width='80px' height = '80px'/>
      <Card.Title>Python</Card.Title>
      </Card.Body>

      <Card.Body >
      <img src = {logo4} width='80px' height = '80px'/>
      <Card.Title>Java</Card.Title>
      </Card.Body>

      <Card.Body >
      <img src = {logo5} width='80px' height = '80px'/>
      <Card.Title>R</Card.Title>
      </Card.Body>

      <Card.Body >
      <img src = {logo6} width='80px'  height = '80px'/>
      <Card.Title>Kotlin</Card.Title>
      </Card.Body>


    </Card>
    </div>

  );
}

export default Cards;