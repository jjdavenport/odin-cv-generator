const Avatar = ({
  img,
  type,
  onClose,
  handleUpload,
  fileInputRef,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  dragging,
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
          className={`${dragging ? "bg-gray-100" : "bg-transparent"} group h-full w-full transition-all duration-300 ease-in-out hover:bg-gray-100`}
          type={type}
        >
          <svg
            className={`${dragging ? "opacity-100" : "opacity-0 group-hover:opacity-100"} absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                className="fill-gray-400"
                d="M 79.438 81.537 H 10.563 C 4.738 81.537 0 76.768 0 70.904 v -39.61 c 0 -5.863 4.738 -10.632 10.563 -10.632 h 4.66 c 0.692 0 1.373 -0.121 2.023 -0.358 c 1.382 -0.505 2.525 -1.505 3.219 -2.814 l 1.407 -2.653 c 2.085 -3.931 6.129 -6.374 10.555 -6.374 h 25.146 c 4.426 0 8.471 2.442 10.555 6.374 l 1.407 2.653 c 1.038 1.957 3.047 3.172 5.242 3.172 h 4.66 c 5.824 0 10.563 4.77 10.563 10.632 v 39.61 c 0 3.563 -1.76 6.871 -4.706 8.85 C 83.558 80.921 81.533 81.537 79.438 81.537 z M 10.563 24.662 C 6.944 24.662 4 27.637 4 31.294 v 39.61 c 0 3.657 2.944 6.633 6.563 6.633 h 68.875 c 1.298 0 2.552 -0.382 3.626 -1.104 C 84.902 75.199 86 73.132 86 70.904 v -39.61 c 0 -3.657 -2.944 -6.632 -6.563 -6.632 h -4.66 c -3.68 0 -7.043 -2.03 -8.775 -5.298 l -1.407 -2.653 c -1.39 -2.62 -4.08 -4.248 -7.021 -4.248 H 32.427 c -2.941 0 -5.632 1.627 -7.021 4.248 l -1.407 2.653 c -1.157 2.183 -3.067 3.851 -5.378 4.696 c -1.092 0.399 -2.235 0.602 -3.397 0.602 H 10.563 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                className="fill-gray-400"
                d="M 45 70.97 c -11.772 0 -21.349 -9.648 -21.349 -21.508 c 0 -5.742 2.219 -11.14 6.247 -15.202 c 2.062 -2.078 4.473 -3.683 7.167 -4.77 c 2.526 -1.019 5.195 -1.536 7.936 -1.536 c 11.772 0 21.35 9.648 21.35 21.507 c 0 2.757 -0.512 5.443 -1.521 7.985 c -1.076 2.713 -2.667 5.141 -4.727 7.217 C 56.069 68.73 50.706 70.97 45 70.97 z M 45 31.955 c -2.225 0 -4.391 0.419 -6.439 1.245 c -2.187 0.882 -4.146 2.187 -5.823 3.877 c -3.28 3.307 -5.087 7.706 -5.087 12.385 c 0 9.654 7.783 17.508 17.349 17.508 c 4.631 0 8.986 -1.819 12.262 -5.122 c 1.678 -1.691 2.973 -3.668 3.849 -5.877 c 0.822 -2.069 1.239 -4.26 1.239 -6.509 C 62.35 39.808 54.566 31.955 45 31.955 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <ellipse
                className="fill-gray-400"
                cx="75.184"
                cy="33.831"
                rx="3.234"
                ry="3.261"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
            </g>
          </svg>
          <img
            className={`${dragging ? "opacity-0" : "opacity-100"} h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:opacity-0`}
            src={img}
            alt="Avatar"
          />
        </button>
        <input
          onChange={handleUpload}
          ref={fileInputRef}
          type="file"
          className="hidden"
        />
        <button
          onClick={onClose}
          className="group absolute right-1 top-1 rounded-full bg-gray-100 bg-opacity-40 p-2"
          type={type}
        >
          <svg
            className="h-4 w-4 object-contain opacity-40 transition-all duration-300 ease-in-out group-hover:fill-red-500 group-hover:opacity-100"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 408.483 408.483"
          >
            <g>
              <g>
                <path
                  d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
			H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
			c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
			c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
			c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
			c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"
                />
                <path
                  d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
			c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Avatar;
