
export default function AboutUs() {
    const contactInfo = {
        first: "Ege",
        last: "Saraydar",
        avatar: "https://placekitten.com/g/200/200",
        linkedIn: "ege-s-749694133/",
        notes: "Beast programmer",
    };

    return (
        <div id="projects">
            <div>
                <img
                    key={contactInfo.avatar}
                    src={contactInfo.avatar || undefined}
                />
            </div>
            <div>
                <img
                    key={contactInfo.avatar}
                    src={contactInfo.avatar || undefined}
                />
            </div>
            <div>
                <img
                    key={contactInfo.avatar}
                    src={contactInfo.avatar || undefined}
                />
            </div>
            <div>
                <h1>
                    {contactInfo.first || contactInfo.last ? (
                        <>
                            {contactInfo.first} {contactInfo.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </h1>

                {contactInfo.linkedIn && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://www.linkedin.com/in/${contactInfo.linkedIn}`}
                        >
                            {contactInfo.linkedIn}
                        </a>
                    </p>
                )}

                {contactInfo.notes && <p>{contactInfo.notes}</p>}
            </div>
        </div>
    );
}

