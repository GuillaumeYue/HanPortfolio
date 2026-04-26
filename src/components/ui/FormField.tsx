import type { ChangeEvent } from 'react'

type BaseProps = {
  id: string
  name: string
  label: string
  value: string
  required?: boolean
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

type InputFieldProps = BaseProps & {
  as?: 'input'
  type?: 'text' | 'email'
}

type TextareaFieldProps = BaseProps & {
  as: 'textarea'
  rows?: number
}

type FormFieldProps = InputFieldProps | TextareaFieldProps

/** Labelled form input or textarea with the dark theme styling. */
function FormField(props: FormFieldProps) {
  const { id, name, label, value, required, placeholder, onChange } = props

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={props.rows ?? 5}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-dark mt-2 resize-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? 'text'}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-dark mt-2"
        />
      )}
    </div>
  )
}

export default FormField
