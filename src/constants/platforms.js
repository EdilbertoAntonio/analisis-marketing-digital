export const PLATFORMS = [
  {
    platform: 'Meta Ads',
    color: '#4267B2'
  },
  {
    platform: 'Twitter Ads',
    color: '#1DA1F2'
  },
  {
    platform: 'Google Ads',
    color: '#34A853'  //'#833AB4'
  },
  {
    platform: 'TikTok Ads',
    color: '#FE2C55'
  }
];

export const PLATFORMS_LIST = Object.values(PLATFORMS).map(p => p.platform);
export const getPlatformColor = (platformName) => 
  Object.values(PLATFORMS).find(p => p.platform === platformName)?.color || '#999';