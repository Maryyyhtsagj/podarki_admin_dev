import React from "react"
// @ts-ignore
import closeIcon from "../../assets/img/close.svg"

const Modal = ({
  isOpen,
  onClose,
  children,
  headerText,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  headerText?: string
}) => {
  if (!isOpen) return null

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.backgroundBlur}></div>
      <div style={modalStyles.modal}>
        {headerText && <div style={modalStyles.headerText}>{headerText}</div>}
        <button style={modalStyles.closeButton} onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>
        {children}
      </div>
    </div>
  )
}

const modalStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  backgroundBlur: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: "blur(7px)",
    zIndex: -1,
  },
  modal: {
    position: "relative" as const,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "17px",
    minWidth: "730px",
    maxWidth: "90%",
    maxHeight: "90%",
    height: "500px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    borderTop: "35px solid #213F50",
  },
  headerText: {
    position: "absolute" as const,
    top: "-32px",
    left: "10px",
    fontSize: "16px",
    fontWeight: "400",
    color: "#fff",
    backgroundColor: "#213F50",
    padding: "5px 10px",
  },
  closeButton: {
    position: "absolute" as const,
    top: "-35px",
    right: "10px",
    background: "#213F50",
    border: "none",
    fontSize: "18px",
    color: "#fff",
    cursor: "pointer",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}

export default Modal
