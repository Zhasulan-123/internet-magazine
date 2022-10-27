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

5 Права доступа
   
   sudo chmod -R 777 ./*

6 Сайт: 

   localhost:8080  frontend - vuejs

   localhost:8083 backend - Laravel 9v

   localhost:8000 phpMyAdmin

     Пользователь: user
     Пароль: test

7 Postman

   Регистрация
  
   localhost:8083/api/register - POST

   headers Accept application/json

   body -> x-www-form-urlencoded  name Астана email astana@mail.ru password astana

   Авторизация

   localhost:8083/api/login - POST

   headers Accept application/json

   body -> x-www-form-urlencoded  email astana@mail.ru password astana

   Категория

   localhost:8083/api/categories - GET

   Продукты

   localhost:8083/api/products - GET

   Заказа

   localhost:8083/api/order - GET

   Bearer Token
