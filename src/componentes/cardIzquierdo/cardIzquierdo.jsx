import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { cambiarNombreUsuario, setearDatos, limpiarDatos } from '../../redux/usuarioReduxToolkit'

// imports de front
import { Input, Space, Button, Typography } from 'antd';
const { Text } = Typography;
// iconos de antd
import { SaveOutlined, ClearOutlined } from '@ant-design/icons';




function CardIzquierdo() {
        const [nombre, setNombre] = useState("");
        const [primerApellido, setPrimerApellido] = useState("");
        const [segundoApellido, setSegundoApellido] = useState("");
        
        const usuario = useSelector((state) => state.usuario);
        const dispatch = useDispatch();
        
        const guardaCambios = () => {
            let usuarioNuevo = {
                nombre: nombre,
                primerApellido: primerApellido,
                segundoApellido: segundoApellido,
            };
        
            console.log(usuarioNuevo)
            dispatch(setearDatos(usuarioNuevo));
        
        }
        
        const vaciarDatos = () => {
            dispatch(limpiarDatos());
        
            setNombre("");
            setPrimerApellido("");
            setSegundoApellido("");
        }

        return (
            <>
                <Space direction='vertical'>
                    <Text><Text strong>Nombre:</Text> {usuario.nombre} {usuario.primerApellido} {usuario.segundoApellido}</Text>
                    <Text><Text strong>Usuario:</Text> {usuario.nombreUsuario}</Text>

                    <Input placeholder="Ingresa nombre" onChange={(event) => { setNombre(event.target.value) }} value={nombre} />
                    <Input placeholder="Ingresa primer apellido" onChange={(event) => { setPrimerApellido(event.target.value) }} value={primerApellido} />
                    <Input placeholder="Ingresa segundo apellido" onChange={(event) => { setSegundoApellido(event.target.value) }} value={segundoApellido} />

                    <Input placeholder="Cambia el usuario" onChange={(event) => dispatch(cambiarNombreUsuario(event.target.value))} value={usuario.nombreUsuario} />

                    <Button type="link" icon={<SaveOutlined />} onClick={guardaCambios}>
                        Guardar
                    </Button>

                    <Button type="dashed" danger icon={<ClearOutlined />} onClick={vaciarDatos}>
                        Limpiar datos
                    </Button>
                </Space>
            </>
        );
    }

    export default CardIzquierdo;