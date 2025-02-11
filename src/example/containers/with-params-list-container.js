import React, { Component } from "react";
import { connect } from "react-redux";
import Utils from "../../utils";
import { Pagination } from "../components/organizms/pagination";
import { ListContainer } from "./list-container";

class WithParamsListContainer extends Component {
  static getParams = props => {
    const { location, page } = props;
    const newParams = Utils.parseSearch(location.search);
    return { ...newParams, page };
  };

  state = {
    params: WithParamsListContainer.getParams(this.props)
  };

  setParams = () => {
    const params = WithParamsListContainer.getParams(this.props);
    this.setState({ params });
  };

  componentDidUpdate = prevProps => {
    const { location } = this.props;
    const paramsHasChanged = prevProps.location.search !== location.search;
    if (!paramsHasChanged) return null;

    this.setParams();
  };

  render = () => {
    const { params } = this.state;
    const { totalPages, location, paramName } = this.props;

    return (
      <>
        <ListContainer params={params} />
        <Pagination {...{ totalPages, location, params, paramName }} />
      </>
    );
  };
}

const mapStateToProps = state => ({
  location: state.router.location,
  page: state.pagination.withparams.page,
  totalPages: 5
});

export default connect(mapStateToProps)(WithParamsListContainer);
