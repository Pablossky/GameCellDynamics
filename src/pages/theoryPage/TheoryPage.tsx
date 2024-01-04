import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './TheoryPage.css';

export const TheoryPage = () => {
    return (
        <div className="container-padding">
            <Container>
            <h1 className="text-center">Teoria</h1> {/* Header "Teoria" */}
                <Row className="row-justified">
                    <Col className="col-text-justify">
                        Teoria gier to dziedzina matematyki i nauk społecznych zajmująca się analizą interakcji strategicznych pomiędzy różnymi jednostkami, zwłaszcza w kontekście podejmowania decyzji w sytuacjach konfliktowych. Jednak jej zastosowanie nie ogranicza się tylko do dziedziny społecznej; teoria gier znajduje również zastosowanie w badaniu populacji komórkowych.

                        Badania nad populacjami komórkowymi to obszar, który obejmuje analizę interakcji pomiędzy poszczególnymi komórkami w danej populacji, takiej jak populacja organizmów mikroskopijnych czy też komórek biologicznych. Zastosowanie teorii gier w tym kontekście pozwala na modelowanie różnorodnych interakcji, takich jak konkurencja, współpraca czy też ewolucja w populacjach komórkowych.
                        
                        W przypadku badania populacji komórkowych, teoria gier może być używana do analizy strategii, jakie przyjmują poszczególne komórki w zależności od ich otoczenia i warunków środowiskowych. Przykładowo, można badać, jak komórki konkurują o zasoby, jakie są dostępne w danym środowisku, czy też jakie strategie ewolucyjne prowadzą do przetrwania populacji w zmieniających się warunkach.
                    </Col>         
                    <Col className="col-text-justify">
                        Jednym z popularnych modeli opartych na teorii gier w badaniu populacji komórkowych jest tzw. "Gra w Przetrwanie" (Survival Game). W tym modelu komórki są traktowane jako gracze, a ich decyzje dotyczące przetrwania lub umierania wpływają na całą populację. Analiza równań ewolucji może pomóc zrozumieć, jakie strategie są najbardziej korzystne z punktu widzenia przetrwania danej populacji komórkowej.

                        Teoria gier pozwala również na modelowanie zjawisk takich jak kooperacja międzykomórkowa, co jest istotne w badaniach nad współpracą w mikroorganizmach czy komórkach biologicznych. Przykładowo, można badać, jak komórki mogą korzystać z wymiany zasobów czy sygnałów chemicznych w celu zwiększenia swojej szansy na przetrwanie.

                        Podsumowując, zastosowanie teorii gier w badaniu populacji komórkowych otwiera nowe perspektywy w zrozumieniu dynamiki mikrośrodowisk, ewolucji biologicznej oraz strategii przetrwania komórek w zmieniających się warunkach środowiskowych. To interdyscyplinarne podejście pozwala na lepsze zrozumienie mikroświata, który otacza nas na poziomie komórkowym.
                    </Col>
                </Row>
            </Container>
            <h1 className="text-center">Rozdziały</h1>
            <div className="buttonList text-center "> {/* Centered Button List */}
        <Link to="/whatisgame">
          <button className="btn btn-info mx-2 mr-2 mb-2">Czym jest Gra?</button>
        </Link>
        <Link to="/biologymodels">
          <button className="btn btn-info mx-2 mr-2 mb-2">Modele biologiczne</button>
        </Link>
        <Link to="/section3">
          <button className="btn btn-info mx-2 mr-2 mb-2">Button 3</button>
        </Link>
        <Link to="/button4">
          <button className="btn btn-info mx-2 mr-2 mb-2">Button 4</button>
        </Link>
        <Link to="/button5">
          <button className="btn btn-info mx-2 mr-2 mb-2">Button 5</button>
        </Link>
        <Link to="/button6">
          <button className="btn btn-info mx-2 mr-2 mb-2">Button 6</button>
        </Link>
        <Link to="/button7">
          <button className="btn btn-info mx-2 mr-2 mb-2">Button 7</button>
        </Link>
        <Link to="/button8">
          <button className="btn btn-info mx-2 mb-2">Button 8</button>
        </Link>
      </div>
    </div>
  );
};
