import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });

app.get("/health", async () => ({
  status: "ok",
  service: "aegisops-api",
  timestamp: new Date().toISOString()
}));

app.get("/ready", async () => ({ status: "ready" }));

app.get("/api/v1/incidents", async () => ({
  incidents: []
}));

app.post<{
  Body: {
    service: string;
    environment?: string;
    symptoms?: string[];
  };
}>("/api/v1/incidents/analyze", async (request) => {
  const { service, environment = "dev", symptoms = [] } = request.body;

  return {
    incidentId: `INC-${Date.now()}`,
    service,
    environment,
    status: "accepted",
    message: "Incident analysis request accepted. GenAI integration is enabled in the next deployment phase.",
    symptoms
  };
});

app.post<{
  Body: {
    incidentId: string;
    action: string;
    approved: boolean;
  };
}>("/api/v1/remediation/approve", async (request, reply) => {
  const { incidentId, action, approved } = request.body;

  if (!approved) {
    return reply.code(400).send({
      incidentId,
      status: "rejected",
      message: "Remediation was not approved."
    });
  }

  return {
    incidentId,
    status: "queued",
    action,
    message: "Approved remediation has been queued for policy validation."
  };
});

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "0.0.0.0";

app.listen({ port, host }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
