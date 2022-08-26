import { ChangeEvent, useEffect, useRef } from "react";
/** @jsxImportSource @emotion/react */
import { searchBarStyles } from "../styles/SearchBar.styled";

interface SearchBarInterface {
    query: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Renders an input element used for filtering/searching in the dataset.
 *
 * @return {JSX.Element} search input.
 */
const SearchBar: React.FC<SearchBarInterface> = ({
    query,
    handleChange,
}): JSX.Element => {
    const searchBarElement = useRef<HTMLInputElement | null>(null);

    // to apply auto focus when accessing the application
    useEffect(() => {
        searchBarElement.current?.focus();
    }, []);

    return (
        <input
            type="text"
            name="search"
            placeholder="Filter..."
            value={query}
            onChange={handleChange}
            ref={searchBarElement}
            css={searchBarStyles}
        />
    );
};

export default SearchBar;
