import { Link } from "react-router-dom"

export default function DefaultPage() {

    const itemlist = [
        { id: "1", name: "item 1", desc: "item 1 description" },
        { id: "2", name: "item 2", desc: "item 2 description" },
        { id: "3", name: "item 3", desc: "item 3 description" },
    ]

    return (
        <section>
            <h1>Default page</h1>
            <div className="flexcards">
                {itemlist.map((item, index) => (
                    <div key={index} className="card">
                        <h1>{item.name}</h1>
                        <p>{item.desc}</p>
                        <p><Link to={`/detail/${item.id}`}>Read more</Link></p>
                    </div>
                ))}
            </div>
        </section>
    )
}