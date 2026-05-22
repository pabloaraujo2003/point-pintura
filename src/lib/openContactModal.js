const openContactModal = () =>
  document.dispatchEvent(new CustomEvent('open-contact-modal'));

export default openContactModal;
