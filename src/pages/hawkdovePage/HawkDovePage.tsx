import React, { useState } from 'react';
import './HawkDovePage.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HawkDoveModel() {
    const [populationData, setPopulationData] = useState([{ round: 0, hawkFrequency: 0.5, doveFrequency: 0.5 }]);
    const [v, setV] = useState(4); // Zysk z wygranej
    const [c, setC] = useState(2); // Koszt eskalacji (poniesienia ran)

    const calculatePayoffs = (hawkFrequency: number, doveFrequency: number) => {
        const hawkPayoff = hawkFrequency * (v - c / 2);
        const dovePayoff = doveFrequency * v;
        return { hawkPayoff, dovePayoff };
    };

    const updateFrequencies = (currentRoundData: { hawkFrequency: number; doveFrequency: number }) => {
        const { hawkFrequency, doveFrequency } = currentRoundData;

        // Obliczamy payoffy dla jastrzębia i gołębia
        const { hawkPayoff, dovePayoff } = calculatePayoffs(hawkFrequency, doveFrequency);

        // Ustalamy progi wyboru strategii
        const hawkThreshold = hawkPayoff / (hawkPayoff + dovePayoff);
        const randomValue = Math.random();

        // Aktualizujemy częstotliwości wystąpień na podstawie wylosowanej strategii
        let newHawkFrequency, newDoveFrequency;

        if (randomValue <= hawkThreshold) {
            // Jastrząb kontra jastrząb - 50% szans na wygraną lub straty
            newHawkFrequency = (hawkFrequency + 0.5) / 2;
            newDoveFrequency = (doveFrequency + 0.5) / 2;
        } else {
            // Gołąb kontra gołąb - wygrana dzielona między nimi
            newHawkFrequency = hawkFrequency / 2;
            newDoveFrequency = doveFrequency / 2;
        }

        return { newHawkFrequency, newDoveFrequency };
    };

    const handleRunSimulation = () => {
        const currentRoundData = populationData[populationData.length - 1];

        // Aktualizujemy częstotliwości wystąpień na podstawie wyboru strategii
        const { newHawkFrequency, newDoveFrequency } = updateFrequencies(currentRoundData);

        const newRound = populationData.length;

        setPopulationData([
            ...populationData,
            { round: newRound, hawkFrequency: newHawkFrequency, doveFrequency: newDoveFrequency }
        ]);
    };

    return (
        <div className="container">
            <div className="input-container">
                <h2>Badania Dynamiki Modelu Jastrzębia i Gołębia</h2>
                <div>
                    <label>Zysk z wygranej (v): </label>
                    <input
                        type="number"
                        value={v}
                        onChange={(e) => setV(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Koszt eskalacji (c): </label>
                    <input
                        type="number"
                        value={c}
                        onChange={(e) => setC(Number(e.target.value))}
                    />
                </div>
                <button onClick={handleRunSimulation}>Uruchom Symulację</button>
            </div>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={populationData}>
                        <XAxis dataKey="round" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="hawkFrequency" name="Częstotliwość Jastrzębia" stroke="#8884d8" />
                        <Line type="monotone" dataKey="doveFrequency" name="Częstotliwość Gołębia" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export const HawkDovePage = () => {
    return (
        <div>
            <HawkDoveModel />
        </div>
    );
};
