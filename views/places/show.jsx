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
            <h2>Description</h2>
            <p></p>
            <h2>Comments</h2>
            <p></p>

            <div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
            </div>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>

          </main>
        </Def>
    )
}

module.exports = show
