import { Input, Button, Alert } from 'antd'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dolarPeso, clearInfo, pesoDolar } from '../../redux/asyncReduxToolkit'

function TabTwoCardDerecho(){
    const [visible, setVisible] = useState(true);
    const [dolar, setDolar] = useState(0);
    const [peso, setPeso] = useState(0);
    const { message, error, isLoading } = useSelector((state) => state.asyncAction);

    const dispatch = useDispatch()

    const handleClose = () => {
        setVisible(false);
        dispatch(clearInfo());
    }

    const convertirDolarAPeso = () => {
        dispatch(dolarPeso(dolar))
    }

    const convertirPesoADolar = () => {
        dispatch(pesoDolar(peso))
    }
    return (
    <>
        {
            message !=="" && (
                <Alert message={message} type="success" closable afterClose={handleClose} />
            )
        }
        {
            error !=="" && (
                <Alert message={error} type="error" closable afterClose={handleClose} />
            )
        }
            
        <Input prefix='$' suffix='MXN' placeholder="Ingresa moneda" onChange={(e) => {setDolar(e.target.value)} }/>
        <Button type='primary' loading={isLoading} onClick={convertirDolarAPeso}>Convertir a USD</Button>
        <Input prefix='US$' suffix='USD' placeholder="Ingresa moneda"  onChange={(e) => {setPeso(e.target.value)} }/>
        <Button type='primary' loading={isLoading} onClick={convertirPesoADolar}>Convertir a MXN</Button>
    </>
    );
}

export default TabTwoCardDerecho