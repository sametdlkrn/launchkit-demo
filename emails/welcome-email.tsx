import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type WelcomeEmailProps = {
  name?: string;
};

export function WelcomeEmail({ name = "there" }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>LaunchKit is ready for your next SaaS launch.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.badge}>LaunchKit</Section>
          <Heading style={styles.heading}>Welcome, {name}.</Heading>
          <Text style={styles.text}>
            Your starter workspace is ready. LaunchKit gives you the premium landing
            pages, auth flows, billing surface, docs, and dashboard shell you need to
            ship a believable V1 quickly.
          </Text>
          <Button href="https://launchkit.dev/docs" style={styles.button}>
            Read the setup guide
          </Button>
          <Text style={styles.footer}>
            Wire your integrations when you are ready. Until then, the product keeps a
            clean demo mode so your first screenshots still look real.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f5f7fb",
    fontFamily: "Manrope, Arial, sans-serif",
    padding: "32px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    margin: "0 auto",
    maxWidth: "560px",
    padding: "32px",
  },
  badge: {
    color: "#2563eb",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
  },
  heading: {
    color: "#0f172a",
    fontSize: "30px",
    lineHeight: "1.2",
    margin: "18px 0 16px",
  },
  text: {
    color: "#475569",
    fontSize: "16px",
    lineHeight: "1.8",
    margin: "0 0 20px",
  },
  button: {
    backgroundColor: "#0f172a",
    borderRadius: "16px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    padding: "14px 20px",
    textDecoration: "none",
  },
  footer: {
    color: "#64748b",
    fontSize: "14px",
    lineHeight: "1.8",
    marginTop: "20px",
  },
};
