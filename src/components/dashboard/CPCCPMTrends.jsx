import '../../assets/styles/Dashboard/charts.css';
import { XAxis ,YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart} from "recharts";
import { CPC_CPM_TRENDS } from '../../constants/chartsColors';

const CPCCPMTrends = ({ data }) => (
    <div className="chart-container">
        <div className='chart-header'>
            <h3>CPC & CPM Trends - last 30 days</h3>
        </div>
        <ResponsiveContainer className="container-responsive" >
            <LineChart data={data} margin={{bottom:20, top:5}} >
                <CartesianGrid 
                    strokeDasharray="3 3" 
                    horizontal={true} 
                    vertical={true}
                />
                <XAxis 
                    dataKey="date"  
                    tick={{ fontSize: 12, angle: -45, textAnchor: 'end' }}
                />
                <YAxis 
                    yAxisId="left" 
                    orientation="left" 
                    tickFormatter={(value) => `$${value.toFixed(1)}`}
                    tick={{ fontSize: 12, angle: 0 }}  
                    label={{
                        value: 'CPC',
                        angle: 0,
                        position: 'top',//'outsideLeft',
                        offset: 10,
                        style: { textAnchor: 'middle', fontSize: 16, fill: CPC_CPM_TRENDS.CPC.color }
                    }}
                />
                <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    tickFormatter={(value) => `$${value.toFixed(0)}`}
                    tick={{ fontSize: 12,  angle: 0 }} 
                    label={{ 
                        value: 'CPM', 
                        angle: 0, 
                        position: 'top',
                        offset: 10,
                        style: { textAnchor: 'middle', fontSize: 16, fill: CPC_CPM_TRENDS.CPM.color }
                    }}
                />
                <Tooltip 
                    formatter={(value, name) => {
                        if (name === 'CTR') return [`${value.toFixed(2)}%`, name];
                        return [`$${value.toFixed(2)}`, name];
                        }}
                />
                <Legend  layout="horizontal" verticalAlign="top" align="center"/>
                <Line 
                    yAxisId="left" 
                    type="linear" 
                    dataKey="cpc" 
                    name="CPC" 
                    stroke={CPC_CPM_TRENDS.CPC.color} 
                    strokeWidth={3}
                    // fill={CPC_CPM_TRENDS.CPC.color} 
                        />
                <Line
                    // yAxisId="left" 
                    yAxisId="right" 
                    type="linear" 
                    dataKey="cpm" 
                    name="CPM" 
                    stroke={CPC_CPM_TRENDS.CPM.color} 
                    strokeWidth={3}
                    // fill={CPC_CPM_TRENDS.CPM.color} 
                />
            </LineChart>
        </ResponsiveContainer>
    </div>
)

export default CPCCPMTrends;