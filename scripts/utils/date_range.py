from datetime import  timedelta, datetime
# from typing import Tuple

def get_previous_month_range(start: datetime, end: datetime) -> tuple[datetime, datetime]:
    if start > end:
        raise ValueError("Start date cannot be after end date.")

    prev_day = start - timedelta(days=1)
    prev_year = prev_day.year
    prev_month = prev_day.month
    last_day_prev_month = prev_day.day
    prev_end_day = min(end.day, last_day_prev_month)
    previous_start = datetime(prev_year, prev_month, 1)
    previous_end = datetime(prev_year, prev_month, prev_end_day)
    return previous_start, previous_end

def get_current_month_range() -> tuple[datetime, datetime]:
        
    current_end = datetime.today()
    current_start = datetime(current_end.year, current_end.month, 1)
    
    return current_start, current_end

def get_last_30_days() -> tuple[datetime, datetime]:
        
    today = datetime.today()
    last_30_days = today - timedelta(days=30)
    
    return last_30_days, today

def get_last_7_days() -> tuple[datetime, datetime]:
        
    today = datetime.today()
    last_7_days = today - timedelta(days=7)
    
    return last_7_days, today

def get_last_3_months() -> tuple[datetime, datetime]:
        
    today = datetime.today()
    last_3_months = today - timedelta(days=90)
    
    return last_3_months, today