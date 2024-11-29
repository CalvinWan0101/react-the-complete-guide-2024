export default function TabButton({ label }) {
    function handleClick() {
        console.log("Hello world");
    }

    return (
        <li>
            <button onClick={handleClick}>{label}</button>
        </li>
    );
}