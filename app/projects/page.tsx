import { client } from "@/lib/sanity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const revalidate = 60; // revalidate every minute

type Project = {
  slug: { current: string };
  title: string;
  description?: string;
  image?: { asset?: { url?: string } };
};

async function getProjects(): Promise<Project[]> {
  if (!client) return [];
  const query = `*[_type == "project"] | order(_createdAt desc) { title, slug, description, image }`;
  return await client.fetch(query);
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="max-w-[1160px] mx-auto px-6 py-24 w-full">
      <h2 className="font-grotesk text-5xl font-bold mb-8">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-muted">
          Projects will appear here once you connect Sanity. Set{" "}
          <code className="font-mono text-accent-dark">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{" "}
          in your <code className="font-mono text-accent-dark">.env.local</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug.current} className="bg-surface">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}