const React = require('react');

const LogModal = require('./log_modal.jsx');
const SearchForm = require('./search_form.jsx');
const SessionStore = require('../stores/session_store.js');
const SessionActions = require('../actions/session_actions.js');
const ProjectActions = require('../actions/project_actions');

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
    // greeting can be a greeting or the login/logout buttons
    let greeting;

    if (Object.keys(currentUser).length === 0 && currentUser.constructor === Object){
      return [
        <div>
          <LogModal />
        </div>
      ];
    } else {
      return [
        <h5>Hello {currentUser.username}!</h5>,
        <a onClick={this._onLogout}>Logout</a>
      ];
    }
  },
  _onLogout(e){
    e.preventDefault();
    SessionActions.logout();
    hashHistory.push(`/`);
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
  _onHome(){
    hashHistory.push("/");
  },
  render(){

    return(
      <div className={this.state.searched}>
        <header>
          <div className="top_header" >
            <div>
                <a onClick={this._onHome}><img alt="Instructables" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467308145/header-logo_yroad2.png" /></a>
                <a title="Explore" className="header_link" onClick={this._onExplore}>Explore</a>
                <a title="Publish" className="header_link" onClick={this._onPublish}>Publish</a>
            </div>
            {this.state.greeting}
            <SearchForm removeCarousel={this._onSearch}/>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
