import React from 'react';
import {connect} from 'react-redux';
import * as allList from '../action/actionListRegion';
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import '../styles/app.css'

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.projectOrder
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.projectOrder);
    this.props.fetchOrderList({projectOrder: this.props.match.params.projectOrder})
  }


  render() {
    console.log(this.props.allLists);
    if (this.props.allLists.length == 0) {
      return (<div></div>);
    }
    let item = this.props.allLists.filter(x => x.order ==  this.state.id);
    item = item[0];
    return (
      <div  className='container'>
        <button style={{backgroundColor: '#61dafb'}}><Link to="/">Back</Link></button>
        {Object.entries(item).map(function (x) {
          console.log(x)
          return (
            <div key={x[0]}  className="list-projects">
              <div className="col-md-12">
                <ul>
                  <li className="list-li">
                    <div>
                      {x[0]}: {x[1]}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allLists: state.allList.allList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrderList: (payload) => dispatch(allList.fetchOrderList(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Information));
