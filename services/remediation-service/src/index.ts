import Fastify from "fastify";

const app = Fastify({ logger: true });

const ALLOWED_ACTIONS = new Set([
  "restart_unhealthy_pods",
  "scale_deployment"
]);

app.get("/health", async () => ({
  status: "ok",
  service: "aegisops-remediation-service"
}));

app.post<{
  Body: {
    incidentId: string;
    action: string;
    approved: boolean;
  };
}>("/remediate", async (request, reply) => {
  const { incidentId, action, approved } = request.body;

  if (!approved) {
    return reply.code(403).send({
      status: "rejected",
      reason: "Explicit approval is required."
    });
  }

  if (!ALLOWED_ACTIONS.has(action)) {
    return reply.code(400).send({
      status: "rejected",
      reason: "Action is not on the remediation allow-list."
    });
  }

  // Deliberately does not execute Kubernetes commands yet.
  // The real implementation will use an authenticated Kubernetes client
  // and a narrowly scoped ServiceAccount.
  return {
    incidentId,
    action,
    status: "accepted_for_execution",
    message: "Allow-listed remediation passed policy checks."
  };
});

app.listen({
  port: Number(process.env.PORT ?? 3002),
  host: process.env.HOST ?? "0.0.0.0"
}).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
