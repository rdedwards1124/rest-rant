const React = require('react')

const Def = require('./default')

const home = ()=>{
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/rest-rant-pic.jpg" alt="A Restaurant Picture"></img>
                    <div>
                        Photo by <a href="https://www.travelandleisure.com/thmb/Jw-KKDrA6z1nvDJbr5kyKJSG4vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-oiji-mi-NEWNYCDINE0223-8c392080598d44dbafdbc87bbcf4d7dd.jpg">travelandleisure.com</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home