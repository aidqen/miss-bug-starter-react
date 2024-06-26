export function SortDirPopdown({ctg, handleChange}) {
     
    return (
        <div className="dir-popdown">
            <h4 onClick={() => handleChange({type: ctg, direction: 1})}>Ascending<i className="fa-solid fa-chevron-up"></i></h4>
            <h4 onClick={() => handleChange({type: ctg, direction: -1})}>Descending<i className="fa-solid fa-chevron-down"></i></h4>
        </div>
    )
}