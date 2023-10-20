/**
 * Functions to help with Front End validation of parameter input.
 *
 * If there is an error, set values accordingly to display in alert inside of component.
 *
 * Check if empty
 * Check if parameter already exists
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const validateParameter = (parameter: string, parameters: string[]) => {
  if (isParameterEmpty(parameter)) {
    return {
      error: true,
      title: "Parameter is empty",
      message: "Please enter a valid parameter",
    };
  }
  if (parameterExists(parameter, parameters)) {
    return {
      error: true,
      title: "Parameter already exists",
      message: "Please enter a different parameter",
    };
  }

  return {
    error: false,
    title: "",
    message: "",
  };
};

const isParameterEmpty = (parameter: string) => {
  return parameter === "";
};

const parameterExists = (parameter: string, parameters: string[]) => {
  return parameters.includes(parameter);
};
