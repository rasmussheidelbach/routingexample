export default function AccordionItem({ oneitem }) {
    return (
        <details key={oneitem.id} className="accordion-item">
            <summary className="accordion-header">{oneitem.name}</summary>
            <div className="accordion-content">
                <p>{oneitem.desc}</p>
            </div>
        </details>
    )
}