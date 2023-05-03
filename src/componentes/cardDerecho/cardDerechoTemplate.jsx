import { Tabs } from 'antd';
import TabOne from './tabOneCardDerecho';
import TabTwoCardDerecho from './tabTwoCardDerecho'

function CardDerechoTemplate() {

    
    const items = [
        {
          key: '1',
          label: `Muestra opciones`,
          children: (
            <TabOne />
          ),
        },
        {
          key: '2',
          label: `Divisas`,
          children: (
              <TabTwoCardDerecho />
          ),
        },
      ];
    return (
        <>
            <Tabs defaultActiveKey="1" items={items} />
            
        </>
    )
}

export default CardDerechoTemplate