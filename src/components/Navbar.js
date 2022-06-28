const Navbar = () => {
    return (
        <nav style={StyleSheet.navStyle}>
            <h1> React Todos App</h1>
            <ul>
                <li>Home</li>
                <li>Todos</li>
            </ul>


        </nav>
    )
}

const styles = {
    navStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid green 3px'
    }
}
export default Navbar