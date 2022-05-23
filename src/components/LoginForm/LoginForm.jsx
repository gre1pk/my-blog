import { useForm, Controller } from 'react-hook-form'
import { Input } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'

import { setLoginUser } from '../../store/asyncActions/userThunks'

import classes from './LoginForm.module.scss'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Your password needs to be at least 6 characters.').max(40).required(),
})

function LoginForm() {
  const dispatch = useDispatch()

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
    reset()
    const user = {
      email: data.email,
      password: data.password,
    }
    dispatch(setLoginUser(user))
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.container}>
        <h3 className={classes.title}>Sign In</h3>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Email address</span>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input {...field} placeholder="Email address" size="large" status={errors.email && 'error'} />
            )}
          />
          {errors.email && <p className={classes.err}>{errors.email.message}</p>}
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Password</span>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Password"
                autoComplete="Password"
                size="large"
                status={errors.password && 'error'}
              />
            )}
          />
          {errors.password && <p className={classes.err}>{errors.password.message}</p>}
        </div>
        <input className={classes.submit} type="submit" value="Create" />
        <p className={classes.confidit}>
          Don’t have an account? <a href="/">Sign Up.</a>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
