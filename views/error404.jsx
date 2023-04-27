const React = require('react')

const Def = require('./default')

const error404 = ()=>{
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/cute-pikachu-apple.jpg" alt="Cute Pikachu eating an apple"></img>
                    <div>
                        Photo by <a href="https://i.pinimg.com/originals/0f/03/e8/0f03e87ba4b39e98edffeb7db86f352f.jpg">pinterest.com</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404