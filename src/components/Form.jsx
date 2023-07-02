import React from 'react'
import {useForm} from "react-hook-form";

function Form(){
  const {register, formState: {errors} ,handleSubmit, reset} = useForm(); 
  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  return (
    <>
        <div id='Formulario' className='formContainer'>
            <h2 className='subtitulo'>Formulario de delivery</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder='Nombre' {...register('nombre',{
                        required: true,
                        maxLength: 12
                    })}/>
                    {errors.nombre?.type === 'required' && <p>Campo obligatorio</p>}
                    {errors.nombre?.type === 'maxLength' && <p>Maximo de 12 letras</p>}
                </div>
                <div>
                    <input type="text" placeholder='Apellido' {...register('apellido', {
                        required: true,
                        maxLength: 12
                    })}/>
                    {errors.apellido?.type === 'required' && <p>Campo obligatorio</p>}
                    {errors.apellido?.type === 'maxLength' && <p>Maximo de 12 letras</p>}
                </div>
                <div>
                    <input type="email" placeholder='Correo electronico' {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })}/>
                    {errors.email?.type === 'required' && <p>Campo obligatorio</p>}
                    {errors.email?.type === 'pattern' && <p>Formato de e-mail incorrecto</p>}
                </div>
                <div>
                    <input type="text" placeholder='Calle' {...register('calle',{
                        required: true
                    })}/>
                    {errors.calle?.type === 'required' && <p>Campo obligatorio</p>}
                </div>
                <input className='boton' type="submit" value="Enviar" />
            </form>
        </div>
    </>
  )
}

export default Form