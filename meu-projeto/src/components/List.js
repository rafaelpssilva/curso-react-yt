import Item from './Item'


function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Microsoft" />
                <Item marca="Xiaomi" />
            </ul>
        </>
    )
}

export default List