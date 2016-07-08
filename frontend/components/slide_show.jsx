const React = require('react');
const Carousel = require('react-bootstrap').Carousel;

const SlideShow = React.createClass({
  getInitialState() {
    return {
      titles: ["wearables", "renewable energy", "space", "homebrew", "rainbows"]
    };
  },

  onChange(){
    console.log("changed");
  },

  render() {
    return (
      <Carousel interval={4000} onSelect={this.onChange} >
        <Carousel.Item>
          <Carousel.Caption className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div>
              <h3 className="title_input_text">wearables</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467901716/F1WEHY8IQ0TVSI2_l6uvte.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div>
              <h3 className="title_input_text">energy</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467901800/F4V02QUI2Q1IZP5_ljjmkk.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div>
              <h3 className="title_input_text">space</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467580960/F7YJBD0IPEIICRW_nxrt1e.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div>
              <h3 className="title_input_text">homebrew</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467903076/FYIFMIBIP74P2SE_nfpanj.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="title_search">
            <h3 className="title_input_presearch">Let's Make</h3>
            <div>
              <h3 className="title_input_text">rainbows</h3>
            </div>
          </Carousel.Caption>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467901864/homepage-Rainbow-Roller_pght0c.jpg" />
        </Carousel.Item>
      </Carousel>
    );
  }
});

// <h3>Let's Make <div className="title_input_text">wearables</div>
// </h3>

module.exports = SlideShow;
