import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './BiologymodelPage.css'

export const BiologymodelPage = () => {
return (
    <>
        <Link to="/theory" className="btn btn-info mx-5 my-3 mb-3 p-2">Back to Theory</Link>
        <h1 className="text-center">Czym jest gra?</h1>
        <Row className="row-justified">
            <Col className="col-text-justify">
            Definiowanie dobrego modelu matematycznego to zadanie skomplikowane, a dodanie biologicznej rzeczywistości do modeli teorii gier wprowadza kolejny stopień trudności. Modele genetyczne często skupiają się na mechanizmach dziedziczenia, podczas gdy modele teorii gier koncentrują się na strategicznych interakcjach, co stwarza dylemat dla idealnego modelu, który idealnie obejmowałby oba te aspekty. Włączenie genetyki może istotnie wpłynąć na analizy strategii ewolucyjnie stabilnych (ESS), ale może także niepotrzebnie skomplikować model, potencjalnie zmniejszając jego klarowność i użyteczność. Ostateczna decyzja dotycząca stopnia uwzględnienia genetyki zależy więc od głównego celu modelu.
            </Col>
            <Col className="col-text-justify">
            Mimo potencjalnych korzyści z uwzględnienia genetyki w modelach teorii gier, nie jest to powszechna praktyka. Pewne wyjątki, takie jak modelowanie pasożytnictwa lęgowego, obejmują wyraźne elementy genetyczne, takie jak dominujące i recesywne allele. Chociaż takie elementy genetyczne mogą wpływać na model, nie nadmiernie komplikując matematykę, decyzja o ich uwzględnieniu zależy od ich istotności dla danego problemu.

Ważne jest zauważenie, że większość modeli, zwłaszcza teorii gier, to uproszczone reprezentacje skomplikowanej rzeczywistości. Chociaż te modele mogą nie odzwierciedlać precyzyjnie sytuacji w świecie rzeczywistym, dostarczają cennych spostrzeżeń na temat natury badanych systemów. Przykłady, takie jak gry "Hawk-Dove" czy dotyczące stosunku płciowego, ilustrują, jak uproszczone modele mogą dostarczać istotnych spostrzeżeń na temat zjawisk rzeczywistych, nie uwzględniając każdego detalu. Głównym celem jest zdobywanie spostrzeżeń, które eksperymentatorzy mogą wykorzystać do formułowania konkretnych testów, a nie dopasowywanie modeli do danych dla walidacji statystycznej.
            </Col>
        </Row>
    </>
)
}