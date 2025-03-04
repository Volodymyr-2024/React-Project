# Используем официальный легковесный образ Nginx
FROM nginx:alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/share/nginx/html

# Удаляем дефолтные файлы Nginx (иначе может быть конфликт)
RUN rm -rf ./*

# Распаковываем архив с проектом в папку Nginx
COPY Final_project_example.tar.bz2 /tmp/
RUN tar -xjf /tmp/Final_project_example.tar.bz2 -C /usr/share/nginx/html --strip-components=1

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
