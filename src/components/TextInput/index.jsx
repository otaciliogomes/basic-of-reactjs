import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            type="search"
            value={searchValue}
            onChange={handleChange}
            className="inputSearch"
        />
    )
}