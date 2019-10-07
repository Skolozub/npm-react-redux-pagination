import React from "react";
import PaginationInitContainer from "../../../lib/containers/pagination-init-container";
import WithParamsListContainer from "../../containers/with-params-list-container";

export const WithParamsListPage = () => (
  <PaginationInitContainer paginationName="withparams">
    <WithParamsListContainer />
  </PaginationInitContainer>
);
