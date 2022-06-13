import ReactDom from "react-dom";
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
    sectionsColor={[]}
  />
);
