
import Button from './Button'


function Event() {

    function oneEvent() {
        console.log('one event activated')
    }


    function secondEvent() {
        console.log('second event activated')
    }


    return (
        <div>
            <Button event={oneEvent} text="One" />
            <Button event={secondEvent} text="Second" />
        </div>
    )

}

export default Event