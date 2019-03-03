import React, { Component } from "react";
import logo from "./dappnode-logo.png";

const names = [
  "Rose Duggan",
  "Katharine Murphy",
  "Margo Mora",
  "Ubaid Aguirre"
];

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <div>DAppNode pioneers</div>
        </header>
        {/* <div class="container">
          <div class="names">LEFT</div>
          <div class="names">RIGHT</div>
        </div> */}
        <section className="names">
          {names.map(name => (
            <p>{name}</p>
          ))}
        </section>
        <div className="img-canvas">
          <img src={logo} alt="logo" />
        </div>
        <footer>
          <p>
            DAppNode pioneers is a wall of fame to acknowledge the earliest
            adopters of DAppNode. The infrastructure for the decentralized world
          </p>
          <a href="https://install.dappnode.io">Install</a>&nbsp;&nbsp;
          <a href="https://buy.dappnode.io/">Buy</a>&nbsp;&nbsp;
          <a href="https://docs.dappnode.io">Docs</a>
        </footer>
      </div>
    );
  }
}

export default App;
