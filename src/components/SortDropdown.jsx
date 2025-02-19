import { Link } from "react-router"
const SortDropdown = () => {
    return (
        <div className="dropdown">
            <Link to='?sort_by=created_at&order=desc' className="option">Most recent</Link>
            <Link to='?sort_by=created_at&order=asc' className="option">Oldest first</Link>
            <Link to='?sort_by=comment_count&order=desc' className="option">Most commented</Link>
            <Link to='?sort_by=comment_count&order=asc' className="option">Less commented</Link>
            <Link to='?sort_by=votes&order=desc' className="option">Most voted</Link>
            <Link to='?sort_by=votes&order=asc' className="option">Less voted</Link>
        </div>
    )
}
export default SortDropdown