import { useState, ChangeEvent } from "react";
import DATASET from "./data";

const App = () => {
    const [query, setQuery] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value }: { value: string } = e.target;

        setQuery(value);
    };

    const dataToDisplay: string[] = DATASET.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <main>
            <section>
                <h1>Basic search</h1>
                <input
                    type="text"
                    name="search"
                    placeholder="Filter..."
                    value={query}
                    onChange={handleChange}
                />
                <ul>
                    {dataToDisplay.length > 0 &&
                        dataToDisplay
                            .filter((name) => name)
                            .map((name) => <li key={name}>{name}</li>)}
                    {dataToDisplay.length === 0 && <p>No match found</p>}
                </ul>
            </section>
        </main>
    );
};

export default App;
