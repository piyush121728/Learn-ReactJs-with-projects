function Button({ colorName, changeColor }) {
    return (
        <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: colorName }}
            onClick={changeColor}
        >
            {colorName}
        </button>
    )
}

export default Button;