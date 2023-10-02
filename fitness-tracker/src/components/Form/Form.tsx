import React, { useState } from 'react';

export interface IFormData {
    date: string,
    distance: number,
    id: number
}

interface IFormProps {
    handleSubmit: (item: IFormData) => void
}

export default function Form({ handleSubmit}: IFormProps) {

    const [ form, setForm] = useState<IFormData>({
        date: '',
        distance: 0,
        id: 0
    });

    const inputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setForm(prevForm => ({ ...prevForm, [name]: value}));
    }
 
    const handleOnSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        form.id = Math.floor(Math.random() * 100);
        handleSubmit(form);
    }

    return (
        <form className='form form-fit-tracker'>
            <div>
                <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                <input className='container_input' type="text" id="date" name="date" value={form.date} onChange={inputChange} placeholder='Введите дату'/>
            </div>

            <div>
                <label htmlFor="distance">Пройдено км</label>
                <input className='container_input' type="text" id="distance" name="distance" value={form.distance} onChange={inputChange} placeholder='Ввведите дистанцию' />            
            </div>

            <button className='form_btn' type="submit" onClick={handleOnSubmit}>Ок</button>
        </form>
    )
}