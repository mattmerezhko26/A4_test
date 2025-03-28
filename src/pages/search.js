import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AdvancedSearch() {
  const router = useRouter();
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const submitForm = (data) => {
    // Create an empty query string
    let queryString = `searchBy=${data.searchBy}`;

    // Conditionally add geoLocation if not null/undefined
    if (data.geoLocation) {
      queryString += `&geoLocation=${encodeURIComponent(data.geoLocation)}`;
    }

    // Conditionally add medium if not null/undefined
    if (data.medium) {
      queryString += `&medium=${encodeURIComponent(data.medium)}`;
    }

    // Add isOnView and isHighlight
    queryString += `&isOnView=${data.isOnView}&isHighlight=${data.isHighlight}`;

    // Add search query (q)
    queryString += `&q=${encodeURIComponent(data.q)}`;

    // Redirect to artwork page with query string
    router.push(`/artwork?${queryString}`);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Search Query</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter search term" 
              {...register("q", { required: true })}
              className={errors.q ? "is-invalid" : ""}
            />
            {errors.q && <Form.Text className="text-danger">Search term is required</Form.Text>}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Search By</Form.Label>
            <Form.Select {...register("searchBy")}>
              <option value="true">Title</option>
              <option value="false">Artist</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Geo Location</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter location" 
              {...register("geoLocation")}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Medium</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter medium" 
              {...register("medium")}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="On View" 
              {...register("isOnView")}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Check 
              type="checkbox" 
              label="Highlights" 
              {...register("isHighlight")}
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}