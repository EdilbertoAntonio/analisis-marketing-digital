export const PLATFORMS = [
  {
    platform: 'Facebook',
    color: '#4267B2'
  },
  {
    platform: 'X (Twitter)',
    color: '#1DA1F2'
  },
  {
    platform: 'Instagram',
    color: '#833AB4'
  },
  {
    platform: 'TikTok',
    color: '#FE2C55'
  }
];

export const PLATFORMS_LIST = Object.values(PLATFORMS).map(p => p.platform);
export const getPlatformColor = (platformName) => 
  Object.values(PLATFORMS).find(p => p.platform === platformName)?.color || '#999';