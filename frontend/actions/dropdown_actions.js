export const RECEIVE_DROPDOWN_CONTROL = "RECEIVE_DROPDOWN_CONTROL";

export const receiveDropdownControl = (buttonPressed) => {
  return {
    type: RECEIVE_DROPDOWN_CONTROL,
    buttonPressed
  };
};
