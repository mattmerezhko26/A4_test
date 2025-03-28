import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';


const ArtworkCard = ({ objectID }) => {
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

  if (error) return <div>Error loading artwork</div>;
  if (!artworkData) return null;

  const placeholderImage = 'https://placehold.co/375x375?text=Not+Available';

  return (
    <Card>
      <Card.Img 
        variant="top" 
        src={artworkData.primaryImageSmall || placeholderImage} 
        alt={artworkData.title || 'Artwork'}
      />
      <Card.Body>
        <Card.Title>{artworkData.title || 'N/A'}</Card.Title>
        <Card.Text>
          <strong>Object Date:</strong> {artworkData.objectDate || 'N/A'}
          <br />
          <strong>Classification:</strong> {artworkData.classification || 'N/A'}
          <br />
          <strong>Medium:</strong> {artworkData.medium || 'N/A'}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref legacyBehavior>
          <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArtworkCard;