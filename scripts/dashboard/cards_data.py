import json
import pandas as pd
from ..utils.date_range import get_previous_month_range, get_current_month_range

def compute_change(current:float, previous:float) -> float:
    if previous == 0:
        return 100.0 if current > 0 else 0.0
    
    return ((current - previous)/previous) * 100

def get_metric_change(current_data: pd.DataFrame, previous_data: pd.DataFrame, metric_name: str, agg_method: str) -> float:
    current_metric = current_data[metric_name].agg(agg_method)
    previous_metric = previous_data[metric_name].agg(agg_method)
    
    return compute_change(current_metric, previous_metric)

def cards_data(data: pd.DataFrame) -> str:
    start_date, end_date = get_current_month_range()
    current_data = data[(data['endDate']>=start_date) & (data['endDate']<=end_date)].copy()

    start_date_prev, end_date_prev = get_previous_month_range(start_date, end_date)
    previous_data = data[(data['endDate']>=start_date_prev) & (data['endDate']<=end_date_prev)].copy()

    metrics_to_process = {
        'revenue': 'sum',
        'conversions': 'sum',
        'roas': 'mean',
        'cpc': 'mean'
    }

    results = {
        metric: get_metric_change(current_data, previous_data, metric, agg_method)
        for metric, agg_method in metrics_to_process.items()
    }    
    cards_data = json.dumps(results, indent=2)
    
    return cards_data