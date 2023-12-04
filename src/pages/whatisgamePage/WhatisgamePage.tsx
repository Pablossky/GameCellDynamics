import './WhatisgamePage.css'

export const WhatisgamePage = () => {
     
    return (
        <>
        <div className="textHome">
            <p>W rozdziale tym omówione są podstawowe pojęcia dotyczące gier ewolucyjnych, często używane w matematycznym modelowaniu interakcji między jednostkami. Pojęcie "gra" odnosi się do matematycznego modelu sytuacji, w której kilka jednostek oddziałuje ze sobą, każda działając we własnym interesie. Gry teoretyczne, takie jak "Dylemat Więźnia", służą do analizy sytuacji konfliktowych. Przykładem gry jest też "Kamień-Nożyce-Papier".</p>

            <p>Model gry RSP został użyty do opisania zjawisk biologicznych, np. strategii rozrodczych jaszczurki. W matematycznym opisie gry istotna jest koncepcja strategii czystych i mieszanych. Strategia czysta to jednoznaczny wybór danej opcji, podczas gdy strategia mieszana to kombinacja kilku opcji z określonymi prawdopodobieństwami. Payoff'y, czyli nagrody lub kary dla graczy, są zazwyczaj interpretowane jako wkład do ich dostosowania ewolucyjnego.</p>

            <p>Gry są opisywane za pomocą macierzy pay-off, które określają nagrody dla różnych kombinacji działań graczy. Analiza gier ewolucyjnych uwzględnia koncepcje strategii, graczy i wyników gry, stanowiąc podstawę dla modelowania interakcji biologicznych populacji.</p>

            <p>W teorii gier, gry biologiczne są modelami matematycznymi, które opisują interakcje między jednostkami w kontekście biologii ewolucyjnej. Parametry tych gier, zwane "wypłatami", są kluczowe dla modelowania i reprezentowane są jako macierze pay-off. Autor proponuje podejście, w którym te parametry są losowo wybierane z określonego zakresu, co tworzy przestrzeń parametrów.</p>

            <p>Założenie o "generycznych wypłatach" sugeruje, że można zignorować zbiory o miarze zero w przestrzeni parametrów. Innymi słowy, nawet jeśli teoretycznie możliwe są pewne kombinacje parametrów, mające zerową szansę na wystąpienie, można je zaniedbać. Autor używa funkcji G na przestrzeni parametrów, aby zastosować to założenie. Na przykład, jeśli funkcja G(θ, γ) = θ - γ, to założenie o generycznych wypłatach oznacza, że θ i γ są różne.</p>

            <p>Wybór zbioru A (lub funkcji G_n) powinien nastąpić przed wyborem konkretnych parametrów. Założenie o generycznych wypłatach jest użyteczne w analizie, ale może istnieć sytuacje, gdzie pay-off spełniają pewne nielosowe zależności wynikające z analizy modelu biologicznego.</p>

            <p>W kontekście gier biologicznych, autor rozważa również sytuacje, w których populacja jest opisana jako mieszanka różnych strategii (strategii czystych lub mieszanych). Przy tym podejściu, oczekiwane wypłaty dla danej strategii są obliczane jako średnia ważona wypłat związanych z różnymi grami w populacji.</p>

            <p>Warto zauważyć, że przyjęcie pewnych uproszczeń, takich jak generyczne wypłaty, może ułatwić analizę, ale jednocześnie istnieje potrzeba uwzględnienia specyfiki biologicznej w modelowaniu gier, zwłaszcza gdy sytuacje niestandardowe mają znaczenie dla analizy ewolucji strategii w populacji.</p>
        </div>
        </>
    )
}