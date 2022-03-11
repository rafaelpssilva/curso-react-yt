import PropTypes from 'prop-types'

function Event({ id }) {

    function clickTrue() {
        console.log("True click", id)
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