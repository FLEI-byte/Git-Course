# Лабораторно-практична робота №2
**на тему:** "Робота з `package.json`, залежностями, змінними оточення, семантичним версіонуванням, базовими можливостями TypeScript (type, interface, class)."

**Мета:** 
-- Ознайомитися зі структурою `package.json` та призначенням основних полів.

-- Навчитися відрізняти робочі залежності (`dependencies`) від залежностей для розробки (`devDependencies`).

-- Розібратися з принципами семантичного версіонування (SemVer) і навчитися оновлювати версії коректно.

-- Дослідити використання змінних оточення через `.env` файли та підключення їх у коді.

-- Освоїти базові конструкції TypeScript: типи, інтерфейси, класи, generics.

-- Налаштувати інструменти перевірки коду: ESLint, Prettier, Husky, Commitlint.

-- Закріпити практику роботи з Git та GitHub (ініціалізація репозиторію, коміти, теги версій).

---

## Завдання 1. Ініціалізація проєкту

1. Створено репозиторій на GitHub та склоновано його локально.

![Крок 1](screenshots/01-1_git2.png)

![Крок 1](screenshots/01-2_git2.png)

---

2. Ініціалізовано npm-проєкт (без -y, щоб уважно заповнити всі поля):

![Крок 2](screenshots/02_git2.png)

---

3. Створено файл `.gitignore` з таким вмістом:

![Крок 3](screenshots/03_git2.png)

---

4. Встановлено залежності:

![Крок 4](screenshots/04-1_git2.png)

![Крок 4](screenshots/04-2_git2.png)

---

5. Ініціалізовано TypeScript та створено файл `tsconfig.json`:

![Крок 5](screenshots/05_git2.png)

---

6. Створено файл `eslint.config.cjs`:

![Крок 6](screenshots/06_git2.png)

---

7. Створено файл `.prettierrc.cjs`:
   
![Крок 7](screenshots/07_git2.png)

---

8. Додано у `package.json` розділ scripts:
   
![Крок 8](screenshots/08_git2.png)

---

9. Створено файл `commitlint.config.cjs`:
   
![Крок 9](screenshots/09_git2.png)

---

10. Налаштовано Husky та додано git-хуки:
   
![Крок 10](screenshots/10_git2.png)

---

11. Створено папку `src` і файл `src/index.ts`:
   
![Крок 11](screenshots/11_git2.png)

---

12. Повторено перевірки та автофікс
   
![Крок 12](screenshots/12_git2.png)

---

13. Коміт
   
![Крок 13](screenshots/13_git2.png)

---

## Завдання 2. Версія 0.1.0 - прості функції з any

1. Оновлено `src/index.ts` - додаємо тип і функцію:

![Крок 1](screenshots/01_git2-2.png)

---

2. Оновлено `src/demo.ts` (навмисна помилка):

![Крок 2](screenshots/02_git2-2.png)

---

3. Запущено перевірки:

![Крок 3](screenshots/03_git2-2.png)

---

4. Оновлено `src/demo.ts`

![Крок 4](screenshots/04_git2-2.png)

---

5. Повторено перевірки та автофікс

![Крок 5](screenshots/05-1_git2-2.png)

![Крок 5](screenshots/05-2_git2-2.png)

---

6. Коміт і підняття версії

![Крок 6](screenshots/06-1_git2-2.png)

![Крок 6](screenshots/06-2_git2-2.png)

---

## Завдання 3. Версія 0.2.0 - ті ж функції, але з базовими типами

1. Оновлено `src/index.ts`:

![Крок 1](screenshots/01_git2-3.png)

---

2. Оновіть `src/demo.ts` (навмисна помилка):

![Крок 2](screenshots/02_git2-3.png)

---

3. Запущено перевірки (має з’явитись помилка типів у `demo.ts`):

![Крок 3](screenshots/03_git2-3.png)

---

4. Оновлено `src/demo.ts`
   
![Крок 4](screenshots/04_git2-3.png)

---

5. Повторено перевірки та автофікс
   
![Крок 5](screenshots/05_git2-3.png)

---

6. Коміт і підняття версії
   
![Крок 6](screenshots/06_git2-3.png)

---

## Завдання 4. Версія 0.3.0 - нова функція зі складним типом

1. Оновлено `src/index.ts` - додано тип і функцію:
   
![Крок 1](screenshots/01_git2-4.png)

---

2. Оновлено `src/demo.ts` (навмисна помилка):
   
![Крок 2](screenshots/02_git2-4.png)

---

3. Запущено перевірки (з'явилася помилка типів у `demo.ts`):
   
![Крок 3](screenshots/03_git2-4.png)

---

4. Виправте код у `src/demo.ts`
   
![Крок 4](screenshots/04_git2-4.png)

---

5. Повторено перевірки та автофікс стилю/формату:
   
![Крок 5](screenshots/05_git2-4.png)

---

6. Коміт і підняття версії:
   
![Крок 6](screenshots/06_git2-4.png)

---

## Завдання 5. Версія 0.4.0 - інтерфейси + generics

1. Оновлено `src/index.ts` та додано інтерфейс і універсальну функцію groupBy:
   
![Крок 1](screenshots/01-1_git2-5.png)

![Крок 1](screenshots/01-2_git2-5.png)

---

2. Оновлено `src/demo.ts` та навмисно зроблень помилку типу для groupBy:
   
![Крок 2](screenshots/02_git2-5.png)

---

3. Запущено перевірки та з’являється навмисна помилка типів у `demo.ts`:
   
![Крок 3](screenshots/03_git2-5.png)

---

4. Виправлено код у `src/demo.ts` та використано валідний ключ:
   
![Крок 4](screenshots/04_git2-5.png)

---

5. Повторено перевірки та автофікс стилю/формату
   
![Крок 5](screenshots/05_git2-5.png)

---

6. Коміт і підняття версії:
   
![Крок 6](screenshots/06_git2-5.png)

---

## Завдання 6. Версія 0.5.0 - клас Logger + змінні оточення (.env) /b>

1. Створено файл `src/config.ts` (валідація `.env`)
   
![Крок 1](screenshots/01_git2-6.png)

---

2. Оновлено `src/index.ts`, додано клас та підключено конфіг
   
![Крок 2](screenshots/02-1_git2-6.png)

![Крок 2](screenshots/02-2_git2-6.png)

---

3. Оновлено `.env` у корені репозиторію
   
![Крок 3](screenshots/03_git2-6.png)

Завдяки zod значення перевіряються: APP_PRECISION → 0..10 (int), LOG_LEVEL ∈ {silent, info, debug}.

---

4. Оновлено `src/demo.ts` — спочатку зроблено навмисний помилковий виклик, щоб побачити помилку типів
   
![Крок 4](screenshots/04-1_git2-6.png)

Запущено перевірки, щоб побачити помилку:

![Крок 4](screenshots/04-2_git2-6.png)

Виправлено `src/demo.ts`:

![Крок 4](screenshots/04-3_git2-6.png)

---

5. Повторено перевірки та автофікс
   
![Крок 5](screenshots/05-1_git2-6.png)

![Крок 5](screenshots/05-2_git2-6.png)

---

6. Коміт і підняття версії
   
![Крок 6](screenshots/06_git2-6.png)

---

## Завдання 7. Версія 1.0.0 - стабілізація публічного API + посилення правил

1. Переконана, що в коді більше немає any
   
![Крок 1](screenshots/01_git2-7.png)

---

2. Посилено правила ESLint (тобто заборонено any)
   
![Крок 2](screenshots/02_git2-7.png)

---

3. Упорядковано публічні експорти (тільки з `src/index.ts`)

Публічні експорти в `src/index.ts` (єдина точка входу)
   
![Крок 3](screenshots/03_git2-7.png)

`config.ts` імпортується лише всередині `index.ts`, а споживач бібліотеки працює тільки з `src/index.ts`.

---

4. Оновлено `package.json` — поле exports і types
   
![Крок 4](screenshots/04_git2-7.png)

---

5. Збірка й перевірки
   
![Крок 5](screenshots/05-1_git2-7.png)

![Крок 5](screenshots/05-2_git2-7.png)

![Крок 5](screenshots/05-3_git2-7.png)

---

6. Коміт і версія 1.0.0
   
![Крок 6](screenshots/06-1_git2-7.png)

![Крок 6](screenshots/06-2_git2-7.png)

---

## Завдання 8. Версія 2.0.0 - breaking change: зміна сигнатури add

1. Змінено сигнатуру add у `src/index.ts`

![Крок 1](screenshots/01-1_git2-8.png)

![Крок 1](screenshots/01-2_git2-8.png)

---

2. Зроблено навмисно помилковий виклик у `src/demo.ts` Також залишено старий виклик, щоб побачити помилку:
   
![Крок 2](screenshots/02-1_git2-8.png)

Запущено перевірку, щоб побачити помилку компілятора:

![Крок 2](screenshots/02-2_git2-8.png)

![Крок 2](screenshots/02-3_git2-8.png)

---

3. Виправлено виклик під новий API
   
![Крок 3](screenshots/03_git2-8.png)

---

4. Повторено перевірки
   
![Крок 4](screenshots/04-1_git2-8.png)

![Крок 4](screenshots/04-2_git2-8.png)

---

5. Коміт і версія 2.0.0
   
![Крок 5](screenshots/05-1_git2-8.png)

![Крок 5](screenshots/05-2_git2-8.png)

---

## Вимоги до оформлення проєкту

**Крок 1.** Виправлено назву конфіга Prettier (`.prettierrc.cjs`) згідно з вимогами, повторні перевірки (typecheck, lint, format:check)
   
![Крок 1](screenshots/01-1_git2-9.png)

---

**Крок 2.** Посилено правила ESLint: заборонено any (no-explicit-any: error), виправлено хибне попередження no-unused-vars, збірку dist виключено з перевірки

![Крок 2](screenshots/02-1_git2-9.png)

Повторні перевірки (format, typecheck, lint, format:check) проходять без зауважень

![Крок 2](screenshots/02-2_git2-9.png)

---

**Крок 3.** Коміт і пуш.

Коміт проходить husky-хуки (lint, format:check, typecheck, commitlint), зміни запушено на GitHub

![Крок 3](screenshots/03_git2-9.png)

---

**Крок 4.** `npm run build` створює dist/ (CJS, ESM, .d.ts)

![Крок 4](screenshots/04-1_git2-9.png)

Повторні перевірки після налаштування збірки (`.cjs`) проходять без зауважень

![Крок 4](screenshots/04-2_git2-9.png)

`package.json`: розділені `dependencies` і `devDependencies`, скрипти, поля main/module/types/exports

![Крок 4](screenshots/04-3_git2-9.png)

Коміт проходить husky-хуки (lint, format:check, typecheck, commitlint), зміни запушено на GitHub

![Крок 4](screenshots/04-4_git2-9.png)

---

**Крок 5.** Структура файлів проєкту (src, .husky, конфіги, .env, .gitignore)

![Крок 5](screenshots/05_git2-9.png)

---

**Крок 6.** Husky-хуки: pre-commit (lint, format:check, typecheck) і commit-msg (commitlint)

![Крок 6](screenshots/06_git2-9.png)

---

**Крок 7.** commit-msg перевіряє Conventional Commits: повідомлення "bad message" відхилено

![Крок 7](screenshots/07_git2-9.png)

---

**Крок 8.** `.env` відсутній у репозиторії (git ls-files), файл захищений через `.gitignore`

![Крок 8](screenshots/08_git2-9.png)

---

**Крок 9.**  Історія комітів і git-теги релізів v0.1.0 v0.2.0 v0.3.0 v0.4.0 v0.5.0 v1.0.0 v2.0.0

![Крок 9](screenshots/09-1_git2-9.png)

Репозиторій GitHub: теги релізів v0.1.0 v0.2.0 v0.3.0 v0.4.0 v0.5.0 v1.0.0 v2.0.0

![Крок 9](screenshots/09-2_git2-9.png)

---

**Крок 10.**  `npm run demo`: результат роботи `demo.ts` на фінальному стані (версія 2.0.0)

![Крок 10](screenshots/10_git2-9.png)

---

**Крок 11.**  Перевірка форматування `README.md` (format, format:check)

![Крок 11](screenshots/11-1_git2-9.png)

Додано README.md, коміт проходить husky-хуки (lint, format:check, typecheck, commitlint)

![Крок 11](screenshots/11-2_git2-9.png)

`README.md` у репозиторії GitHub (відрендерений вигляд)

![Крок 11](screenshots/11-3_git2-9.png)

![Крок 11](screenshots/11-4_git2-9.png)

![Крок 11](screenshots/11-5_git2-9.png)

![Крок 11](screenshots/11-6_git2-9.png)

---




























