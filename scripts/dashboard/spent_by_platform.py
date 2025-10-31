import pandas as pd

def spent_by_platform(data:pd.DataFrame) -> str:
    spent_data = data.groupby('platform')['amountSpent'].sum()
    spent_data = spent_data.reset_index()
    spent_data.columns = ['platform', 'amountSpent']
    spent_data_json = spent_data.to_json(orient='records', indent=2)
    
    return spent_data_json