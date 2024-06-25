export function Pagination({ onChangePage, pageIdx }) {
  return (
    <div className="pagination flex flex-row">
      <div onClick={() => onChangePage(-1)}>-</div>
      <div>{pageIdx}</div>
      <div onClick={() => onChangePage(1)}>+</div>
    </div>
  )
}
