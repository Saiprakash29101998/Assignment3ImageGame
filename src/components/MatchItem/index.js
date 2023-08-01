import './index.css'

const MatchItem = props => {
  const {matchItem, selectImage} = props
  const {id, thumbnailUrl} = matchItem
  const onClickImage = () => {
    selectImage(id)
  }

  return (
    <li className="image-container">
      <button className="button" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchItem
