# internet-magazine

Для установки у вас должен docker & docker-compose

1 Установка Laravel docker
   
   sudo docker-compose up -d

2 Установка зависомости
   
   sudo docker-compose exec php composer update
   
3 Создание .env
   
   sudo docker-compose run --rm php cp .env.example .env

4 Генерирование ключ
   
   sudo docker-compose run --rm php php artisan key:generate

5 Миграция
   
   sudo docker-compose run --rm php php artisan migrate

6 Права доступа
   
   sudo chmod -R 777 ./*

Сайт: localhost:8080  frontend - localhost:8083 backend - localhost:8000 phpMyAdmin