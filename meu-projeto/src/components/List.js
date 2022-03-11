import Item from './Item'


function List() {
    return (
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Ford" anoLancamento="1"/>
                <Item marca="Chevrolet" anoLancamento="1"/>
                <Item />
            </ul>
        </>
    )
}

export default List
