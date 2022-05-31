import { useForm, Controller } from 'react-hook-form'
import { Input, message } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { setLoginUser } from '../../store/asyncActions/userThunks'
import { setClearErrMsg } from '../../store/actions/userAction'

import classes from './LoginForm.module.scss'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Your password needs to be at least 6 characters.').max(40).required(),
})

function LoginForm() {
  const dispatch = useDispatch()
  const { errMasage, isLogin } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    if (errMasage) {
      return message.error(errMasage)
    }
    if (isLogin) {
      navigate('/')
    }

    return () => dispatch(setClearErrMsg())
  }, [errMasage, navigate, isLogin, dispatch])

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
        <input className={classes.submit} type="submit" value="Login" />
        <p className={classes.confidit}>
          Don’t have an account? <Link to="/sign-up">Sign Up.</Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
