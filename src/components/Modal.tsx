import { useRef } from "react";

function Modal(props: {children: React.ReactNode; isModalOpen: boolean; headerLabel: string; onCloseRequested: () => void}) {
  const myRef = useRef<HTMLDivElement>(null);

  function handleClick(event: React.MouseEvent) {
    if (!myRef.current?.contains(event.target as Node)) {
      props.onCloseRequested();
    }
  }

  if (!props.isModalOpen) {
    return null;
  }

  return (
    <div
      onClick={handleClick}
      className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700/50"
    >
      <div ref={myRef} className="p-2 bg-white rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <h2>{props.headerLabel}</h2>
          <button aria-label="Close" onClick={props.onCloseRequested}>
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}
export default Modal;
