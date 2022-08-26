/** @jsxImportSource @emotion/react */
import { dataListItemStyles } from "../styles/DataListItem.styled";

interface DataListItemInterface {
    name: string;
}

/**
 * Renders a data list item.
 *
 * @return {JSX.Element} list item.
 */
const DataListItem: React.FC<DataListItemInterface> = ({
    name,
}): JSX.Element => (
    <li key={name} css={dataListItemStyles}>
        {name}
    </li>
);

export default DataListItem;
