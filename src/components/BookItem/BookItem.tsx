import { useState } from "react";

export interface IBookItem {
  title: string;
  description?: string;
  imageUrl?: string;
}

const FALLBACK_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const BookItem = ({ title, description, imageUrl }: IBookItem) => {
  const [showDescription, setShowDescription] = useState(true);
  const [imageError, setImageError] = useState(false);

  const toggleDescription = () => setShowDescription((prev) => !prev);

  return (
    <article
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "6px",
        display: "flex",
        gap: "1rem",
        marginBottom: "1rem",
        width: "500px",
      }}
    >
      <img
        src={imageError ? FALLBACK_IMAGE : imageUrl || FALLBACK_IMAGE}
        alt={imageUrl ? `${title} cover` : "No image available"}
        width={100}
        height={140}
        style={{ objectFit: "cover", borderRadius: "4px" }}
        onError={() => setImageError(true)}
      />
      <div>
        <h2 style={{ margin: "0 0 0.5rem" }}>{title}</h2>
        {description ? (
          <>
            <button
              onClick={toggleDescription}
              aria-expanded={showDescription}
              aria-label="Description toggle button"
              style={{ marginBottom: "0.5rem" }}
            >
              {showDescription ? "Hide description" : "Show description"}
            </button>
            {showDescription && (
              <p id={`desc-${title}`} style={{ margin: 0 }}>
                {description}
              </p>
            )}
          </>
        ) : (
          <p style={{ fontStyle: "italic", color: "#666" }}>
            No description provided.
          </p>
        )}
      </div>
    </article>
  );
};

export default BookItem;
