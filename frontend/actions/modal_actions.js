export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const openModal = () => {
  return {
    type: MODAL_OPEN
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
