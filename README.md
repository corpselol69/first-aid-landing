# Первая помощь — лендинг

Стек: Vite + React 18 + TypeScript + Tailwind CSS + Embla Carousel + Framer Motion + RTK Query.

## Локальный старт

```bash
npm install
npm run dev
# сборка и предпросмотр
npm run build
npm run preview
```

## Деплой на GitHub Pages

1. В `vite.config.ts` установлен `base: '/first-aid-landing/'`.
2. Запустите:

```bash
npm run deploy
```

Сайт будет опубликован в ветке `gh-pages`.

## API мок-файлы (public)

- GET `/api/testimonials.json`
- GET `/api/thanks.json`

### Схема JSON

- testimonials: Array<{ id, author, text, sourceUrl?, createdAt? }>
- thanks: Array<{ id, name, link? }>

Примеры см. в `public/api/`.
