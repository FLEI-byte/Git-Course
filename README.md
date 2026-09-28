\# git-course

Навчальна TypeScript-бібліотека невеликих утиліт, створена в межах лабораторно-практичної роботи №2. Проєкт показує роботу з package.json, залежностями, змінними оточення, семантичним версіонуванням та базовими можливостями TypeScript (type, interface, class, generics).

Також налаштовано інструменти перевірки коду: ESLint, Prettier, Husky і Commitlint. Кожна версія бібліотеки відповідає окремому кроку завдання і має git-тег.

\## Запуск

```bash

npm i

npm run demo

npm run build

```

Перевірки коду:

```bash

npm run typecheck

npm run lint

npm run format:check

```

Після `npm run build` у папці `dist/` з'являються `index.cjs`, `index.mjs`, `index.d.ts` та `index.d.mts`.

\## Еволюція версій

| Версія | Що додано | Чому така версія |

| ------ | --------------------------------------------------------------------------------------------- | -------------------------------------- |

| 0.1.0 | Функції `add` і `capitalize` з типом `any` | Перший реліз базового функціоналу |

| 0.2.0 | Ті самі функції з типами `number` і `string` | Сумісність збережено (MINOR) |

| 0.3.0 | `formatNumber` і тип `NumberFormatOptions` | Нова можливість (MINOR) |

| 0.4.0 | Інтерфейс `User` і generic-функція `groupBy<T>` | Нова можливість (MINOR) |

| 0.5.0 | Клас `Logger`, `.env` з валідацією через zod, `formatNumber` бере точність з `APP\_PRECISION` | Нова можливість (MINOR) |

| 1.0.0 | Стабілізація API, заборона `any` в ESLint, поля `exports` у package.json, збірка | Фіксація публічного API (MAJOR) |

| 2.0.0 | `add` тепер приймає `number\[]` | Порушення сумісності (MAJOR) |

\## Приклади використання

```ts

import { add, capitalize, formatNumber, groupBy, Logger, type User } from './index';



console.log(add(\[2, 3, 4]));

console.log(capitalize('hello'));

console.log(formatNumber(123.456, { precision: 2 }));

console.log(formatNumber(123.456));



const users: User\[] = \[

&#x20; { id: 1, name: 'Alice' },

&#x20; { id: 2, name: 'Bob' },

];

console.log(groupBy(users, 'name'));



const logger = new Logger('debug');

logger.info('Application started');

logger.debug('Extra debug info');

```

Результат: `add` повертає 9, `capitalize` повертає `Hello`, `formatNumber` із `precision: 2` повертає `123.46`, без параметра бере точність з `APP\_PRECISION`, `groupBy` групує користувачів за іменем.

\## Змінні оточення (.env)

Файл `.env` лежить у корені проєкту, додається в `.gitignore` і не потрапляє в репозиторій. Значення перевіряються через zod.

| Ключ | Допустимі значення | За замовчуванням |

| --------------- | ------------------------- | ---------------- |

| `APP\_PRECISION` | ціле число від 0 до 10 | 2 |

| `LOG\_LEVEL` | `silent`, `info`, `debug` | `info` |

Приклад:

```

APP\_PRECISION=3

LOG\_LEVEL=debug

```

\## Husky-хуки

\- `pre-commit` запускає `npm run lint \&\& npm run format:check \&\& npm run typecheck`.

\- `commit-msg` перевіряє повідомлення за стандартом Conventional Commits через commitlint.

\## Теги релізів

\- \[v0.1.0](https://github.com/FLEI-byte/GIT-Course/tree/v0.1.0)

\- \[v0.2.0](https://github.com/FLEI-byte/GIT-Course/tree/v0.2.0)

\- \[v0.3.0](https://github.com/FLEI-byte/GIT-Course/tree/v0.3.0)

\- \[v0.4.0](https://github.com/FLEI-byte/GIT-Course/tree/v0.4.0)

\- \[v0.5.0](https://github.com/FLEI-byte/GIT-Course/tree/v0.5.0)

\- \[v1.0.0](https://github.com/FLEI-byte/GIT-Course/tree/v1.0.0)

\- \[v2.0.0](https://github.com/FLEI-byte/GIT-Course/tree/v2.0.0)

Сторінка всіх тегів: https://github.com/FLEI-byte/GIT-Course/tags
