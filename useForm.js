import { useState } from "react";

export const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    
    const onResetForm = () => {
        setFormState(initialValue);
    }

    //Haciendo uso del Spread, puedo exponer las propiedades recibidas
    //De esta manera, puedo desestructurar los elementos del objeto individualmente
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
