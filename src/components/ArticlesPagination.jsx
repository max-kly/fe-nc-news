const ArticlesPagination = ({ setSearchParams, page, articles }) => {
    const scrollToTheTop = () => {
        window.scrollTo({
            top: document.getElementById('top'),
            behavior: "smooth"
        })
    }
    return (
        <div className="pagination">
            {page > 1 ? <button onClick={() => {
                setSearchParams((prevParams) => {
                    const newURL = new URLSearchParams(prevParams)
                    newURL.set('page', Number(page) - 1)
                    scrollToTheTop()
                    return newURL
                })
            }}>Previous</button> : null}
            {articles.length === 10 ? <button onClick={() => {
                setSearchParams((prevParams) => {
                    const newURL = new URLSearchParams(prevParams)
                    newURL.set('page', Number(page) + 1)
                    scrollToTheTop()
                    return newURL
                })
            }}>Next</button> : null}
        </div>
    )
}
export default ArticlesPagination