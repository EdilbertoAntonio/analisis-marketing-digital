import json
import random
from datetime import  timedelta
from faker import Faker

fake = Faker()

def fake_campaigns(amount:int =50) -> str:
    campaigns = []
    platforms = ['Meta Ads', 'Twitter Ads', 'Google Ads', 'TikTok Ads' ]
    fmt = '%d/%m/%Y'
    
    for _ in range(amount):
        start_date = fake.date_between(start_date='-180d', end_date='+0d')
        impressions = random.randint(1000, 100000)
        reach = random.randint(500, int(impressions))
        clicks = random.randint(300, int(impressions))
        conversions = random.randint(100, int(clicks))
        amount_spent = round(random.uniform(1000, 50000), 2)
        revenue = round(random.uniform(0, 50000), 2)
        campaigns.append({
            'startDate': start_date.strftime(fmt),
            'endDate': (start_date + timedelta(days=random.randint(7, 120))).strftime(fmt),
            'campaignName': f"Campaign {fake.word().title()} {random.randint(1000, 9999)}",
            'platform': random.choice(platforms),
            'reach': reach,
            'impressions': impressions,
            'clicks': clicks,
            'conversions': conversions,
            'amountSpent': amount_spent,
            'revenue': revenue,
            'frequency': impressions / reach,
            'ctr': (clicks / impressions) * 100,
            'cpc': amount_spent / clicks,
            'cpm': (amount_spent / impressions) * 1000,
            'costPerConversion': amount_spent / conversions,
            'conversionRate': (conversions /clicks) * 100,
            'roi': (revenue - amount_spent) / amount_spent,
            'roas': revenue / amount_spent
        })
    campaigns_json = json.dumps(campaigns, indent=2)
    return campaigns_json