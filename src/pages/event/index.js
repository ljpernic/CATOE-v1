import * as React from "react";

import Layout from "../../components/Layout";
import EventRoll from "../../components/EventRoll";

export default class EventIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/event-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
              "rgba(43, 37, 35, 0.8) 0.5rem 0px 0px, rgba(43, 37, 35, 0.8) -0.5rem 0px 0px",
              backgroundColor: "rgba(43, 37, 35, 0.8)",
              color: "white",
              padding: "1rem",
            }}
          >
            Events
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EventRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
