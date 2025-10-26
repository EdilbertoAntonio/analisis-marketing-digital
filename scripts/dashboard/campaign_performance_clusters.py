import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import numpy as np

def campaign_performance_clusters(data:pd.DataFrame) -> str:
    data = data[['cpc','costPerConversion', 'cpm', 'ctr', 'conversionRate', 'frequency', 'roas', 'roi', 'revenue']]
    scaler = MinMaxScaler()
    normalized_data = pd.DataFrame(scaler.fit_transform(data))
    normalized_data.columns = data.columns
    normalized_data['cpc'] = 1 - normalized_data['cpc']
    normalized_data['costPerConversion'] = 1 - normalized_data['costPerConversion']
    normalized_data['cpm'] = 1 - normalized_data['cpm']
    normalized_data['score'] = (0.4*normalized_data[['cpc','costPerConversion', 'cpm']].mean(axis=1)
                            + 0.3*normalized_data[['ctr','conversionRate', 'frequency']].mean(axis=1)
                            + 0.3*normalized_data[['roas','roi', 'revenue']].mean(axis=1))
    normalized_data['performance'] = np.where(normalized_data['score']>=0.7, 'High', (np.where(normalized_data['score']>=0.4, 'Middle', 'Low')))

    performance_data = normalized_data.groupby('performance').size()
    performance_data = performance_data.reset_index()
    performance_data.columns = ['performance', 'noCampaigns']
    performance_data_json = performance_data.to_json(orient='records', indent=2)
    
    return performance_data_json
