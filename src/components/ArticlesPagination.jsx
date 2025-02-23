const ArticlesPagination = ({ setSearchParams, page, articles }) => {
    return (
        <div className="pagination">
            {page > 1 ? <button onClick={() => {
                setSearchParams((prevParams) => {
                    const newURL = new URLSearchParams(prevParams)
                    newURL.set('page', Number(page) - 1)
                    return newURL
                })
            }}>Previous</button> : null}
            {articles.length === 10 ? <button onClick={() => {
                setSearchParams((prevParams) => {
                    const newURL = new URLSearchParams(prevParams)
                    newURL.set('page', Number(page) + 1)
                    return newURL
                })
            }}>Next</button> : null}
        </div>
    )
}
export default ArticlesPagination