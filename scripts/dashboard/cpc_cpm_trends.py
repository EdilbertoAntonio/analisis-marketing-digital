import json
import pandas as pd

def cpc_cpm_trends(data: pd.DataFrame) -> str:
    fmt = '%b %d'
    data["date"] = data["endDate"].dt.strftime(fmt)

    trends_data = data[['date', 'cpc', 'cpm', 'ctr']]
    #trends_data.columns = ['date', 'cpc', 'cpm', 'ctr']

    trends_data_dict = trends_data.to_dict(orient='records')
    trends_data_json = json.dumps(trends_data_dict, indent=2, ensure_ascii=False)
    
    return trends_data_json