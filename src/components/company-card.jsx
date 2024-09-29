// eslint-disable-next-line react/prop-types
export function CompanyCard({ src, jobRole, alternative, companyName}) {
    return (
        <div>
            <img src={src} alt={alternative} />
            <h3>{companyName}</h3>
            <h4>{jobRole}</h4>
        </div>
    )
}