import React, { useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { customStyles } from "../utils/ModalUtils";

Modal.setAppElement(document.getElementById("modalElement"));


const TileContent = ({ date, schedule }) => {
  const formattedDate = moment(date).format("YYYY-MM-DD");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div id="modalElement">
      <ul className="p-2 text-left" onClick={openModal}>
        {schedule &&
          schedule[formattedDate] &&
          schedule[formattedDate].slice(0, 3).map((el, i) => (
            <li key={i} className="py-2 text-xs align-left text-gray-500">
              <span className="mr-2">
                {" "}
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {el.title}
            </li>
          ))}
        {schedule && schedule[formattedDate] && (
          <li className="py-2 text-xs align-left font-bold text-gray-500">
            +{schedule[formattedDate].length - 3} more
          </li>
        )}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ul>
          {schedule &&
            schedule[formattedDate] &&
            schedule[formattedDate].map((el, i) => (
              <li key={i} className="py-2 text-xs align-left text-gray-500">
                <span className="mr-2">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                {el.title}
              </li>
            ))}
          <button
            onClick={closeModal}
            className="rounded-md bg-teal-500 text-white p-2"
          >
            Close
          </button>
        </ul>
      </Modal>
    </div>
  );
};

export default TileContent;
