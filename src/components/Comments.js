import dayjs from 'dayjs';
import styled from 'styled-components';
import '../index.css';
export default function Comments({modalInfo}) {
    if (modalInfo.comments == 0){
        return <FormComment></FormComment>
    }
    return (
        <>
            {modalInfo.comments?.map((info) => (
                <FormComment key={info.id}>
                    <DateComment>
                        {dayjs(info.date).format('DD.MM.YYYY')}
                    </DateComment>
                    <TextComment>
                        {info.text}
                    </TextComment>
                </FormComment>  
            ))}
        </>
    );
}

const FormComment = styled.div`
    margin-bottom: 20px;
    margin-right: 20px;
    align-items: start;
    text-align: start;
`
const TextComment = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    color: #000000;
`
const DateComment = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color: #999999;
`