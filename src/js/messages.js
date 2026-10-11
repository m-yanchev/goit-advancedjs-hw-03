import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const COMMON_PROPS = {
  class: 'message',
  titleSize: '16px',
  titleLineHeight: '150%',
  messageSize: '16px',
  messageLineHeight: '150%',
  theme: 'dark',
  position: 'topRight',
  maxWidth: '432px',
};

export const showErrorMessage = message => {
  iziToast.error({
    ...COMMON_PROPS,
    title: '',
    message: message,
    backgroundColor: '#ef4040',
  });
};