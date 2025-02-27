import { useParams } from "react-router-dom";
import mystyle from "./DetailPage.module.css";

export default function DetailPage() {
    const details = [
        { id: "1", details: "Details for item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: "2", details: "Details for item 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: "3", details: "Details for item 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    ];

    // Get the id from the link and call it "itemId"
    const { itemId } = useParams();

    // Finds the details for the item where the id is the same as itemId
    const itemToShow = details.find(item => item.id === itemId);

    if (!itemToShow) {
        return <h2>Item Not Found</h2>;
    }

    return (
        <section>
            <h1 className={mystyle.details}>Details for item {itemToShow.id}</h1>
            <div className={mystyle.detailstext}>
                {itemToShow.details}
            </div>
        </section>
    );
}