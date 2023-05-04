import { Avatar, Button, Descriptions, Skeleton } from 'antd'
import { SyncOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux'
import { changeUser } from '../../redux/asyncReduxConvencional'

function CardInferior(){

    const dispatch = useDispatch();
    const usuario =useSelector((state)=>state.changeUserReducer.infoUser)
    const isLoading =useSelector((state)=>state.changeUserReducer.isLoading)

    const cambiaUsuario = () => {
        dispatch(changeUser());
    }
    return (

        <>
            <Avatar src={usuario.picture === undefined ? "" : usuario.picture.medium } style={{backgroundColor: 'red'}} size={64}>
                Usuario
            </Avatar>
            <br />
            <br />
            <Skeleton loading={isLoading}>
                <Descriptions title="Información del usuario">
                    <Descriptions.Item label="Nombre">{usuario.name === undefined ? "-" : (usuario.name.first+" "+usuario.name.last) }</Descriptions.Item>
                    <Descriptions.Item label="Genero">{usuario.gender === undefined ? "-" : usuario.gender }</Descriptions.Item>
                    <Descriptions.Item label="Correo electrónico">{usuario.email === undefined ? "-" : usuario.email }</Descriptions.Item>
                    <Descriptions.Item label="Edad">{usuario.dob === undefined ? "" : usuario.dob.age } </Descriptions.Item>
                    <Descriptions.Item label="Número telefónico">{usuario.phone === undefined ? "" : usuario.phone } </Descriptions.Item>
                    <Descriptions.Item label="Dirección">
                    {usuario.location === undefined ? "" : (`${usuario.location.street.name} ${usuario.location.street.number}, ${usuario.location.city}, ${usuario.location.country}`) } 
                    </Descriptions.Item>
                </Descriptions>
            </Skeleton>
            <br />
            <br />
            <Button loading={isLoading} icon={<SyncOutlined />} type='link' onClick={cambiaUsuario}>
                Cambiar Usuario
            </Button>
        </> 
    )
}

export default CardInferior