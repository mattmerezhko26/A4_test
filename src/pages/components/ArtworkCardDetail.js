import React from 'react';
import { Card } from 'react-bootstrap';

const ArtworkCardDetail = ({ objectID }) => {
  const [artworkData, setArtworkData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchArtworkData = async () => {
      try {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch artwork data');
        }
        
        const data = await response.json();
        setArtworkData(data);
      } catch (err) {
        setError(err);
      }
    };

    if (objectID) {
      fetchArtworkData();
    }
  }, [objectID]);

  if (error) return <div>Error loading artwork details</div>;
  if (!artworkData) return null;

  const placeholderImage = 'https://placehold.co/375x375?text=Not+Available';

  return (
    <Card>
      {artworkData.primaryImage && (
        <Card.Img 
          variant="top" 
          src={artworkData.primaryImage || placeholderImage} 
          alt={artworkData.title || 'Artwork'} 
        />
      )}
      <Card.Body>
        <Card.Title>{artworkData.title || 'N/A'}</Card.Title>
        <Card.Text>
          <strong>Object Date:</strong> {artworkData.objectDate || 'N/A'}
          <br />
          <strong>Classification:</strong> {artworkData.classification || 'N/A'}
          <br />
          <strong>Medium:</strong> {artworkData.medium || 'N/A'}
        </Card.Text>
        <br />
        <br />
        <Card.Text>
          <strong>Artist:</strong> {artworkData.artistDisplayName || 'N/A'}
          {artworkData.artistDisplayName && artworkData.artistWikidata_URL && (
            <> (
              <a 
                href={artworkData.artistWikidata_URL} 
                target="_blank" 
                rel="noreferrer"
              >
                wiki
              </a>)
            </>
          )}
          <br />
          <strong>Credit Line:</strong> {artworkData.creditLine || 'N/A'}
          <br />
          <strong>Dimensions:</strong> {artworkData.dimensions || 'N/A'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCardDetail;