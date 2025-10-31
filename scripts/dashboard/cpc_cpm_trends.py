import pandas as pd

def cpc_cpm_trends(data: pd.DataFrame) -> str:
    fmt = '%b %d'
    data["date"] = data["endDate"].dt.strftime(fmt)
    
    trends_data = data.groupby(['date'])[['cpc', 'cpm', 'ctr' ]].mean()
    trends_data = trends_data.reset_index()
    trends_data.columns =['date', 'cpc', 'cpm', 'ctr']
    
    return trends_data.to_json(orient='records', indent=2)