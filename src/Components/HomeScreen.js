import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Container, Row,Col } from 'react-bootstrap'

const HomeScreen = () => {
    const [num, setNum] = useState(25);
    const [moves, setMoves] = useState();
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [order, setOrder] = useState();
    const [weight, setWeight] = useState();

    useEffect(() => {
        const getData =async ()=> {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
       setMoves(res.data.moves.length);
       setName(capitalizeFirstLetter(res.data.name));
       setImage(res.data.sprites.other.dream_world.front_default);
       setOrder(res.data.order);
       setWeight(res.data.weight)
    }
    getData();  
    })

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <Container className="p-3">
        <h2 className="text-center m-2 p-1">Pokemon</h2>
        <Row>
            <Col md={6}  className="mt-5">
            <h4>Name : <span style={{color:'red'}}>{name}</span></h4>
            <h4>Number of Moves : <span style={{color:'red'}}>{moves}</span></h4>
            <h4>Order : <span style={{color:'red'}}>{order}</span></h4>
            <h4>Weight : <span style={{color:'red'}}>{weight}</span></h4>
            </Col>
            <Col md={6}>
            <img src={image} alt="character" style={{width:'250px',height:"250px"}}/>
            </Col>
        </Row>
        <h6>Move the slider below to see different characters Information</h6>
        <h5>1<input type="range" min="1" max="100" onChange={(e)=>setNum(e.target.value)} style={{width:'400px',height:'25px'}}/>100</h5>
  <h4>Value: <span style={{color:'red'}}>{num}</span></h4>
        </Container>
    )
}

export default HomeScreen
