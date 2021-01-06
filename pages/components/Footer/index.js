import React from 'react'
import Link from 'next/link'

const Footer = () =>{
    return(
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
            Projeto desenvolvido por: {' '}
            <a className='hover:underline'  href='http://fsgitconsultoria.com.br/'>Fabiano Santos Garcia</a>  {' '}/{' '}
            <a className='hover:underline'  href='http://linkedin.com/in/fabiano-garcia-150104113'>Linkedin</a> {' '} / {' '}
            <a className='hover:underline'  href='https://github.com/fabianojp06'>Github</a> 
            <div className='mt-2'>
                <img className='inline p-4' src='/logo_semana_fsm.png'></img>
                <img className='inline p-4' src='/logo_devpleno.png'></img>
            </div>
            </div>
        </div>
    )
}
export default Footer