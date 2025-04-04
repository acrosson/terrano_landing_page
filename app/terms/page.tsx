import { getMarkdownContent } from '@/lib/markdown';
import { MainLayout } from '@/app/components/MainLayout';
export default async function TermsPage() {
  const content = await getMarkdownContent('terms.md');

  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <div className="container max-w-3xl px-4 py-12">
          <div
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: content.contentHtml }}
            />
          </div>
        </main>
      </div>
    </MainLayout>
  );
}
