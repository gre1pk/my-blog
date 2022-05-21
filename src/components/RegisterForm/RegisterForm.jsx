import { useForm, Controller } from 'react-hook-form'
import { Input, Checkbox } from 'antd'

import classes from './RegisterForm.module.scss'

function RegisterForm() {
  const { control, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.container}>
        <h3 className={classes.title}>Create new account</h3>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Username</span>
          <Controller
            control={control}
            name="userName"
            render={({ field }) => <Input {...field} placeholder="Username" size="large" />}
          />
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Email address</span>
          <Controller
            control={control}
            name="email"
            render={({ field }) => <Input {...field} placeholder="Email address" size="large" />}
          />
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Password</span>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input.Password {...field} placeholder="Password" autoComplete="Password" size="large" />
            )}
          />
        </div>
        <div className={classes.formItem}>
          <span className={classes.labelInput}>Repeat Password</span>
          <Controller
            control={control}
            name="repeatPassword"
            render={({ field }) => (
              <Input.Password {...field} autoComplete="Password" placeholder="Repeat Password" size="large" />
            )}
          />
        </div>
        <div className={classes.formCheckBox}>
          <Controller
            control={control}
            name="AntdCheckbox"
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
          Already have an account? <a href="/">Sign In.</a>
        </p>
      </div>
    </form>
  )
}

export default RegisterForm
