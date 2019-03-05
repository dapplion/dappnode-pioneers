import React, { Component } from "react";
import logo from "./dappnode-logo.png";
import avatarDefault from "./mysterybox.png";

const users = [
  { name: "??????????", date: "07/03/2019", avatar: avatarDefault },
  { name: "??????????", date: "07/03/2019", avatar: avatarDefault },
  { name: "??????????", date: "07/03/2019", avatar: avatarDefault }
];

const UserInfo = ({ name, date, avatar }) => (
  <div className="d-flex justify-content-center">
    <div style={{ opacity: 0.4, marginRight: "10px" }}>
      <img src={avatar} className="avatar" alt="avatar" />
    </div>
    <div>
      <div>{name}</div>
      <div style={{ opacity: 0.4 }}>{date}</div>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col header text-center mt-3">DAppNode pioneers</div>
        </div>

        <div className="container" style={{ maxWidth: "600px" }}>
          <div className="row text-center mx-auto">
            {users.map(user => (
              <div className="col-sm-4 text-center mx-auto userInfo">
                <UserInfo {...user} />
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col img-canvas text-center">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="row mb-5">
          <div
            className="col footer text-center mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <p>
              DAppNode pioneers is a wall of fame to acknowledge the earliest
              adopters of DAppNode. The infrastructure for the decentralized
              world
            </p>
            <a href="https://install.dappnode.io">Install</a>&nbsp;&nbsp;
            <a href="https://buy.dappnode.io/">Buy</a>&nbsp;&nbsp;
            <a href="https://docs.dappnode.io">Docs</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
