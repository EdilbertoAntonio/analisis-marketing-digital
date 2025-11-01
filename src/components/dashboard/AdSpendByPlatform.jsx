import '../../assets/styles/Dashboard/charts.css';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getPlatformColor } from '../../constants/platforms'

const AdSpendByPlatform = ({ data }) => {

    return (
        <div className="chart-container">
            <div className='chart-header'>
                <h3>Ad Spend by Platform - last 30 days</h3>
            </div>
            <ResponsiveContainer className="container-responsive">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amountSpent"
                        nameKey="platform"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({ amountSpent }) => `$${amountSpent.toFixed(2)}`}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={getPlatformColor(entry.platform)}
                            />
                        ))}
                    </Pie>
                    <Tooltip 
                        formatter={(value, name, props) => {
                            const total = data.reduce((sum, item) => sum + item.amountSpent, 0);
                            const percentage = (props.payload.amountSpent / total) * 100;
                            return [
                                `${name}: $${value.toFixed(2)} (${percentage.toFixed(2)}%)`
                            ];
                        }}
                    />
                    <Legend layout="vertical" verticalAlign="middle" align="right"  />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AdSpendByPlatform;