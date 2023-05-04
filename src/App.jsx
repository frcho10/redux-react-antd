import './App.css'
import './css/temaPersonalizado.css'
import CardDerechoTemplate from './componentes/cardDerecho/cardDerechoTemplate'
import CardIzquierdo from './componentes/cardIzquierdo/cardIzquierdo';
import CardInferior from './componentes/cardInferior/cardInferior';

// imports de front
import { Card, Col, Row } from 'antd';

function App() {

  return (
    <>
      <Row>
        <Col span={10} offset={2}>
          <Card title="Usuario rdux-toolkit" bordered={true} >
            <CardIzquierdo />
          </Card>
        </Col>
        <Col span={10} offset={2}>
          <Card title="Usuario rdux-convencional" bordered={true} >
            <CardDerechoTemplate />
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={22} offset={2} >
          <Card title="Async convencional" bordered={true} >
            <CardInferior />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default App
