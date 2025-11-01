import pandas as pd

def top_performing_campaigns(data:pd.DataFrame) -> str:
    data = data[['campaignName', 'roas']]

    top_data = data.sort_values(by='roas', ascending=False)
    top_data.columns = ['name', 'roas']
    top_data_json = top_data.to_json(orient='records', indent=2)

    return top_data_json