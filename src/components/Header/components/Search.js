
const Search = () => {
    return (
        <div className={"search-field"}>
            <form>
                <button type="submit"><i className={"icon search-icon"}></i></button>
                <input type="text" placeholder="Search"/>
            </form>
        </div>
    );
}
export default Search