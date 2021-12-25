import { useState } from "react";

import styled from 'styled-components';
import axios from "axios";

export default function AddCommentsForm({id}) {
    const [formValues, setFormValues] = useState({ name: '', comment: '' });
    const [data, setData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
            'name': formValues.name,
            'comment': formValues.comment
        }).then(() => {
            alert('done');
            setData({
            ...data,
            'comments': [...data.comments, {
                'id': Math.random().toString(36),
                'text': formValues.comment,
                'date': Date.now()
            }]
            });
            setFormValues({ name: '', comment: '' });
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (
        <Form onSubmit={handleSubmit} >
            <Input onChange={handleChange} type="text" name="name" placeholder="Ваше имя"/>
            <Input onChange={handleChange} type="text" name="comment" placeholder="Ваш комментарий"/>
            <Button type="submit">Оставить комментарий</Button>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`
const Input = styled.input`
    width: 332px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    box-sizing: border-box;
    border-radius: 3px;
    font-family: Roboto;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    margin-bottom: 20px;
    padding-left: 11px;
    padding-top: 8px;
    padding-bottom: 8px;
`
const Button = styled.button`
    width: 332px;
    height: 30px;
    color: #FFF;
    background: #4997D0;
    border-radius: 3px;
    font-family: Roboto;
    font-size: 13px;
    line-height: 15px;
    border: none;
`