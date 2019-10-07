## Установка

Шаг 1. Импортируйте и добавьте `paginationReducer` в ваш `rootReducer`

```javascript
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { history } from "../constants/history";

import { paginationReducer } from "@skolozub/react-redux-pagination";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  pagination: paginationReducer
});
```

Шаг 2. Оберните в `PaginationInitContainer` компонент-контейнер, в котором вы достаёте данные из `store`. Обязательным параметром `PaginationInitContainer` является `paginationName` - это имя, которе будет записано в `store`.

```javascript
import React from "react";
import WithParamsListContainer from "../../containers/with-params-list-container";

import { PaginationInitContainer } from "@skolozub/react-redux-pagination";

export const WithParamsListPage = () => (
  <PaginationInitContainer paginationName="withparams">
    <WithParamsListContainer />
  </PaginationInitContainer>
);
```

| Exported                |        Type         |
| :---------------------- | :-----------------: |
| PAGINATION_SET_PARAMS   |     action-type     |
| PAGINATION_DELETED      |     action-type     |
| setPaginationPage       |       action        |
| deletePagination        |       action        |
| PaginationInitContainer | component-container |
| paginationReducer       |       reducer       |

### setPaginationPage: function({ paginationName, params })

Action для изменения состояния пагинации

#### Параметры:

- `paginationName: string` - название пагинации. Будет записано в store
- `params: object` - изменяемые данные пагинации. Объект должен иметь вид: `params: { paramName, paramValue }`

### deletePagination: function({ paginationName })

Action для удаления пагинации из store

#### Параметры:

- `paginationName: string` - название пагинации. Именно она будет удалена из store

### PaginationInitContainer

Контейнер для инициализации пагинации.

#### Параметры:

- `paginationName: string` - название пагинации. Будет записано в store
- `paramName: string` - название изменяемого параметра пагинации. По умолчанию равно `page`
- `saveParams: bool` - флаг, который указывает сохранять в `store` текущую пагинацию при `componentWillUnmount` или нет. По умолчанию равен `false`.
