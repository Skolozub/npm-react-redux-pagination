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

Шаг 2. Оберните в `PaginationInitContainer` компонент-контейнер, в котором мы достаём данные из `store`. Обязательным параметром `PaginationInitContainer` является `paginationName` - это имя, которе будет записано в `store`.

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

| Exported                |                Type |
| ----------------------- | ------------------: |
| PAGINATION_SET_PARAMS   |         action-type |
| PAGINATION_DELETED      |         action-type |
| setPaginationPage       |              action |
| deletePagination        |              action |
| PaginationInitContainer | component-container |
| paginationReducer       |             reducer |

### setPaginationPage: function({ paginationName, params })

Для изменения состояния пагинации используется экшн `setPaginationPage`. Параметрами данной функции являются: имя пагинации `paginationName: string` и объект с параметрами `params: { paramName, paramValue }`.
