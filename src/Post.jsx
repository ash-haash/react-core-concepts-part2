export default function Post({ post }) {
    const { title, body } = post;
    return (
        <div className="box">
            <h3>Title: {title} </h3>
            <p>Body: {body}</p>
        </div>
    )
}