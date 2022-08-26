import { useState, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import DataList from "./components/DataList";
import SearchBar from "./components/SearchBar";
import DATASET from "./data";
/** @jsxImportSource @emotion/react */
import { mainStyles, sectionStyles, titleStyles } from "./styles/App.styled";
import "./styles/style-reset.css";

/**
 * Renders a search bar element and an list element of data to be filtered on.
 *
 * @return {JSX.Element} container of search bar and filter list.
 */
const App: React.FC = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams("");
    const [query, setQuery] = useState<string>(searchParams.get("value") || "");

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value }: { value: string } = e.target;

        if (value) {
            setSearchParams({ value: value });
        } else {
            setSearchParams({});
        }

        setQuery(value);
    };

    return (
        <main css={mainStyles}>
            <section css={sectionStyles}>
                <h1 css={titleStyles}>Basic search</h1>
                <SearchBar query={query} handleChange={handleChange} />
                <DataList data={DATASET} query={query} />
            </section>
        </main>
    );
};

export default App;
