# Используем официальный образ Node.js
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Строим приложение для продакшн
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 80

# Команда для запуска приложения
CMD ["npx", "serve", "build"]
