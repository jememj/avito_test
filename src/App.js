import { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import './index.css';
import Modal from './components/Modal';

export default function App() {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://boiling-refuge-66454.herokuapp.com/images`)
    .then((data) => {
      setImages(data.data)
    });
  }, []);
  
  const handleModalClose = () => setShow(false);
  const handleModalOpen = (e) => {
    axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${e.id}`)
        .then((data) => {
          setModalInfo(data.data);
          setShow(true);
    })
  }
  return (
    <Container>
      <Title>test app</Title>
      <Wrapper>
        {images.map(img => (
          <Button onClick={() => handleModalOpen(img)}>
            <Block key={img.id} src={img.url}></Block>
          </Button>
        ))}
      </Wrapper>
      <Footer>
        <Line />
        <br/>© 2018-2019
      </Footer>
      <Modal modalInfo={modalInfo} handleModalClose={handleModalClose} show={show}></Modal>
    </Container>
  );
}

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  text-transform: uppercase;
  color: #CCCCCC;
  margin: 12px;
`
const Line = styled.div`
  width: 728px;
  border: 1px solid #CCCCCC;
`
const Button = styled.div`
  display: block;
  margin: 0 auto;
`
const Title = styled.div`
  font-size: 18px;
  margin: 15px;
  font-family: Roboto Condensed;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  color: #000000;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Block = styled.img`
  margin: 10px 15px;
  cursor: pointer;
`