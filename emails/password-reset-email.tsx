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

type PasswordResetEmailProps = {
  resetUrl?: string;
};

export function PasswordResetEmail({
  resetUrl = "https://launchkit.dev/sign-in",
}: PasswordResetEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Reset your LaunchKit password.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.badge}>Account security</Section>
          <Heading style={styles.heading}>Reset your password</Heading>
          <Text style={styles.text}>
            A password reset was requested for your LaunchKit account. Use the button
            below to choose a new password and return to your workspace.
          </Text>
          <Button href={resetUrl} style={styles.button}>
            Reset password
          </Button>
          <Text style={styles.footer}>
            If you did not request this, you can ignore this email. The link can later
            be swapped for your live auth callback flow.
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
    color: "#0f766e",
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
