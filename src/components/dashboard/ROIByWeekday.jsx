import '../../assets/styles/Dashboard/charts.css';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { ROI_METRICS } from '../../constants/chartsColors';
import Select from '../../components/Select';

const ROIByWeekday = ({ dataMap }) => {
    const [range, setRange] = useState('Last 30 Days');
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        if (dataMap && dataMap[range]) {
            setCurrentData(dataMap[range]);
        }
    }, [range, dataMap]);

    const handleRangeChange = (e) => {
        setRange(e.target.value);
    };

    const getROIColor = (value) => {
        if (value >= 0) {
            return ROI_METRICS.ROI.positiveColor;
        } else {
            return ROI_METRICS.ROI.negativeColor; 
        }
    };

    const getLeftYAxisDomain = () => {
        if (!currentData || currentData.length === 0) return [0, 100];
        
        const roiValues = currentData.map(item => parseFloat(item.roi));
        const minROI = Math.floor(Math.min(...roiValues));
        const maxROI = Math.ceil(Math.max(...roiValues));
        const margin = Math.abs(maxROI * 0.1);
        
        return [Math.min(0, minROI), Math.max(100, maxROI+ margin) ];
    };

    return (
        <div className="chart-container">
            <div className="chart-header" >
                <h3>ROI by Weekday</h3>
                <div className='select-wrapper'>
                    <Select 
                        value={range} 
                        onChange={handleRangeChange} 
                    >
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Month</option>
                        <option>Last Month</option>
                    </Select>
                </div>
            </div>

            <ResponsiveContainer className="container-responsive">
                <BarChart data={currentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis 
                        yAxisId="left" 
                        orientation="left" 
                        domain={getLeftYAxisDomain()}  
                        tickFormatter={(value) => `${value.toFixed(0)}%`}
                        tick={{ fontSize: 14 }}  
                        // ticks={getLeftYAxisTicks()}
                    />
                    <Tooltip 
                        formatter={(value, name) => {
                            if (name === 'ROI') return [`${value.toFixed(2)}%`, name];
                            return [`$${value.toFixed(2)}`, name];
                        }}
                    />
                    {/* <Legend /> 
                    <Bar 
                        yAxisId="left" 
                        dataKey="Revenue" 
                        name="Revenue" 
                        fill={ROI_METRICS.Revenue.color} 
                    />
                    <Bar 
                        yAxisId="left" 
                        dataKey="AdSpend" 
                        name="Spend" 
                        fill={ROI_METRICS.AdSpend.color} 
                    /> */}
                    <Bar 
                        // yAxisId="right"
                        yAxisId="left" 
                        dataKey="roi" 
                        name="ROI" 
                        fill={ROI_METRICS.ROI.color}
                    >
                        {currentData.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={getROIColor(entry.roi)} 
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ROIByWeekday;