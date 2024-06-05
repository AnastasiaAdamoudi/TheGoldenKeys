import "react-responsive-modal/styles.css";
import "./Modal.css";
import { Modal } from "react-responsive-modal";

const AccessibilityModal = ({ isOpen, onClose }) => {
  const closeIcon = (
    <svg fill="#F1F2F1" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4"
        stroke="#F1F2F1"
        strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      closeIcon={closeIcon}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      aria-labelledby="accessibility-statement-modal"
    >
      <div className="flex flex-col items-center justify-center mx-auto p-4">
        <h2 className="text-midGold text-2xl font-bold mb-4 font-title underline">
          Δήλωση Διαδικτυακής Προσβασιμότητας
        </h2>
        <p className="text-light text-lg mb-4 font-links">
          Αυτός ο ιστότοπος έχει κατασκευαστεί με σκοπό να είναι προσβάσιμος σε
          όσο το δυνατόν περισσότερους ανθρώπους. Εάν έχετε επιπλέον ανάγκες
          προσβασιμότητας, παρακαλούμε επικοινωνήστε με την προγραμματίστρια
          ανάπτυξης ιστοσελίδων Αναστασία στο{" "}
          <a
            href="mailto:anastasiaadamoudi@gmail.com"
            className="text-midGold font-links hover:text-lightGold"
          >
            anastasiaadamoudi@gmail.com
          </a>{" "}
          για να σας βοηθήσει να αποκτήσετε πρόσβαση στο περιεχόμενο.
        </p>
      </div>
    </Modal>
  );
};

export default AccessibilityModal;
