import { useForm, Controller } from 'react-hook-form'
import { Input, Button } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import PropTypes from 'prop-types'

import generateKey from '../../handlers/generateKey'

import classes from './ArticleFormUi.module.scss'

const { TextArea } = Input

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  text: yup.string().required(),
})

function ArticleFormUi({ titleForm, titleAtr, descriptionArt, textArt, tagListArt, onGetArticle }) {
  const [tagCount, setTagCount] = useState([...tagListArt])
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      title: titleAtr,
      description: descriptionArt,
      text: textArt,
    },
  })

  const onBtnAdd = () => setTagCount((prevState) => [...prevState, ''])

  const onBtnDelete = (elIndex) => {
    const deletTag = tagCount.filter((_, i) => i !== elIndex)
    setTagCount(deletTag)
  }

  const tagRender = tagCount.map((el, i) => (
    <div className={classes.tegWrapper} key={generateKey()}>
      <Controller
        control={control}
        name={`tags${i}`}
        defaultValue={el}
        render={({ field }) => (
          <>
            <Input {...field} placeholder="Title" size="large" className={classes.tegInput} />
            {tagCount.length === 1 ? null : (
              <Button className={classes.btnDelete} size="large" danger onClick={() => onBtnDelete(i)}>
                Delete
              </Button>
            )}

            {i === tagCount.length - 1 ? (
              <Button className={classes.btnAdd} size="large" onClick={() => onBtnAdd()}>
                Add tag
              </Button>
            ) : null}
          </>
        )}
      />
    </div>
  ))

  const onSubmit = (data) => {
    const { title, description, text, ...tags } = data
    const tagList = Object.values(tags)

    onGetArticle({ title, description, body: text, tagList })

    reset()
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{titleForm}</h3>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formItem}>
          <p className={classes.itemText}>Title</p>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <Input {...field} placeholder="Title" size="large" status={errors.title && 'error'} />
            )}
          />
        </div>
        <div className={classes.formItem}>
          <p className={classes.itemText}>Short description</p>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Input {...field} placeholder="Short description" size="large" status={errors.description && 'error'} />
            )}
          />
        </div>
        <div className={classes.formItem}>
          <p className={classes.itemText}>Text</p>
          <Controller
            control={control}
            name="text"
            render={({ field }) => <TextArea {...field} rows={4} placeholder="Text" status={errors.text && 'error'} />}
          />
        </div>
        <div className={classes.formItem}>
          <p className={classes.itemText}>Tags</p>
          {tagRender}
        </div>
        <input className={classes.submit} type="submit" value="Send" />
      </form>
    </div>
  )
}

ArticleFormUi.defaultProps = {
  titleForm: '',
  titleAtr: '',
  descriptionArt: '',
  textArt: '',
  tagListArt: [''],
}

ArticleFormUi.propTypes = {
  titleForm: PropTypes.string,
  titleAtr: PropTypes.string,
  descriptionArt: PropTypes.string,
  textArt: PropTypes.string,
  tagListArt: PropTypes.arrayOf(PropTypes.string),
  onGetArticle: PropTypes.func.isRequired,
}

export default ArticleFormUi
