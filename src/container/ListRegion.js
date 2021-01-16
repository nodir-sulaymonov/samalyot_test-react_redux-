import React from 'react';
import {connect} from 'react-redux';
import "../styles/regionList.css";
import {Link} from "react-router-dom";
import * as allList from "../action/actionListRegion";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSortName = () => {
    this.props.sortByLib();
  };


  componentDidMount() {
    this.props.fetchRegionList()
  }

  listView(data, index) {

    return (
      <div key={index}  className="list-projects">
        <div className="col-md-10">
          <li className="list-li">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <Link to={`/${data.order}/information/`}>Region name: {data.territory}</Link>
              </div>
              <div>
                Libraries: {data.libraries}
              </div>
            </div>
          </li>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Regions and quantity library</h1>
        <div className="section_btn">
          <div>
            <button className="btn_primary" onClick={this.handleSortName}> Sort libraries</button>
          </div>
        </div>
        <div>
          <ul className="list-group">
            {
              this.props.regions.map((contact, id) => this.listView(contact, id))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regions: state.region.regionList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortByLib: () => dispatch(allList.sortByLib()),
    fetchRegionList: () => dispatch(allList.fetchRegionList())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
