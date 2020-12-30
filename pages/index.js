import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const{data, error} = useSWR('/api/get-promo', fetcher)
//return(<pre>{JSON.stringify(data)}</pre>)
    return (
    <div>
        <p className='mt-12 text-center'>
            Olá o restaurante XXX sempre busca por atender melhor seus clientes. <br/>
            Por isso, estamos sempre abertos a ouvir sua opinião.
        </p>
            <div className='text-center my-12'>
            <Link href='/pesquisa'>
                <a className='bg-blue-400 px-16 py-4 font-bold rounded-lg shadow-lg hover:shadow'> Dar opininão ou sugestão</a>
            </Link>
        </div>   
        { !data && <p>Carregando....</p>}
        { !error && data && data.showCoupon &&
        <p className='my-12 text-center'>
            {data.message} <br/> 
         </p> 
        }
    </div>
    )
}

export default Index