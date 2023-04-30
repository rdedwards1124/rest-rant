const React = require('react')
const Def = require('../default')

const show = (data)=>{
    return (
        <Def>
          <main>

            <h1>{ data.place.name }</h1>

            {/* Part Three: Fill Out the Show Page, number 2 and 3 */}
            <h2>Rating</h2>
            <p></p>
            <h2>Decription</h2>
            <p></p>

          </main>
        </Def>
    )
}

module.exports = show
