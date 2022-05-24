import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Input, Checkbox } from 'antd'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'

import { setNewUser } from '../../store/asyncActions/userThunks'

import classes from './RegisterForm.module.scss'

const schema = yup.object().shape({
  userName: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6, 'Your password needs to be at least 6 characters.').max(40).required(),
  repeatPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  agree: yup.boolean().required(),
})

function RegisterForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      username: data.userName,
      email: data.email,
      password: data.password,
    }
    dispatch(setNewUser(user))
    navigate('/')
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.container}>
        <h3 className={classes.title}>Create new account</h3>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Username</span>
          <Controller
            control={control}
            name="userName"
            render={({ field }) => (
              <Input {...field} placeholder="Username" size="large" status={errors.userName && 'error'} />
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
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Repeat Password</span>
          <Controller
            control={control}
            name="repeatPassword"
            render={({ field }) => (
              <Input.Password
                {...field}
                autoComplete="Password"
                placeholder="Repeat Password"
                size="large"
                status={errors.repeatPassword && 'error'}
              />
            )}
          />
          {errors.repeatPassword && <p className={classes.err}>{errors.repeatPassword.message}</p>}
        </div>
        <div className={classes.formCheckBox}>
          <Controller
            control={control}
            name="agree"
            render={({ field: { value, onChange } }) => (
              <Checkbox
                checked={value}
                onChange={(e) => {
                  onChange(e.target.checked)
                }}
              >
                I agree to the processing of my personal information
              </Checkbox>
            )}
          />
        </div>
        <input className={classes.submit} type="submit" value="Create" />
        <p className={classes.confidit}>
          Already have an account? <Link to="/sign-in">Sign In.</Link>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm
