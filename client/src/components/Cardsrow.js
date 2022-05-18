import React from "react";
import {Card, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Cardsrow = () => {
    return (
      <div className="row" style={{backgroundColor: "#03091F"}}>
        <CardGroup>
  <Card style={{margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://ainews.kz/medialib/jhw5lbfjvo06mjm5umje_ie9ebl3sji90vaop0elq.jpg" />
    <Card.Body>
      <Card.Title>Подать заявку на получение кредита</Card.Title>
      <Card.Text>
        Мы предоставляем нашим клиентам кредиты по самым низким процентным ставкам.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{ margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://egemen.kz/media/2020/01/10/sana-kart.jpg" />
    <Card.Body>
      <Card.Title>Переводы</Card.Title>
      <Card.Text>
        Переводите деньги родным и близким в два клика.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://avatars.mds.yandex.net/get-zen_doc/1602486/pub_5e91eaabca6eba4f096c7998_5e91ee47bfc9630fd0a30bb6/scale_1200" />
    <Card.Body>
      <Card.Title>Вклады</Card.Title>
      <Card.Text>
        «Победа» – вклад высоких достижений.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>

      </div>
    )
}


 
export default Cardsrow;