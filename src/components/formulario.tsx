'use client'
import {Button } from 'primereact/button';
import { useState } from 'react';


export default function Formulario() {
    const  [count, setCount] = useState(0);

    return (
        <div className="card flex justify-content-center align-items-center">
            <div className="flex-column">
                <Button label="Check" icon="pi pi-check" onClick={() => setCount(count + 1)} />
                <div className='font-bold mt-3 text-center'>{count}</div>
            </div>      
        </div>
    )
}