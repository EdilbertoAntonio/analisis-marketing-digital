import pandas as pd
from datetime import  datetime
from ..utils.date_range import get_last_30_days, get_last_7_days, get_current_month_range, get_previous_month_range

def process_period_data(data: pd.DataFrame, start_date: datetime, end_date: datetime) -> str:

    period_data = data[(data['endDate'] >= start_date) & (data['endDate'] <= end_date)].copy()
    period_data['weekday'] = period_data['endDate'].dt.strftime('%a')

    roi_by_day = period_data.groupby('weekday')[['revenue', 'amountSpent', 'roi']].mean()
    roi_by_day = roi_by_day.reset_index()
    roi_by_day.columns = ['day', 'Revenue', 'AdSpend', 'roi']
    
    return roi_by_day.to_json(orient='records', indent=2)

def roi_by_weekday(data: pd.DataFrame) -> tuple[str, str, str, str]:
    
    start_date_last_30, end_date_last_30 = get_last_30_days()
    start_date_last_7, end_date_last_7 = get_last_7_days()
    start_date_current, end_date_current = get_current_month_range()
    start_date_previous, end_date_previous = get_previous_month_range(start_date_current, end_date_current)

    
    roi_last_30_days_json = process_period_data(data, start_date_last_30, end_date_last_30)
    roi_last_7_days_json = process_period_data(data, start_date_last_7, end_date_last_7)
    roi_this_month_json = process_period_data(data, start_date_current, end_date_current)
    roi_last_month_json = process_period_data(data, start_date_previous, end_date_previous)
    
    return roi_last_30_days_json, roi_last_7_days_json, roi_this_month_json, roi_last_month_json