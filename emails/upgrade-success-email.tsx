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

type UpgradeSuccessEmailProps = {
  planName?: string;
};

export function UpgradeSuccessEmail({
  planName = "Pro",
}: UpgradeSuccessEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your LaunchKit upgrade is confirmed.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.badge}>Upgrade confirmed</Section>
          <Heading style={styles.heading}>You are now on {planName}</Heading>
          <Text style={styles.text}>
            Your LaunchKit purchase is complete. You can now use the premium package
            with the polished dashboard, commercial starter surfaces, and integration-ready architecture.
          </Text>
          <Button href="https://launchkit.dev/dashboard" style={styles.button}>
            Open dashboard
          </Button>
          <Text style={styles.footer}>
            Hosted checkout keeps V1 simple. Add webhook-driven provisioning later when
            you want the purchase flow to sync automatically.
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
    color: "#7c3aed",
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
