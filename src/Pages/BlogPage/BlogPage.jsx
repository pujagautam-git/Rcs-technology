import React from "react";
import "./BlogPage.css";
import blogData from "../../Components/data/blog.json";

const BlogPage = () => {
  const data = blogData;

  return (
    <div className="blog-page">
      <div className="blog-container">

        {/* BLOG HEADER */}
        <p className="blog-label">{data.label}</p>
        <h1 className="blog-title">{data.title}</h1>
        <p className="blog-date">{data.updated}</p>

        {/* INTRO */}
        {data.intro.map((text, index) => (
          <p key={index} className="blog-text">{text}</p>
        ))}

        {/* HERO IMAGE */}
        {data.heroImage && (
          <div className="blog-hero">
            <img src={data.heroImage} alt="hero" />
          </div>
        )}

        {/* SECTIONS */}
        {data.sections.map((section, index) => (
          <div key={index} className="blog-section">

            {section.title && <h2>{section.title}</h2>}

            {section.paragraphs &&
              section.paragraphs.map((p, i) => (
                <p key={i} className="blog-text">{p}</p>
              ))}

            {section.images && (
              <div className="blog-images">
                {section.images.map((img, i) => (
                  <div key={i} className="blog-image-card">
                    <img src={img.src} alt="here it is" />
                    {img.caption && <p className="caption">{img.caption}</p>}
                  </div>
                ))}
              </div>
            )}

            {section.image && (
              <div className="blog-single-image">
                <img src={section.image} alt="" />
              </div>
            )}

          </div>
        ))}

        {/* PRODUCTS */}
        <h2 className="products-title">{data.productsSectionTitle}</h2>

        <div className="products-grid">
          {data.products.map((product, index) => (
            <div key={index} className="product-card">

              <img src={product.image} alt={product.name} />

              <p className="product-name">{product.name}</p>

              <div className="product-buttons">
                {product.buttons.map((btn, i) => (
                  <button key={i}>{btn}</button>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* COMMUNITY */}
        <div className="community-section">
          <h2>{data.community.title}</h2>
          <p>{data.community.description}</p>

          <div className="community-links">
            {data.community.links.map((link, index) => (
              <span key={index}>{link}</span>
            ))}
          </div>
        </div>

        {/* RELATED CONTENT */}
        <h2 className="related-title">{data.relatedSectionTitle}</h2>

        <div className="related-grid">
          {data.relatedBlogs.map((blog, index) => (
            <div key={index} className="related-card">

              <img src={blog.image} alt={blog.title} />

              <div className="related-content">
                <p className="tag">{blog.tag}</p>
                <h4>{blog.title}</h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;