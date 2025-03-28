import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MainNav() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/artwork?title=true&q=${search}`);
    }
  };

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark" expand="lg">
        <Container>
          <Navbar.Brand style={{ fontWeight: "bold" }}>Matvii Merezhko</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" legacyBehavior passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" legacyBehavior passHref>
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button type="submit" variant="success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      <br />
      <br />
    </>
  );
}