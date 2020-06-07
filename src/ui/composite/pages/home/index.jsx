import React, { useContext } from "react";
import MainTemplate from "../../template/main";
import { StyleContext } from "../../../constants/context";
import { Link } from "react-router-dom";
import { siteColors } from "../../../constants/variables/sitecolors";
import { backgroundColor } from "../../../constants/theme/styles";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../../../../store/actions/isAuthenticated.action";

const HomePage = () => {
  const changeStyle = useContext(StyleContext);

  const isAuth = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch();

  return (
    <>
      <MainTemplate variant={"primary"} Remove100VhAttribute>
        <div style={{ padding: "3rem" }}>
          {process.env.NODE_ENV === "development" ? (
            <small>
              This Application is running in{" "}
              <b
                style={{
                  color: "red",
                  textTransform: "uppercase",
                }}
              >
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

          <p>
            <a
              href="https://github.com/KristofaJosh/MyReactBoilerPlate.git"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              Pull features{" "}
            </a>
            you want from the branch name as
            <br />
            <span>with&lt;FeatureYouWant&gt;</span>
            <br />
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
            <Link to={"/auth"}> Authentication Page </Link>
            <br />
            <Link to={"/private"}> Private Page </Link>
            <br />
            <button
              style={{ backgroundColor: backgroundColor }}
              onClick={changeStyle.changeMode}
            >
              Change Theme Mode
            </button>
            <br />
            {isAuth ? (
              <button onClick={() => dispatch(isAuthenticated())}>
                Logout
              </button>
            ) : null}
          </div>
        </div>
      </MainTemplate>
    </>
  );
};

export default HomePage;
