import PropTypes from 'prop-types'

function Event({ id }) {

    function clickTrue() {
        console.log('clickTrue', id)
    }

    return(
        <>
            <h1>Events</h1>
            <button onClick={clickTrue}>Click me</button>
        </>
    )

}

Event.propTypes = {
    id: PropTypes.number.isRequired
}

export default Event