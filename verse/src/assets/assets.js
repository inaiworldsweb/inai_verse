const PUBLIC_ASSETS = {
  inaiLogo: '/inailogo.png',
}

export function getAsset(key) {
  return PUBLIC_ASSETS[key] ?? ''
}

export const assets = PUBLIC_ASSETS
