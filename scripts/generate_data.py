import pandas as pd
from io import StringIO
from .fake_data import fake_campaigns
from .utils.date_range import get_last_30_days, get_last_3_months
from .dashboard.spent_by_platform import spent_by_platform
from .dashboard.cpc_cpm_trends import cpc_cpm_trends
from .dashboard.campaign_performance_clusters import campaign_performance_clusters
from .dashboard.top_performing_campaigns import top_performing_campaigns
from .dashboard.high_risk_campaigns import high_risk_campaigns
from .dashboard.cards_data import cards_data
from .dashboard.roi_by_weekday import roi_by_weekday

def save_json(name_file:str, file:str) -> None:
    with open(name_file, 'w', encoding='utf-8') as f:
        f.write(file)

def main():
    campaigns_data = fake_campaigns(75)

    data = pd.read_json(StringIO(campaigns_data))
    fmt = '%d/%m/%Y'
    data["startDate"] = pd.to_datetime(data["startDate"], format=fmt, errors='coerce')
    data["endDate"] = pd.to_datetime(data["endDate"], format=fmt, errors='coerce')

    start_date_last_3_months, end_date_last_3_months = get_last_3_months()
    data_last_3_months = data[(data['endDate']>=start_date_last_3_months) & (data['endDate']<=end_date_last_3_months)].copy()

    start_date_last_30_days, end_date_last_30_days = get_last_30_days()
    data_last_30_days = data[(data['endDate']>=start_date_last_30_days) & (data['endDate']<=end_date_last_30_days)].copy()
    data_last_30_days = data_last_30_days.sort_values(by='endDate')

    spent_data = spent_by_platform(data_last_30_days)
    trends_data = cpc_cpm_trends(data_last_30_days)
    clusters_data = campaign_performance_clusters(data_last_30_days)
    top_campaigns = top_performing_campaigns(data_last_30_days)
    high_risk = high_risk_campaigns(data_last_30_days)
    cards = cards_data(data_last_3_months)
    roi_last_30_days, roi_last_7_days, roi_this_month, roi_last_month = roi_by_weekday(data_last_3_months)

    route = 'src/data/'
    route_dashboard = route + 'dashboard/'
    save_json(route +'data.json', campaigns_data)

    files_to_save = {
        'spent_data.json': spent_data,
        'trends_data.json': trends_data,
        'performing_data.json': clusters_data,
        'top_campaigns_data.json': top_campaigns,
        'high_risk_data.json': high_risk,
        'cards_data.json': cards,
        'roi_last_30_days.json': roi_last_30_days,
        'roi_last_7_days.json': roi_last_7_days,
        'roi_last_month.json': roi_last_month,
        'roi_this_month.json': roi_this_month
    }

    for filename, content in files_to_save.items():
        save_json(route_dashboard + filename, content)

if __name__ == '__main__':
    main()