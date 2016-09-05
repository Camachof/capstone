const React = require('react');

const LogModal = require('./log_modal.jsx');
const SearchForm = require('./search_form.jsx');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const ProjectActions = require('../actions/project_actions');
const Button = require('react-bootstrap').Button;

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const App = React.createClass({
  getInitialState: function() {
    return {
      greeting: this._onGreet(), searched: ""
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._onChange);
  },
  _onChange(){
    this.setState({greeting: this._onGreet()});
  },
  _onGreet(){
    let currentUser = SessionStore.currentUser();

    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      return (
        <div className="top_header_right">
          <LogModal name="Log In or Sign Up"/>
        </div>
      );
    } else {
      return(
        <div className="top_header_right">
          <h5>Hello {currentUser.username}!</h5>
          <Button onClick={this._onLogout}>Logout</Button>
        </div>
      );
    }
  },
  _onLogout(e){
    e.preventDefault();
    SessionActions.logout();
    hashHistory.push(`/`);
  },
  _onDropdownChange(e){
    e.preventDefault();
    debugger;

    if (e.target.value === "publish"){
      hashHistory.push("/form");
    } else if (e.target.value === "explore"){
      ProjectActions.fetchAllProjects();
      this.setState({searched: ""});
      hashHistory.push("/");
    }
  },
  _onExplore(e){
    e.preventDefault();
    ProjectActions.fetchAllProjects();
    this.setState({searched: ""});
    hashHistory.push("/");
  },
  _onPublish(e){
    e.preventDefault();
    hashHistory.push("/form");
  },
  _onSearch(){
    this.setState({searched: "searched"});
  },

  render(){

    return(
      <div className={this.state.searched}>
          <div className="top_header" >
            <div className="top_header_left">
                <a className="logo" onClick={this._onExplore}><img alt="Instructables" className="frontLogo" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1472600282/Logomakr_80TqEK_pairsw.png" /></a>
                <SearchForm removeCarousel={this._onSearch}/>
                <a title="Explore" className="header_link" onClick={this._onExplore}>Explore</a>
                <a title="Publish" className="header_link" onClick={this._onPublish}>Publish</a>
            </div>
            {this.state.greeting}
          </div>
        {this.props.children}
        <footer>
          <a href="https://github.com/camachom">
            <img src="http://res.cloudinary.com/doilr7vvv/image/upload/v1468102800/GitHub-Mark-Light-120px-plus_tr7xmn.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/camachomartin">
            <img src="http://res.cloudinary.com/doilr7vvv/image/upload/v1468103050/In-White-121px-TM_oegdbq.png"></img>
          </a>
        </footer>
      </div>
    );
  }
});

module.exports = App;
