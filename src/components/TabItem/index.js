import './index.css'

const TabItem = props => {
  const {tabItem, changeTab} = props
  const {tabId, displayText, selected} = tabItem
  const onClickTab = () => {
    changeTab(tabId)
  }

  return (
    <li className="tab-container">
      <button
        className={`tab-button ${selected ? 'selected' : ''}`}
        type="button"
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
