const Daily = () => {
    return (
        <section app id='Daily'>
            <h2>Daily Routine</h2>
            <ul>
                <li className='daily card_gray'><p>Wake up</p><p className='badge'>5:00</p></li>
                <li className='daily card_gray'><p>Study</p><p className='badge'>5:00 - 7:00</p></li>
                <li className='daily card_gray'><p>Excercise</p><p className='badge'>7:00 - 10:00</p></li>
                <li className='daily card_gray'><p>Do Lunch</p><p className='badge'>10:00 - 11:00</p></li>
                <li className='daily card_gray'><p>Work</p><p className='badge'>11:00 - 16:00</p></li>
                <li className='daily card_gray'><p>Read</p><p className='badge'>16:00 - 17:00</p></li>
                <li className='daily card_gray'><p>Learn sometime new</p><p className='badge'>17:00 - 19:00</p></li>
                <li className='daily card_gray'><p>Work</p><p className='badge'>19:00 - 22:00</p></li>
                <li className='daily card_gray'><p>Meditation</p><p className='badge'>22:00 - 22:30</p></li>
                <li className='daily card_gray'><p>Sleep</p><p className='badge'>22:30</p></li>
            </ul>
        </section>
    )
}
export default Daily