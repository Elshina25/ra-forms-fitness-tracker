import React, { useState } from 'react';
import Form, { IFormData } from '../Form/Form';
import List from '../List/List';

export default function FitnessTracker() {
    const [list, setList] = useState<IFormData[]>([]);

    const handleSubmit = (form: IFormData): void => {
        const existDate: IFormData | undefined = list.find((el: IFormData): boolean => el.date === form.date );
        const distance = typeof form.distance === 'string' ? parseInt(form.distance) : form.distance;
        if (existDate) {
            existDate.distance += distance;
            setList(prevList => [...prevList]);
        } else {
            setList(prevList => ([...prevList, { date: form.date, distance, id: form.id }]));
        }
    };

    const handleDelete = (e: IFormData): void => {
        const filteredList = list.filter((item: IFormData): boolean => item.id !== e.id);
        setList(filteredList);
    };

    const toSingleDateFormat = (date: string): string => {
        const result = date.split('.');
        const newDate = `${result[1]}.${result[0]}.${result[2]}`;
        return newDate;
    }

    const sortedList = [...list].sort((a, b) => {
        const dateA = new Date(toSingleDateFormat(a.date));
        const dateB = new Date(toSingleDateFormat(b.date));
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <>
        <div className='fitness_tracker'>
            <Form handleSubmit={handleSubmit}/>
            <List 
                list={sortedList} 
                handleDelete={handleDelete}
            />
        </div>
        </>
    )
}