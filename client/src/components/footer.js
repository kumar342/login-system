import React from "react";

export default function Footer() {
  return (
    <div>
      <nav
        className="navbar navbar-dark bg-secondary sticky-bottom"
        style={{ margin: "10px ", color: "#fff", justifyContent: "center" }}
      >
        <p>
          {" "}
          Developed by {""}
          <a className="navbar-brand" href="/#">
            {" "}
            Hemanth Kumar
          </a>
        </p>
      </nav>
    </div>
  );
}
