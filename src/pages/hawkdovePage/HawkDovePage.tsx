import React, { useState } from 'react';
import './HawkDovePage.css';
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    Label,
} from 'recharts';

export const HawkDovePage = () => {

    function HawkDoveModel() {
        const [v, setV] = useState(4); // Zysk z wygranej
        const [c, setC] = useState(2); // Koszt eskalacji (poniesienia ran)

        const [round, setRound] = useState(0);
        const [data, setData] = useState<{ round: number; hawkFrequency: number; doveFrequency: number }[]>([]);

        const runSimulation = () => {
            const newData = [...data];

            const hawkPayoff = v - c / 2;
            const dovePayoff = v;

            const totalPayoff = hawkPayoff + dovePayoff;

            const hawkPercentage = (hawkPayoff / totalPayoff) * 100;
            const dovePercentage = (dovePayoff / totalPayoff) * 100;

            newData.push({
                round: round + 1,
                hawkFrequency: hawkPercentage,
                doveFrequency: dovePercentage,
            });

            setRound(round + 1);
            setData(newData);
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
                    <button onClick={runSimulation}>Uruchom Symulację</button>
                </div>
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={data}>
                            <XAxis dataKey="round">
                                <Label value="Runda" position="bottom" />
                            </XAxis>
                            <YAxis>
                                <Label value="% Częstotliwość" angle={-90} position="insideLeft" />
                            </YAxis>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="hawkFrequency" name="% Jastrzębia" stroke="#8884d8" />
                            <Line type="monotone" dataKey="doveFrequency" name="% Gołębia" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }

    return (
        <div>
            <HawkDoveModel />
        </div>
    );
}
