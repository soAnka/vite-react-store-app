import { Component } from "react";

class DetailsInfo extends Component {
  state = {
    colors: ["blue", "yellow", "green"],
    colorActive: 0,
  };

  clickHandler = (e) => {
    this.setState({
      colorActive: +e.target.dataset.index,
    });
  };

  render() {
    const { colors, colorActive } = this.state;
    return (
      <div className="colors p-4">
        <p className="font-thin">
          Choose color of the package: {colors[colorActive]}{" "}
        </p>
        <div className="colors_options_container">
          {colors.map((colorOption, index) => (
            <button
              onClick={this.clickHandler}
              data-index={index}
              key={colorOption}
              className={`color_option ${colorOption} ${
                index === colorActive ? "activeColor" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default DetailsInfo;
