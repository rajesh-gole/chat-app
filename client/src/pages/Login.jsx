import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Login = () => {
    return <>
        <Form>
            <Row style={{
                height: "100vh",
                justifyContent: "center",
                paddingTop: "5%"
            }}>
                <Col xs={6}>
                    <Stack gap={3}>
                        <h2>Login</h2>
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Control type="password" placeholder="Password" />
                        <Button varient="primary" type="submit">
                            Login
                        </Button>
                        <Alert varient="danger">
                            <p>An error occured</p>
                        </Alert>
                    </Stack>
                </Col>
            </Row>
        </Form>
    </>;
}
 
export default Login;