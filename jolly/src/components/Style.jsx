import React from "react";
const styles = { color: "green ", backgroundColor: "black", padding: "2rem " };
const Style = () => {
  return (
    <section>
      <h1 style={styles}>This is React js styling done here </h1>
      <h2
        style={{ color: "Yellow", backgroundColor: "black", padding: "2rem" }}
      >
        This is inline styling in reactjs{" "}
      </h2>
    </section>
  );
};

export default Style;
