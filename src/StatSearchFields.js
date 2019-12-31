import React from 'react'
import { useForm } from 'react-hook-form'

const StatSearchFields = () => {
    const { register, handleSubmit } = useForm()

    return (
        <form onSubmit={handleSubmit(payload => console.log(payload))}>
            <input placeholder='Week' name='Week' ref={register} />
            <input placeholder='Team' name='Team' ref={register} />
            <input placeholder='Player' name='Player' ref={register} />
            <input placeholder='Position' name='Position' ref={register} />
            <input type='submit' />
        </form>
    )
}

export default StatSearchFields
