import { reactive } from "vue"

export function useFormManager() {
  const resetForm = form => {
    if (form) {
      let fields = Array.from(form.getElementsByClassName("form-field"))
      fields.forEach(field => {
        let type = field.getAttribute("type")
        if (!type) {
          type = field.tagName.toLowerCase()
        }
        if (type == "checkbox" && field.role == "switch") {
          type = "switch"
        }
        resetFieldValue(field, type)
      })
    }
  }

  const setFormValues = (form, data) => {
    if (form) {
      let fields = Array.from(form.getElementsByClassName("form-field"))
      fields.forEach(field => {
        let type = field.getAttribute("type")
        if (!type) {
          type = field.tagName.toLowerCase()
        }
        if (type == "checkbox" && field.role == "switch") {
          type = "switch"
        }
        let name = field.getAttribute("name")
        if (name && data[name] !== undefined && data[name] !== null) {
          setFieldValue(field, type, data[name])
        }
      })
    }
  }

  const displayServerSideFormErrors = (form, errors) => {
    Object.entries(errors).forEach(error => {
      if (form) {
        let elem = form.querySelector('[name="' + error[0] + '"]')
        if (!elem?.classList.contains("is-invalid")) {
          elem?.classList.add("is-invalid")
        }
      }
    })
  }

  const validate = async (form, formErorrs) => {
    let errors = reactive({})

    if (form) {
      let fields = Array.from(form.getElementsByClassName("form-field"))

      let data = reactive({})
      fields.forEach(field => {
        if (field) {
          field.addEventListener("change", () => {
            if (field?.classList.contains("is-invalid")) {
              field?.classList.remove("is-invalid")
            }
            let name = field.dataset.dbFieldName
              ? field.dataset.dbFieldName
              : field.getAttribute("name")
            if (name) {
              formErorrs.value[name] = ""
            }
          })
        }

        let sendEmpty = field.dataset.sendEmpty ? true : false
        let sendNull = field.dataset.sendNull ? true : false
        let sendZero = field.dataset.sendZero ? true : false
        let dataNotMultiple = field.dataset.notMultiple ? true : false
        let validation_rules = field.dataset.validation
        let name = field.getAttribute("name")
        let validation_name = field.dataset.validationName
          ? field.dataset.validationName
          : name
        if (!validation_name) {
          validation_name = ""
        }

        let db_field_name = field.dataset.dbFieldName
          ? field.dataset.dbFieldName
          : name
        if (!db_field_name) {
          db_field_name = ""
        }

        let type = field.getAttribute("type")
        if (!type) {
          type = field.tagName.toLowerCase()
        }
        if (type == "checkbox" && field.role == "switch") {
          type = "switch"
        }
        let value = getFieldValue(field, type)

        if (validation_rules) {
          let validations_array = validation_rules?.split("|").filter(Boolean)
          validations_array.every(validation => {
            let temp_validation_array = validation.split(":")
            validation = temp_validation_array[0]
            let validation_conditions = temp_validation_array[1]
            switch (validation) {
              case "required":
                return evalValidationFunctions(
                  isRequired,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value
                )
              case "length":
                return evalValidationFunctions(
                  exactLength,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value,
                  validation_conditions
                )
              case "email":
                return evalValidationFunctions(
                  isEmail,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value
                )
              case "minLen":
                return evalValidationFunctions(
                  minLength,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value,
                  validation_conditions
                )
              case "maxLen":
                return evalValidationFunctions(
                  maxLength,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value,
                  validation_conditions
                )
              case "minNum":
                return evalValidationFunctions(
                  minNumber,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value,
                  validation_conditions
                )
              case "maxNum":
                return evalValidationFunctions(
                  maxNumber,
                  errors,
                  field,
                  validation_name,
                  db_field_name,
                  value,
                  validation_conditions
                )
              default:
                break
            }
          })
        }

        if (db_field_name && value) {
          if (type == "checkbox" && !dataNotMultiple) {
            if (db_field_name in data) {
              data[db_field_name].push(value)
            } else {
              data[db_field_name] = [value]
            }
          } else {
            data[db_field_name] = value
          }
        } else if (sendEmpty && db_field_name) {
          data[db_field_name] = ""
        } else if (sendNull && db_field_name) {
          data[db_field_name] = null
        } else if (sendZero && db_field_name) {
          data[db_field_name] = 0
        }
      })

      if (!form?.classList.contains("was-validated")) {
        form?.classList.add("was-validated")
      }

      if (Object.values(errors).filter(Boolean).length > 0) {
        formErorrs.value = errors
        return Promise.reject(errors)
      }
      return Promise.resolve(data)
    }

    errors["form_general_errors"] = "Invalid Form!"
    formErorrs.value = errors
    return Promise.reject(errors)
  }

  const evalValidationFunctions = (
    functionName,
    errors,
    field,
    validation_name,
    field_name,
    value,
    condition = null
  ) => {
    let error = ""
    if (condition) {
      error = functionName(validation_name, value, condition)
    } else {
      error = functionName(validation_name, value)
    }

    if (field_name) {
      errors[field_name] = error
    } else {
      errors["form_general_errors"] = error
    }

    if (error == "") {
      if (!field?.classList.contains("is-valid")) {
        field?.classList.add("is-valid")
        field?.setCustomValidity("")
      }
      if (field?.classList.contains("is-invalid")) {
        field?.classList.remove("is-invalid")
        field?.setCustomValidity("invalid")
      }
      return true
    }
    if (!field?.classList.contains("is-invalid")) {
      field?.classList.add("is-invalid")
    }
    if (field?.classList.contains("is-valid")) {
      field?.classList.remove("is-valid")
    }

    return false
  }

  const getFieldValue = (field, type) => {
    switch (type) {
      case "text":
      case "email":
      case "url":
      case "number":
      case "tel":
      case "date":
      case "hidden":
      case "month":
      case "password":
      case "search":
      case "time":
      case "week":
      case "range":
      case "datetime-local":
      case "color":
      case "button":
        return field.value
      case "select":
        field = field
        let values = []
        let options = Array.from(field.options)
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected && field.multiple) {
            values.push(options[i].value)
          } else if (options[i].selected) {
            return options[i].value
          }
        }
        return values
      case "radio":
      case "checkbox":
        field = field
        if (field.checked) {
          if (field.value) {
            return field.value
          }
          return true
        }
      case "switch":
        field = field
        if (field.checked) {
          return 1
        }
      case "file":
      case "image":
        break
      case "textarea":
        return field.value
        break
      default:
        break
    }
  }

  const setFieldValue = (field, type, value) => {
    switch (type) {
      case "text":
      case "email":
      case "url":
      case "number":
      case "tel":
      case "date":
      case "hidden":
      case "month":
      case "password":
      case "search":
      case "time":
      case "week":
      case "range":
      case "datetime-local":
      case "color":
      case "button":
        field.value = value
        return
      case "select":
        field = field
        let options = Array.from(field.options)
        let values
        if (typeof value == "object" && Array.isArray(value)) {
          values = value
        } else {
          value = String(value)
        }
        options.forEach(option => {
          if (typeof value == "string" && option.value == value) {
            option.selected = true
            field.value = value
            field.dispatchEvent(new Event("change"))
          }
          if (typeof value == "object" && Array.isArray(value)) {
            option.selected = values.includes(option.value)
            field.dispatchEvent(new Event("change"))
          }
        })
        break
      case "radio":
      case "checkbox":
        field = field
        if (field.value == value) {
          field.checked = true
          field.dispatchEvent(new Event("change"))
        }
        break
      case "switch":
        field = field
        if (typeof value == "string" && parseInt(value) == 1) {
          field.checked = true
          field.dispatchEvent(new Event("change"))
        }
        break
      case "file":
      case "image":
        break
      case "textarea":
        field.value = value
        break
      default:
        break
    }
  }

  const resetFieldValue = (field, type) => {
    switch (type) {
      case "text":
      case "email":
      case "url":
      case "number":
      case "tel":
      case "date":
      case "hidden":
      case "month":
      case "password":
      case "search":
      case "time":
      case "week":
      case "range":
      case "datetime-local":
      case "color":
      case "button":
        field.value = ""
        break
      case "select":
        let selectField = field
        let values = []
        let options = Array.from(selectField.options)
        options.forEach((option, index) => {
          if (option.defaultSelected) {
            selectField.selectedIndex = index
          }
        })
        selectField.selectedIndex = -1
        break
      case "radio":
      case "checkbox":
      case "switch":
        field = field
        if (field.checked) {
          field.checked = false
          break
        }
      case "file":
      case "image":
        field.value = ""
        break
      case "textarea":
        field.value = ""
        break
      default:
        break
    }
  }

  const isRequired = (fieldName, fieldValue) => {
    return !fieldValue ? "The " + fieldName + " field is required" : ""
  }

  const exactLength = (fieldName, fieldValue, exact) => {
    return fieldValue.length != exact
      ? `The ${fieldName} field must be equal to ${exact} characters long`
      : ""
  }

  const minLength = (fieldName, fieldValue, min) => {
    return fieldValue.length < min
      ? `The ${fieldName} field must be atleast ${min} characters long`
      : ""
  }

  const maxLength = (fieldName, fieldValue, max) => {
    return fieldValue.length > max
      ? `The ${fieldName} field must be less than or equal ${max} characters long`
      : ""
  }

  const exactNumber = (fieldName, fieldValue, exact) => {
    return fieldValue != exact
      ? `The ${fieldName} field must be equal to ${exact}`
      : ""
  }

  const minNumber = (fieldName, fieldValue, min) => {
    fieldValue = parseFloat(fieldValue)
    return fieldValue < min
      ? `The ${fieldName} field must be greater than or equal to ${min}`
      : ""
  }

  const maxNumber = (fieldName, fieldValue, max) => {
    fieldValue = parseFloat(fieldValue)
    return fieldValue > max
      ? `The ${fieldName} field must be less than or equal to ${max}`
      : ""
  }

  const isEmail = (fieldName, fieldValue) => {
    if (fieldValue.trim() == "") {
      return ""
    }
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !re.test(fieldValue) ? "The input is not a valid email address" : ""
  }

  return { validate, displayServerSideFormErrors, resetForm, setFormValues }
}