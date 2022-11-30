import "../styles/placetags.css"


export default function PlaceTags(props) {
    const tags = props.place.tags
    return (
        <div className="placeTags">
           { tags.map((tag) => (
            <div className='tag' key={tag}>{tag}</div>
            ))
            }
        </div>
        )
}