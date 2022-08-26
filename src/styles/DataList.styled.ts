import { css } from "@emotion/react";

// unordered list of data
const dataListStyles = css({
    margin: 0,
    padding: 0,
    height: "60vh",
    listStyleType: "none",
    overflowY: "auto",
});

// loading text while fetching data from firestore
const dataLoadingStyles = css({
    color: "white",
    backgroundColor: "grey",
    padding: "10px",
    borderRadius: 4,
    border: "1px solid black",
    textAlign: "center",
    fontWeight: "500",
});

// no match found/no data to filter text
const notFoundErrorStyles = css({
    color: "white",
    backgroundColor: "tomato",
    padding: "10px",
    borderRadius: 4,
    border: "1px solid black",
    textAlign: "center",
    fontWeight: "500",
});

export { dataListStyles, dataLoadingStyles, notFoundErrorStyles };
