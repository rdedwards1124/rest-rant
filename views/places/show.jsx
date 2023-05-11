const React = require("react");
const Def = require("../default");

const show = (data) => {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if(data.place.comments.length){
        comments = data.place.comments.map((c)=>{
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? "Rant! >:(" : "Rave! :D"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img
                            className="img"
                            src={data.place.pic}
                            alt={data.place.name}
                        ></img>
                        <p>Located in {data.place.city}, {data.place.state}</p>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>

                        <h2>Rating</h2>
                        <p>Not Rated yet...</p>

                        <h2>Description</h2>
                        <p>{data.place.showEstablished()}</p>
                        <p>Serving {data.place.cuisines}</p>
                    </div>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>Each place sells different food...</p>
                </div>
                <div>
                    <a
                        href={`/places/${data.place.id}/edit`}
                        className="btn btn-warning"
                    >
                        Edit
                    </a>
                </div>
                <div>
                    <form
                        method="POST"
                        action={`/places/${data.place.id}?_method=DELETE`}
                    >
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    );
};

module.exports = show;
