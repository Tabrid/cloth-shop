import  { useState } from 'react';

const ColorImageDisplay = () => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const handleColorHover = (color) => {
    setHoveredColor(color);
  };

  const data = [
    {
      "name": "Red",
      "hex": "#FF0000",
      "images": [
        {
          "id": 1,
          "url": "https://example.com/image1.jpg",
          "description": "Image 1"
        },
        {
          "id": 2,
          "url": "https://example.com/image2.jpg",
          "description": "Image 2"
        }
      ]
    },
    {
      "name": "Blue",
      "hex": "#0000FF",
      "images": [
        {
          "id": 3,
          "url": "https://example.com/image3.jpg",
          "description": "Image 3"
        },
        {
          "id": 4,
          "url": "https://example.com/image4.jpg",
          "description": "Image 4"
        }
      ]
    }
  ];

  return (
    <div>
      {data.map(color => (
        <button
          key={color.name}
          onMouseEnter={() => handleColorHover(color.name)}
          onMouseLeave={() => handleColorHover(null)}
          style={{ backgroundColor: color.hex, margin: '5px', padding: '10px', color: 'white' }}
        >
          {color.name}
        </button>
      ))}

      <div style={{ marginTop: '20px' }}>
        {hoveredColor &&
          <div>
            <h2>{hoveredColor} Images</h2>
            {data.filter(color => color.name === hoveredColor)[0].images.map(image => (
              <div key={image.id} style={{ margin: '10px' }}>
                <img src={image.url} alt={image.description} style={{ width: '200px', height: '200px' }} />
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default ColorImageDisplay;
