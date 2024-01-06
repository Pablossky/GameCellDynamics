import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './StrategyPage.css'

export const StrategyPage = () => {
    return (
        <>
            <Link to="/theory" className="btn btn-info mx-5 my-3 mb-3 p-2">Back to Theory</Link>
            <h1 className="text-center">Strategie i Równowagi</h1>
            <Row className="row-justified">
                <Col className="col-text-justify">
                    <h2 className="text-center">Strategie czyste</h2>
                    W teorii gier, strategia czysta to taki wybór, jaki gracz podejmuje w grze. W grze dwuosobowej, w której każdy gracz ma dwie dostępne strategie, istnieje cztery kombinacje strategii czystych, które nazywamy profilem strategii.
                    Gry zerowej sumy to takie gry, w których suma wypłat wszystkich graczy jest stała. W grach zerowej sumy, strategia czysta jest dominującą, jeśli jest lepsza niż każda inna strategia dla gracza, niezależnie od wyboru przeciwnika.
                    Gry o sumie większej niż zero to takie gry, w których suma wypłat wszystkich graczy jest większa niż zero. W grach o sumie większej niż zero, strategia czysta może być optymalną, jeśli zapewnia graczowi najwyższą możliwą wypłatę, niezależnie od wyboru przeciwnika.
                    <div className='break'>&nbsp;</div>
                    <h2 className="text-center">Strategie mieszane</h2>
                    Strategia mieszana to taka strategia, w której gracz losuje jedną z dostępnych strategii z pewną określoną prawdopodobieństwem. Strategie mieszane mogą być używane w grach, w których strategie czyste nie są optymalne.
                </Col>
                <Col className="col-text-justify">
                <h2 className="text-center">Równowaga Nasha</h2>

                    Równowaga Nasha to taki profil strategii, w którym żaden z graczy nie może poprawić swojej wypłaty, zmieniając swoją strategię, zakładając, że pozostali gracze nie zmieniają swoich strategii.

                    <h2 className="text-center">Przykłady równań Nasha</h2>

                    Dylemat więźnia to klasyczna gra dwuosobowa o sumie zerowej. W grze tej, dwaj więźniowie są przesłuchiwani osobno. Jeśli obaj przyznają się do winy, zostaną skazani na pięć lat więzienia. Jeśli obaj nie przyznają się do winy, zostaną skazani na dwa lata więzienia. Jeśli tylko jeden przyzna się do winy, zostanie zwolniony, a drugi skazany na dziesięć lat więzienia.

                    Równowaga Nasha w grze Dylematu więźnia występuje, gdy obaj gracze przyznają się do winy. W tym przypadku, każdy gracz otrzyma pięć lat więzienia. Jest to niekorzystne dla obu graczy, ale jest to jedyna równowaga Nasha, ponieważ żaden gracz nie może poprawić swojej wypłaty, zmieniając swoją strategię.

                    Gra o sumie większej niż zero to gra, w której suma wypłat wszystkich graczy jest większa niż zero. W grach o sumie większej niż zero, istnieje często wiele równowag Nasha.

                    Przykładem gry o sumie większej niż zero jest gra Ucieczka z więzienia. W tej grze, dwaj więźniowie muszą uciec z więzienia. Mogą uciec razem lub oddzielnie. Jeśli uciekną razem, mają 50% szans na sukces. Jeśli uciekną oddzielnie, mają 25% szans na sukces.

                    Równowaga Nasha w grze Ucieczka z więzienia występuje, gdy obaj gracze uciekają razem. W tym przypadku, gracze mają 50% szans na sukces. Jest to najlepszy możliwy wynik dla obu graczy, ponieważ zwiększa ich szanse na ucieczkę.
                </Col>
            </Row>
            <Container className="conclusion-container text-justify" style={{ width: '100%' }}>
                <h2 className="text-center">Wnioski</h2>
                <p>
                    Strategie czyste i mieszane są ważnymi koncepcjami w teorii gier. Strategie czystych można używać w grach, w których strategie mieszane nie są optymalne. Równowaga Nasha to ważny punkt odniesienia w teorii gier. Jest to punkt, w którym żaden z graczy nie może poprawić swojej wypłaty, zmieniając swoją strategię.
                </p>
            </Container>
        </>
    )
}