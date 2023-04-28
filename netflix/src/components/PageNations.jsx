import Pagination from "react-js-pagination";
import { useState } from "react";


const PageNations = () => {
const [activePage, setActivePage] = useState(15);

const handlePageChange = (pageNumber) => {

setActivePage(pageNumber);
};

return (
<div>
<Pagination
    activePage={activePage}
    itemsCountPerPage={10}
    totalItemsCount={450}
    pageRangeDisplayed={5}
    onChange={handlePageChange}
/>
</div>
);
};


export default PageNations;