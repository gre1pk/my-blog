import generateKey from '../../handlers/generateKey'

import classes from './TagList.module.scss'

function TagList({ tagList }) {
  const teg = tagList
    ? tagList.map((el) => {
        if (el !== '') {
          return (
            <span className={classes.tag} key={generateKey()}>
              {el}
            </span>
          )
        }
        return ''
      })
    : null

  return <div className={classes.container}>{teg}</div>
}

export default TagList
