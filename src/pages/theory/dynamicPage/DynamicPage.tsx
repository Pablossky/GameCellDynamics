import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './DynamicPage.css';

export const DynamicPage = () => {
    return (
        <>
            <Link to="/theory" className="btn btn-info mx-5 my-3 mb-3 p-2">Back to Theory</Link>
            <h1 className="text-center">Dynamiki populacje komórkowych</h1>
            <Row className="row-justified">
                <Col className="col-text-justify">
                    Badania dynamiki populacji komórkowych z wykorzystaniem modeli teorii gier to dziedzina nauki, która zajmuje się badaniem zmian w populacji komórek w czasie. Stosuje się do tego modele teorii gier, które pozwalają uchwycić interakcje między komórkami.

                    Dynamika populacji komórkowych to procesy, które prowadzą do zmian w wielkości i strukturze populacji komórek. Mogą być one spowodowane przez czynniki wewnętrzne, takie jak mutacje, lub czynniki zewnętrzne, takie jak zmiany środowiskowe.

                    Modele teorii gier to narzędzia matematyczne, które pozwalają uchwycić interakcje między jednostkami. Mogą być wykorzystywane do badania różnych aspektów życia społecznego, w tym gospodarki, polityki i biologii.

                    W badaniach dynamiki populacji komórkowych z wykorzystaniem modeli teorii gier komórki są traktowane jako jednostki, które podejmują decyzje w celu maksymalizacji swojego zysku. Decyzjami tymi mogą być na przykład decyzje o rozmnażaniu się, śmierci lub migracji.
                </Col>
                <Col className="col-text-justify">
                    <strong> Modele teorii gier pozwalają uchwycić złożone interakcje między komórkami. Mogą być wykorzystywane do badania takich zjawisk jak:</strong>
                    <ul>
                        <li><strong>Ewolucja:</strong> Modele teorii gier mogą być wykorzystywane do badania, jak mutacje i selektywna presja prowadzą do zmian w populacji komórek. Na przykład, modele teorii gier mogą być wykorzystywane do badania, jak mutacje, które powodują, że komórki są bardziej podatne na raka, mogą prowadzić do rozwoju raka.</li>

                        <li><strong>Konkurencja:</strong> Modele teorii gier mogą być wykorzystywane do badania, jak konkurencja między komórkami wpływa na ich dynamikę. Na przykład, modele teorii gier mogą być wykorzystywane do badania, jak konkurencja między bakteriami o zasoby może prowadzić do powstania nowych szczepów bakterii.</li>

                        <li><strong>Współpraca:</strong> Modele teorii gier mogą być wykorzystywane do badania, jak współpraca między komórkami wpływa na ich dynamikę. Na przykład, modele teorii gier mogą być wykorzystywane do badania, jak współpraca między komórkami układu odpornościowego może prowadzić do zwalczania infekcji.</li>
                    </ul>
                    <p><strong>Przykłady zastosowań modeli teorii gier w badaniach dynamiki populacji komórkowych obejmują:</strong></p>
                    <ul>
                        <li><strong>Badania raka:</strong> Modele teorii gier mogą być wykorzystywane do badania, jak mutacje i selektywna presja prowadzą do rozwoju raka. Na przykład, modele teorii gier mogą być wykorzystywane do badania, jak mutacje, które powodują, że komórki są bardziej podatne na raka, mogą prowadzić do rozwoju raka.</li>

                        <li><strong>Badania chorób zakaźnych:</strong> Modele teorii gier mogą być wykorzystywane do badania, jak choroby zakaźne rozprzestrzeniają się w populacji. Na przykład, modele teorii gier mogą być wykorzystywane do badania, jak interakcje między komórkami gospodarza i patogenem mogą wpływać na rozprzestrzenianie się choroby.</li>

                        <li><strong>Badania rozwoju roślin:</strong> Modele teorii gier mogą być wykorzystywane do badania, jak rośliny konkurują o zasoby. Na przykład, modele teorii gier mogą być wykorzystywane do badania, jak interakcje między roślinami o światło i wodę mogą wpływać na ich wzrost i rozwój.</li>
                    </ul>
                </Col>
            </Row>
        </>
    );
};
