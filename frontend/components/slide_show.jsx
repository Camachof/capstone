const React = require('react');
const Carousel = require('react-bootstrap').Carousel;

const SlideShow = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  render() {
    return (
      <Carousel className="carousel" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img className="slideItem" src="http://res.cloudinary.com/doilr7vvv/image/upload/v1467580960/F7YJBD0IPEIICRW_nxrt1e.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
});

module.exports = SlideShow;
