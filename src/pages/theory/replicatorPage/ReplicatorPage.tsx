import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import replicatorImage from '../../../assets/replikator.png';  // Import your image

export const ReplicatorPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            MathJax = {
                tex: {
                    inlineMath: [['$', '$']]
                },
                loader: { load: ['input/asciimath', 'output/svg', 'ui/menu'] }
            };
        `;

        document.head.appendChild(script);

        const mathJaxScript = document.createElement('script');
        mathJaxScript.type = 'text/javascript';
        mathJaxScript.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
        mathJaxScript.async = true;
        mathJaxScript.onload = () => {
            const mathScript = document.createElement('script');
            mathScript.type = 'text/javascript';
            mathScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
            mathScript.async = true;
            document.head.appendChild(mathScript);
        };

        document.head.appendChild(mathJaxScript);

        return () => {
            document.head.removeChild(script);
            document.head.removeChild(mathJaxScript);
        };
    }, []);

    return (
        <>
            <Link to="/theory" className="btn btn-info mx-5 my-3 mb-3 p-2">Back to Theory</Link>
            <h1 className="text-center">Dynamika replikatora</h1>
            <Row className="row-justified">
                <Col className="col-text-justify">
                    <p>
                        Dynamika replikatora, wprowadzona przez Johna Maynarda Smitha i George'a Price'a w 1973 roku, stanowi matematyczny model opisujący ewolucję strategii w grach stosowalności. Gry stosowalności są sytuacjami, w których uczestnicy stosują różne strategie, a skuteczność każdej strategii zależy od tego, jak często jest używana przez innych graczy. Model ten zakłada, że w każdej generacji gracze rozmnażają się zgodnie ze swoją skutecznością. To oznacza, że strategie, które są bardziej skuteczne, mają większą szansę na przekazanie swoich cech potomstwu, co prowadzi do zwiększenia ich częstości występowania w populacji w kolejnych generacjach.
                    </p>
                    <p>
                        Równanie różniczkowe opisujące dynamikę replikatora jest postaci:
                    </p>
                    <p>
                        \(x'(t) = x(t) \cdot (f(x(t)) - x(t))\)
                    </p>
                    <p>
                        gdzie:
                    </p>
                    <ul>
                        <li>\(x(t)\) reprezentuje częstość występowania danej strategii w \(t\)-tej generacji,</li>
                        <li>\(f(x(t))\) to funkcja, która określa skuteczność danej strategii w zależności od jej częstości występowania.</li>
                    </ul>
                </Col>
                <Col className="col-text-justify">
                    <p>
                        Funkcja skuteczności \(f(x(t))\) może mieć różne formy w zależności od konkretnego kontekstu gry stosowalności. W niektórych przypadkach może być liniowa, w innych nieliniowa. Rozwiązania tego równania mogą przyjmować różne formy. W przypadku punktu równowagi, częstość występowania każdej strategii pozostaje stała. Natomiast w przypadku cyklu, częstość występowania strategii zmienia się cyklicznie w kolejnych generacjach. Dynamika replikatora jest używana w badaniach ewolucji strategii w różnych dziedzinach, takich jak biologia, ekonomia, socjologia i teoria gier. Oferuje ona narzędzie matematyczne do zrozumienia, jak różne strategie konkurują ze sobą i jakie czynniki wpływają na ich ewolucję w danym środowisku. Ten model jest szczególnie użyteczny w analizie ewolucji współzawodnictwa i współpracy między różnymi uczestnikami w grach stosowalności.
                    </p>
                    <div className="col-text-justify" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={replicatorImage} alt="Replicator Dynamics" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="col-text-justify" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Przykładowy replikator wygenerowany na stronie.</div>
                </Col>
            </Row>
        </>
    );
};

export default ReplicatorPage;
