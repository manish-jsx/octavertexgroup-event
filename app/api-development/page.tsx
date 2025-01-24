'use client'

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
    Accordion,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    Code,
    Divider,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Snippet,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tabs,
    Tab
} from "@heroui/react";

const APIDevelopmentPage = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });

        tl.to(".api-section", { duration: 0.75, opacity: 1, y: 0, stagger: 0.1 });

        return () => {
            if (contentRef.current) gsap.killTweensOf(contentRef.current);
        };
    }, []);

    const apiEndpoints = [
        {
            method: "GET",
            path: "/api/users",
            description: "Retrieve a list of users. Supports filtering, sorting, and pagination.",
            parameters: [
                { name: "page", type: "integer", description: "Page number for pagination", required: false },
                { name: "limit", type: "integer", description: "Number of items per page", required: false },
                { name: "sort", type: "string", description: "Sort by field (e.g., name, email)", required: false },
                { name: "order", type: "string", description: "Sort order (asc or desc)", required: false },
                { name: "filter", type: "string", description: "Filter by field value (e.g., name:John)", required: false }
            ],
            responses: [
                { code: "200", description: "Successful response. Returns an array of user objects.", example: '[{"id": 1, "name": "John Doe", "email": "john.doe@example.com"}, ...]' },
                { code: "400", description: "Bad request. Indicates invalid parameters were provided." },
                { code: "401", description: "Unauthorized. API key is missing or invalid." },
                { code: "500", description: "Internal server error. Something went wrong on the server." }
            ]
        },
        {
            method: "POST",
            path: "/api/users",
            description: "Create a new user.",
            parameters: [
                { name: "name", type: "string", description: "User's full name", required: true },
                { name: "email", type: "string", description: "User's email address", required: true },
                { name: "password", type: "string", description: "User's password", required: true },
                { name: "role", type: "string", description: "User's role (e.g., admin, user)", required: false }
            ],
            responses: [
                { code: "201", description: "User created successfully.", example: '{"id": 2, "name": "Jane Doe", "email": "jane.doe@example.com", "message": "User created"}' },
                { code: "400", description: "Bad request. Indicates invalid or missing fields in the request body." },
                { code: "409", description: "User already exists. A user with the provided email already exists." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "GET",
            path: "/api/users/{userId}",
            description: "Retrieve a specific user by ID.",
            parameters: [
                { name: "userId", type: "integer", description: "ID of the user to retrieve", required: true, in: "path" }
            ],
            responses: [
                { code: "200", description: "Successful response. Returns the user object.", example: '{"id": 1, "name": "John Doe", "email": "john.doe@example.com"}' },
                { code: "404", description: "Not found. No user found with the specified ID." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "PUT",
            path: "/api/users/{userId}",
            description: "Update an existing user.",
            parameters: [
                { name: "userId", type: "integer", description: "ID of the user to update", required: true, in: "path" },
                { name: "name", type: "string", description: "User's full name", required: false },
                { name: "email", type: "string", description: "User's email address", required: false },
                { name: "role", type: "string", description: "User's role", required: false }
            ],
            responses: [
                { code: "200", description: "User updated successfully.", example: '{"id": 1, "name": "John Doe", "email": "john.updated@example.com", "message": "User updated"}' },
                { code: "400", description: "Bad request. Invalid data provided." },
                { code: "404", description: "Not found. No user found with the specified ID." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "DELETE",
            path: "/api/users/{userId}",
            description: "Delete a user.",
            parameters: [
                { name: "userId", type: "integer", description: "ID of the user to delete", required: true, in: "path" }
            ],
            responses: [
                { code: "204", description: "No content. User deleted successfully." },
                { code: "404", description: "Not found. No user found with the specified ID." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "POST",
            path: "/api/users/login",
            description: "Authenticate a user and return an access token.",
            parameters: [
                { name: "email", type: "string", description: "User's email address", required: true },
                { name: "password", type: "string", description: "User's password", required: true }
            ],
            responses: [
                { code: "200", description: "Successful authentication. Returns an access token.", example: '{"token": "YOUR_ACCESS_TOKEN"}' },
                { code: "401", description: "Unauthorized. Invalid credentials." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "GET",
            path: "/api/posts",
            description: "Retrieve a list of blog posts. Supports filtering, sorting, and pagination.",
            parameters: [
                { name: "page", type: "integer", description: "Page number", required: false },
                { name: "limit", type: "integer", description: "Items per page", required: false },
                { name: "sort", type: "string", description: "Sort by field (e.g., title, date)", required: false },
                { name: "order", type: "string", description: "Sort order (asc or desc)", required: false },
                { name: "filter", type: "string", description: "Filter by field value (e.g., authorId:1)", required: false }
            ],
            responses: [
                { code: "200", description: "Successful response. Returns an array of post objects.", example: '[{"id": 1, "title": "First Post", "content": "...", "authorId": 1}, ...]' },
                { code: "400", description: "Bad request. Invalid parameters." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "POST",
            path: "/api/posts",
            description: "Create a new blog post.",
            parameters: [
                { name: "title", type: "string", description: "Post title", required: true },
                { name: "content", type: "string", description: "Post content", required: true },
                { name: "authorId", type: "integer", description: "ID of the author", required: true }
            ],
            responses: [
                { code: "201", description: "Post created successfully.", example: '{"id": 2, "title": "New Post", "content": "...", "authorId": 1, "message": "Post created"}' },
                { code: "400", description: "Bad request. Invalid or missing fields." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "GET",
            path: "/api/posts/{postId}",
            description: "Retrieve a specific blog post by ID.",
            parameters: [
                { name: "postId", type: "integer", description: "ID of the post to retrieve", required: true, in: "path" }
            ],
            responses: [
                { code: "200", description: "Successful response. Returns the post object.", example: '{"id": 1, "title": "First Post", "content": "...", "authorId": 1}' },
                { code: "404", description: "Not found. No post found with the specified ID." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "PUT",
            path: "/api/posts/{postId}",
            description: "Update an existing blog post.",
            parameters: [
                { name: "postId", type: "integer", description: "ID of the post to update", required: true, in: "path" },
                { name: "title", type: "string", description: "New title for the post", required: false },
                { name: "content", type: "string", description: "New content for the post", required: false }
            ],
            responses: [
                { code: "200", description: "Post updated successfully.", example: '{"id": 1, "title": "Updated Title", "content": "Updated content...", "authorId": 1, "message": "Post updated"}' },
                { code: "400", description: "Bad request. Invalid data provided." },
                { code: "404", description: "Not found. No post found with the specified ID." },
                { code: "500", description: "Internal server error." }
            ]
        },
        {
            method: "DELETE",
            path: "/api/posts/{postId}",
            description: "Delete a blog post.",
            parameters: [
                { name: "postId", type: "integer", description: "ID of the post to delete", required: true, in: "path" }
            ],
            responses: [
                { code: "204", description: "No content. Post deleted successfully." },
                { code: "404", description: "Not found. No post found with the specified ID." },
                { code: "500", description: "Internal server error." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50" ref={contentRef}>
            <Navbar isBordered style={{ backgroundColor: '#f7f7f7', borderBottom: '1px solid #ccc' }}>
                <NavbarBrand>
                    <p className="font-bold text-inherit" style={{ color: '#333', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>API Documentation</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#endpoints" style={{ color: '#444', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                            Endpoints
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#authentication" style={{ color: '#444', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                            Authentication
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat" style={{ backgroundColor: '#0070f3', color: '#fff', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            <main className="container mx-auto px-4 py-8">
                <section id="introduction" className="mb-12 api-section">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: '#222', fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>Introduction</h1>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        Welcome to the Octavertex Media API documentation. This comprehensive guide will provide you with all the necessary information to effectively integrate and utilize our powerful API services. Whether you're a seasoned developer or just starting, these docs will walk you through authentication, available endpoints, request/response formats, and best practices.
                    </p>
                    <Card style={{ border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <CardBody>
                            <p className="text-sm" style={{ color: '#555', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif' }}>Base URL: <Code style={{ color: '#d400ff' }}>https://api.octavertexmedia.com/v1</Code></p>
                        </CardBody>
                    </Card>
                </section>

                <section id="authentication" className="mb-12 api-section">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#222', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Authentication</h2>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        Security is paramount. All API requests to the Octavertex Media API must be authenticated using API keys. Follow these steps to securely authenticate your requests:
                    </p>
                    <ol className="list-decimal list-inside mb-4" style={{ color: '#444', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                        <li><b>Sign Up:</b> Create an account on our platform to obtain your unique API key.</li>
                        <li><b>API Key:</b> Once registered, navigate to your account dashboard to access your API key.</li>
                        <li><b>Include in Headers:</b> In every API request, include your API key in the Authorization header using the Bearer token scheme.</li>
                    </ol>
                    <Snippet style={{ backgroundColor: '#f7f7f7', border: '1px solid #ccc', color: '#d400ff' }}>
                        Authorization: Bearer YOUR_API_KEY
                    </Snippet>
                    <p className="text-gray-600 mt-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        <b>Important:</b> Treat your API key like a password. Do not share it publicly or commit it to version control. If you suspect your key has been compromised, regenerate it immediately through your account dashboard.
                    </p>
                </section>

                <section id="endpoints" className="mb-12 api-section">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#222', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>API Endpoints</h2>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        Below you'll find detailed information about each available API endpoint, including request methods, parameters, and example responses.
                    </p>
                    <Accordion>
                        {apiEndpoints.map((endpoint, index) => (
                            <AccordionItem
                                key={index}
                                aria-label={`${endpoint.method} ${endpoint.path}`}
                                title={
                                    <div className="flex items-center">
                                        <span className={`mr-2 px-2 py-1 rounded text-white ${endpoint.method === 'GET' ? 'bg-green-500' : endpoint.method === 'POST' ? 'bg-blue-500' : endpoint.method === 'PUT' ? 'bg-yellow-500' : endpoint.method === 'DELETE' ? 'bg-red-500' : 'bg-gray-500'}`} style={{ fontSize: '0.9rem' }}>
                                            {endpoint.method}
                                        </span>
                                        <span style={{ color: '#333', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>{endpoint.path}</span>
                                    </div>
                                }
                            >
                                <Card style={{ border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                    <CardBody>
                                        <p className="mb-4" style={{ color: '#555', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>{endpoint.description}</p>
                                        <h4 className="font-bold mb-2" style={{ color: '#333', fontSize: '1.2rem', fontFamily: 'Arial, sans-serif' }}>Parameters</h4>
                                        <Table aria-label="Parameters table" style={{ borderCollapse: 'collapse', width: '100%' }}>
                                            <TableHeader>
                                                <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>NAME</TableColumn>
                                                <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>TYPE</TableColumn>
                                                <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>DESCRIPTION</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                {endpoint.parameters.map((param, paramIndex) => (
                                                    <TableRow key={paramIndex}>
                                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>{param.name}</TableCell>
                                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>{param.type}</TableCell>
                                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>{param.description}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                        <h4 className="font-bold mt-4 mb-2" style={{ color: '#333', fontSize: '1.2rem', fontFamily: 'Arial, sans-serif' }}>Responses</h4>
                                        <Table aria-label="Responses table" style={{ borderCollapse: 'collapse', width: '100%' }}>
                                            <TableHeader>
                                                <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>CODE</TableColumn>
                                                <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>DESCRIPTION</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                {endpoint.responses.map((response, responseIndex) => (
                                                    <TableRow key={responseIndex}>
                                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>{response.code}</TableCell>
                                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>{response.description}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section id="examples" className="mb-12 api-section">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#222', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Code Examples</h2>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        To help you get started quickly, we've provided code examples in multiple programming languages. These examples demonstrate how to make basic requests to our API endpoints.
                    </p>
                    <Card style={{ border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <CardHeader>
                            <h3 className="text-xl font-bold" style={{ color: '#333', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Example Request (GET /api/users)</h3>
                        </CardHeader>
                        <CardBody>
                            <Tabs aria-label="Options">
                                <Tab key="curl" title="cURL">
                                    <Code style={{ color: '#d400ff' }}>
                                        {`curl -X GET "https://api.octavertexmedia.com/v1/users?page=1&limit=10" \
-H "Authorization: Bearer YOUR_API_KEY"`}
                                    </Code>
                                </Tab>
                                <Tab key="python" title="Python">
                                    <Code style={{ color: '#d400ff' }}>
                                        {`import requests

url = "https://api.octavertexmedia.com/v1/users"
params = {"page": 1, "limit": 10}
headers = {"Authorization": "Bearer YOUR_API_KEY"}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Error: {response.status_code}")`}
                                    </Code>
                                </Tab>
                                <Tab key="javascript" title="JavaScript">
                                    <Code style={{ color: '#d400ff' }}>
                                        {`const url = 'https://api.octavertexmedia.com/v1/users';
const params = { page: 1, limit: 10 };
const headers = { 'Authorization': 'Bearer YOUR_API_KEY' };

fetch(url + '?' + new URLSearchParams(params), { headers })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });`}
                                    </Code>
                                </Tab>
                            </Tabs>
                        </CardBody>
                    </Card>
                </section>

                <section id="rate-limiting" className="mb-12 api-section">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#222', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Rate Limiting</h2>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        To ensure fair usage and maintain optimal performance, our API implements rate limiting. Each API key is limited to <b>1000 requests per minute</b>. If you exceed this limit, you will receive a <Code style={{ color: '#d400ff' }}>429 Too Many Requests</Code> error.
                    </p>
                    <Card style={{ border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <CardBody>
                            <p style={{ color: '#555', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>The following headers are included in each API response to provide information about your current rate limit status:</p>
                            <ul className="list-disc list-inside" style={{ color: '#444', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                                <li><Code style={{ color: '#d400ff' }}>X-RateLimit-Limit</Code>: The maximum number of requests allowed within the current time window (e.g., 1000).</li>
                                <li><Code style={{ color: '#d400ff' }}>X-RateLimit-Remaining</Code>: The number of requests remaining in the current time window.</li>
                                <li><Code style={{ color: '#d400ff' }}>X-RateLimit-Reset</Code>: The Unix timestamp indicating when the current time window will reset.</li>
                            </ul>
                            <p className="mt-4" style={{ color: '#555', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                                We recommend monitoring these headers to proactively manage your API usage and avoid hitting the rate limit.
                            </p>
                        </CardBody>
                    </Card>
                </section>

                <section id="errors" className="mb-12 api-section">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#222', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Error Handling</h2>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        Our API uses standard HTTP status codes to indicate the success or failure of a request. In the case of an error, the response body will typically include a JSON object with an <Code style={{ color: '#d400ff' }}>error</Code> key and a <Code style={{ color: '#d400ff' }}>message</Code> key providing more details.
                    </p>
                    <Card style={{ border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <CardBody>
                            <h4 className="font-bold mb-2" style={{ color: '#333', fontSize: '1.2rem', fontFamily: 'Arial, sans-serif' }}>Common Error Codes</h4>
                            <Table aria-label="Error Codes" style={{ borderCollapse: 'collapse', width: '100%' }}>
                                <TableHeader>
                                    <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>CODE</TableColumn>
                                    <TableColumn style={{ backgroundColor: '#f7f7f7', color: '#333', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>DESCRIPTION</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="400">
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>400</TableCell>
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>Bad Request - The request was malformed or invalid.</TableCell>
                                    </TableRow>
                                    <TableRow key="401">
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>401</TableCell>
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>Unauthorized - The API key is missing or invalid.</TableCell>
                                    </TableRow>
                                    <TableRow key="403">
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>403</TableCell>
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>Forbidden - The user does not have permission to access the resource.</TableCell>
                                    </TableRow>
                                    <TableRow key="404">
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>404</TableCell>
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>Not Found - The requested resource could not be found.</TableCell>
                                    </TableRow>
                                    <TableRow key="429">
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>429</TableCell>
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>Too Many Requests - The rate limit has been exceeded.</TableCell>
                                    </TableRow>
                                    <TableRow key="500">
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>500</TableCell>
                                        <TableCell style={{ color: '#444', fontSize: '0.9rem', fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '8px' }}>Internal Server Error - An unexpected error occurred on the server.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <p className="mt-4" style={{ color: '#555', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                                Example error response:
                            </p>
                            <Code style={{ color: '#d400ff' }}>
                                {`{
  "error": "Bad Request",
  "message": "Invalid parameter: page must be a positive integer"
}`}
                            </Code>
                        </CardBody>
                    </Card>
                </section>

                <section id="support" className="mb-12 api-section">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#222', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Support</h2>
                    <p className="text-gray-600 mb-4" style={{ color: '#555', fontSize: '1.1rem', fontFamily: 'Arial, sans-serif' }}>
                        If you have any questions, encounter issues, or need assistance with our API, please don't hesitate to reach out to our support team.
                    </p>
                    <ul className="list-disc list-inside" style={{ color: '#444', fontSize: '1rem', fontFamily: 'Arial, sans-serif' }}>
                        <li><b>Email:</b> <a href="mailto:support@octavertexmedia.com" style={{ color: '#0070f3' }}>support@octavertexmedia.com</a></li>
                        <li><b>Documentation:</b> <a href="https://docs.octavertexmedia.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>https://docs.octavertexmedia.com</a> (This is a placeholder link)</li>
                        <li><b>Status Page:</b> <a href="https://status.octavertexmedia.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>https://status.octavertexmedia.com</a> (Placeholder)</li>
                        <li><b>Community Forum:</b> <a href="https://forum.octavertexmedia.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>https://forum.octavertexmedia.com</a> (Placeholder)</li>
                    </ul>
                </section>
            </main>

           
        </div>
    );
};

export default APIDevelopmentPage;