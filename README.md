# Rowan

Проект основан на [vite](https://vitejs.dev/) с использованием шаблона
`react-ts`.

## Установка проекта

Для скачивания всех зависимостей необходимо запустить:

```cli
npm install
```

## Скрипты

Запуск скриптов происходит с помощью `npm run`.

- `start` - запуск проекта.
- `type-check` - проверка проекта на наличие ошибок `typescript`.
- `lint` - проверка на наличие ошибок `eslint`.
- `lint:fix` - проверка и исправление ошибок `eslint`.
- `lint-staged` - запуск предкоммитовых скриптов.
- `i18next:parse` - парсинг файлов на наличие в них терминов для локализации.
- `locize:download` - получение переводов по всем языкам.
- `test` - запуск всех тестов.
- `test:changed` - запуск измененных тестов.
- `test:unit` - запуск unit тестов.
- `test:visual` - запуск визуальных тестов.
- `test:e2e` - запуск end to end тестов.
- `storybook` - запуск [storybook](https://storybook.js.org/).

## Структура проекта

- Все компоненты находятся в папке `src`.
- Добавлять новый компонент, который можно переиспользовать, а так же тесты для компонента
необходимо в папку `src/components`.
- В папке `src/ui` находятся UI компоненты экранов на разных этапах загрузки приложения.
В `src/ui/PreloaderScreen` компонент прелоадера. В `src/ui/StartScreen` компонент
cо слайдером изображений и кнопкой старта игры. В `src/ui/GameScreen` компонент
c интерфейсом и самой игрой. В `src/ui/GameScreen/Info` компоненты, которые можно
использовать в правилах. В `src/ui/GameScreen/Main/SlotInterface` полностью готовый
интерфейс для **слот** игр.
- В папке `src/tests` содержатся `visual` и `e2e` тесты распределенные
по папкам `visual`, `e2e` соответственно.

## Правила написания нового компонента

- Если компонент не содержит в себе зависимости от данных (чистый компонент),
то его следует помещать в папку `src/components`. Если же у компонента есть
зависимость от данных, то это уже шаблон и его необходимо разместить в папке
`src/templates`.
- Для того чтобы задавать стили компоненту используется подход
[vanila-extract](https://vanilla-extract.style/).

## Правила написания стилей

### Папка themes

В ней содержатся уже готовые функции `sprinkles` со всем необходимым для
стилизации компонентов. Так же уже заранее заданы возможные значения
переменных в файле `themes/var.css.ts`.

Главная функция называется `mainThemeSprinkles`. При стилизации нового
компонента необходимо использовать именно эту функцию, так как она уже
содержит в себе весь необходимый набор свойств, которые могут понадобится
при разработке. Использовать ее можно как в файлах `styles.css.ts`, так и
непосредственно в самом компоненте, вызывая ее в свойстве `className` компонента.

Если появилась необходимость добавить новый стиль, то на одном уровне с
компонентов создается файл `styles.css.ts`. В нем описываются нужные
стили с использованием `mainThemeSprinkles`.

Переменная стиля **должна быть** названа по формату **someNameStyle**
и должна экспортироваться.

**Пример:**

```typescript
export const blockStyle = style({...});
```

Так же возможно написание рецепта стиля (в случаях если компонент будет
изменяться визуально в зависимости от переданных свойств). Такой стиль
должен быть назван в формате **someNameRecipe** и так же должен
экспортироваться. Для такого стиля нужно создать тип, с помощью
`RecipeVariants` в формате **SomeNameVariants**, который будет
содержать в себе все написанные варианты со свойствами, и его можно
будет использовать уже непосредственно в самом компоненте.

**Пример:**

```typescript
export const blockRecipe = recipe({...});

export type BlockVariants = RecipeVariants<typeof blockRecipe>;

```

Если необходимо создать новую `sprinkles` функцию, то сначала мы
описываем свойства этой функции в формате **nameProperties**,
потом добавляем эти свойства в функцию создания `sprinkles`, имя
константы задаем в формате **nameSprinkles**, экспортируем ее,
и так же выводим на ее основе тип в формате
**SomeNameSprinklesProperties**.

**Пример:**

```typescript
const sizeProperties = defineProperties({...});

export const sizeSprinkles = createSprinkles(sizeProperties);

export type SizeSprinklesProperties = Parameters<typeof sizeSprinkles>;

```

## Тестирование приложения

Для тестирования приложения используется библиотека [jest](https://jestjs.io/ru/docs/getting-started).
Для визуальных тестов используется аддон [storybook-addon-playwright](https://storybook.js.org/addons/storybook-addon-playwright).
В разделе скрипты описаны команды для запуска необходимых тестов.

> ***Важно***.
> *Для запуска визуальных тестов необходимо запустить storybook.*

### Написание нового визуального теста

Рядом с тестируемым компонентом необходимо создать файл в формате
**ComponentName.stories.playwright.json**. Содержимым файла является
конфигурация для теста непосредственно этого компонента. Пример того
как должна выглядеть данная конфигурация можно посмотреть в
папке `src/ui/GameScreen/Main/SlotInterface/`.

Допустим конфигурация выглядит так:

```json
{
  "version": "4",
  "stories": {
    "templates-slot--interface": {
      "screenshots": [
        {
          "browserOptionsId": "portrait",
          "browserType": "chromium",
          "id": "portrait0",
          "index": 0,
          "title": "portrait-chromium"
        },
        {
          "browserOptionsId": "portrait",
          "browserType": "webkit",
          "id": "portrait2",
          "index": 2,
          "title": "portrait-webkit"
        },
        {
          "browserOptionsId": "landscape",
          "browserType": "chromium",
          "id": "landscape0",
          "index": 3,
          "title": "landscape-chromium"
        },
        {
          "browserOptionsId": "landscape",
          "browserType": "firefox",
          "id": "landscape1",
          "index": 4,
          "title": "landscape-firefox"
        },
      ]
    }
  },
  "browserOptions": {
    "portrait": {
      "viewport": {
        "width": 375,
        "height": 812
      },
      "colorScheme": "dark"
    },
    "landscape": {
      "viewport": {
        "width": 812,
        "height": 375
      },
      "colorScheme": "dark"
    },
  }
}

```

В объекте `screenshots` находится массив с настройкой скриншотов которые
будут сделаны в указанном браузере.

- `browserType`: доступные значения `firefox`, `webkit`, `chrome`.
- `browserOptionId`: идентификатор браузера, описанный в объекте
`browserOptions`.
- `id`: идентификатор скриншота, должен быть уникальным.
- `index`: индекс скриншота, может быть любым уникальным в данном массиве
числом.
- `title`: на основе это свойства будет сгенерировано уникальное имя
скриншота.

В объекте `browserOptions` содержится объект с необходимыми размерами окна
браузера.

В примере выше указаны следующие `browserOptionId`: `portrait` и `landscape`.
Далее описаны свойства их вьюпорта (width, height),`colorScheme` указывает
заливку фона.

После того файл с настройкой был создан, нужно написать сам тест. См. пример
`SlotInterface.test.ts`. В тесте необходимо указать путь к скриншоту по
аналогии со SlotInterface, меняя имя компонента и если необходимо папку
(templates).

```typescript
playwrightJsonPath: path('templates', 'SlotInterface'),
```

При запуске теста создадутся новые скриншоты, либо произойдет их сравнение
с уже существующими, и появится папка `diff` если было найдено несоответствие
пикселей.

Скриншоты можно обновить с помощью storybook. Необходимо открыть админ
панель storybook перейдя по адресу `localhost:6006`, выбрать компонент,
зайти в раздел screenshots и нажать на кнопку замены.

Так же скриншоты можно обновить с помощью самого теста. Нужно удалить
папку со старыми скриншотами и запустить тест.

## Правила для описания информации об игре

### Секция бонусов и выплат (Pay table)

- Описание особенных символов, которые имеют собственную логику. Например это
  может быть Wild или Scatter символ. Слева располагается изображение символа, а
  справа текст с описанием логики символа.

  > **Пример:**
  >
  > A Wild symbol substitutes for any symbol except Totem and Money Symbol.

- Описание возможностей игры (feature, bonus). Например это могут быть
  Free Spins, Respins и т.п. В описании должна быть информация о том как
  запускается бонус, что происходит в процессе, чтобы из описания игрок получил
  представление о игровом процессе бонуса. Слева располагается изображение для
  бонуса, а справа текст с описанием логики бонуса. Перечисляются все бонусы игры.

  > **Пример:**
  >
  > 3 Scatter symbols on the reels trigger 5 Free Spins with a Giant Symbol.
  > Scatter symbols pay on any position on the reels. The gameplay of Free Spins
  > is active with the same paylines and bet as the triggering spin.

- Описание выплат по символам. Для каждого символа по комбинации которого
  возможен выигрыш указывается изображение символа и возможные варианты выплат.
  Компонент используемый для этого блока можно использовать несколько раз, когда
  нужно разбить описание выплат на несколько частей (можно даже сделать
  описание отдельно одного символа).

- Описание линий или направлений по которым производятся выплаты.

### Секция правил игры (Game rules)

#### Блок с общими правилами для игры (Overview)

- Перечисление названий бонусов (feature) доступных в игре.

  > **Пример:**
  >
  > - ConquestEra is a video slot with following feature(s):
  >   - Free Spins feature
  >   - Money Symbol feature

- Количество бобин, строк и символов.
  
  > **Пример:**
  >
  > - A 5-reel, up to 3-row video slot with 10 symbols.
  >
  > или
  >
  > - It is a 6-reel, 2-3-4-4-3-2 row video slot that can transform to a
  > 2-3-8-4-3-2 row or a 2-4-5-5-4-2 row video slot in the bonus modes.
  > - It has a total of 15 symbols and 4 of them are different types of
  > Wild symbols.

- Количество линий или направлений для выплат.

  > **Пример:**
  >
  > - 10 win lines (see pay table for more info).
  >
  > или
  >
  > - 1024 win ways by default, up to 110 592 win ways (see pay table for more
  > info).
  >
  > или
  >
  > - Max simulated number of win ways is more than 4.4 million.

- Выигрыш по wild символу.

  > **Пример:**
  >
  > - All Genie symbols also acts as Wild symbols.
  > - A Wild symbol substitutes for any symbol except Bonus.
  > - A Wild symbol substitutes for the highest possible winning combination on
  > a win line according to the pay table.

- Направление выигрыша в комбинации.

  > **Пример:**
  >
  > - A winning combination pays from left to right.

- Выигрыши по нескольким комбинациям.

  > **Пример:**
  >
  > - Coinciding wins on multiple combinations are paid out.

- Выбор выигрыша при нескольких вариантах по одной и той же линии.

  > **Пример:**
  >
  > - The highest win per activated win line is paid.

- Способ расчета выигрыша по таблице выплат.

  > **Пример:**
  >
  > - Winnings are calculated by multiplying the value of the symbol in
  > paytable and the number of the ways of the winning symbol.

- Как отображаются значения в таблице выплат.

  > **Пример:**
  >
  > - All symbol payout values in pay table are displayed in the same currency
  > as bet placed.

- Какие конфигурации используются для барабанов.

  > **Пример:**
  >
  > - Different reel configurations are used, depending on the game mode (main
  > game or any of the bonus modes).

- Бонусы которые доступны для покупки но их нет в обычной игре.

  > **Пример:**
  >
  > - xBomb x2 feature is only available as a feature buy option and is not
  > available in the normal gameplay.

#### Блок с правилами по конкретном бонусу

Правила по каждому бонусу выделяются в отдельный блок с названием бонуса в
заголовке и списком правил после заголовка. Данный блок стоит использовать
если данная информация не может быть описана в секции с описанием бонусов.
  
  > **Пример:**
  >
  > Genie Wishes
  >
  > - All Aladdin and Lamp symbols becomes Wild.
  > - All paying symbols will get a random payout multiplier -
  > x2, x3, x4, x5 or x10 specific for each type of symbol.
  > - The payout multiplier is applied once to the base payout of
  > that type of symbol.
  >
  > Genie Parade
  >
  > - The Golden Genie multiplier value transfers to the closest
  > Genie symbol to the right, with the order from top to bottom on the closest
  > reel.

#### Блок с информацией о теоретическом проценте отдаче (Return to the player)

- Теоретический процент отдачи в целом по игре.

  > **Пример:**
  >
  > - The theoretical return to the player for this game is 96.02%.

- Теоретический процент отдачи бонуса, который доступен для покупки.

  > **Пример:**
  >
  > - The theoretical return to the player for Free Spins feature buy is 96.12%.
  > - The theoretical return to the player for Money Symbol feature buy is 96.21%.

- В каком бонусе достигается оптимальный процент отдачи.

  > **Пример:**
  >
  > - Optimal return to player is achieved by choosing Free Spins feature mode.

- Как часто выпадает комбинация дающая максимальную выплату.

  > **Пример:**
  >
  > - Simulated maximum payout is 5555 times the bet (1:25000000 rounds).

#### Блок с дополнительной информацией (Additional information)

- При неисправности аннулируются все выигрыши.

  > **Пример:**
  >
  > - A malfunction voids all winnings.

- При сбое оборудования или программного обеспечения все ставки возвращаются.

  > **Пример:**
  >
  > - Malfunction in gaming hardware/software; all affected bets are refunded.

- Время жизни игровых раундов и что происходит после того как время жизни истекло.

  > **Пример:**
  >
  > - Game rounds not finished within 6 months will automatically be closed.
  > Any accumulated wins during that game round will be paid out.

- Пояснение к работе авто игры.

  > **Пример:**
  >
  > - Autoplay automatically plays the game for selected number of rounds or
  > when any of the advanced autoplay setting criterias are fulfilled.
  > - When changing autoplay settings during a game round, all settings will
  > take effect upon completion of the game round or feature.
  > - Some autoplay features may be mandatory for some jurisdictions.

- Пояснение при игре на крипту.

  > **Пример:**
  >
  > - When playing with Cryptocurrency, unfinished game rounds and states will
  > automatically reset after 24 hours. Any accumulated wins during this round
  > will be paid out.

### Секция пользовательского интерфейса (User interface guide)

В данной секции описывают элементы пользовательского интерфейса. В порядке
указном ниже.

1. Элементы пользовательского интерфейса расположенные на главном экране,
   начиная с кнопки запуска вращений.
2. Элементы пользовательского интерфейса расположенные в меню. Кнопка закрытия
   идет последней.
3. Элементы пользовательского интерфейса открывающая покупку бонусов и турниры.
4. Элементы пользовательского интерфейса расположенные в разделе покупки бонусов.
5. Элементы пользовательского интерфейса расположенные в разделе турниров.

> Если какая-то из кнопок открывает дополнительный раздел в котором так же
> имеются кнопки, то эти кнопки описываются в том же блоке что и кнопка, которая
> показала их, как подраздел блока.

### Секция терминов (Terms)

В  данной секции находится таблица с терминами на английском языке, которые не
переведены в игре. В левой части находится термин на английском языке, а в
правой на языке выбранной локали.

### Версии программного обеспечения

В конце указывается версия игрового сервера и клиента игры.
