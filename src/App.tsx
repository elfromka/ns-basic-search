import { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import DataList from "./components/DataList";
import SearchBar from "./components/SearchBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./data/firebase";
/** @jsxImportSource @emotion/react */
import { mainStyles, sectionStyles, titleStyles } from "./styles/App.styled";
import "./styles/style-reset.css";

/**
 * Renders a search bar element and an list element of data to be filtered on.
 *
 * @return {JSX.Element} container of search bar and filter list.
 */
const App: React.FC = (): JSX.Element => {
    const [dataLoading, setDataLoading] = useState<boolean>(true);
    const [searchParams, setSearchParams] = useSearchParams("");
    const [query, setQuery] = useState<string>(searchParams.get("value") || "");
    const [dataSet, setDataSet] = useState<Array<string>>([]);

    const namesCollectionRef = collection(db, "names");

    useEffect(() => {
        try {
            const getDataFromFirestore = async () => {
                const dataFB = await getDocs(namesCollectionRef);
                setDataSet(dataFB.docs.map((doc) => doc.data().name));
                setDataLoading(false);
            };

            getDataFromFirestore();
        } catch (e: any) {
            console.error(`ERROR: Something went wrong. Message: ${e.message}`);
        }
    }, []);

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
                <DataList loading={dataLoading} data={dataSet} query={query} />
            </section>
        </main>
    );
};

export default App;
