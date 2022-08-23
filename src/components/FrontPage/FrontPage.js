import './FrontPage.css'

let FrontPage = () => {
    return (
        <div className="main-container">
            <h2 className='title'>¡Elegi tus juegos!</h2>
            <img className='toad' src={require('./toad.png')} alt='toad-intro'></img>
        
        </div>
    )
}

export default FrontPage