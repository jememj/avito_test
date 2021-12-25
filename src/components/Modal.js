import styled from 'styled-components';
import Comments from "./Comments";
import AddCommentsForm from './AddCommentsForm';

export default function Modal({modalInfo, handleModalClose, show}) {
    return (
        <ModalBackground hidden={!show}>
            <ModalCard>
                <Wrapper>
                    <Img src={modalInfo.url}></Img>
                    <AddCommentsForm id={modalInfo.id}/>
                </Wrapper>
                <Comments modalInfo={modalInfo}/>
                <ModalClose onClick={handleModalClose}>X</ModalClose>
            </ModalCard>
        </ModalBackground>
    );
}
const ModalCard = styled.div`
    margin: 0 auto;
    display: block;
    margin-top: 181px;
    width: 619px;
    height: 425px;
    background-color: lightgray;
    display: grid;
    padding: 30px;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
    background-color: #FFF;
`
const ModalBackground = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`
const Wrapper = styled.div`
    text-align: center;
`
const ModalClose = styled.div`
    right: 0px;
    cursor: pointer;
    text-align: end;
`
const Img = styled.img`
    width: 331px;
    height: 205px;
    margin-right: 15px;
    margin-bottom: 30px;
`