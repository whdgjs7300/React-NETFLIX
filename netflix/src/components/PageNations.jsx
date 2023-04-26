import Pagination from 'react-bootstrap/Pagination';

const PageNations = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
    }
    return ( 
        <div>


            <Pagination size="lg">{items}</Pagination>


        </div>
    );
}

export default PageNations;