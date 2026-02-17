# Как показать Lab 4 преподавателю

## Запуск приложений

### Task 1 — Housing Locations (Angular Tutorial)

```bash
cd lab4/task1
npm install
ng serve
```

Открой **http://localhost:4200** в браузере.

**Что показать:**
1. Главная страница — список жилых локаций с поиском по городу
2. Введи в поиск `Chicago` или `Oakland` — список отфильтруется
3. Нажми **"Learn More"** на карточке — откроется страница деталей
4. Заполни форму (First Name, Last Name, Email) и нажми **"Apply now"** — в консоли браузера (F12 → Console) появится лог заявки

---

### Task 2 — Online Store (Kaspi.kz)

Останови Task 1 (Ctrl+C в терминале), затем:

```bash
cd lab4/task2/online-store
npm install
ng serve
```

Снова открой **http://localhost:4200**.

**Что показать:**
1. Каталог товаров с Kaspi.kz (карточки с фото, ценой, рейтингом)
2. У товаров с 3+ фото — галерея (стрелки или миниатюры)
3. Кнопки **WhatsApp** и **Telegram** — открывают шаринг ссылки на товар
4. **"View on Kaspi"** — переход на реальную страницу товара
5. Адаптивность — уменьши окно браузера, сетка подстроится

---

## Кратко для отчёта

| Задание | Технологии | Основное |
|---------|------------|----------|
| **Task 1** | Components, Services, Routing, Forms, *ngFor, *ngIf | Housing app из официального туториала Angular |
| **Task 2** | @Input, data binding, directives, share URLs | Онлайн‑магазин с каталогом Kaspi.kz |

---

## Если что-то не работает

- **Node/npm не найдены** — установи Node.js с https://nodejs.org
- **ng не найден** — выполни `npm install -g @angular/cli`
- **Порт 4200 занят** — используй `ng serve --port 4201` и открой localhost:4201
