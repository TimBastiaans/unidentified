
export default function Projects() {
    const project = {
        first: "BEST PROJECT",
        last: ":)",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Description :)",
    };

    return (
        <div id="projects">
            <div>
                <img
                    key={project.avatar}
                    src={project.avatar || undefined}
                />
            </div>
            <div>
                <h1>
                    {project.first || project.last ? (
                        <>
                            {project.first} {project.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </h1>

                {project.twitter && (
                    <p>
                        <a
                            target="_blank"
                            href={`https://twitter.com/${project.twitter}`}
                        >
                            {project.twitter}
                        </a>
                    </p>
                )}

                {project.notes && <p>{project.notes}</p>}
            </div>
        </div>
    );
}

