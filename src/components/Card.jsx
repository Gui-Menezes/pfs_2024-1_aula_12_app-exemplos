import './Card.css';

export default function Card({titulo, children}) {
    const abrirAlert = () => {
        alert(`Card ${titulo}`);
    }

    return (
        <div className='card' onClick={abrirAlert}>
            <div className='card-titulo'>
                <h2>{titulo}</h2>
            </div>
            <div className='card-conteudo'>
                {children}
                </div>
        </div>
    )
}