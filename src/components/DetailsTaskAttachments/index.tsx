import React, { useState } from "react";
import "./styles.css";

interface IProps {
  item: string;
}

const DetailsTaskAttachmentsItem = ({ item }: IProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <div className="attachment-wrapper" onClick={() => setModalVisible(true)}>
        <img src={item} className="attachment-image" alt="attachment" />
      </div>

      {modalVisible && (
        <div
          className="modal-background"
          onClick={() => setModalVisible(false)}
        >
          <div className="modal-container">
            <button
              className="modal-close-button"
              onClick={() => setModalVisible(false)}
            >
              X
            </button>
            <img
              src={item}
              className="modal-full-image"
              alt="full attachment"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsTaskAttachmentsItem;
