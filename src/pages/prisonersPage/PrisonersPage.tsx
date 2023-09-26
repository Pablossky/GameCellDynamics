import './PrisonersPage.css';
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
import { useState } from 'react';

export const PrisonersPage = () => {

    function PrisonerDilemmaModel() {
        const [reward, setReward] = useState(3);
        const [sucker, setSucker] = useState(1);
        const [temptation, setTemptation] = useState(5);
        const [punishment, setPunishment] = useState(0);

        const [round, setRound] = useState(0);
        const [data, setData] = useState<{ round: number; cooperation: number; betrayal: number; }[]>([]);

        const runSimulation = () => {
            const newData = [...data];

            const cooperationPayoff = reward - sucker;
            const betrayalPayoff = temptation - punishment;

            const totalPayoff = cooperationPayoff + betrayalPayoff;

            const cooperationPercentage = (cooperationPayoff / totalPayoff) * 100;
            const betrayalPercentage = (betrayalPayoff / totalPayoff) * 100;

            newData.push({
                round: round + 1,
                cooperation: cooperationPercentage,
                betrayal: betrayalPercentage,
            });

            setRound(round + 1);
            setData(newData);
        };

        return (
            <div className="container">
                <div className="input-container">
                    <h2>Badania Dynamiki Modelu Dylematu Więźnia</h2>
                    <div>
                        <label>Nagroda (reward): </label>
                        <input
                            type="number"
                            value={reward}
                            onChange={(e) => setReward(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Pochlebca (sucker): </label>
                        <input
                            type="number"
                            value={sucker}
                            onChange={(e) => setSucker(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Pokusa (temptation): </label>
                        <input
                            type="number"
                            value={temptation}
                            onChange={(e) => setTemptation(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Kara (punishment): </label>
                        <input
                            type="number"
                            value={punishment}
                            onChange={(e) => setPunishment(Number(e.target.value))}
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
                            <Line type="monotone" dataKey="cooperation" name="% Współpracy" stroke="#ffc658" />
                            <Line type="monotone" dataKey="betrayal" name="% Zdrady" stroke="#ff7300" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }

    return (
        <div>
            <PrisonerDilemmaModel />
        </div>
    );
}
