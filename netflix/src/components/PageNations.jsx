import Pagination from "react-js-pagination";
import { useState } from "react";



const PageNations = () => {
const [activePage, setActivePage] = useState(1);

const handlePageChange = (pageNumber) => {

setActivePage(pageNumber);
};

return (
<div>

<Pagination
    activePage={activePage}
    itemsCountPerPage={20}
    totalItemsCount={450}
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    itemClass="page-item"
    linkClass="page-link"
/>
</div>
);
};



export default PageNations;

