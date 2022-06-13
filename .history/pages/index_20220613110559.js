import ReactDom, { render } from "react-dom";
// import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["firstPage", "secondPage", "thirdPage"];

const fullpageWrapper = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("On Leave event", { origin, destination, direction });
    }}
    render={({ state, fullPageApi }) => {
      console.log("render prop change", state, fullPageApi);
      return (
        <div>
          <MySection content={"Slide Down"} />
          <MySection content={"Keep Going"} />
          <MySection content={"Slide up"} />
        </div>
      );
    }}
  />
);

ReactDom.render(<fullpageWrapper />, document.getElementById("react-root"));
