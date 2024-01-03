const Footer = ()=>{
    const date = new Date();
    const year = date.getFullYear()
    return(
        <footer style={{"padding":"20px 0", "textAlign":"center"}}>
            <p>&copy; {year}</p>
        </footer>
    )
}

export default Footer;