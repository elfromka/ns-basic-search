import { css } from "@emotion/react";

// main element
const mainStyles = css({
    fontFamily: "Montserrat, sans-serif",
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
});

// section element
const sectionStyles = css({
    height: "inherit",
    width: "50%",
    minWidth: "375px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
});

// title (h1)
const titleStyles = css({
    fontSize: 50,
    fontWeight: 700,
    textAlign: "center",
});

export { mainStyles, sectionStyles, titleStyles };
