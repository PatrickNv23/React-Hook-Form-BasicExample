import React from 'react'
import { useForm } from 'react-hook-form';
import '../css/FormComponent.css';
export default function Form() {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSubmitData = (data) => {
        console.log(data);
        console.log(watch("name")) // watch solo puede observar a uno
        console.log(watch("lastname"))
        console.log(watch("email"))
    }
    // con register, se le asigna un nombre clave a cada input del formulario para que el hook trabaje con el
    // el objeto register recibe dos parámetros(el segundo es opcional)
    // -> nombre con el que se identificará el valor del input en String 
    // -> objeto de validaciones que es opcional

    return (
        <>
            <form className='form_register' onSubmit={handleSubmit(handleSubmitData)}>
                <label className='label_register' htmlFor="name">Name: </label>
                <input className='input_register' defaultValue="Cesar" {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                })} type="text" placeholder='Add name' />
                {errors.name && <span className='spanErrorRegister'>The field contains errors</span>}

                <label className='label_register' htmlFor="lastname">Lastname: </label>
                <input className='input_register' {...register("lastname", {
                    required: true,
                    maxLength: 30
                })} type="text" placeholder='Add lastname' />
                {errors.lastname && <span className='spanErrorRegister'>The field contains errors</span>}

                <label className='label_register' htmlFor="email">Email: </label>
                <input className='input_register' {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/
                })} type="text" placeholder='Add email' />
                {errors.email && <span className='spanErrorRegister'>The field contains errors</span>}

                <label className='label_register' htmlFor="direction">Direction: </label>
                <input className='input_register' {...register("direction", {
                    required: true
                })} type="text" placeholder='Direction' />
                {errors.direction && <span className='spanErrorRegister'>The field is required</span>}

                <label className='label_register' htmlFor="years">Years old: </label>
                <input className='input_register' {...register("years", {
                    min: 18,
                    max: 110
                })} type="number" placeholder='Years old' />
                {errors.years && <span className='spanErrorRegister'>The value is out of range</span>}

                <label className='label_register' htmlFor="phone">Phone: </label>
                <input className='input_register' {...register("phone", {
                    maxLength: 9
                })} type="number" placeholder='Phone' />
                {errors.phone && <span className='spanErrorRegister'>The length is invalid</span>}

                <input className='btn_SubmitRegister' type="submit" value="Enviar" />
            </form>
        </>
    )
}
