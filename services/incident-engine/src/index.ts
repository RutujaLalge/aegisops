import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => ({
  status: "ok",
  service: "aegisops-incident-engine"
}));

app.post<{
  Body: {
    service: string;
    symptoms: string[];
    telemetry?: Record<string, unknown>;
  };
}>("/analyze", async (request) => {
  const { service, symptoms, telemetry = {} } = request.body;

  return {
    service,
    analysisStatus: "scaffold",
    probableCause: "Not yet evaluated by Bedrock",
    confidence: 0,
    evidence: symptoms,
    telemetry,
    nextStep: "Configure the Bedrock retrieval and model client."
  };
});

app.listen({
  port: Number(process.env.PORT ?? 3001),
  host: process.env.HOST ?? "0.0.0.0"
}).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
