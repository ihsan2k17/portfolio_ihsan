import { Experience } from '../../../utils/experience'
import cardexpStyle from './cardex.module.css'

const CardExperience = () => {
    return (
        <div style={{display:"flex", justifyContent:"center", padding:"10px 0"}}>
            <div className={cardexpStyle.cardex}>
                {Experience.map((data) => (
                    <div key={data.id} className={cardexpStyle.card}>
                        <div className={cardexpStyle.heading}>
                            <h3>{data.company}</h3>
                            <img src={data.images} alt={data.company} className={cardexpStyle.img} />
                        </div>
                        <hr className={cardexpStyle.hr} />
                        <p>{data.title}</p>
                        <p>Masa Kerja: {data.masaKerja}</p>
                        <p>Masuk Kerja: {data.masukKerja}</p>
                        <p>Status: {data.status}</p>
                        <p>Job Desk:</p>
                        <ul>
                            {data.jobDesk.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardExperience