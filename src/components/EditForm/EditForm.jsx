import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { updateUser } from '../../store/asyncActions/userThunks'

import classes from './EditForm.module.scss'

const schema = yup.object().shape({
  userName: yup.string().min(3).max(20),
  email: yup.string().email(),
  newPassword: yup.string().min(6, 'Your password needs to be at least 6 characters.').max(40).required(),
  imgUrl: yup.string().url(),
})

function EditForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token, userName, email } = useSelector((state) => state.userReducer)
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    const user = {
      username: data.userName,
      email: data.email,
      password: data.newPassword,
      image: data.imgUrl,
    }
    dispatch(updateUser(user, token))
    reset()
    navigate('/')
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.container}>
        <h3 className={classes.title}>Edit Profile</h3>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Username</span>
          <Controller
            control={control}
            name="userName"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Username"
                size="large"
                status={errors.userName && 'error'}
                defaultValue={userName}
              />
            )}
          />
          {errors.userName && <p className={classes.err}>{errors.userName.message}</p>}
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Email address</span>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Email address"
                size="large"
                status={errors.email && 'error'}
                defaultValue={email}
              />
            )}
          />
          {errors.email && <p className={classes.err}>{errors.email.message}</p>}
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>New password</span>
          <Controller
            control={control}
            name="newPassword"
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="New password"
                autoComplete="Password"
                size="large"
                status={errors.newPassword && 'error'}
              />
            )}
          />
          {errors.newPassword && <p className={classes.err}>{errors.newPassword.message}</p>}
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Avatar image (url)</span>
          <Controller
            control={control}
            name="imgUrl"
            render={({ field }) => (
              <Input {...field} placeholder="Avatar image" size="large" status={errors.imgUrl && 'error'} />
            )}
          />
          {errors.imgUrl && <p className={classes.err}>{errors.imgUrl.message}</p>}
        </div>
        <input className={classes.submit} type="submit" value="Save" />
      </div>
    </form>
  )
}

export default EditForm
