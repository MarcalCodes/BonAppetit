import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="PageNotFound">
            <h1>Page Not Found</h1>
            <p>What were you looking for?</p>
            <p>Maybe going back <Link to="/">home</Link></p>
            <p>will help you find it.</p>
        </div>
    )
}

export default PageNotFound