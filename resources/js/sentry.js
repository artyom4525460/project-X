import * as Sentry from "@sentry/browser";
import {Integrations} from "@sentry/tracing";
import {canderConfig as config} from "./config";

export const sentry = () => {
    try {
        if (!config.isProd) {
            return;
        }
        Sentry.init({
            dsn: 'https://c5d53b78fb74452f93f3312ad477eb28@sentry.pfrus.com/9',
            integrations: [
                new Integrations.BrowserTracing(),
            ],

            tracesSampleRate: 1.0,
        });
    } catch (e) {
    }
}
