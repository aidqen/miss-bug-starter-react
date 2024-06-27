import { utilService } from "../../services/util.service.js"
import { BugActions } from "./BugActions.jsx"

export function BugRow({ bug, onRemoveBug, onEditBug }) {
  const { title, severity, description, createdAt, _id } = bug
 
  function getSeverity(severity) {
    switch (severity) {
      case 1:
        return {
          txt: 'Very Low',
          class: 'status-blue',
        }
        break
      case 2:
        return {
          txt: 'Low',
          class: 'status-green',
        }
        break
      case 3:
        return {
          txt: 'Medium',
          class: 'status-yellow',
        }
        break
      case 4:
        return {
          txt: 'High',
          class: 'status-red',
        }
        break
      case 5:
        return {
          txt: 'Very High',
          class: 'status-red',
        }
        default:
          return {
            txt: '',
            class: ''
          }
        break
    }
  }

  const severityInfo = getSeverity(severity)
  const bugCreatedAt = utilService.getTimeOfSent(createdAt)
  return (
    <React.Fragment>
      <td className="text-overflow-manage">{title}</td>
      <td className="severity">
        <div className={`${severityInfo.class}`}>{severityInfo.txt}</div>
      </td>
      <td className="text-overflow-manage">{description}</td>
      <td>{bugCreatedAt}</td>
      <td>{_id}</td>
    </React.Fragment>
  )
}
