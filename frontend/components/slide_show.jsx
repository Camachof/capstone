const React = require('react');
const Carousel = require('react-bootstrap').Carousel;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const SlideShow = React.createClass({
  _onClickRainbow(e){
    hashHistory.push(`/project/7`);
  },
  _onClickMilk(e){
    hashHistory.push(`/project/12`);
  },

  render() {
    return (
      <Carousel interval={4000} >
        <Carousel.Item >
          <Carousel.Caption onClick={this._onClickWearables} className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div className="splashSearch">
              <h3 className="title_input_text">wearables</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467901716/F1WEHY8IQ0TVSI2_l6uvte.jpg" />
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption onClick={this._onClickMilk} className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div className="splashSearch">
              <h3 className="title_input_text">milkshakes</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1472687319/maxresdefault_sqwbnd.jpg" />
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption onClick={this._onClickSpace} className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div className="splashSearch">
              <h3 className="title_input_text">space</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467580960/F7YJBD0IPEIICRW_nxrt1e.jpg" />
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption onClick={this._onClickHomebrew} className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div className="splashSearch">
              <h3 className="title_input_text">homebrew</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467903076/FYIFMIBIP74P2SE_nfpanj.jpg" />
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption onClick={this._onClickRainbow} className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div className="splashSearch">
              <h3 id="rainbow" className="title_input_text">rainbows</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467901864/homepage-Rainbow-Roller_pght0c.jpg" />
        </Carousel.Item>
      </Carousel>
    );
  }
});

module.exports = SlideShow;
