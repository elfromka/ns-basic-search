import DataListItem from "./DataListItem";
/** @jsxImportSource @emotion/react */
import { dataListStyles, notFoundErrorStyles } from "../styles/DataList.styled";

interface DataListInterface {
    data: string[];
    query: string;
}

/**
 * Renders a list of elements based on what is retrieved from the data set.
 *
 * @return {JSX.Element} an unordered list with one or more list items OR a paragraph with "No match found" text if nothing found for that certain keyword filled in in the search bar.
 */
const DataList: React.FC<DataListInterface> = ({
    data,
    query,
}): JSX.Element => {
    const dataToDisplay: string[] = data.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <ul css={dataListStyles}>
            {dataToDisplay.length > 0 &&
                dataToDisplay
                    .filter((name) => name)
                    .map((name) => <DataListItem name={name} key={name} />)}
            {dataToDisplay.length === 0 && (
                <p css={notFoundErrorStyles}>No match found</p>
            )}
        </ul>
    );
};

export default DataList;
