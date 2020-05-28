import React, { useContext } from "react";
import MainTemplate from "../../template/main";
import { StyleContext } from "../../../constants/context";
import { Link } from "react-router-dom";
import { siteColors } from "../../../constants/variables/sitecolors";
import { backgroundColor } from "../../../constants/theme/styles";

const HomePage = () => {
  const changeStyle = useContext(StyleContext);

  return (
    <>
      <MainTemplate variant={"primary"} Remove100VhAttribute>
        <div style={{ padding: "3rem" }}>
          {process.env.NODE_ENV === "development" ? (
            <small>
              This Application is running in{" "}
              <b style={{ color: "red", textTransform: "uppercase" }}>
                {process.env.NODE_ENV}
              </b>{" "}
              mode.
            </small>
          ) : null}
          <h1>Quick Start React Boiler Plate</h1>
          <h3>This Boilerplate includes:</h3>
          <li>Styled Components</li>
          <li>Styled Theming</li>
          <li>Redux with react dev tools in development only</li>
          <li>GraphQL</li>

          <p>
            <a href="https://github.com/KristofaJosh/MyReactBoilerPlate.git">
              Pull features{" "}
            </a>
            you want from the branch name as
            <blockquote>with&lt;FeatureYouWant&gt;</blockquote>
            eg: git pull origin withGraphQl
          </p>

          <div style={{ marginTop: "4rem" }}>
            <div style={{ color: siteColors.black }}>
              <strong>Constant color black</strong>
            </div>
            <div style={{ color: siteColors.brown }}>
              <strong>Constant color brown</strong>
            </div>
            <br />
            <Link to={"/auth"}> Auth Route </Link>
            <Link to={"/apollo"}> GraphQl Example </Link>
            <br />
            <button
              style={{ backgroundColor: backgroundColor }}
              onClick={changeStyle.changeMode}
            >
              Change Theme Mode
            </button>
          </div>
        </div>
      </MainTemplate>
    </>
  );
};

export default HomePage;
