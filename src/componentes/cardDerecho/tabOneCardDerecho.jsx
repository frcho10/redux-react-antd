import { Space, Switch, Radio, Spin } from 'antd';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { changeLoading } from '../../redux/showInfoDucks'

function TabOne() {

    
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.showInfo.isLoading);
    const arrayOptions = useSelector((state) => state.showInfo.arrayOptions);

    const [vehicle, setVehicle] = useState(1);
    const changeVehicle = (e) => {
        setVehicle(e.target.value);
    };
    

    const showLoading = ()=> {
        dispatch(changeLoading());
    }
    
    useEffect(() => 
    console.log("Se monta el componente")
    ,[])

    return (
        <>
            <Space direction='vertical'>
                <Spin spinning={isLoading} delay={200}>
                    <Radio.Group onChange={changeVehicle} >
                        {
                            arrayOptions.map((option) =>
                                (<Radio key={option.key} value={option.key}>{option.option}</Radio>)
                            )
                        }
                    </Radio.Group>
                </Spin>

                <Switch checked={isLoading} onChange={showLoading} />
            </Space>
            
        </>
    )
}

export default TabOne