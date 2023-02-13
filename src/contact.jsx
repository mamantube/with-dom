import { Form } from "react-router-dom";

export default function Contact() {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorites: true,
    };

    return (
        <div id="contact">
            <div>
                <img key={contact.avatar} src={contact.avatar || null} />
            </div>

            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <div>
                            
                        </div>
                    )}
                </h1>
            </div>
        </div>
    )
}