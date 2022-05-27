import PropTypes from 'prop-types'

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

TagList.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagList
