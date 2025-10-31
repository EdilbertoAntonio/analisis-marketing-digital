import '../../assets/styles/Dashboard/charts.css';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PERFORMANCE_CLUSTER_COLORS } from '../../constants/chartsColors';

const CampaignClusters = ({ data }) => {

    return (
        <div className="chart-container">
            <div className='chart-header'>
                <h3>Campaign Performance Clusters - last 30 days</h3>
            </div>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="noCampaigns"
                        nameKey="performance"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={PERFORMANCE_CLUSTER_COLORS[entry.performance].color}
                            />
                        ))}
                    </Pie>
                    <Tooltip 
                        formatter={(value, name, props) => {
                            const total = data.reduce((sum, item) => sum + item.noCampaigns, 0);
                            const percentage = total > 0 ? (value / total * 100).toFixed(2) : 0;
                            return [
                                `${props.payload.performance}: ${value} campaigns (${percentage}%)`
                            ];
                            }}
                    />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CampaignClusters;