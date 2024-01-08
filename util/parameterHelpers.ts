/**
 * Functions to help with Front End validation of parameter input.
 *
 * If there is an error, set values accordingly to display in alert inside of component.
 *
 * Check if empty
 * Check if parameter already exists
 *
 * @function
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const validateParameter = (
  parameter: string,
  parameterArray: string[]
) => {
  if (isParameterEmpty(parameter)) {
    return {
      error: true,
      title: "Parameter is empty",
      message: "Please enter a valid parameter",
    };
  }
  if (parameterExists(parameter, parameterArray)) {
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

/**
 * Function to toggle the state of a parameter.
 *
 * Function used in the Reply and Queue screen to toggle the
 * parameter chips when the User presses them.
 *
 * @function
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
export const toggleParameter = (
  parameter: string,
  parameterArray: string[]
) => {
  if (parameterArray.includes(parameter)) {
    return parameterArray.filter((s) => s !== parameter);
  } else {
    return [...parameterArray, parameter];
  }
};

const isParameterEmpty = (parameter: string) => {
  return parameter === "";
};

const parameterExists = (parameter: string, parameterArray: string[]) => {
  return parameterArray.includes(parameter);
};
