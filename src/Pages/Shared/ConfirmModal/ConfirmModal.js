import React from 'react';

const ConfirmModal = ({
  title,
  message,
  successButtonName,
  closeModal,
  modalData,
  successAction,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmed-modal" className="modal-toggle " />
      <div className="modal ">
        <div className="modal-box  bg-gradient-to-r rounded-lg from-sky-300 to-indigo-300">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmed-modal"
              className="font-serif p-1 font-semibold px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
            >
              {successButtonName}
            </label>
            <button
              onClick={closeModal}
              className="font-serif p-1 font-semibold px-6 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 "
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;