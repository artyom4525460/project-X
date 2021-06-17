# Cander ‑ QR Virtual Greetings

## Production

### 💡 Installation

Installation instructions can be found [here](instance/install-packages.sh).

### 🎉 Deployment

Run this command on each instance:

```bash
cd /var/www/cs && make deploy
```

## Development

### Requirements

- php: **^7.4**

### Installation

The project is based on the **Laravel** framework and it's a regular installation. More details can be found at https://laravel.com.

### Deployment

Run the following commands to start the server on the default port and get the ngrok link for the application:

```bash
php artisan serve
ngrok http 8000
```

### Creating shopify app

- Create public app
- Go to **App setup**
- Section **URLs**
    - App URL: https://change-me.ngrok.io
    - Allowed redirection URL(s): https://change-me.ngrok.io/authenticate
- Go to **Extensions**
- Go to **Online Store**
- Section **App proxy**
    - Subpath prefix: apps
    - Subpath: proxy
    - Proxy URL: https://change-me.ngrok.io/api/proxy
- Go to **.env** file
  - APP_URL: https://change-me.ngrok.io
