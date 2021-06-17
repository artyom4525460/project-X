.PHONY: deploy logs cleanup

deploy:
	php artisan down || true && \
	sudo -u www-data -H git pull --prune && \
	sudo -u www-data -H composer install -n --optimize-autoloader --no-dev --ignore-platform-reqs && \
	php artisan migrate --force && \
	php artisan config:cache && \
	php artisan route:cache && \
	php artisan view:cache && \
	php artisan queue:restart && \
	php artisan up && \
	echo "\033[0;32mDeployed.\033[0m"

logs:
	tail -f storage/logs/laravel.log

cleanup:
	cat /dev/null > storage/logs/laravel.log
