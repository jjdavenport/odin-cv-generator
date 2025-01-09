import binIcon from "../assets/bin-icon.svg";

const Avatar = ({
  img,
  type,
  cameraIcon,
  onClose,
  handleUpload,
  fileInputRef,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
}) => {
  return (
    <>
      <div className="relative w-1/2 overflow-hidden rounded-lg">
        <button
          onClick={() => fileInputRef.current.click()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleUpload}
          className="h-full w-full"
          type={type}
        >
          <img className="hidden" src={cameraIcon} />
          <img className="h-full w-full object-cover" src={img} />
        </button>
        <input
          onChange={handleUpload}
          ref={fileInputRef}
          type="file"
          className="hidden"
        />
        <button
          onClick={onClose}
          className="absolute right-1 top-1 rounded-full bg-gray-100 p-2 opacity-40"
          type={type}
        >
          <img className="w-4 object-contain" src={binIcon} />
        </button>
      </div>
    </>
  );
};

export default Avatar;
