#!/bin/bash

# Update packages
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y && sudo apt clean

# Uninstall apache
sudo service apache2 stop && sudo apt-get --purge remove -y apache2* && sudo rm -rf /etc/apache2

# Install nginx
sudo apt install -y nginx

# Install php
sudo add-apt-repository ppa:ondrej/php && sudo apt update
sudo apt install -y php8.0 php8.0-cli php8.0-fpm php8.0-curl php8.0-imap php8.0-mbstring php8.0-mysql php8.0-xml

# Install utils
sudo apt install -y git zip unzip make

# Install composer https://getcomposer.org/download
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer

# Permissions
sudo mkdir /var/www/cs
sudo chown -R www-data:www-data /var/www
sudo chmod -R g+w /var/www/cs
sudo chmod g+s /var/www/cs

# Clone git repository
cd /var/www/cs
git clone $GIT_REPO_URL .
cp .env.example .env
composer install --ignore-platform-reqs
php artisan key:generate
php artisan migrate --seed

# Nginx configuration
sudo cp /var/www/cs/instance/nginx/default /etc/nginx/sites-available/default
sudo service nginx restart
