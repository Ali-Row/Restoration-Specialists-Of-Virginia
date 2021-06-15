import "./style.css";

const TeamMemberCard = ({ img, name, role, desc, alt }) => {
    return (
        <div>
            <a href="/">
                <div className="card-flyer">
                    <div className="text-box">
                        <div className="image-box">
                            <img src={img} alt={alt} />
                        </div>
                        <div className="text-container">
                            <h6 className="name">{name}</h6>
                            <h6 className="role">{role}</h6>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default TeamMemberCard;