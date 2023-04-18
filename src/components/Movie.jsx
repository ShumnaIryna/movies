function Movie (props) {
    const {
        Title: title,
        Year: year,
        Type: type,
        imdbID: id,
        Poster: poster
    } = props;

    return <div id={id} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={poster} alt="foto" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}</span>
                    <p>{year} <span>{type}</span></p>
                </div>
    </div>
};

export {Movie};