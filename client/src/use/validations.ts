export const requiredField = (v: string | number) => !!v || 'Field is required'

export const tooLongField = (v: string): true | string => {
  const condition = !!(v.length <= 60)
  const message = 'Field is too long'
  return v ? condition || message : true
}

export const tooShortField = (v: string): true | string => {
  const condition = !!(v.length >= 2)
  const message = 'Field is too short'
  return v ? condition || message : true
}

export const onlyWhitespaces = (v: string): true | string => {
  const condition = !!v.replace(/\s/g, '').length
  const message = 'Field contains only whitespaces'
  return v ? condition || message : true
}

export const emailField = (v: string): true | string => {
  const condition = /.+@.+\..+/.test(v)
  const message = 'E-mail must be valid'
  return v ? condition || message : true
}

export const shortPassword = (v: string): true | string => {
  const condition = !!(v.length >= 6)
  const message = 'Password is too short'
  return v ? condition || message : true
}

export const linkField = (v: string): true | string => {
  const condition = !!v.match(/(https?:\/\/[^\s]+)/g)
  const message = 'Please provide a correct link'
  return v ? condition || message : true
}

export const standardField = [tooLongField, tooShortField, onlyWhitespaces]
