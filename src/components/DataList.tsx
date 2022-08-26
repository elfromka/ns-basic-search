import DataListItem from "./DataListItem";
/** @jsxImportSource @emotion/react */
import {
    dataListStyles,
    dataLoadingStyles,
    notFoundErrorStyles,
} from "../styles/DataList.styled";

interface DataListInterface {
    loading: boolean;
    data: string[];
    query: string;
}

/**
 * Renders a list of elements based on what is retrieved from the data set.
 *
 * @return {JSX.Element} an unordered list with one or more list items OR a paragraph with "No match found" text if nothing found for that certain keyword filled in in the search bar.
 */
const DataList: React.FC<DataListInterface> = ({
    loading,
    data,
    query,
}): JSX.Element => {
    const dataToDisplay: string[] = data.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            {dataToDisplay ? (
                <ul css={dataListStyles}>
                    {dataToDisplay.length === 0 && loading && (
                        <p css={dataLoadingStyles}>Loading...</p>
                    )}
                    {dataToDisplay.length > 0 &&
                        !loading &&
                        dataToDisplay
                            .filter((name) => name)
                            .map((name) => (
                                <DataListItem name={name} key={name} />
                            ))}
                    {dataToDisplay.length === 0 && !loading && (
                        <p css={notFoundErrorStyles}>No match found</p>
                    )}
                </ul>
            ) : (
                <p css={notFoundErrorStyles}>There is no data to filter on</p>
            )}
        </>
    );
};

export default DataList;
