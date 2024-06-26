export function BugRow({ bug, onRemoveBug, onEditBug }) {
  const { title, severity, description, createdAt, _id } = bug
  function getSeverity(severity) {
    switch (severity) {
      case '1':
        return {
          txt: 'Very Low',
          classes: 'status-green',
        }
        break
      case '2':
        return {
          txt: 'Low',
          classes: 'status-green',
        }
        break
      case '3':
        return {
          txt: 'Medium',
          classes: 'status-yellow',
        }
        break
      case '4':
        return {
          txt: 'High',
          classes: 'status-red',
        }
        break
      case '5':
        return {
          txt: 'Very High',
          classes: 'status-red',
        }

        break
    }
  }

  const severityInfo = getSeverity(severity)
  return (
    <React.Fragment>
      <td>{title}</td>
      <td className={`severity ${severityInfo.class}`}>{severityInfo.txt}</td>
      <td>{description}</td>
      <td>{createdAt}</td>
      <td>{_id}</td>
    </React.Fragment>
  )
}
