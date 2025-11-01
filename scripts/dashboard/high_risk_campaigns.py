import pandas as pd

def high_risk_campaigns(data:pd.DataFrame) -> str:
    data = data[['campaignName', 'roi']]

    high_risk_data = data.sort_values(by='roi')
    high_risk_data.columns = ['name', 'roi']
    high_risk_data_json = high_risk_data.to_json(orient='records', indent=2)
    
    return high_risk_data_json
    