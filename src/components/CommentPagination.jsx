import { getComments } from "../api/comments"
const CommentPagination = ({ article_id, paginationPage, setPaginationPage, paginationLimit, comments, setComments }) => {
    return (
        <div className="pagination">
            <button onClick={(e) => {
                getComments(article_id, paginationPage, paginationLimit)
                    .then((newComments) => {
                        if (newComments.length < 10) e.target.remove()
                        setComments([...comments, ...newComments])
                        setPaginationPage(paginationPage + 1)
                    })
            }}>Load more comments</button>
        </div >
    )
}
export default CommentPagination