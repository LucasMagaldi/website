// eslint-disable-next-line react/prop-types
export function CompanyCard({ src, jobRole, alternative}) {
    return (
        <div>
            <img src={src} alt={alternative} />
            <h4>{jobRole}</h4>
        </div>
    )
}