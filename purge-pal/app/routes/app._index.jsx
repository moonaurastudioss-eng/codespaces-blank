import { useState } from "react";
import { json } from "@remix-run/node";
import { useSubmit } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  TextField,
  BlockStack,
  Banner,
  Divider,
} from "@shopify/polaris";

// Backend function (Save karne ke liye)
export const action = async ({ request }) => {
  const formData = await request.formData();
  // Yahan database me save hone ka logic aayega
  return json({ success: true, message: "Videos Saved Successfully!" });
};

export default function Index() {
  const submit = useSubmit();
  const [video1, setVideo1] = useState("");
  const [video2, setVideo2] = useState("");
  const [video3, setVideo3] = useState("");
  const [video4, setVideo4] = useState("");
  const [video5, setVideo5] = useState("");

  const handleSave = () => {
    submit({ video1, video2, video3, video4, video5 }, { method: "POST" });
    shopify.toast.show("Video sequence saved and active!");
  };

  return (
    <Page fullWidth>
      <Layout>
        {/* Upsell Banner (The Masterstroke) */}
        <Layout.Section>
          <Banner
            title="Empty Video Slots? Stop losing refunds."
            tone="warning"
            action={{
              content: "Hire Moon Aura Studios ($1500)",
              url: "https://moonaura.agency",
              target: "_blank"
            }}
          >
            <p>Text messages and generic videos only stop 20% of refunds. Upgrade to a 100% custom, cinematic 5-video retention sequence featuring YOUR exact product to drop refunds to 0%.</p>
          </Banner>
        </Layout.Section>

        {/* Video Input Slots */}
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Post-Purchase Video Sequence
              </Text>
              <Text as="p" tone="subdued">
                Paste your YouTube/Vimeo links below. The app will automatically send them to customers based on the purging timeline.
              </Text>

              <Divider />

              <TextField
                label="Day 0 Video (Welcome & How-to)"
                value={video1}
                onChange={setVideo1}
                placeholder="https://youtu.be/..."
                autoComplete="off"
              />
              <TextField
                label="Day 5 Video (Expectation Setter)"
                value={video2}
                onChange={setVideo2}
                placeholder="https://youtu.be/..."
                autoComplete="off"
              />
              <TextField
                label="Day 12 Video (Peak Purge - Sabse Zaroori)"
                value={video3}
                onChange={setVideo3}
                placeholder="https://youtu.be/..."
                autoComplete="off"
              />
              <TextField
                label="Day 20 Video (The Turning Point)"
                value={video4}
                onChange={setVideo4}
                placeholder="https://youtu.be/..."
                autoComplete="off"
              />
              <TextField
                label="Day 30 Video (The Glow Up & Upsell)"
                value={video5}
                onChange={setVideo5}
                placeholder="https://youtu.be/..."
                autoComplete="off"
              />

              <Button size="large" variant="primary" onClick={handleSave}>
                Save & Activate Sequence
              </Button>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* Stats Section */}
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Retention Stats
              </Text>
              <Text as="p">Orders Tracked: <strong>0</strong></Text>
              <Text as="p">Videos Sent: <strong>0</strong></Text>
              <Text as="p" tone="success">Estimated Refunds Saved: <strong>$0</strong></Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}