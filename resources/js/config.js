const defaultApiUrl = 'https://candershopifyapp.com';

const getApiUrl = () => {
    if (document.currentScript && document.currentScript.src) {
        const uri = new URL(document.currentScript.src);
        return uri.origin;
    }
    return defaultApiUrl;
}

export const canderConfig = {
    api_url: getApiUrl(),
    isProd: getApiUrl().startsWith(defaultApiUrl),
    proxyPrefix: '/apps/proxy',
    fsOrgId: ''
}
